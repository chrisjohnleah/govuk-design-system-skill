#!/usr/bin/env node
// Regenerates references/ and assets/ from the three upstream GOV.UK sources.
//
//   node scripts/build-references.mjs [--work <dir>] [--version <govuk-frontend version>]
//
// It fetches (into --work, default ./.build):
//   - govuk-frontend from npm         (macro options, rendered fixtures, template.njk)
//   - alphagov/govuk-design-system    (component, pattern and style guidance + examples)
//   - alphagov/govuk-frontend-docs    (install / Sass / JS / no-branding guidance)
// then renders every guidance page to plain markdown with the examples inlined as
// Nunjucks source plus the HTML it produces. Needs node >= 18, git and npm on PATH.

import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const skillDir = resolve(here, '..')
const args = Object.fromEntries(process.argv.slice(2).map((a, i, all) => a.startsWith('--') ? [a.slice(2), all[i + 1]] : []).filter(Boolean))
const work = resolve(args.work ?? join(skillDir, '.build'))
const version = args.version ?? 'latest'

mkdirSync(work, { recursive: true })
const sh = (cmd, cwd = work) => execSync(cmd, { cwd, stdio: 'pipe' }).toString().trim()

// ---------- 1. fetch sources ----------
const pkgDir = join(work, 'govuk-frontend-pkg')
if (!existsSync(join(pkgDir, 'package', 'package.json'))) {
  sh(`npm pack govuk-frontend@${version} --silent`)
  const tgz = readdirSync(work).find((f) => f.startsWith('govuk-frontend-') && f.endsWith('.tgz'))
  mkdirSync(pkgDir, { recursive: true })
  sh(`tar -xzf ${tgz} -C ${pkgDir}`)
}
const dist = join(pkgDir, 'package', 'dist', 'govuk')
const frontendVersion = JSON.parse(readFileSync(join(pkgDir, 'package', 'package.json'), 'utf8')).version

for (const repo of ['govuk-design-system', 'govuk-frontend-docs']) {
  if (!existsSync(join(work, repo))) sh(`git clone --depth 1 -q https://github.com/alphagov/${repo}.git`)
}
const dsSrc = join(work, 'govuk-design-system', 'src')
const docsSrc = join(work, 'govuk-frontend-docs', 'source')
const dsCommit = sh('git rev-parse --short HEAD', join(work, 'govuk-design-system'))
const docsCommit = sh('git rev-parse --short HEAD', join(work, 'govuk-frontend-docs'))

// nunjucks lives in the build dir so the skill itself carries no node_modules
if (!existsSync(join(work, 'node_modules', 'nunjucks'))) sh('npm init -y --silent >/dev/null 2>&1; npm i --silent nunjucks@3')
const require = createRequire(join(work, 'package.json'))
const nunjucks = require('nunjucks')

// ---------- 2. nunjucks environment ----------
// Shim views so the design-system pages render outside their site build.
const shims = join(work, 'shims')
mkdirSync(join(shims, 'example-wrappers'), { recursive: true })
writeFileSync(join(shims, '_example.njk'), '{% macro example(params) %}{{ renderExample(params) | safe }}{% endmacro %}')
writeFileSync(join(shims, '_new-type-scale.njk'), '')
writeFileSync(join(shims, '_colour-table.njk'), '{% macro colourTable(params) %}{{ renderColourTable(params) | safe }}{% endmacro %}')
writeFileSync(join(shims, '_nunjucks-options.njk'),
  '{% macro nunjucksOptions(title) %}\n\n### {{ title }}\n\n{{ caller({}) }}{% endmacro %}' +
  '{% macro addNunjucksOption(options, name, description) %}- `{{ name }}`: {{ description | safe }}\n{% endmacro %}')
// example wrappers: emit just the blocks the example defines, in page order
writeFileSync(join(shims, 'example-wrappers', 'full-page.njk'),
  '{% block containerStart %}{% endblock %}\n{% block content %}{% endblock %}')
