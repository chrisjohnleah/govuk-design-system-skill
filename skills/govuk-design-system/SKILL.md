---
name: govuk-design-system
description: Use when building, styling or reviewing web pages, forms, flows or whole services with the GOV.UK Design System / govuk-frontend, including for products that are NOT on GOV.UK but want its tested patterns. Triggers include "GOV.UK style", "govuk-frontend", "GDS", "like a government service", "GOV.UK Design System", "gov.uk look", "question page", "check your answers", "error summary", "Nunjucks macros".
---

# GOV.UK Design System

GOV.UK Frontend is the MIT-licensed CSS, JavaScript and Nunjucks behind GOV.UK services. The
Design System is the guidance around it: 37 components, 35 patterns, 13 styles, all
user-researched. Anyone may use the code and the patterns. Only services on GOV.UK may use the
GOV.UK brand (crown, header, GDS Transport font). This skill gives you both, offline, at a
pinned version.

**Pinned source:** see `VERSION`. Regenerate with `node scripts/build-references.mjs` (needs
node, git, npm; fetches upstream, takes about a minute).

## Workflow

1. **Decide the branding mode first** (section below). It changes the header, font, colours,
   icons and `theme-color`, and it is the thing agents get wrong most.
2. **Pick with `references/CHOOSING.md`** (every component's and pattern's "when to use" and
   "when not to use" in one file), then **open `references/INDEX.md`** and read only the
   component, pattern and style files the task needs. Every component file has: guidance, when to use, when not to use, the Nunjucks macro
   options table, and the exact HTML each example renders to. Large files (footer, summary-list,
   radios) are best grepped for a heading or class name.
3. **Copy markup from the references, do not write it from memory.** Class names, `data-module`
   attributes, `aria-describedby` ordering and id conventions are all load-bearing. Paste the
   HTML or the Nunjucks example, then change the content.
4. **Start pages from `assets/page-template.html`** (the rendered default template) or extend
   `govuk/template.njk` in Nunjucks. Swap the header per the branding mode.
5. **Run the checklist** at the end before reporting done.

## Branding mode: on GOV.UK or not?

```
Is the service on a *.service.gov.uk / gov.uk domain, run by UK government?
  yes -> GOV.UK branded. Use govukHeader, crown, GDS Transport, blue #1d70b8.
  no  -> Unbranded. Follow references/frontend/using-govuk-frontend-without-govuk-branding.md
```

Unbranded (charities, councils' arms-length bodies, companies, side projects, prototypes for
non-gov clients) means:

- **Header:** use the `generic-header` component (`govukGenericHeader`), never `govukHeader`,
  never the crown SVG, never "GOV.UK" in the header, title or copy.
- **Font:** do not ship the GDS Transport `.woff`/`.woff2` files. Its licence is limited to
  gov.uk domains. Override in Sass:
  ```scss
  @use "pkg:govuk-frontend" as * with (
    $govuk-font-family: ("Helvetica Neue", Helvetica, Arial, sans-serif),
    $govuk-functional-colours: (brand: #388E3C)
  );
  ```
  (`pkg:` needs `sass --pkg-importer=node`, or use the `node_modules/govuk-frontend/dist/govuk` path.)
  With precompiled CSS you cannot override the font. Either compile Sass or add a rule after
  the stylesheet that sets `font-family` on `.govuk-template` descendants and delete the fonts
  folder.
- **Assets:** replace `favicon.ico`, `favicon.svg`, `govuk-icon-180.png`, `govuk-icon-192.png`,
  `govuk-icon-512.png`, `govuk-icon-mask.svg`, `govuk-opengraph-image.png` with your own. Keep
  the file names, the CSS expects them.
- **`<meta name="theme-color">`:** set to your brand colour, not `#1d70b8`.
- **Footer:** the footer component defaults to the Open Government Licence text and logo and
  "© Crown copyright". Keep the component, pass `contentLicence: null` and your own `copyright`
  (in HTML: delete the `govuk-footer__licence-*` elements and change the copyright link).
- Everything else (grid, typography scale, form components, patterns, focus states, error
  handling) is fine to use as-is and is the whole point.

## Install

Never guess a version or CDN path. Check: `npm view govuk-frontend version`. Details in
`references/frontend/installing-with-npm.md`, `include-css.md`, `import-javascript.md`,
`import-font-and-images-assets.md`.

- **npm (production):** `npm i govuk-frontend sass`. Sass: `@use "govuk-frontend" as *;` or the
  `with (...)` form above. Copy `node_modules/govuk-frontend/dist/govuk/assets/{fonts,images,manifest.json}`
  to `/assets/`, or set `$govuk-assets-path`.
