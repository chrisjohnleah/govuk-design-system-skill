# Character count

Tell users how many characters or words they can enter into a textarea

Help users know how much text they can enter when there is a limit on the number of characters.

**Example: Character count**

Nunjucks:

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  name: "withHint",
  id: "with-hint",
  maxlength: 200,
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information like your National Insurance number or credit card details"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-character-count"
   data-module="govuk-character-count" data-maxlength="200">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="with-hint">
      Can you provide more detail?
    </label>
  </h1>
  <div id="with-hint-hint" class="govuk-hint">
    Do not include personal or financial information like your National Insurance number or credit card details
  </div>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-hint" name="withHint" rows="5" aria-describedby="with-hint-info with-hint-hint"></textarea>
  <div id="with-hint-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 200 characters
  </div>
</div>
```

## When to use this component

Always test your service without a character count first.

Only use the character count component when there is a good reason for limiting the number of characters users can enter. For example, if there is:

- evidence that users are likely to enter more information than they need to
- a legal or technical reason that means an entry must be no more than a certain number of characters

## When not to use this component

If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.

## How it works

It tells users how many characters they have remaining as they type into a [Textarea component](https://design-system.service.gov.uk/components/textarea/) with a character limit.

Users will get updates at a pace that works best for the way they interact with the textarea. This means:

- sighted users will see a count message that updates as they type
- screen reader users will hear the count announcement when they stop typing.

This component does not restrict the user from entering information. The user can enter more than the character limit, but are told they've entered too many characters. This lets them type or copy and paste their full answer, then edit it down.

The count message appears below the textarea so that:

- it’s clearly separate from any hint text or error message above the textarea
- if it’s below the visible screen area, users will still see it again when they scroll down to send their response

This component uses JavaScript. If JavaScript is not available, users will see a static message in place of the count message, telling them how many characters they can enter.

There are 2 ways to use the character count component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

**Example: Character count** second

Nunjucks:

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  name: "withHint",
  id: "with-hint",
  maxlength: 200,
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information like your National Insurance number or credit card details"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-character-count"
   data-module="govuk-character-count" data-maxlength="200">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="with-hint">
      Can you provide more detail?
    </label>
  </h1>
  <div id="with-hint-hint" class="govuk-hint">
    Do not include personal or financial information like your National Insurance number or credit card details
  </div>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-hint" name="withHint" rows="5" aria-describedby="with-hint-info with-hint-hint"></textarea>
  <div id="with-hint-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 200 characters
  </div>
</div>
```

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**Example: Character count without a heading**