writeFileSync(join(shims, 'example-wrappers', 'page-template-blocks.njk'),
  '{% block head %}{% endblock %}{% block bodyStart %}{% endblock %}{% block header %}{% endblock %}{% block headerStart %}{% endblock %}{% block headerEnd %}{% endblock %}{% block containerStart %}{% endblock %}{% block content %}{% endblock %}{% block containerEnd %}{% endblock %}{% block footer %}{% endblock %}{% block bodyEnd %}{% endblock %}')

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader([shims, dist, join(pkgDir, 'package', 'dist'), dsSrc]), { autoescape: false, throwOnUndefined: false })
env.addFilter('smartypants', (s) => s)
env.addFilter('slugify', (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-'))
env.addFilter('lower', (s) => String(s).toLowerCase())
env.addFilter('markdown', (s) => s)

const stripFrontmatter = (src) => {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  const fm = {}
  if (m) for (const line of m[1].split(/\r?\n/)) { const i = line.indexOf(':'); if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim() }
  return { fm, body: m ? src.slice(m[0].length) : src }
}
const tidy = (html) => html.replace(/\n{3,}/g, '\n\n').replace(/^\s*\n/gm, '').trim()

function renderExampleFile(path) {
  const { fm, body } = stripFrontmatter(readFileSync(path, 'utf8'))
  let html = ''
  try { html = tidy(env.renderString(body, { title: fm.title })) } catch (e) { html = `<!-- could not render: ${e.message.split('\n')[0]} -->` }
  // Nunjucks source shown to the reader: drop layout wrappers, keep imports and macro calls
  const njk = body.replace(/\{%-?\s*extends[^%]*%\}/g, '').replace(/\{%-?\s*(end)?block[^%]*%\}/g, '').replace(/\n{3,}/g, '\n\n').trim()
  return { title: fm.title ?? path, njk, html }
}

env.addGlobal('renderExample', (p) => {
  const file = join(dsSrc, p.group, p.item, p.example, p.customCode ? 'code.njk' : 'index.njk')
  if (!existsSync(file)) return `\n> Example "${p.example}" not found in source.\n`
  const ex = renderExampleFile(file)
  const label = (ex.title ?? p.example).replace(/\s+–.*$/, '')
  const parts = [`\n**Example: ${label}**${p.titleSuffix ? ' ' + p.titleSuffix : ''}\n`]
  if (p.nunjucks !== false && /govuk[A-Z]\w*\(/.test(ex.njk)) parts.push('Nunjucks:\n\n```njk\n' + ex.njk + '\n```\n')
  parts.push('HTML:\n\n```html\n' + ex.html + '\n```\n')
  return parts.join('\n')
})
env.addGlobal('renderColourTable', (p) => {
  // colour tables are driven by the design system's own data; point at the Sass palette instead
  return '\n> Full palette: see `references/frontend/sass-api-reference.md` (`$govuk-colours`) and https://design-system.service.gov.uk/styles/colour/\n'
})
env.addGlobal('getFrontmatter', (p) => stripFrontmatter(readFileSync(join(work, 'govuk-design-system', p), 'utf8')).fm)

const siteLinks = (md) => md
  .replace(/\]\((\/(components|patterns|styles|get-started)\/[^)]*)\)/g, '](https://design-system.service.gov.uk$1)')
  .replace(/\]\((\/[^)]*)\)/g, '](https://design-system.service.gov.uk$1)')

function renderGuidancePage(file, extra = '') {
  const { fm, body } = stripFrontmatter(readFileSync(file, 'utf8'))
  let out
  try { out = env.renderString(body, { title: fm.title }) } catch (e) { out = body + `\n\n<!-- render failed: ${e.message.split('\n')[0]} -->` }
  out = siteLinks(out).replace(/\n{3,}/g, '\n\n').trim()
  const head = `# ${fm.title ?? ''}\n\n${fm.description ? fm.description + '\n\n' : ''}`
  return { fm, md: head + out + (extra ? '\n\n' + extra : '') + '\n' }
}

// ---------- 3. macro options ----------
function macroOptionsTable(params, prefix = '') {
  let rows = ''
  for (const p of params) {
    const name = prefix + p.name
    rows += `| \`${name}\` | ${p.type}${p.isComponent ? ' (component options)' : ''} | ${p.required ? 'yes' : 'no'} | ${String(p.description ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ')} |\n`
    if (p.params) rows += macroOptionsTable(p.params, name + '.')
  }
  return rows
}

// ---------- 4. write references ----------
const refs = join(skillDir, 'references')
rmSync(refs, { recursive: true, force: true })
const index = { components: [], patterns: [], styles: [], 'get-started': [], frontend: [] }

const dirsOf = (d) => readdirSync(d).filter((n) => statSync(join(d, n)).isDirectory() && !n.startsWith('_'))
// design system folder name -> govuk-frontend package folder name
const frontendName = { 'text-input': 'input' }

for (const group of ['components', 'patterns', 'styles', 'get-started']) {
  mkdirSync(join(refs, group), { recursive: true })
  for (const name of dirsOf(join(dsSrc, group))) {
    const file = join(dsSrc, group, name, 'index.md')
    if (!existsSync(file)) continue
    let extra = ''
    if (group === 'components') {
      const fe = frontendName[name] ?? name
      const optsFile = join(dist, 'components', fe, 'macro-options.json')
      if (existsSync(optsFile)) {
        const macro = 'govuk' + fe.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase())
        extra += `## Nunjucks macro options\n\nImport: \`{% from "govuk/components/${fe}/macro.njk" import ${macro} %}\`\n\n| Option | Type | Required | Description |\n|---|---|---|---|\n` + macroOptionsTable(JSON.parse(readFileSync(optsFile, 'utf8')))
      }
      const fixFile = join(dist, 'components', fe, 'fixtures.json')
      if (existsSync(fixFile)) {
        const fx = JSON.parse(readFileSync(fixFile, 'utf8')).fixtures.filter((f) => !f.hidden && !/ (hover|active|focus) state$/.test(f.name))
        extra += `\n## Rendered fixtures (govuk-frontend ${frontendVersion})\n\nEvery public example the package ships, as macro options and the exact HTML they render to.\n`
        for (const f of fx) extra += `\n### ${f.name}\n\n\`\`\`json\n${JSON.stringify(f.options, null, 2)}\n\`\`\`\n\n\`\`\`html\n${f.html.trim()}\n\`\`\`\n`
      }
    }
    const { fm, md } = renderGuidancePage(file, extra)
    writeFileSync(join(refs, group, `${name}.md`), md)
    index[group].push({ name, title: fm.title ?? name, description: fm.description ?? '', status: fm.status ?? '' })
  }
}

