# National Insurance numbers

Ask users to provide their National Insurance number

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Ask users to provide their National Insurance number.

**Example: National Insurance numbers**

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
  classes: "govuk-input--width-10 govuk-input--extra-letter-spacing",
  id: "national-insurance-number",
  name: "nationalInsuranceNumber",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="national-insurance-number">
    National Insurance number
  </label>
  <div id="national-insurance-number-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60 – for example, ‘QQ 12 34 56 C’
  </div>
  <input
   class="govuk-input govuk-input--width-10 govuk-input--extra-letter-spacing" id="national-insurance-number" name="nationalInsuranceNumber" type="text" spellcheck="false" aria-describedby="national-insurance-number-hint">
</div>
```

## When to use this pattern

Follow this pattern whenever you need to ask for a National Insurance number.

## When not to use this pattern

Never use National Insurance numbers to verify a user’s identity.

If you currently use National Insurance numbers to verify identity, find out how to [protect your service against fraud](https://www.gov.uk/service-manual/technology/protecting-your-service-against-fraud).

## How it works

Use a single [Text input component](https://design-system.service.gov.uk/components/text-input/) labelled ‘National Insurance number’. Write it out in full and never use abbreviations such as ‘NINO’ or ‘NI Number’.

Show a National Insurance number using the format ‘QQ 12 34 56 C’ – the spaces will break up the number to make it easier to read, particularly for screen reader users.

When asking for a National Insurance number:

- allow for 13 characters as National Insurance numbers are spaced in pairs followed by a single letter
- let users enter upper and lower case letters, additional spaces and punctuation
- ignore any unwanted characters before validating
- avoid using ‘AB 12 34 56 C’ as an example because it belongs to a real person and use ‘QQ 12 34 56 C’ instead
- set the `spellcheck` attribute to `false` so that browsers do not spellcheck the National Insurance number

**Example: National Insurance numbers** second

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
  classes: "govuk-input--width-10 govuk-input--extra-letter-spacing",
  id: "national-insurance-number",
  name: "nationalInsuranceNumber",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="national-insurance-number">
    National Insurance number
  </label>
  <div id="national-insurance-number-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60 – for example, ‘QQ 12 34 56 C’
  </div>
  <input
   class="govuk-input govuk-input--width-10 govuk-input--extra-letter-spacing" id="national-insurance-number" name="nationalInsuranceNumber" type="text" spellcheck="false" aria-describedby="national-insurance-number-hint">
</div>
```

### Error messages

Error messages should be styled like this:

**Example: National insurance number input with errors**

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
  classes: "govuk-input--width-10 govuk-input--extra-letter-spacing",
  id: "national-insurance-number",
  name: "nationalInsuranceNumber",
  value: "12345678",
  errorMessage: {
    text: "Enter a National Insurance number in the correct format"
  },
  spellcheck: false
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
   class="govuk-input govuk-input--width-10 govuk-input--extra-letter-spacing govuk-input--error" id="national-insurance-number" name="nationalInsuranceNumber" type="text" spellcheck="false" value="12345678" aria-describedby="national-insurance-number-hint national-insurance-number-error">
</div>
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If the National Insurance number is not in the correct format and there is no example

Say ‘Enter a National Insurance number that is 2 letters, 6 numbers, then A, B, C or D, like QQ 12 34 56 C’.

#### If the National Insurance number is not in the correct format and there is an example

Say ‘Enter a National Insurance number in the correct format’.
