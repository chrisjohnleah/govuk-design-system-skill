# Error message

When there's a validation error, use an error message to explain what went wrong and how to fix it

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Follow the [Validation pattern](https://design-system.service.gov.uk/patterns/validation/) and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.

**Example: Error message**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  fieldset: {
    legend: {
      text: "When was your passport issued?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  },
  errorMessage: {
    text: "The date your passport was issued must be in the past"
  },
  id: "passport-issued",
  namePrefix: "passport-issued"
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-hint passport-issued-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        When was your passport issued?
      </h1>
    </legend>
    <div id="passport-issued-hint" class="govuk-hint">
      For example, 27 3 2007
    </div>
    <p id="passport-issued-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> The date your passport was issued must be in the past
    </p>
    <div class="govuk-date-input" id="passport-issued">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## When to use this component

Show an error message next to the field and in the [Error summary component](https://design-system.service.gov.uk/components/error-summary/) when there is a validation error.

Use standard messages for different components.

## When not to use this component

Do not use error messages to tell a user that they are not eligible or do not have permission to do something. Or to tell them about a lack of capacity or other problem the user cannot fix - because the problem is with the service rather than with the information the user has provided.

Instead, take the user to a page that explains the problem (for example, telling them why they’re not eligible) and provides useful information about what to do next.

There are separate patterns for:

- ['There is a problem with the service' pages](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/)
- ['Page not found' pages](https://design-system.service.gov.uk/patterns/page-not-found-pages/)
- ['Service unavailable' pages](https://design-system.service.gov.uk/patterns/service-unavailable-pages/)

## How it works

For each error:

- put the message in red after the question text and hint text
- use a red border to visually connect the message and the question it belongs to
- if the error relates to a specific field within the question, give it a red border and refer to that field in the error message - for example: "you must enter a year"

Do not clear any form fields when showing the Error message component. Keep both passing and failing answers.

Keeping information that caused errors helps users to:

- see what went wrong
- edit their previous answer
- avoid re-entering information

To help screen reader users, the error message component includes a hidden 'Error:' before the error message. These users will hear, for example, "Error: The date your passport was issued must be in the past".

If your error message is written in another language, you can change the prefix as needed, as shown in this example.

**Example: Error message with a custom visually hidden prefix**

Nunjucks:

```njk
{% from "govuk/components/error-message/macro.njk" import govukErrorMessage %}

{{ govukErrorMessage({
  text: "Rhowch eich enw llawn",
  visuallyHiddenText: "Gwall"
}) }}
```

HTML:

```html
<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Gwall:</span> Rhowch eich enw llawn
</p>
```

Summarise all errors at the top of the page the user is on using an [Error summary component](https://design-system.service.gov.uk/components/error-summary/).

There are 2 ways to use the error message component. You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

### Legend

**Example: Error message with legend**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "nationality",
  fieldset: {
    legend: {
      text: "What is your nationality?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "If you have dual nationality, select all options that are relevant to you"
  },
  errorMessage: {
    text: "Select if you are British, Irish or a citizen of a different country"
  },
  items: [
    {
      value: "british",
      text: "British"
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "other",
      text: "Citizen of another country"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-hint nationality-error">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your nationality?
    </h1>
  </legend>
  <div id="nationality-hint" class="govuk-hint">
    If you have dual nationality, select all options that are relevant to you
  </div>
  <p id="nationality-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select if you are British, Irish or a citizen of a different country
  </p>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### Label

**Example: Error message with label**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "National Insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60 – for example, ‘QQ 12 34 56 C’"
  },
  id: "national-insurance-number",
  name: "nationalInsuranceNumber",
  errorMessage: {
    text: "Enter a National Insurance number in the correct format"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="national-insurance-number">
    National Insurance number
  </label>
  <div id="national-insurance-number-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60 – for example, ‘QQ 12 34 56 C’
  </div>
  <p id="national-insurance-number-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
  </p>
  <input
   class="govuk-input govuk-input--error" id="national-insurance-number" name="nationalInsuranceNumber" type="text" aria-describedby="national-insurance-number-hint national-insurance-number-error">
</div>
```

### Match up error messages to labels

Error messages should directly include language from the question or fieldset label. This helps match up the error message with the relevant form field.

Here are some examples of label and error message pairs.

Example 1:

- Label: ‘How many hours do you work a week?’
- Error message: ‘Enter how many hours you work a week’

Example 2:

- Label: ‘Address line 1’
- Error message: ‘Enter address line 1, typically the building and street’

### Be clear and concise

Describe what has happened and tell them how to fix it. The message must be in plain English, use positive language and get to the point.

Do not use:

- technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’
- words like ‘forbidden’, ‘illegal’, ‘you forgot’ and ‘prohibited’
- ‘please’ because it implies a choice
- ‘sorry’ because it does not help fix the problem
- ‘valid’ and ‘invalid’ because they do not add anything to the message
- humourous, informal language like ‘oops’

Do not give an example in the error message if there is an example on the screen. For example, if you are asking for a National Insurance number and include ‘QQ 12 34 56 C’ as hint text, do not include an example in the error message.

Above all, aim for clarity.

Read the message out loud to see if it sounds like something you would say.

### Be consistent

Use the same message next to the field and in the [Error summary component](https://design-system.service.gov.uk/components/error-summary/) so they:

- look, sound and mean the same
- make sense out of context
- reduce the cognitive effort needed to understand what has happened

### Be specific

General errors are not helpful to everyone. They do not make sense out of context. Avoid messages like:

- ‘An error occurred’
- ‘Answer the question’
- ‘Select an option’
- ‘Fill in the field’
- ‘This field is required’

Different errors need different messages. For example, text fields may be:

- empty
- too long
- too short
- using characters that are not allowed
- in the wrong format

An error for a specific situation is more helpful. It will tell someone what has happened and how to fix it.

### Use instructions and descriptions

Some errors work better as instructions and some work better as descriptions. For example:

- ‘Enter your first name’ is clearer, more direct and natural than ‘First name must have an entry’
- ‘Enter a first name that is 35 characters or less’ is wordier, less direct and natural than ‘First name must be 35 characters or less’
- ‘Enter a date after 31 August 2017 for when you started the course’ is wordier, less direct and natural than ‘Date you started the course must be after 31 August 2017’

Use both instructions and descriptions, but use them consistently. For example, use an instruction for empty fields like ‘Enter your name’, but a description like ‘Name must be 35 characters or less’ for entries that are too long.

### Use error message templates

Use template messages for common errors on:

- [Addresses pattern](https://design-system.service.gov.uk/patterns/addresses/#error-messages)
- [Character count component](https://design-system.service.gov.uk/components/character-count/#error-messages)
- [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/#error-messages)
- [Date input component](https://design-system.service.gov.uk/components/date-input/#error-messages)
- [Email address pattern](https://design-system.service.gov.uk/patterns/email-addresses/#error-messages)
- [File upload component](https://design-system.service.gov.uk/components/file-upload/#error-messages)
- [Names pattern](https://design-system.service.gov.uk/patterns/names/#error-messages)
- [National Insurance numbers pattern](https://design-system.service.gov.uk/patterns/national-insurance-numbers/#error-messages)
- [Radios component](https://design-system.service.gov.uk/components/radios/#error-messages)
- [Phone numbers pattern](https://design-system.service.gov.uk/patterns/phone-numbers/#error-messages)
- [Text input component](https://design-system.service.gov.uk/components/text-input/#error-messages)
- [Textarea component](https://design-system.service.gov.uk/components/textarea/#error-messages)

### Track errors

Find out how often people see them. This will let you:

- improve content
- A/B test variations
- redesign a journey

## Research on this component

Error messages designed using this guidance have been tested with all types of users in live services, including tax credits.

Research showed users:

- understood what went wrong
- knew how to fix the problem
- were able to recover from the error

If you’ve used this component, get in touch to share your user research findings.

## Nunjucks macro options

Import: `{% from "govuk/components/error-message/macro.njk" import govukErrorMessage %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `text` | string | yes | If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `html` | string | yes | If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `id` | string | no | ID attribute to add to the error message `<p>` tag. |
| `classes` | string | no | Classes to add to the error message `<p>` tag. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the error message `<p>` tag. |
| `visuallyHiddenText` | string | no | A visually hidden prefix used before the error message. Defaults to `"Error"`. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "text": "Error message about full name goes here"
}
```

```html
<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message about full name goes here
</p>
```

### translated

```json
{
  "visuallyHiddenText": "",
  "html": "<span class=\"govuk-visually-hidden\">Gwall:</span> Neges gwall am yr enw llawn yn mynd yma"
}
```

```html
<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Gwall:</span> Neges gwall am yr enw llawn yn mynd yma
</p>
```

