# Dates

Help users enter or select a date

Help users enter or select a date.

## When to use this pattern

Follow this pattern whenever you need users to provide or select a date as part of your&nbsp;service.

## How it works

The way you should ask users for dates depends on the types of date you’re asking for.

Dates you may need users to provide include:

- memorable dates, like a date of birth or marriage
- dates from documents or cards, like a passport or credit card
- approximate dates, like ‘December 2017’
- relative dates, like ‘4 days from today’

In some cases you might need users to pick a date from a given selection.

### Asking for memorable dates

Ask for memorable dates, like dates of birth, using the [Date input component](https://design-system.service.gov.uk/components/date-input/) component.

**Example: Dates**

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
    text: "For example, 27 3 2024"
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
      For example, 27 3 2024
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

### Asking for dates from documents and cards

When asking for a date exactly as it’s shown on a passport, credit card or other document, make the fields match the format of the original. This makes it easier for users to copy the date across accurately.

### Asking for approximate dates

Allow users to enter an approximate date when you are asking them for information they may not know or may struggle to remember. For example, allow users to enter ‘December 2017’ for a field that says ‘the date you lost your passport’.

### Asking for relative dates

You may need to ask for dates that are relative to today’s date or another date - this is common if a user is setting a reminder.

To do this let users enter or select relative dates like ‘tomorrow’ or ‘1 day before’. If the day of the week is important, show this as well.

### Helping users to pick a date

Users might need to pick a date from a selection, for example, to book an appointment.

To do this, you can present dates in a calendar format using a calendar control. Users are typically shown one month’s worth of dates at a time, and can skip through months and&nbsp;years.

Only use a calendar control if users need to:

- pick a date in the near future or recent past
- know the day of the week, or the week of the month, as well as the date
- be able to see dates in relation to other dates

Never make a calendar control that depends on JavaScript as the only input option.&nbsp;Allow users to enter the date into a text input as well as use the control.

### How to write dates

See the [GOV.UK style for writing dates and date ranges](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/#dates).

If you give an example date, use 13 or more for the day and 9 or less for the month - for example ‘27 3 2007’. This helps users enter the date in the correct order and shows them they do not need to include leading zeroes.

## Research on this pattern

Read a blog post about [asking for a date of birth](https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/).

If you’ve used this pattern, get in touch to share your user research findings.

More research is needed to determine the extent to which users struggle to enter months as numbers, and whether allowing them to enter months as text is helpful.
