# Error summary

Use an error summary when there is a validation error

Use this component at the top of a page to summarise any errors a user has made.

When a user makes an error, you must show both an error summary and an [Error message component](https://design-system.service.gov.uk/components/error-message/) next to each answer that contains an error.

**Example: Error summary**

Nunjucks:

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#"
    },
    {
      text: "The date your passport was issued must be in the past",
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#">Enter your full name</a>
          </li>
          <li>
            <a href="#">The date your passport was issued must be in the past</a>
          </li>
        </ul>
    </div>
  </div>
</div>
```

## When to use this component

Always show an error summary when there is a validation error, even if there’s only one.

## How it works

You must:

- move keyboard focus to the error summary (the govuk-frontend javascript will do this for you)
- include the heading ‘There is a problem’
- link to each of the answers that have validation errors
- make sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors

As well as showing an error summary, follow the [Validation pattern](https://design-system.service.gov.uk/patterns/validation/) - for example, by adding ‘Error: ’ to the beginning of the page `<title>` so screen readers read it out as soon as possible.

And [make your error messages clear and concise](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise).

There are 2 ways to use the error summary component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Error summary** second

Nunjucks:

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#"
    },
    {
      text: "The date your passport was issued must be in the past",
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#">Enter your full name</a>
          </li>
          <li>
            <a href="#">The date your passport was issued must be in the past</a>
          </li>
        </ul>
    </div>
  </div>
</div>
```

### Linking from the error summary to each answer

You must link the errors in the error summary to the answer they relate to.

For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the field.

**Example: Linking from the error summary to an answer that uses a single field**

Nunjucks:

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#full-name-input"
    }
  ]
}) }}

<h1 class="govuk-heading-l">Your details</h1>

{{ govukInput({
  label: {
    text: "Full name"
  },
  id: "full-name-input",
  name: "name",
  autocomplete: "name",
  errorMessage: {
    text: "Enter your full name"
  }
}) }}
```

HTML:

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#full-name-input">Enter your full name</a>
          </li>
        </ul>
    </div>
  </div>
</div>
<h1 class="govuk-heading-l">Your details</h1>
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="full-name-input">
    Full name
  </label>
  <p id="full-name-input-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter your full name
  </p>
  <input
   class="govuk-input govuk-input--error" id="full-name-input" name="name" type="text" aria-describedby="full-name-input-error" autocomplete="name">
</div>
```

When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error.

If you do not know which field contains an error, link to the first field.

**Example: Linking from the error summary to an answer that uses multiple fields**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Passport issue date must include a year",
      href: "#passport-issued-year"
    }
  ]
}) }}

{{ govukDateInput({
  fieldset: {
    legend: {
      isPageHeading: true,
      text: "When was your passport issued?",
      classes: "govuk-fieldset__legend--l"
    }
  },
  id: "passport-issued",
  namePrefix: "passport-issued",
  errorMessage: {
    text: "Passport issue date must include a year"
  },
  values: {
    day: 5,
    month: 12
  },
  year: {
    error: true
  }
  })
}}
```

HTML:

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#passport-issued-year">Passport issue date must include a year</a>
          </li>
        </ul>
    </div>
  </div>
</div>
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        When was your passport issued?
      </h1>
    </legend>
    <p id="passport-issued-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Passport issue date must include a year
    </p>
    <div class="govuk-date-input" id="passport-issued">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" value="5" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" value="12" inputmode="numeric">
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

For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox.

**Example: Linking from the error summary to checkboxes**

Nunjucks:

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Select if you are British, Irish or a citizen of a different country",
      href: "#nationality"
    }
  ]
}) }}

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
      text: "British",
      hint: {
        text: "including English, Scottish, Welsh and Northern Irish"
      }
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
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#nationality">Select if you are British, Irish or a citizen of a different country</a>
          </li>
        </ul>
    </div>
  </div>
</div>
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
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british" aria-describedby="nationality-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
      <div id="nationality-item-hint" class="govuk-hint govuk-checkboxes__hint">
        including English, Scottish, Welsh and Northern Irish
      </div>
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

### Where to put the error summary

Put the error summary at the top of the `main` container. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.

**Example: Full page example**

Nunjucks:

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

  {{ govukBackLink({
    text: "Back"
  }) }}

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <form action="/form-handler" method="post" novalidate>
        {{ govukErrorSummary({
          titleText: "There is a problem",
          errorList: [
            {
              text: "Passport issue date must include a year",
              href: "#passport-issued-year"
            }
          ]
        }) }}

        {{ govukDateInput({
          fieldset: {
            legend: {
              isPageHeading: true,
              text: "When was your passport issued?",
              classes: "govuk-fieldset__legend--l"
            }
          },
          id: "passport-issued",
          namePrefix: "passport-issued",
          errorMessage: {
            text: "Passport issue date must include a year"
          },
          day: {
            value: 5
          },
          month: {
            value: 12
          },
          year: {
            error: true
          }
          })
        }}

        {{ govukButton({
          text: "Continue"
        }) }}

      </form>
    </div>
  </div>
```

