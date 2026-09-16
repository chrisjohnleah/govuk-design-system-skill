# Warning text

Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take

**Example: Warning text**

Nunjucks:

```njk
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "You can be fined up to £5,000 if you do not register.",
  iconFallbackText: "Warning"
}) }}
```

HTML:

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You can be fined up to £5,000 if you do not register.
  </strong>
</div>
```

## When to use this component

Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might&nbsp;take.

## How it works

There are 2 ways to use the warning text component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Warning text** second

Nunjucks:

```njk
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "You can be fined up to £5,000 if you do not register.",
  iconFallbackText: "Warning"
}) }}
```

HTML:

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You can be fined up to £5,000 if you do not register.
  </strong>
</div>
```

You might need to rewrite the hidden text (‘Warning’ in the example) to make it appropriate for your context.

## Nunjucks macro options

Import: `{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `text` | string | yes | If `html` is set, this is not required. Text to use within the warning text component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | yes | If `text` is set, this is not required. HTML to use within the warning text component. If `html` is provided, the `text` option will be ignored. |
| `iconFallbackText` | string | no | The fallback text for the icon. Defaults to `"Warning"`. |
| `classes` | string | no | Classes to add to the warning text. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the warning text. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "text": "You can be fined up to £5,000 if you don’t register.",
  "iconFallbackText": "Warning"
}
```

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You can be fined up to £5,000 if you don’t register.
  </strong>
</div>
```

### multiple lines

```json
{
  "text": "If you are not covered by this License), You must: (a) comply with the terms stated above for the purpose of this license. It explains, for example, the production of a Source form, including but not limited to, the implied warranties or conditions of this License, without any additional file created by such Respondent to you under Sections 2.1 and 2.2 above. Larger Works. You may choose to distribute such a notice and a brief idea of what it does.",
  "iconFallbackText": "Warning"
}
```

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    If you are not covered by this License), You must: (a) comply with the terms stated above for the purpose of this license. It explains, for example, the production of a Source form, including but not limited to, the implied warranties or conditions of this License, without any additional file created by such Respondent to you under Sections 2.1 and 2.2 above. Larger Works. You may choose to distribute such a notice and a brief idea of what it does.
  </strong>
</div>
```

