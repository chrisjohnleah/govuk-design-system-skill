# Breadcrumbs

Help users orientate themselves and navigate pages within a hierarchical structure

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

**Example: Breadcrumbs**

Nunjucks:

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Passports, travel and living abroad",
      href: "#"
    },
    {
      text: "Travel abroad",
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Passports, travel and living abroad</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Travel abroad</a>
    </li>
  </ol>
</nav>
```

## When to use this component

Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.

## When not to use this component

Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.

If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.

## How it works

Always place breadcrumbs at the top of a page, before the `<main>` element. Placing them here means that the 'Skip to main content' link allows the user to skip all navigation links, including breadcrumbs.

The breadcrumbs should start with your 'home' page and end with the parent section of the current page.

There are 2 ways to use the breadcrumbs component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Breadcrumbs** second

Nunjucks:

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Passports, travel and living abroad",
      href: "#"
    },
    {
      text: "Travel abroad",
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Passports, travel and living abroad</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Travel abroad</a>
    </li>
  </ol>
</nav>
```

### Collapsing breadcrumbs on mobile devices

If you have long breadcrumbs you can configure the component to only show the first and last items on mobile devices.

To do this, add a `govuk-breadcrumbs--collapse-on-mobile` class to the outer `<div>` element of the component HTML. Or if you’re using Nunjucks, add `collapseOnMobile: true` to the Nunjucks macro as shown in this example.

**Example: Breadcrumbs that collapse on mobile**

Nunjucks:

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  collapseOnMobile: true,
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Environment",
      href: "#"
    },
    {
      text: "Rural and countryside",
      href: "#"
    },
    {
      text: "Rural development and land management",
      href: "#"
    },
    {
      text: "Economic growth in rural areas",
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Environment</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Rural and countryside</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Rural development and land management</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Economic growth in rural areas</a>
    </li>
  </ol>
</nav>
```

### Breadcrumbs on dark backgrounds

Use the `govuk-breadcrumbs--inverse` modifier class to show white links and arrows on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the breadcrumbs – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Example: Inverse breadcrumbs**

Nunjucks:

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  classes: "govuk-breadcrumbs--inverse",
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Passports, travel and living abroad",
      href: "#"
    },
    {
      text: "Travel abroad",
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-breadcrumbs govuk-breadcrumbs--inverse" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Passports, travel and living abroad</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Travel abroad</a>
    </li>
  </ol>
</nav>
```

## Nunjucks macro options

Import: `{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `items` | array | yes | The items within breadcrumbs. |
| `items.text` | string | yes | If `html` is set, this is not required. Text to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | yes | If `text` is set, this is not required. HTML to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored. |
| `items.href` | string | no | Link for the breadcrumbs item. If not specified, breadcrumbs item is a normal list item. |
| `items.attributes` | object | no | HTML attributes (for example data attributes) to add to the individual crumb. |
| `classes` | string | no | Classes to add to the breadcrumbs container. |
| `collapseOnMobile` | boolean | no | When true, the breadcrumbs will collapse to the first and last item only on tablet breakpoint and below. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the breadcrumbs container. |
| `labelText` | string | no | Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb". |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "items": [
    {
      "text": "Home",
      "href": "/"
    },
    {
      "text": "Section",
      "href": "/section"
    },
    {
      "text": "Sub-section",
      "href": "/section/sub-section"
    },
    {
      "text": "Sub Sub-section",
      "href": "/section/sub-section/sub-sub-section"
    }
  ]
}
```

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section">Sub-section</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section/sub-sub-section">Sub Sub-section</a>
    </li>
  </ol>
</nav>
```

### with one level

```json
{
  "items": [
    {
      "text": "Section",
      "href": "/section"
    }
  ]
}
```

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
  </ol>
</nav>
```

### without the home section

```json
{
  "items": [
    {
      "text": "Service Manual",
      "href": "/service-manual"
    },
    {
      "text": "Agile Delivery",
      "href": "/service-manual/agile-delivery"
    }
  ]
}
```

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/service-manual">Service Manual</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/service-manual/agile-delivery">Agile Delivery</a>
    </li>
  </ol>
</nav>
```

### with last breadcrumb as current page

```json
{
  "items": [
    {
      "text": "Home",
      "href": "/"
    },
    {
      "text": "Passports, travel and living abroad",
      "href": "/browse/abroad"
    },
    {
      "text": "Travel abroad"
    }
  ]
}
```

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/browse/abroad">Passports, travel and living abroad</a>
    </li>
    <li class="govuk-breadcrumbs__list-item" aria-current="page">Travel abroad</li>
  </ol>
</nav>
```

### with collapse on mobile

```json
{
  "collapseOnMobile": true,
  "items": [
    {
      "text": "Home",
      "href": "/"
    },
    {
      "text": "Education, training and skills",
      "href": "/education"
    },
    {
      "text": "Special educational needs and disability (SEND) and high needs",
      "href": "/education/special-educational-needs-and-disability-send-and-high-needs"
    }
  ]
}
```

```html
<nav class="govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/education">Education, training and skills</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/education/special-educational-needs-and-disability-send-and-high-needs">Special educational needs and disability (SEND) and high needs</a>
    </li>
  </ol>
</nav>
```

### inverse

```json
{
  "classes": "govuk-breadcrumbs--inverse",
  "items": [
    {
      "text": "Home",
      "href": "/"
    },
    {
      "text": "Passports, travel and living abroad",
      "href": "/browse/abroad"
    },
    {
      "text": "Travel abroad"
    }
  ]
}
```

```html
<nav class="govuk-breadcrumbs govuk-breadcrumbs--inverse" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/browse/abroad">Passports, travel and living abroad</a>
    </li>
    <li class="govuk-breadcrumbs__list-item" aria-current="page">Travel abroad</li>
  </ol>
</nav>
```