Nunjucks:

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  id: "label-as-page-heading",
  name: "labelAsPageHeading",
  maxlength: 200,
  label: {
    text: "Describe the nature of your event"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-character-count"
   data-module="govuk-character-count" data-maxlength="200">
  <label class="govuk-label" for="label-as-page-heading">
    Describe the nature of your event
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="label-as-page-heading" name="labelAsPageHeading" rows="5" aria-describedby="label-as-page-heading-info"></textarea>
  <div id="label-as-page-heading-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 200 characters
  </div>
</div>
```

### Consider if a word count is more helpful

In some cases it may be more helpful to show a word count. For example, if your question requires a longer answer.

Do this by setting `data-maxwords` in the component markup. For example, `data-maxwords="150"` will set a word limit of 150.

**Example: Word count**

Nunjucks:

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  name: "wordCount",
  id: "word-count",
  maxwords: 150,
  label: {
    text: "Enter a job description",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-character-count"
   data-module="govuk-character-count" data-maxwords="150">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="word-count">
      Enter a job description
    </label>
  </h1>
  <textarea class="govuk-textarea govuk-js-character-count" id="word-count" name="wordCount" rows="5" aria-describedby="word-count-info"></textarea>
  <div id="word-count-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 150 words
  </div>
</div>
```

### Avoid narrow limits

When using a character count, try to set the limit higher than most users will need. Find out what this is by doing user research and data analysis.

#### If the limit is far higher than users are likely to reach

You can choose to display a character count message when the length of text within the textarea passes a certain 'threshold' of characters. This is useful when a character limit is needed due to the technical limitations of the service, but users are unlikely to reach that limit.

To do this, set the threshold in the component markup as a percentage. For example, `data-threshold="75"` will show the count message only when the user has entered a length of text that's 75% of the limit or more.

Screen reader users will hear the character limit when they first interact with a textarea using the threshold option. Sighted users will not see anything until the count message is shown – though you might choose to include the character limit in the hint text.

**Example: Threshold**

Nunjucks:

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{% set textareaValue -%}
This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 2 more times.

This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 1 more time.

This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear.
{%- endset %}

{{ govukCharacterCount({
  name: "threshold",
  id: "threshold",
  maxlength: 1000,
  threshold: 85,
  value: textareaValue,
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-character-count"
   data-module="govuk-character-count" data-maxlength="1000" data-threshold="85">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="threshold">
      Can you provide more detail?
    </label>
  </h1>
  <textarea class="govuk-textarea govuk-js-character-count" id="threshold" name="threshold" rows="5" aria-describedby="threshold-info">
This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 2 more times.
This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 1 more time.
This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear.</textarea>
  <div id="threshold-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 1000 characters
  </div>
</div>
```

### Error messages

Error messages should be styled like this:

**Example: Error**

Nunjucks:

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  id: "exceeding-characters",
  name: "exceeding",
  maxlength: 350,
  value: "A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.",
  label: {
    text: "Enter a job description",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error govuk-character-count"
   data-module="govuk-character-count" data-maxlength="350">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="exceeding-characters">
      Enter a job description
    </label>
  </h1>
  <p id="exceeding-characters-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Job description must be 350 characters or less
  </p>
  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count" id="exceeding-characters" name="exceeding" rows="5" aria-describedby="exceeding-characters-info exceeding-characters-error">A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.</textarea>
  <div id="exceeding-characters-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 350 characters
  </div>
</div>
```

If a user tries to send their response with too many characters, you must show an error message above the field as well as the count message below it.

The error message tells users what went wrong and how to fix it. The count message provides live feedback and updates as a user types.

The input shows a red border only when the user tries to enter more than the character limit. If the number of characters is within the limit, the input does not show this border even when there's been an error. We felt it might cause the user difficulty if the border disappeared once they started typing.

Make sure errors follow GOV.UK guidance on [writing error messages](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise) and have specific error messages for specific error states.

#### If the input is empty

Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter a summary’.

#### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Summary must be 400 characters or less’.

## Research on this component

In 2017, the Government Digital Service (GDS) [developed and tested this component](https://github.com/alphagov/govuk-design-system/wiki/Character-count-testing-and-user-research) in a prototype of the ‘Apply for a temporary event notice’ service. During this research, the component was tested with 17 users, including those with low digital skills and users with disabilities.

In 2022, the GOV.UK Design System team [updated the component to make it more accessible](https://github.com/alphagov/govuk-design-system-backlog/issues/67#issuecomment-1131719459), stopping the character count being announced twice by some screenreaders.

### Known issues and gaps

In Internet Explorer 11, JAWS will ignore any set threshold and announce the character count, even if the user entered less than the threshold.

In Chrome version 99, JAWS will not announce the hint or character count of a pre-populated textarea. This is a [known issue for the developer of JAWS](https://github.com/FreedomScientific/VFO-standards-support/issues/201).

Also, this component [counts some characters as multiple characters](https://github.com/alphagov/govuk-frontend/issues/1104). For example, emojis and some non-Latin characters.

### Services using this component

The component is used in a number of services, including the following.

**Department for Education**<br>
Publish teacher training courses

**Government Digital Service**<br>
Content publisher application

### Next steps

More user research is needed to find out:

- how to decide between a character limit and a word limit
- if highlighting characters over the limit in red would be helpful for users
- how the component might work with lower as well as upper limits
- if enabling a character count on text inputs would be useful

If you’ve used this component, get in touch to share your user research findings.

## Nunjucks macro options

Import: `{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `id` | string | no | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | yes | The name of the textarea, which is submitted with the form data. |
| `rows` | string | no | Optional number of textarea rows (default is 5 rows). |
| `value` | string | no | Optional initial value of the textarea. |
| `maxlength` | string | yes | If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` option will be ignored. |
| `maxwords` | string | yes | If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` option will be ignored. |
| `threshold` | string | no | The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. |
| `label` | object (component options) | yes | The label used by the character count component. |
| `hint` | object (component options) | no | Can be used to add a hint to the character count component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object | no | Additional options for the form group containing the character count component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | no | Content to add before the textarea used by the character count component. |
| `formGroup.beforeInput.text` | string | yes | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | yes | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | no | Content to add after the textarea used by the character count component. |
| `formGroup.afterInput.text` | string | yes | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | yes | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | no | Classes to add to the textarea. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the textarea. |
| `spellcheck` | boolean | no | Optional field to enable or disable the `spellcheck` attribute on the character count. |
| `countMessage` | object | no | Additional options for the count message used by the character count component. |
| `countMessage.classes` | string | no | Classes to add to the count message. |
| `textareaDescriptionText` | string | no | Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` or `maxwords` parameter. |
| `charactersUnderLimitText` | object | no | Message displayed when the number of characters is under the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining characters. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |
| `charactersAtLimitText` | string | no | Message displayed when the number of characters reaches the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. |
| `charactersOverLimitText` | object | no | Message displayed when the number of characters is over the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum.[Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |
| `wordsUnderLimitText` | object | no | Message displayed when the number of words is under the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining words. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |
| `wordsAtLimitText` | string | no | Message displayed when the number of words reaches the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies. |
| `wordsOverLimitText` | object | no | Message displayed when the number of words is over the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "name": "more-detail",
  "maxlength": 10,
  "label": {
    "text": "Can you provide more detail?"
  }
}
```

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-info"></textarea>
  <div id="more-detail-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

### with hint

```json
{
  "name": "with-hint",
  "id": "with-hint",
  "maxlength": 10,
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}
```

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="with-hint">
    Can you provide more detail?
  </label>
  <div id="with-hint-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-hint" name="with-hint" rows="5" aria-describedby="with-hint-info with-hint-hint"></textarea>
  <div id="with-hint-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

### with hint and error

```json
{
  "name": "with-error",
  "id": "with-error",
  "maxlength": 10,
  "label": {
    "text": "Can you provide more detail?"
  },
  "errorMessage": {
    "text": "Please provide more detail"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="with-error">
    Can you provide more detail?
  </label>
  <div id="with-error-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>
  <p id="with-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please provide more detail
  </p>
  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count" id="with-error" name="with-error" rows="5" aria-describedby="with-error-info with-error-hint with-error-error"></textarea>
  <div id="with-error-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

### with default value

```json
{
  "id": "with-default-value",
  "name": "default-value",
  "maxlength": 100,
  "label": {
    "text": "Full address"
  },
  "value": "221B Baker Street\nLondon\nNW1 6XE\n"
}
```

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="100">
  <label class="govuk-label" for="with-default-value">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-default-value" name="default-value" rows="5" aria-describedby="with-default-value-info">221B Baker Street
London
NW1 6XE
</textarea>
  <div id="with-default-value-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 100 characters
  </div>
</div>
```

### with default value exceeding limit

```json
{
  "id": "exceeding-characters",
  "name": "exceeding",
  "maxlength": 10,
  "value": "221B Baker Street\nLondon\nNW1 6XE\n",
  "label": {
    "text": "Full address"
  },
  "errorMessage": {
    "text": "Please do not exceed the maximum allowed limit"
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="exceeding-characters">
    Full address
  </label>
  <p id="exceeding-characters-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please do not exceed the maximum allowed limit
  </p>
  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count" id="exceeding-characters" name="exceeding" rows="5" aria-describedby="exceeding-characters-info exceeding-characters-error">221B Baker Street
London
NW1 6XE
</textarea>
  <div id="exceeding-characters-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

### with custom rows

```json
{
  "id": "custom-rows",
  "name": "custom",
  "maxlength": 10,
  "label": {
    "text": "Full address"
  },
  "rows": 8
}
```

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="custom-rows">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="custom-rows" name="custom" rows="8" aria-describedby="custom-rows-info"></textarea>
  <div id="custom-rows-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

### with label as page heading

```json
{
  "id": "textarea-with-page-heading",
  "name": "address",
  "maxlength": 10,
  "label": {
    "text": "Full address",
    "classes": "govuk-label--l",
    "isPageHeading": true
  }
}
```

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="textarea-with-page-heading">
      Full address
    </label>
  </h1>
  <textarea class="govuk-textarea govuk-js-character-count" id="textarea-with-page-heading" name="address" rows="5" aria-describedby="textarea-with-page-heading-info"></textarea>
  <div id="textarea-with-page-heading-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

### with word count

```json
{
  "id": "word-count",
  "name": "word-count",
  "maxwords": 10,
  "label": {
    "text": "Full address"
  }
}
```

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxwords="10">
  <label class="govuk-label" for="word-count">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="word-count" name="word-count" rows="5" aria-describedby="word-count-info"></textarea>
  <div id="word-count-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 words
  </div>
</div>
```

### with threshold

```json
{
  "id": "with-threshold",
  "name": "with-threshold",
  "maxlength": 10,
  "threshold": 75,
  "label": {
    "text": "Full address"
  }
}
```

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10" data-threshold="75">
  <label class="govuk-label" for="with-threshold">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-threshold" name="with-threshold" rows="5" aria-describedby="with-threshold-info"></textarea>
  <div id="with-threshold-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

