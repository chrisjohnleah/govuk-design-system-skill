# Phase banner

Use the phase banner component to show users your service is still being worked on

Use the phase banner component to show users your service is still being worked on.

**Example: Phase banner**

Nunjucks:

```njk
{% from "govuk/components/phase-banner/macro.njk" import govukPhaseBanner %}

{{ govukPhaseBanner({
  tag: {
    text: "Alpha"
  },
  text: "This is a new service. We're still working on ways to improve it."
}) }}
```

HTML:

```html
<div class="govuk-phase-banner govuk-width-container">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      Alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service. We're still working on ways to improve it.
    </span>
  </p>
</div>
```

## When to use this component

Services hosted on a service.gov.uk domain must use the phase banner until they pass a live assessment.

## How it works

There are 2 ways to use the phase banner component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

Use an alpha banner when your service is in alpha, and a beta banner if your service is in private or public beta.

Show the Phase banner inside the `<header>` element, directly after either:

- the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/)
- the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) (if your service does not use the Service navigation component)

If you use Nunjucks, use the `headerEnd` block to place the Phase banner on your page.

See ['Add extra content at the start or end of the `<header>` element' in 'Page template: Blocks and options'](https://design-system.service.gov.uk/styles/page-template/#add-extra-content-at-the-start-or-end-of-the-header-element).

Phase banners are shown across all pages of a service, so users should understand it as a service-level message.

You can choose to place the Phase banner in a more appropriate place for your service, however you’ll need to customise the component and provide your own CSS code to make it show correctly.

### Collect feedback from users

Use the [Feedback component](https://design-system.service.gov.uk/components/feedback/) to ask users to give feedback about your service and provide them with a link a feedback page.

[Find out what feedback you need to collect at each phase](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction#user-satisfaction-through-each-service-phase) in the GOV.UK Service Manual.

## Nunjucks macro options

Import: `{% from "govuk/components/phase-banner/macro.njk" import govukPhaseBanner %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `text` | string | yes | If `html` is set, this is not required. Text to use within the phase banner. If `html` is provided, the `text` option will be ignored. |
| `html` | string | yes | If `text` is set, this is not required. HTML to use within the phase banner. If `html` is provided, the `text` option will be ignored. |
| `tag` | object (component options) | yes | The tag used by the phase banner component. |
| `classes` | string | no | Classes to add to the phase banner container. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the phase banner container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "tag": {
    "text": "Alpha"
  },
  "html": "This is a new service - your <a href=\"#\" class=\"govuk-link\">feedback</a> will help us to improve it."
}
```

```html
<div class="govuk-phase-banner govuk-width-container">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      Alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service - your <a href="#" class="govuk-link">feedback</a> will help us to improve it.
    </span>
  </p>
</div>
```

