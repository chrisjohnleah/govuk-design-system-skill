# GOV.UK Design System skill

[![skills.sh](https://skills.sh/b/chrisjohnleah/govuk-design-system-skill)](https://skills.sh/chrisjohnleah/govuk-design-system-skill)

An [agent skill](https://agentskills.io) that gives Claude Code, Codex, Cursor and any other
skills-compatible agent the whole GOV.UK Design System, offline, at a pinned version:

- **37 components**, each with the guidance, when to use it, when not to, the Nunjucks macro
  options table, and the exact HTML every example renders to
- **35 patterns** (question pages, check answers, validation, "ask users for a date", ...)
- **13 styles** (layout, type scale, colour, spacing, page template)
- the **GOV.UK Frontend technical docs** (install, Sass API, JavaScript API, and the rules for
  using it without GOV.UK branding)
- a rendered `page-template.html` to start from

The GOV.UK Design System team did years of user research on forms, error handling and
accessibility. The code is MIT licensed and anyone can use it. This skill exists so your agent
uses it properly, including the bit most people miss: if you are not a government service you
must swap the header, the font and the icons. The skill's `SKILL.md` leads with that decision.

## Install

With the [skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add chrisjohnleah/govuk-design-system-skill
```

Or copy `skills/govuk-design-system/` into your agent's skills directory, for example
`~/.claude/skills/govuk-design-system` for Claude Code, or `.claude/skills/` inside a project.

Then ask for anything GOV.UK shaped: "build the first question page of a grant application in
GOV.UK style", "add an error summary to this form", "make this admin tool look like a gov.uk
service but for our charity".

## Keeping it current

Every Monday a GitHub Action regenerates the references from the latest govuk-frontend release
and the current Design System guidance. If anything changed it commits, tags the govuk-frontend
version and publishes a release. Code ages; this repo does not wait for someone to notice.

`skills/govuk-design-system/VERSION` records the govuk-frontend version and the upstream commits
the references were generated from. To regenerate by hand:

```bash
node skills/govuk-design-system/scripts/build-references.mjs
```

It fetches govuk-frontend from npm and shallow-clones `alphagov/govuk-design-system` and
`alphagov/govuk-frontend-docs` into `.build/`, then rewrites `references/`, `assets/` and
`VERSION`. Pass `--version 6.4.0` to pin a specific govuk-frontend release.

## Licence

This repository is MIT licensed. The generated references are derived from
[alphagov/govuk-frontend](https://github.com/alphagov/govuk-frontend),
[alphagov/govuk-design-system](https://github.com/alphagov/govuk-design-system) and
[alphagov/govuk-frontend-docs](https://github.com/alphagov/govuk-frontend-docs), all MIT
licensed, Crown copyright. The GOV.UK crown logo and the GDS Transport typeface are **not**
covered by those licences and may only be used by services on GOV.UK; the skill tells the agent
not to use them elsewhere.

Not affiliated with or endorsed by the Government Digital Service.