HTML:

```html
<a href="#" class="govuk-back-link">Back</a>
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <form action="/form-handler" method="post" novalidate>
        <div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#passport-issued-year">Passport issue date must include a year</a>
          </li>
        </ul>
    </div>
  </div>
</div>
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        When was your passport issued?
      </h1>
    </legend>
    <p id="passport-issued-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Passport issue date must include a year
    </p>
    <div class="govuk-date-input" id="passport-issued">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" value="5" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" value="12" inputmode="numeric">
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
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
      </form>
    </div>
  </div>
```

## Nunjucks macro options

Import: `{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `titleText` | string | yes | If `titleHtml` is set, this is not required. Text to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `titleHtml` | string | yes | If `titleText` is set, this is not required. HTML to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `descriptionText` | string | no | Text to use for the description of the errors. If you set `descriptionHtml`, the component will ignore `descriptionText`. |
| `descriptionHtml` | string | no | HTML to use for the description of the errors. If you set this option, the component will ignore `descriptionText`. |
| `caller` | nunjucks-block | no | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire error summary component in a `call` block. |
| `errorList` | array | no | A list of errors to include in the error summary. |
| `errorList.href` | string | no | Href attribute for the error link item. If provided item will be an anchor. |
| `errorList.text` | string | yes | If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.html` | string | yes | If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList.attributes` | object | no | HTML attributes (for example data attributes) to add to the error link anchor. |
| `disableAutoFocus` | boolean | no | Prevent moving focus to the error summary when the page loads. |
| `classes` | string | no | Classes to add to the error-summary container. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the error-summary container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "titleText": "There is a problem",
  "errorList": [
    {
      "text": "The date your passport was issued must be in the past",
      "href": "#example-error-1"
    },
    {
      "text": "Enter a postcode, like AA1 1AA",
      "href": "#example-error-2"
    }
  ]
}
```

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#example-error-1">The date your passport was issued must be in the past</a>
          </li>
          <li>
            <a href="#example-error-2">Enter a postcode, like AA1 1AA</a>
          </li>
        </ul>
    </div>
  </div>
</div>
```

### without links

```json
{
  "titleText": "There is a problem",
  "errorList": [
    {
      "text": "Invalid username or password"
    }
  ]
}
```

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            Invalid username or password
          </li>
        </ul>
    </div>
  </div>
</div>
```

### mixed with and without links

```json
{
  "titleText": "There is a problem",
  "errorList": [
    {
      "text": "Invalid username or password"
    },
    {
      "text": "Agree to the terms of service to log in",
      "href": "#example-error-1"
    }
  ]
}
```

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            Invalid username or password
          </li>
          <li>
            <a href="#example-error-1">Agree to the terms of service to log in</a>
          </li>
        </ul>
    </div>
  </div>
</div>
```

### with description only

```json
{
  "titleText": "There is a problem",
  "descriptionText": "The file couldn't be loaded. Try again later."
}
```

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <p>
        The file couldn&#39;t be loaded. Try again later.
      </p>
    </div>
  </div>
</div>
```

### with everything

```json
{
  "titleText": "There is a problem",
  "descriptionText": "Please fix the errors below.",
  "errorList": [
    {
      "text": "Invalid username or password"
    },
    {
      "text": "Agree to the terms of service to log in",
      "href": "#example-error-1"
    }
  ]
}
```

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <p>
        Please fix the errors below.
      </p>
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            Invalid username or password
          </li>
          <li>
            <a href="#example-error-1">Agree to the terms of service to log in</a>
          </li>
        </ul>
    </div>
  </div>
</div>
```

