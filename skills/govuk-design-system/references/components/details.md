# Details

Make a page easier to scan by letting users reveal more detailed information only if they need it

Make a page easier to scan by letting users reveal more detailed information only if they need it.

**Example: Details**

Nunjucks:

```njk
{% from "govuk/components/details/macro.njk" import govukDetails %}

{% call govukDetails({
  summaryText: "Help with nationality"
}) %}
  We need to know your nationality so we can work out which elections you’re entitled to vote in.
  If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
{% endcall %}
```

HTML:

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
  We need to know your nationality so we can work out which elections you’re entitled to vote in.
  If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>
```

## When to use this component

Use the details component to make a page easier to scan when it contains information that only some users will need.

## When not to use this component

Do not use the details component to hide information that the majority of your users will need.

## Decide between using details, accordions and tabs

The Details component, [Accordion component](https://design-system.service.gov.uk/components/accordion/), and [Tabs component](https://design-system.service.gov.uk/components/tabs/) all hide sections of content which a user can choose to reveal.

Use the details component instead of tabs or an accordion if you only have 1 section of content.

The details component is less visually prominent than tabs and accordions, so tends to work better for content which is not as important to users.

## How it works

The details component is a short link that shows more detailed help text when a user clicks on it.

There are 2 ways to use the details component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Details** second

Nunjucks:

```njk
{% from "govuk/components/details/macro.njk" import govukDetails %}

{% call govukDetails({
  summaryText: "Help with nationality"
}) %}
  We need to know your nationality so we can work out which elections you’re entitled to vote in.
  If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
{% endcall %}
```

HTML:

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
  We need to know your nationality so we can work out which elections you’re entitled to vote in.
  If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>
```

### Write clear link text

Make the link text short and descriptive so users can quickly work out if they need to click on it.

## Research on this component

There is [evidence that some users avoid clicking the link to show more details](https://github.com/alphagov/govuk-design-system-backlog/issues/44#issuecomment-629122091), as they think it will take them away from the page.

There are [concerns that some users of voice assist software will not be able to interact with the component](https://github.com/alphagov/govuk-design-system-backlog/issues/44#issuecomment-628082040). Some software might require the user to specifically refer to the link to show more details as a button in order to interact with it.

## Nunjucks macro options

Import: `{% from "govuk/components/details/macro.njk" import govukDetails %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `summaryText` | string | yes | If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `summaryHtml` | string | yes | If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `text` | string | yes | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | yes | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | no | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block. |
| `id` | string | no | ID to add to the details element. |
| `open` | boolean | no | If `true`, details element will be expanded. |
| `classes` | string | no | Classes to add to the `<details>` element. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the `<details>` element. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "summaryText": "Help with nationality",
  "text": "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post."
}
```

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>
```

### expanded

```json
{
  "id": "help-with-nationality",
  "summaryText": "Help with nationality",
  "text": "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.",
  "open": true
}
```

```html
<details id="help-with-nationality" class="govuk-details" open>
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>
```

### with html

```json
{
  "summaryText": "Where to find your National Insurance Number",
  "html": "Your National Insurance number can be found on\n<ul>\n  <li>your National Insurance card</li>\n  <li>your payslip</li>\n  <li>P60</li>\n  <li>benefits information</li>\n  <li>tax return</li>\n</ul>\n"
}
```

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Where to find your National Insurance Number
    </span>
  </summary>
  <div class="govuk-details__text">
    Your National Insurance number can be found on
<ul>
  <li>your National Insurance card</li>
  <li>your payslip</li>
  <li>P60</li>
  <li>benefits information</li>
  <li>tax return</li>
</ul>

  </div>
</details>
```

