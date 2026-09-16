# Skip link

Use the skip link component to help keyboard-only users skip to the main content on a page

Use the skip link component to help keyboard-only users skip to the main content on a page.

**Example: Skip link**

Nunjucks:

```njk
<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>

{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}

{{ govukSkipLink({
  text: "Skip to main content",
  href: "#"
}) }}
```

HTML:

```html
<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>
<a href="#" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
```

If you use the page template, you'll also get the skip link without having to add it, as it's included by default. However, if you want to customise the default skip link, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

All GOV.UK pages must include a skip link. Usually, you should place the skip link immediately after the opening `<body>` tag. However, if you're using a [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/), place the skip link immediately after the cookie banner.

Some automated accessibility testing tools may warn that the skip link element is not inside a landmark. This warning does not apply to skip links, so you can ignore it. Do not wrap the skip link in a `<nav>` region, or move it inside the header.

## How it works

Some people use the tab key on their keyboard to navigate through the links and form elements on a web page.

Including the skip link component gives users the option to bypass the top-level navigation links and jump to the main content on a page.

The skip link component is visually hidden until a keyboard press activates it.

There are 2 ways to use the skip link component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Skip link** second

Nunjucks:

```njk
<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>

{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}

{{ govukSkipLink({
  text: "Skip to main content",
  href: "#"
}) }}
```

HTML:

```html
<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>
<a href="#" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
```

## Nunjucks macro options

Import: `{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `text` | string | yes | If `html` is set, this is not required. Text to use within the skip link component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | yes | If `text` is set, this is not required. HTML to use within the skip link component. If `html` is provided, the `text` option will be ignored. |
| `href` | string | no | The value of the skip link’s `href` attribute. Defaults to `"#content"` if you do not provide a value. |
| `classes` | string | no | Classes to add to the skip link. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the skip link. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "text": "Skip to main content",
  "href": "#test-target-element"
}
```

```html
<a href="#test-target-element" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
```

### with focus

```json
{
  "classes": ":focus",
  "text": "Skip to main content",
  "href": "#test-target-element"
}
```

```html
<a href="#test-target-element" class="govuk-skip-link :focus" data-module="govuk-skip-link">Skip to main content</a>
```

