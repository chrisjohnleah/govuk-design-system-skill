# Date input

Use the date input component to help users enter a memorable date

Use the date input component to help users enter a memorable date or one they can easily look up.

**Example: Date input**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  id: "passport-issued",
  namePrefix: "passport-issued",
  fieldset: {
    legend: {
      text: "When was your passport issued?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        When was your passport issued?
      </h1>
    </legend>
    <div id="passport-issued-hint" class="govuk-hint">
      For example, 27 3 2007
    </div>
    <div class="govuk-date-input" id="passport-issued">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

## When to use this component

Use the date input component when you’re asking users for a date they’ll already know, or can look up without using a calendar.

## When not to use this component

Do not use the date input component if users are unlikely to know the exact date of the event you’re asking about.

Read more in the [Ask users for dates pattern](https://design-system.service.gov.uk/patterns/dates/).

## How it works

The date input component consists of 3 fields to let users enter a day, month and year.

The 3 date fields are grouped together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘What is your date of birth?’.

If you’re asking [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page), you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

Make sure that any example dates you use in hint text are valid for the question being asked.

Accept month names written out in full or abbreviated form (for example, ‘january’ or ‘jan’) as some users may enter months in this way.

There are 2 ways to use the date input component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Date input** second

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  id: "passport-issued",
  namePrefix: "passport-issued",
  fieldset: {
    legend: {
      text: "When was your passport issued?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        When was your passport issued?
      </h1>
    </legend>
    <div id="passport-issued-hint" class="govuk-hint">
      For example, 27 3 2007
    </div>
    <div class="govuk-date-input" id="passport-issued">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

Never automatically tab users between the fields of the date input because this can be confusing and may clash with normal keyboard controls.

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**Example: Date input without a heading** second

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  id: "passport-issued",
  namePrefix: "passport-issued",
  fieldset: {
    legend: {
      text: "When was your passport issued?"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-hint">
    <legend class="govuk-fieldset__legend">
      When was your passport issued?
    </legend>
    <div id="passport-issued-hint" class="govuk-hint">
      For example, 27 3 2007
    </div>
    <div class="govuk-date-input" id="passport-issued">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### Use the autocomplete attribute for a date of birth

Use the `autocomplete` attribute on the date input component when you're asking for a date of birth. This lets browsers autofill the information on a user's behalf if they’ve entered it previously.

To do this, set the `autocomplete` attribute on the 3 fields to `bday-day`, `bday-month` and `bday-year`. See how to do this in the HTML and Nunjucks tabs in the following example.

**Example: Date input to ask for date of birth**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  day: {
    autocomplete: "bday-day"
  },
  month: {
    autocomplete: "bday-month"
  },
  year: {
    autocomplete: "bday-year"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        What is your date of birth?
      </h1>
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" autocomplete="bday-day" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" autocomplete="bday-month" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" autocomplete="bday-year" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

If you are working in production you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5: Identify input purpose, level AA](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

### Error messages

If you’re highlighting the whole date, style all the fields like this:

**Example: Date input with errors**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  id: "passport-issued",
  namePrefix: "passport-issued",
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
  values: {
    day: 6,
    month: 3,
    year: 2076
  }
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
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" value="6" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" value="3" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" value="2076" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

If you’re highlighting just one field - either the day, month or year - only style the field that has an error. The error message must say which field has an error, like this:

**Example: Dates with errors**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  id: "passport-issued",
  namePrefix: "passport-issued",
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
    text: "The date your passport was issued must include a year"
  },
  values: {
    day: 6,
    month: 3
  },
  year: {
    error: true
  }
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
      <span class="govuk-visually-hidden">Error:</span> The date your passport was issued must include a year
    </p>
    <div class="govuk-date-input" id="passport-issued">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" value="6" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" value="3" inputmode="numeric">
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

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

If there’s more than one error, show the highest priority error message. In order of priority, show error messages about:

- missing or incomplete information
- information that cannot be correct (for example, the number ‘13’ in the month field)
- information that fails validation for another reason

#### If nothing is entered

Highlight the date input as a whole.<br>

Say ‘Enter [whatever it is]’. For example, ‘Enter your date of birth’.

#### If the date is incomplete

Highlight the day, month or year field where the information is missing or incomplete. If more than one field is missing information, highlight the fields the user needs to fill in.<br>

Say ‘[whatever it is] must include a [whatever is missing]’.<br>

For example, ‘Date of birth must include a month’, ‘Date of birth must include a day and month’ or ‘Year must include 4 numbers’.

#### If the date entered cannot be correct

For example, ‘13’ in the month field cannot be correct.<br>

Highlight the day, month or year field with the incorrect information. Or highlight the date as a whole if there’s incorrect information in more than one field, or it's not clear which field is incorrect.<br>

Say ‘[Whatever it is] must be a real date’. For example, ‘Date of birth must be a real date’.

#### If the date is in the future when it needs to be in the past

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be in the past’. For example, ‘Date of birth must be in the past’.

#### If the date is in the future when it needs to be today or in the past

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be today or in the past’. For example, ‘Date of birth must be today or in the past’.

#### If the date is in the past when it needs to be in the future

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be in the future’. For example, ‘The date your course ends must be in the future’.

#### If the date is in the past when it needs to be today or in the future

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be today or in the future’. For example, ‘The date your course ends must be today or in the future’.

#### If the date must be the same as or after another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be the same as or after [date and optional description]’. For example, ‘The date your course ends must be the same as or after 1 September 2017 when you started the course’.

#### If the date must be after another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be after [date and optional description]’. For example, ‘The day your course ends must be after 1 September 2017’.

#### If the date must be the same as or before another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be the same as or before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017 when they left school’.

#### If the date must be before another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017’.

#### If the date must be between two dates

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be between [date] and [date and optional description]’. For example, ‘The date your contract started must be between 1 September 2017 and 30 September 2017 when you were self-employed’.

## Research on this component

[Findings from the Apply for teacher training service](https://github.com/alphagov/govuk-design-system-backlog/issues/42#issuecomment-1119724868) showed that hundreds of users were inputting months using full or abbreviated month names and getting an error. They changed the component to accept month names to be consistent with this observed behaviour. Since changing the service the number of errors has dropped dramatically.

Some users with dyscalculia may struggle to convert month names into numbers, but accepting full or abbreviated month names may help these users.

## Nunjucks macro options

Import: `{% from "govuk/components/date-input/macro.njk" import govukDateInput %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `id` | string | yes | This is used for the main component and to compose the ID attribute for each item. |
| `namePrefix` | string | no | Optional prefix. This is used to prefix each item `name`, separated by `-`. |
| `items` | array | no | The inputs within the date input component. |
| `items.id` | string | no | Item-specific ID. If provided, it will be used instead of the generated ID. |
| `items.name` | string | yes | Item-specific name attribute. |
| `items.label` | string | no | Item-specific label text. If provided, this will be used instead of `name` for item label text. |
| `items.value` | string | no | If provided, it will be used as the initial value of the input. |
| `items.error` | boolean | no | If set to `true`, it will show a red error border on the item input. If provided, you must set the top-level `errorMessage` option to add an error message to the date input component. |
| `items.autocomplete` | string | no | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used. |
| `items.pattern` | string | no | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `items.classes` | string | no | Classes to add to date input item. |
| `items.attributes` | object | no | HTML attributes (for example data attributes) to add to the date input tag. |
| `hint` | object (component options) | no | Can be used to add a hint to a date input component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object | no | Additional options for the form group containing the date input component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object | no | Content to add before the inputs used by the date input component. |
| `formGroup.beforeInputs.text` | string | yes | Text to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | yes | HTML to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object | no | Content to add after the inputs used by the date input component. |
| `formGroup.afterInputs.text` | string | yes | Text to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | yes | HTML to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `fieldset` | object (component options) | no | Can be used to add a fieldset to the date input component. |
| `day` | object | no | Options for the day input within the date input component. See items. |
| `month` | object | no | Options for the month input within the date input component. See items. |
| `year` | object | no | Options for the year input within the date input component. See items. |
| `values` | object | no | Specify `value` attributes for the date parts without setting items. You can also use the `name` for the fields as keys, including any `namePrefix`. |
| `values.day` | string | no | The `value` attribute for the day input. |
| `values.month` | string | no | The `value` attribute for the month input. |
| `values.year` | string | no | The `value` attribute for the year input. |
| `classes` | string | no | Classes to add to the date-input container. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the date-input container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "id": "dob",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  }
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with translations

```json
{
  "id": "with-translations",
  "fieldset": {
    "legend": {
      "text": "Pryd gafodd eich pasbort ei gyhoeddi?"
    }
  },
  "hint": {
    "text": "Er enghraifft, 27 3 2007"
  },
  "day": {
    "label": "Dydd"
  },
  "month": {
    "label": "Mis"
  },
  "year": {
    "label": "Blwyddyn"
  }
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="with-translations-hint">
    <legend class="govuk-fieldset__legend">
      Pryd gafodd eich pasbort ei gyhoeddi?
    </legend>
    <div id="with-translations-hint" class="govuk-hint">
      Er enghraifft, 27 3 2007
    </div>
    <div class="govuk-date-input" id="with-translations">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-translations-day">
            Dydd
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-translations-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-translations-month">
            Mis
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-translations-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-translations-year">
            Blwyddyn
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-translations-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with values

```json
{
  "id": "with-values",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "values": {
    "day": 31,
    "month": 3,
    "year": 1980
  }
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="with-values-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="with-values-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="with-values">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-values-day" name="day" type="text" value="31" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-values-month" name="month" type="text" value="3" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-values-year" name="year" type="text" value="1980" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with values and name prefix

```json
{
  "id": "with-values-name-prefix",
  "namePrefix": "dob",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "values": {
    "dob-day": 31,
    "dob-month": 3,
    "dob-year": 1980
  }
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="with-values-name-prefix-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="with-values-name-prefix-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="with-values-name-prefix">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-name-prefix-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-values-name-prefix-day" name="dob-day" type="text" value="31" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-name-prefix-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-values-name-prefix-month" name="dob-month" type="text" value="3" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-name-prefix-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-values-name-prefix-year" name="dob-year" type="text" value="1980" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with values, name prefix and custom names

```json
{
  "id": "with-values-name-prefix-custom",
  "namePrefix": "dob",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "day": {
    "label": "Day",
    "name": "user1-day"
  },
  "month": {
    "label": "Month",
    "name": "user1-month"
  },
  "year": {
    "label": "Year",
    "name": "user1-year"
  },
  "values": {
    "dob-user1-day": 31,
    "dob-user1-month": 3,
    "dob-user1-year": 1980
  }
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="with-values-name-prefix-custom-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="with-values-name-prefix-custom-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="with-values-name-prefix-custom">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-name-prefix-custom-user1-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-values-name-prefix-custom-user1-day" name="dob-user1-day" type="text" value="31" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-name-prefix-custom-user1-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="with-values-name-prefix-custom-user1-month" name="dob-user1-month" type="text" value="3" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="with-values-name-prefix-custom-user1-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="with-values-name-prefix-custom-user1-year" name="dob-user1-year" type="text" value="1980" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### day and month

```json
{
  "id": "bday",
  "namePrefix": "bday",
  "fieldset": {
    "legend": {
      "text": "What is your birthday?"
    }
  },
  "hint": {
    "text": "For example, 5 12"
  },
  "year": false
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="bday-hint">
    <legend class="govuk-fieldset__legend">
      What is your birthday?
    </legend>
    <div id="bday-hint" class="govuk-hint">
      For example, 5 12
    </div>
    <div class="govuk-date-input" id="bday">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="bday-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="bday-day" name="bday-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="bday-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="bday-month" name="bday-month" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### day and month (using items)

```json
{
  "id": "bday",
  "namePrefix": "bday",
  "fieldset": {
    "legend": {
      "text": "What is your birthday?"
    }
  },
  "hint": {
    "text": "For example, 5 12"
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="bday-hint">
    <legend class="govuk-fieldset__legend">
      What is your birthday?
    </legend>
    <div id="bday-hint" class="govuk-hint">
      For example, 5 12
    </div>
    <div class="govuk-date-input" id="bday">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="bday-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="bday-day" name="bday-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="bday-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="bday-month" name="bday-month" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### month and year

```json
{
  "id": "dob",
  "namePrefix": "dob",
  "fieldset": {
    "legend": {
      "text": "When did you move to this property?"
    }
  },
  "hint": {
    "text": "For example, 3 1980"
  },
  "day": false
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      When did you move to this property?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### month and year (using items)

```json
{
  "id": "dob",
  "namePrefix": "dob",
  "fieldset": {
    "legend": {
      "text": "When did you move to this property?"
    }
  },
  "hint": {
    "text": "For example, 3 1980"
  },
  "items": [
    {
      "name": "month",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      When did you move to this property?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with errors only

```json
{
  "id": "dob-errors",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "day": {
    "error": true
  },
  "month": {
    "error": true
  },
  "year": {
    "error": true
  }
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with errors only (using classes)

```json
{
  "id": "dob-errors",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "day": {
    "classes": "govuk-input--error"
  },
  "month": {
    "classes": "govuk-input--error"
  },
  "year": {
    "classes": "govuk-input--error"
  }
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with errors only (using items)

```json
{
  "id": "dob-errors",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2",
      "error": true
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2",
      "error": true
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4",
      "error": true
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with errors only (using items and classes)

```json
{
  "id": "dob-errors",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2 govuk-input--error"
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2 govuk-input--error"
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4 govuk-input--error"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error message and hint

```json
{
  "id": "dob-errors",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-hint dob-errors-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-errors-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-errors-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error message and hint (using items)

```json
{
  "id": "dob-errors",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-hint dob-errors-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-errors-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-errors-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error on day input

```json
{
  "id": "dob-day-error",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "day": {
    "error": true
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-day-error-hint dob-day-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-day-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-day-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-day-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-day-error-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day-error-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-day-error-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error on day input (using items)

```json
{
  "id": "dob-day-error",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2",
      "error": true
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-day-error-hint dob-day-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-day-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-day-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-day-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-day-error-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day-error-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-day-error-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error on month input

```json
{
  "id": "dob-month-error",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "month": {
    "error": true
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-month-error-hint dob-month-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-month-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-month-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-month-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month-error-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-month-error-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-month-error-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error on month input (using items)

```json
{
  "id": "dob-month-error",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2",
      "error": true
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-month-error-hint dob-month-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-month-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-month-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-month-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month-error-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="dob-month-error-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-month-error-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error on year input

```json
{
  "id": "dob-year-error",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "year": {
    "error": true
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-year-error-hint dob-year-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-year-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-year-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-year-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="dob-year-error-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with error on year input (using items)

```json
{
  "id": "dob-year-error",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4",
      "error": true
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-year-error-hint dob-year-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-year-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-year-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-year-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="dob-year-error-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### with items

```json
{
  "id": "dob",
  "namePrefix": "dob",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "items": [
    {
      "name": "day",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "month",
      "classes": "govuk-input--width-2"
    },
    {
      "name": "year",
      "classes": "govuk-input--width-4"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