// frontend docs (current version only, skip v4/v5 archives)
mkdirSync(join(refs, 'frontend'), { recursive: true })
for (const name of dirsOf(docsSrc)) {
  if (/^v\d/.test(name) || ['errors', 'javascripts', 'stylesheets', 'layouts'].includes(name)) continue
  const file = join(docsSrc, name, 'index.html.md.erb')
  if (!existsSync(file)) continue
  const { fm, body } = stripFrontmatter(readFileSync(file, 'utf8'))
  const md = siteLinks(body
    .replace(/<%=\s*warning_text\(['"]([\s\S]*?)['"]\)\s*%>/g, (_, t) => `> **Warning:** ${t.replace(/<[^>]+>/g, '')}`)
    .replace(/<%[\s\S]*?%>/g, '')
    .replace(/\]\((\.\.\/[^)]*)\)/g, (_, p) => `](https://frontend.design-system.service.gov.uk/${p.replace(/^\.\.\//, '')})`)
    .replace(/\n{3,}/g, '\n\n')).trim()
  writeFileSync(join(refs, 'frontend', `${name}.md`), `# ${fm.title ?? name}\n\n${md}\n`)
  index.frontend.push({ name, title: fm.title ?? name, description: '' })
}

// ---------- 5. page template asset ----------
mkdirSync(join(skillDir, 'assets'), { recursive: true })
const template = env.render('template.njk', { assetPath: '/assets', pageTitle: 'Page title - Service name' })
writeFileSync(join(skillDir, 'assets', 'page-template.html'), template.replace(/^[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim() + '\n')

// ---------- 6. index ----------
let idx = `# Reference index\n\nGenerated from govuk-frontend ${frontendVersion}, govuk-design-system@${dsCommit}, govuk-frontend-docs@${docsCommit}.\nRead only the files you need. One line per page: what it is and when it applies.\n`
const sections = [
  ['frontend', 'Frontend technical docs (install, Sass, JavaScript, no-branding)', 'references/frontend'],
  ['get-started', 'Get started (prototyping, production, headings, extending components)', 'references/get-started'],
  ['styles', 'Styles (layout, typography, colour, spacing, page template)', 'references/styles'],
  ['components', 'Components (guidance + macro options + rendered HTML)', 'references/components'],
  ['patterns', 'Patterns (ask users for..., page types, validation)', 'references/patterns']
]
for (const [key, title, path] of sections) {
  idx += `\n## ${title}\n\n`
  for (const e of index[key].sort((a, b) => a.name.localeCompare(b.name))) {
    idx += `- \`${path}/${e.name}.md\` **${e.title}**${e.status ? ` (${e.status})` : ''}${e.description ? ` — ${e.description}` : ''}\n`
  }
}
writeFileSync(join(refs, 'INDEX.md'), idx)

// ---------- 7. CHOOSING.md: every "when to use" / "when not to use" in one file ----------
const section = (md, heading) => {
  const m = md.match(new RegExp(`^## ${heading}[^\\n]*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'))
  if (!m) return ''
  // drop inlined examples and blank runs; keep the prose
  return m[1].replace(/\*\*Example:[\s\S]*?```\n\n?/g, '').replace(/```[\s\S]*?```/g, '').replace(/\n{2,}/g, '\n').trim()
}
let choosing = `# Choosing components and patterns\n\nEvery "when to use" and "when not to use" from the Design System in one place. Scan this to pick, then open the page in \`references/\` for the markup.\n`
for (const [group, label] of [['components', 'Components'], ['patterns', 'Patterns']]) {
  choosing += `\n## ${label}\n`
  for (const e of index[group].sort((a, b) => a.name.localeCompare(b.name))) {
    const md = readFileSync(join(refs, group, `${e.name}.md`), 'utf8')
    const use = section(md, 'When to use')
    const not = section(md, 'When not to use')
    choosing += `\n### ${e.title}${e.status ? ` (${e.status})` : ''}\n\n\`references/${group}/${e.name}.md\`${e.description ? ` — ${e.description}` : ''}\n`
    if (use) choosing += `\n**Use when:** ${use}\n`
    if (not) choosing += `\n**Do not use when:** ${not}\n`
  }
}
writeFileSync(join(refs, 'CHOOSING.md'), choosing)
writeFileSync(join(skillDir, 'VERSION'), `govuk-frontend ${frontendVersion}\ngovuk-design-system ${dsCommit}\ngovuk-frontend-docs ${docsCommit}\n`)

console.log(`govuk-frontend ${frontendVersion}: ${Object.entries(index).map(([k, v]) => `${v.length} ${k}`).join(', ')}`)
