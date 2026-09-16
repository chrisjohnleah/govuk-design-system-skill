# Textarea

Help users provide detailed information using the textarea component

**Example: Textarea**

Nunjucks:

```njk
{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "moreDetail",
  id: "more-detail",
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information, like your National Insurance number or credit card details"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="more-detail">
      Can you provide more detail?
    </label>
  </h1>
  <div id="more-detail-hint" class="govuk-hint">
    Do not include personal or financial information, like your National Insurance number or credit card details
  </div>
  <textarea class="govuk-textarea" id="more-detail" name="moreDetail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

## When to use this component

Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.

## When not to use this component

Users can find open-ended questions difficult to answer. It might be better to break up one complex question into a series of simple ones, for example where users can select from options using a [Radios component](https://design-system.service.gov.uk/components/radios/).

### If you need to ask an open question

Do not use the textarea component if you need to let users enter shorter answers no longer than a single line, such as a phone number or name. In this case, you should use the [Text input component](https://design-system.service.gov.uk/components/text-input/).

## How it works

You must label textareas. Placeholder text is not a suitable substitute for a label, as it disappears when users click inside the textarea.

Labels must be aligned above the textarea they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.

There are 2 ways to use the textarea component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Textarea** second

Nunjucks:

```njk
{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "moreDetail",
  id: "more-detail",
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information, like your National Insurance number or credit card details"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="more-detail">
      Can you provide more detail?
    </label>
  </h1>
  <div id="more-detail-hint" class="govuk-hint">
    Do not include personal or financial information, like your National Insurance number or credit card details
  </div>
  <textarea class="govuk-textarea" id="more-detail" name="moreDetail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

### Use appropriately-sized textareas

Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by specifying the `rows` attribute.

**Example: Textarea appropriately-sized with rows**

Nunjucks:

```njk
{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "moreDetail",
  id: "more-detail",
  rows: "8",
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information, like your National Insurance number or credit card details"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="more-detail">
      Can you provide more detail?
    </label>
  </h1>
  <div id="more-detail-hint" class="govuk-hint">
    Do not include personal or financial information, like your National Insurance number or credit card details
  </div>
  <textarea class="govuk-textarea" id="more-detail" name="moreDetail" rows="8" aria-describedby="more-detail-hint"></textarea>
</div>
```

### Do not disable copy and paste

Users will often need to copy and paste information into a textarea, so do not stop them from doing this.

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**Example: Textarea without a heading**

Nunjucks:

```njk
{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "moreDetail",
  id: "more-detail",
  label: {
    text: "Can you provide more detail?"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea" id="more-detail" name="moreDetail" rows="5"></textarea>
</div>
```

### Limiting the number of characters

If there’s a good reason to limit the number of characters users can enter, you can use the [Character count component](https://design-system.service.gov.uk/components/character-count/).

### Error messages

Error messages should be styled like this:

**Example: Textarea with error**

Nunjucks:

```njk
{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "moreDetail",
  id: "more-detail",
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information, like your National Insurance number or credit card details"
  },
  errorMessage: {
    text: "Enter more detail"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="more-detail">
      Can you provide more detail?
    </label>
  </h1>
  <div id="more-detail-hint" class="govuk-hint">
    Do not include personal or financial information, like your National Insurance number or credit card details
  </div>
  <p id="more-detail-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter more detail
  </p>
  <textarea class="govuk-textarea govuk-textarea--error" id="more-detail" name="moreDetail" rows="5" aria-describedby="more-detail-hint more-detail-error"></textarea>
</div>
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If the input is empty

Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter summary’.

#### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Summary must be 400 characters or less’.

#### If the input is too short

Say ‘[whatever it is] must be [number] characters or more’.<br>
For example, ‘Summary must be 10 characters or more’.

#### If the input is too long or too short

Say ‘[whatever it is] must be between [number] and [number] characters’.<br>
For example, ‘Summary must be between 10 and 400 characters’.

#### If the input uses characters that are not allowed and you know what the characters are

Say ‘[whatever it is] must not include [characters]’.<br>
For example, ‘Summary must not include è and £’.

#### If the input uses characters that are not allowed and you do not know what the characters are

Say ‘[whatever it is] must only include [list of allowed characters]’.<br>
For example, ‘Summary must only include letters a to z, hyphens, spaces and apostrophes.

## Nunjucks macro options

Import: `{% from "govuk/components/textarea/macro.njk" import govukTextarea %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `id` | string | no | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | yes | The name of the textarea, which is submitted with the form data. |
| `spellcheck` | boolean | no | Optional field to enable or disable the `spellcheck` attribute on the textarea. |
| `rows` | string | no | Optional number of textarea rows (default is 5 rows). |
| `value` | string | no | Optional initial value of the textarea. |
| `disabled` | boolean | no | If `true`, textarea will be disabled. |
| `describedBy` | string | no | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object (component options) | yes | The label used by the textarea component. |
| `hint` | object (component options) | no | Can be used to add a hint to the textarea component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object | no | Additional options for the form group containing the textarea component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | no | Content to add before the textarea used by the textarea component. |
| `formGroup.beforeInput.text` | string | yes | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | yes | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | no | Content to add after the textarea used by the textarea component. |
| `formGroup.afterInput.text` | string | yes | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | yes | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | no | Classes to add to the textarea. |
| `autocomplete` | string | no | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the textarea. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "name": "more-detail",
  "label": {
    "text": "Can you provide more detail?"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5"></textarea>
</div>
```

### with hint

```json
{
  "name": "more-detail",
  "id": "more-detail",
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <div id="more-detail-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>
  <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

### with error message

```json
{
  "name": "no-ni-reason",
  "id": "no-ni-reason",
  "label": {
    "text": "Why can’t you provide a National Insurance number?"
  },
  "errorMessage": {
    "text": "You must provide an explanation"
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="no-ni-reason">
    Why can’t you provide a National Insurance number?
  </label>
  <p id="no-ni-reason-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> You must provide an explanation
  </p>
  <textarea class="govuk-textarea govuk-textarea--error" id="no-ni-reason" name="no-ni-reason" rows="5" aria-describedby="no-ni-reason-error"></textarea>
</div>
```

### with default value

```json
{
  "id": "full-address",
  "name": "address",
  "value": "221B Baker Street\nLondon\nNW1 6XE\n",
  "label": {
    "text": "Full address"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea" id="full-address" name="address" rows="5">221B Baker Street
London
NW1 6XE
</textarea>
</div>
```

### with custom rows

```json
{
  "id": "full-address",
  "name": "address",
  "label": {
    "text": "Full address"
  },
  "rows": 8
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea" id="full-address" name="address" rows="8"></textarea>
</div>
```

### with label as page heading

```json
{
  "id": "textarea-with-page-heading",
  "name": "address",
  "label": {
    "text": "Full address",
    "classes": "govuk-label--l",
    "isPageHeading": true
  }
}
```

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="textarea-with-page-heading">
      Full address
    </label>
  </h1>
  <textarea class="govuk-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>
```