- **Precompiled (trying it out):** copy `dist/govuk/govuk-frontend.min.css`,
  `govuk-frontend.min.js` and `assets/` from the release zip, or for a throwaway prototype load
  them from `https://cdn.jsdelivr.net/npm/govuk-frontend@<version>/dist/govuk/`. No Sass
  overrides possible, so an unbranded build on this path must override `font-family` with a CSS
  rule after the stylesheet. Move to npm before it ships.
- **JavaScript, always both lines:** the class-toggle script as the first thing in `<body>`, and
  `initAll()` (or `createAll(Component)` per component) as a module at the end.
  ```html
  <body class="govuk-template__body">
  <script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');</script>
  ...
  <script type="module">import { initAll } from '/javascripts/govuk-frontend.min.js'; initAll()</script>
  ```
  Without the first line, components stay in their no-JS state. Without `initAll`, the error
  summary does not take focus, radios' conditional reveals never open, the button double-click
  guard is off.
- **Templating:** Nunjucks macros are first-party (`references/frontend/use-nunjucks.md`; set
  the loader path to `node_modules/govuk-frontend/dist`). Community ports exist for Jinja
  (`govuk-frontend-jinja`), Rails (`govuk-components`), .NET, Java and React
  (`govuk-react-jsx`); with those, still validate the output against the HTML in the
  references, the HTML is the contract.

## Page anatomy

Every page: `<html class="govuk-template">`, `<body class="govuk-template__body">`, skip link,
header, `<div class="govuk-width-container">`, `<main class="govuk-main-wrapper" id="main-content">`,
footer. Content that is text or a form goes in `govuk-grid-row` > `govuk-grid-column-two-thirds`.
Page `<title>` is `Page heading – Service name`, and `Error: ` is prefixed when the page shows
errors. See `references/styles/page-template.md` and `layout.md`.

## Forms and question pages

The bulk of GOV.UK's research is here. Read `references/patterns/question-pages.md`,
`validation.md`, `check-answers.md`, and the "ask users for" pattern for each data type
(`names.md`, `dates.md`, `addresses.md`, `email-addresses.md`, `phone-numbers.md`, ...).

- One question per page by default. The `<label>` or `<legend>` IS the `<h1>`
  (`isPageHeading: true`, classes `govuk-label--l` / `govuk-fieldset__legend--l`). Use a
  `govuk-caption-l` span for the section name. Several questions on one page: a statement `<h1>`,
  then `--m` labels and legends.
- Never asterisks. Mark optional fields with "(optional)" in the label.
- Hint text via the `hint` option; never placeholders.
- Errors: error summary at the top of `main` (linking `#field-id`, focused on load by JS) plus
  `govuk-error-message` inside the form group, `govuk-form-group--error`, `govuk-input--error`,
  and `aria-describedby="<id>-hint <id>-error"` in that order. Error message text starts with a
  visually hidden "Error:" (the macro adds it). Follow the wording rules in each "ask users for"
  pattern; they give exact error messages.
- Date of birth: `date-input` with `namePrefix`, `autocomplete: bday-day/month/year`, hint
  "For example, 27 3 2024" (use a real past date).
- Buttons: sentence case, verb first, `Continue` / `Save and continue` / `Confirm and send`. One
  primary button per page, left aligned. Use `govuk-button-group` for pairs.
- Set `novalidate` on the form so the GOV.UK error pattern runs instead of browser bubbles.

## Checklist before done

- [ ] Branding mode decided and applied (header, font, icons, theme-color).
- [ ] govuk-frontend version verified, not guessed; CSS, JS bootstrap line and `initAll` present.
- [ ] Markup matches a reference example (compare class names and `data-module`).
- [ ] Label or legend is the page heading; no asterisks; hints not placeholders.
- [ ] Error summary + inline errors + `--error` classes + `aria-describedby` order + `Error: ` title.
- [ ] Copy is sentence case, plain English, no "please", no "click here".
- [ ] Ran an accessibility check (axe or similar) on the rendered page if a browser is available.

## Common mistakes

| Mistake | Fix |
|---|---|
| Crown, `govukHeader` or GDS Transport on a non-government product | Generic header, font override, own icons |
| Pinning an old major (v4/v5) from memory | `npm view govuk-frontend version`; v6 changed the type scale, header and colours |
| Loading CSS only, no JS bootstrap line | Add both script lines; components need `govuk-frontend-supported` on `<body>` |
| Heading above the form plus a separate label | Make the label or legend the heading with `isPageHeading` |
| Hand-written class names (`govuk-input-error`, `govuk-radio`) | Copy from the reference HTML; BEM names are exact |
| Inline error but no error summary, or summary not linked | Both, summary links to the input id |
| Copying `.govuk-*` classes and restyling them | Add your own `app-*` classes alongside; never edit `govuk-*` (see `references/get-started/extending-and-modifying-components.md`) |
| Using the design system for marketing or brochure sites | It is a transactional system; use it for services, forms, dashboards, admin tools |
