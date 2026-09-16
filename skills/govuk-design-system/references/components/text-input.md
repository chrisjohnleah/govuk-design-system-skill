# Text input

Help users enter information with the text input component

**Example: Text input**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "event-name",
  name: "eventName"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="event-name">
      What is the name of the event?
    </label>
  </h1>
  <input
   class="govuk-input" id="event-name" name="eventName" type="text">
</div>
```

## When to use this component

Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

## When not to use this component

Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the [Textarea component](https://design-system.service.gov.uk/components/textarea/).

## How it works

All text inputs must have labels, and in most cases the label should be visible.

You should align labels above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.

### Avoid placeholder text

Do not use placeholder text in place of a label, or for hints or examples, as:

- it vanishes when the user starts typing, which can cause problems for users with memory conditions or when reviewing answers
- not all screen readers read it out
- its browser default styles often do not meet [WCAG 2.2 success criterion 1.4.3 Contrast (minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum)

### If you're asking one question on the page

If you’re asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<label>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the text input component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Text input** second

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "event-name",
  name: "eventName"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="event-name">
      What is the name of the event?
    </label>
  </h1>
  <input
   class="govuk-input" id="event-name" name="eventName" type="text">
</div>
```

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**Example: Text input without a heading**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "What is the name of the event?"
  },
  id: "event-name",
  name: "eventName"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="event-name">
    What is the name of the event?
  </label>
  <input
   class="govuk-input" id="event-name" name="eventName" type="text">
</div>
```

### Use appropriately-sized text inputs

Help users understand what they should enter by making text inputs the right size for the content they’re intended for.

By default, the width of text inputs is fluid and will fit the full width of the container they are placed into.

If you want to make the input smaller, you can either use a fixed width input, or use the width override classes to create a smaller, fluid width input.

#### Fixed width inputs

Use fixed width inputs for content that has a specific, known length. Postcode inputs should be postcode-sized, phone number inputs should be phone number-sized.

The widths are designed for specific character lengths and to be consistent across a range of browsers. They include extra padding to fit icons that some browsers might insert into the input (for example to show or generate a password).

On fixed width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit.

**Example: Fixed width inputs**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "20 character width"
  },
  classes: "govuk-input--width-20",
  id: "width-20",
  name: "width20"
}) }}

{{ govukInput({
  label: {
    text: "10 character width"
  },
  classes: "govuk-input--width-10",
  id: "width-10",
  name: "width10"
}) }}

{{ govukInput({
  label: {
    text: "5 character width"
  },
  classes: "govuk-input--width-5",
  id: "width-5",
  name: "width5"
}) }}

{{ govukInput({
  label: {
    text: "4 character width"
  },
  classes: "govuk-input--width-4",
  id: "width-4",
  name: "width4"
}) }}

{{ govukInput({
  label: {
    text: "3 character width"
  },
  classes: "govuk-input--width-3",
  id: "width-3",
  name: "width3"
}) }}

{{ govukInput({
  label: {
    text: "2 character width"
  },
  classes: "govuk-input--width-2",
  id: "width-2",
  name: "width2"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="width-20">
    20 character width
  </label>
  <input
   class="govuk-input govuk-input--width-20" id="width-20" name="width20" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="width-10">
    10 character width
  </label>
  <input
   class="govuk-input govuk-input--width-10" id="width-10" name="width10" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="width-5">
    5 character width
  </label>
  <input
   class="govuk-input govuk-input--width-5" id="width-5" name="width5" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="width-4">
    4 character width
  </label>
  <input
   class="govuk-input govuk-input--width-4" id="width-4" name="width4" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="width-3">
    3 character width
  </label>
  <input
   class="govuk-input govuk-input--width-3" id="width-3" name="width3" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="width-2">
    2 character width
  </label>
  <input
   class="govuk-input govuk-input--width-2" id="width-2" name="width2" type="text">
</div>
```

#### Fluid width inputs

Use the width override classes to reduce the width of an input in relation to its parent container, for example, to two-thirds.

Fluid width inputs will resize with the viewport.

**Example: Fluid width inputs**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Full width"
  },
  classes: "govuk-!-width-full",
  id: "full",
  name: "full"
}) }}

{{ govukInput({
  label: {
    text: "Three-quarters width"
  },
  classes: "govuk-!-width-three-quarters",
  id: "three-quarters",
  name: "threeQuarters"
}) }}

{{ govukInput({
  label: {
    text: "Two-thirds width"
  },
  classes: "govuk-!-width-two-thirds",
  id: "two-thirds",
  name: "twoThirds"
}) }}

{{ govukInput({
  label: {
    text: "One-half width"
  },
  classes: "govuk-!-width-one-half",
  id: "one-half",
  name: "oneHalf"
}) }}

{{ govukInput({
  label: {
    text: "One-third width"
  },
  classes: "govuk-!-width-one-third",
  id: "one-third",
  name: "oneThird"
}) }}

{{ govukInput({
  label: {
    text: "One-quarter width"
  },
  classes: "govuk-!-width-one-quarter",
  id: "one-quarter",
  name: "oneQuarter"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="full">
    Full width
  </label>
  <input
   class="govuk-input govuk-!-width-full" id="full" name="full" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="three-quarters">
    Three-quarters width
  </label>
  <input
   class="govuk-input govuk-!-width-three-quarters" id="three-quarters" name="threeQuarters" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="two-thirds">
    Two-thirds width
  </label>
  <input
   class="govuk-input govuk-!-width-two-thirds" id="two-thirds" name="twoThirds" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="one-half">
    One-half width
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="one-half" name="oneHalf" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="one-third">
    One-third width
  </label>
  <input
   class="govuk-input govuk-!-width-one-third" id="one-third" name="oneThird" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="one-quarter">
    One-quarter width
  </label>
  <input
   class="govuk-input govuk-!-width-one-quarter" id="one-quarter" name="oneQuarter" type="text">
</div>
```

### Hint text

Use hint text for help that’s relevant to the majority of users, like how their information will be used, or where to find it.

Keep hint text to a single short sentence, without any full stops.

Do not use links in hint text. While screen readers will read out the link text when describing the field, they usually do not tell users the text is a link.

**Example: Hint text**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "The name you’ll use on promotional material"
  },
  id: "event-name",
  name: "eventName"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="event-name">
      What is the name of the event?
    </label>
  </h1>
  <div id="event-name-hint" class="govuk-hint">
    The name you’ll use on promotional material
  </div>
  <input
   class="govuk-input" id="event-name" name="eventName" type="text" aria-describedby="event-name-hint">
</div>
```

#### When not to use hint text

Do not use hint text to explain anything that's longer than a short, simple sentence. Screen readers read out the entire text when users interact with the form element. This could frustrate users if the text is long.

If you’re asking a question that needs a detailed explanation, see [asking complex questions without using hint text](https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text).

#### Avoid links

Do not include links within hint text. While screen readers will read out the link text when describing the field, they will not tell users that the text is a link.

### Numbers

#### Asking for whole numbers

If you're asking the user to enter a whole number, set the `inputmode` attribute to `numeric` to use the numeric keypad on devices with on-screen keyboards.

See how to do this by opening the HTML and Nunjucks tabs in this example:

**Example: Number input**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "What is your account number?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  classes: "govuk-input--width-10",
  hint: {
    text: "Must be between 6 and 8 digits long"
  },
  id: "account-number",
  name: "accountNumber",
  inputmode: "numeric",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="account-number">
      What is your account number?
    </label>
  </h1>
  <div id="account-number-hint" class="govuk-hint">
    Must be between 6 and 8 digits long
  </div>
  <input
   class="govuk-input govuk-input--width-10" id="account-number" name="accountNumber" type="text" spellcheck="false" aria-describedby="account-number-hint" inputmode="numeric">
</div>
```

There is specific guidance on:

- [how to ask for dates](https://design-system.service.gov.uk/patterns/dates/)
- [how to ask for phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/)

#### Asking for decimal numbers

If you're asking the user to enter a number that might include decimal places, set `inputmode` to `decimal`. Similar to `numeric`, this will show a numeric keypad to users on devices with on-screen keyboards, including a decimal separator.

Some devices do not allow users to enter negative values using the on-screen keypad. If you want to give users the option to enter a negative number, use `input type="text"` without the `inputmode` attribute.

**Example: Example of an input asking for numbers with decimal places**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Weight, in kilograms"
  },
  classes: "govuk-input--width-5",
  id: "weight",
  name: "weight",
  suffix: {
    text: "kg"
  },
  spellcheck: false,
  inputmode: "decimal"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="weight">
    Weight, in kilograms
  </label>
  <div class="govuk-input__wrapper">
    <input
   class="govuk-input govuk-input--width-5" id="weight" name="weight" type="text" spellcheck="false" inputmode="decimal">
    <div class="govuk-input__suffix" aria-hidden="true">kg</div>
  </div>
</div>
```

#### Avoid using inputs with a type of number

Do not use `<input type="number">` unless your user research shows that there’s a need for it. With `<input type="number">` there’s a risk of users accidentally incrementing a number when they’re trying to do something else - for example, scroll up or down the page. And if the user tries to enter something that’s not a number, there’s no explicit feedback about what they’re doing wrong.

### Codes and sequences

Help the user visually check the code they've typed is correct by styling the input's text to visually separate each character. This is important if you're asking the user to enter a code or sequence they're unlikely to have memorised, such as an application reference ID, account number or security code.

You do not need to do this for memorable information, such as phone numbers and postcodes.

**Example: Example of a text input asking for a code or sequence**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Company authentication code"
  },
  hint: {
    text: "This is on the company incorporation letter sent to the registered office address"
  },
  classes: "govuk-input--width-5 govuk-input--extra-letter-spacing",
  id: "authentication-code",
  name: "authenticationCode",
  spellcheck: false,
  value: "NC1701"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="authentication-code">
    Company authentication code
  </label>
  <div id="authentication-code-hint" class="govuk-hint">
    This is on the company incorporation letter sent to the registered office address
  </div>
  <input
   class="govuk-input govuk-input--width-5 govuk-input--extra-letter-spacing" id="authentication-code" name="authenticationCode" type="text" spellcheck="false" value="NC1701" aria-describedby="authentication-code-hint">
</div>
```

There is specific guidance on:

- [how to ask for bank account details](https://design-system.service.gov.uk/patterns/bank-details/)
- [how to ask for National Insurance numbers](https://design-system.service.gov.uk/patterns/national-insurance-numbers/)
- [how to confirm a phone number](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/)

### Prefixes and suffixes

Use prefixes and suffixes to help users enter things like currencies and measurements.

**Example: Text input with prefix and suffix**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  id: "cost-per-item",
  name: "costPerItem",
  label: {
    text: "What is the cost per item, in pounds?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  },
  classes: "govuk-input--width-5",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="cost-per-item">
      What is the cost per item, in pounds?
    </label>
  </h1>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input
   class="govuk-input govuk-input--width-5" id="cost-per-item" name="costPerItem" type="text" spellcheck="false">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>
```

Prefixes and suffixes are useful when there's a commonly understood symbol or abbreviation for the type of information you're asking for. Do not rely on prefixes or suffixes alone, because screen readers will not read them out.

If you need a specific type of information, say so in the input label or hint text as well. For example, put 'Cost, in pounds' in the input label and use the '£' symbol in the prefix.

Position prefixes and suffixes so that they're outside of their input. This is to avoid interfering with some browsers that might insert an icon into the input (for example to show or generate a password).

Some users may miss that the input already has a suffix or prefix, and enter a prefix or suffix into the input. Allow for this in your validation and do not show an error.

#### Text inputs with a prefix

**Example: Text input with prefix**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  id: "cost",
  name: "cost",
  label: {
    text: "What is the cost in pounds?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  prefix: {
    text: "£"
  },
  classes: "govuk-input--width-5",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="cost">
      What is the cost in pounds?
    </label>
  </h1>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input
   class="govuk-input govuk-input--width-5" id="cost" name="cost" type="text" spellcheck="false">
  </div>
</div>
```

#### Text inputs with a suffix

**Example: Text input with suffix**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  id: "weight",
  name: "weight",
  label: {
    text: "What is the weight in kilograms?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  suffix: {
    text: "kg"
  },
  classes: "govuk-input--width-5",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="weight">
      What is the weight in kilograms?
    </label>
  </h1>
  <div class="govuk-input__wrapper">
    <input
   class="govuk-input govuk-input--width-5" id="weight" name="weight" type="text" spellcheck="false">
    <div class="govuk-input__suffix" aria-hidden="true">kg</div>
  </div>
</div>
```

### Use the autocomplete attribute

Use the `autocomplete` attribute on text inputs to help users complete forms more quickly. This lets you specify an input's purpose so browsers can autofill the information on a user's behalf if they’ve entered it previously.

For example, to enable autofill on a postcode field, set the `autocomplete` attribute to `postal-code`. See how to do this in the HTML and Nunjucks tabs in the following example.

**Example: Text input with autocomplete attribute**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Postcode"
  },
  classes: "govuk-input--width-10",
  id: "postcode",
  name: "postcode",
  autocomplete: "postal-code"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="postcode">
    Postcode
  </label>
  <input
   class="govuk-input govuk-input--width-10" id="postcode" name="postcode" type="text" autocomplete="postal-code">
</div>
```

If you are working in production and there is a relevant [input purpose](https://www.w3.org/TR/WCAG22/#input-purposes), you'll need to use the `autocomplete` attribute to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose, level AA](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.

### Do not disable copy and paste

Users often need to copy and paste information into a text input, so do not stop them from doing this.

### Avoid restricting the length of a user's input

Using the `maxlength` attribute means there is no feedback to users that their text input is truncated. This is especially true where the text has been copied and pasted from elsewhere. This can cause users to accidentally provide incorrect or incomplete information.

A restrictive maximum length can stop users from formatting information in their usual way. For example, putting spaces in a postcode or commas in a large number.

Some assistive technologies do not tell users if an input has a `maxlength` set or if the user has passed the limit. Voice control software may insert additional spaces into the input.

If you must enforce a maximum length for technical reasons, inform the user of the limit in the hint, but allow them to provide more information. Only return an error if the value is longer than allowed after normalisation. For longer values, consider using the [Character count component](https://design-system.service.gov.uk/components/character-count/) instead.

### How and when to spellcheck a user’s input

Sometimes, browsers will spellcheck the information a user puts into a text input. If a user enters something which is recognised as a spelling error, sighted users will see a red line under the word.

If you are asking users for information which is not appropriate to spellcheck, like a reference number, name, email address or National Insurance number, disable the spellcheck.

To do this set the `spellcheck` attribute to `false` as shown in this example.

**Example: Text input with spellcheck disabled**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Reference number"
  },
  id: "name",
  name: "name",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="name">
    Reference number
  </label>
  <input
   class="govuk-input" id="name" name="name" type="text" spellcheck="false">
</div>
```

Browsers do not consistently spellcheck user’s input by default. If you are asking a question where spellcheck would be useful, set the `spellcheck` attribute to `true`.

### Error messages

Error messages should be styled like this:

**Example: Text input with errors**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "event-name",
  name: "eventName",
  hint: {
    text: "The name you’ll use on promotional material"
  },
  errorMessage: {
    text: "Enter an event name"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="event-name">
      What is the name of the event?
    </label>
  </h1>
  <div id="event-name-hint" class="govuk-hint">
    The name you’ll use on promotional material
  </div>
  <p id="event-name-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter an event name
  </p>
  <input
   class="govuk-input govuk-input--error" id="event-name" name="eventName" type="text" aria-describedby="event-name-hint event-name-error">
</div>
```

#### If the input has a prefix or a suffix

**Example: Text input with prefix and suffix with error**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  id: "cost-per-item-error",
  name: "costPerItemError",
  label: {
    text: "What is the cost per item, in pounds?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  },
  errorMessage: {
    text: "Enter a cost per item, in pounds"
  },
  classes: "govuk-input--width-5",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="cost-per-item-error">
      What is the cost per item, in pounds?
    </label>
  </h1>
  <p id="cost-per-item-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a cost per item, in pounds
  </p>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input
   class="govuk-input govuk-input--width-5 govuk-input--error" id="cost-per-item-error" name="costPerItemError" type="text" spellcheck="false" aria-describedby="cost-per-item-error-error">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If the input is empty

Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter your first name’.

#### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Address line 1 must be 35 characters or less’.

#### If the input is too short

Say ‘[whatever it is] must be [number] characters or more’.<br>
For example, ‘Full name must be 2 characters or more’.

#### If the input has both a minimum and maximum length

Say ‘[whatever it is] must be between [number] and [number] characters’.<br>
For example, ‘Last name must be between 2 and 35 characters’.

#### If the input uses characters that are not allowed and you know what the characters are

Say ‘[whatever it is] must not include [characters]’.<br>
For example, ‘Town or city must not include è and £’.

Support all the characters the user might need to enter, including numbers and symbols.

#### If the input uses characters that are not allowed and you do not know what the characters are

Say ‘[whatever it is] must only include [list of allowed characters]’.<br>
For example, ‘Full name must only include letters a to z, and special characters such as hyphens, spaces and apostrophes’.

Support all the characters the user might need to enter, including numbers and symbols.

#### If the input is not a number

Say ‘[whatever it is] must be a number [optional example]’.<br>
For example, ‘Hours worked a week must be a number, like 30’.

If the input requires a decimal, use a decimal in the example. If the input allows both whole numbers and decimals, use both in the example.

#### If the input is not a whole number

Say ‘[whatever it is] must be a whole number [optional example]’.<br>
For example, ‘Hours worked a week must be a whole number, like 30’.

#### If the number is too low

Say ‘[whatever it is] must be [lowest] or more’.<br>
For example, ‘Hours worked a week must be 16 or more’.

#### If the number is too high

Say ‘[whatever it is] must be [highest] or fewer’.<br>
For example, ‘Hours worked a week must be 99 or fewer’.

#### If the input must be between 2 numbers

Say ‘[whatever it is] must be between [lowest] and [highest]’.<br>
For example, ‘Hours worked a week must be between 16 and 99’.

#### If the input is an amount of money that needs decimals

Say ‘[whatever it is] must include pence, like 123.45 or 156.00’.<br>
For example, ‘How much you earn a week must include pence, like 123.45 or 156.00’.

#### If the input is an amount of money that must not have decimals

Say ‘[whatever it is] must not include pence, like 123 or 156’.<br>
For example, ‘How much you earn a week must not include pence, like 123 or 156’.

## Research on this component

Read a blog post about [the problems we discovered with input type="number"](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/).

The prefix and suffix design has tested well in a number of services, but [some users have been observed clicking on prefixes](https://github.com/alphagov/govuk-design-system-backlog/issues/134#issuecomment-655615251), on the assumption that this would do something.

## Nunjucks macro options

Import: `{% from "govuk/components/input/macro.njk" import govukInput %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `id` | string | no | The ID of the input. Defaults to the value of `name`. |
| `name` | string | yes | The name of the input, which is submitted with the form data. |
| `type` | string | no | Type of input control to render, for example, a password input control. Defaults to `"text"`. |
| `inputmode` | string | no | Optional value for [the inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| `value` | string | no | Optional initial value of the input. |
| `disabled` | boolean | no | If `true`, input will be disabled. |
| `describedBy` | string | no | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object (component options) | yes | The label used by the text input component. |
| `hint` | object (component options) | no | Can be used to add a hint to a text input component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `prefix` | object | no | Can be used to add a prefix to the text input component. |
| `prefix.text` | string | yes | Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.html` | string | yes | Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.classes` | string | no | Classes to add to the prefix. |
| `prefix.attributes` | object | no | HTML attributes (for example data attributes) to add to the prefix element. |
| `suffix` | object | no | Can be used to add a suffix to the text input component. |
| `suffix.text` | string | yes | If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.html` | string | yes | If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.classes` | string | no | Classes to add to the suffix element. |
| `suffix.attributes` | object | no | HTML attributes (for example data attributes) to add to the suffix element. |
| `formGroup` | object | no | Additional options for the form group containing the text input component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | no | Content to add before the input used by the text input component. |
| `formGroup.beforeInput.text` | string | yes | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | yes | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | no | Content to add after the input used by the text input component. |
| `formGroup.afterInput.text` | string | yes | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | yes | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | no | Classes to add to the input. |
| `autocomplete` | string | no | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used. |
| `pattern` | string | no | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `spellcheck` | boolean | no | Optional field to enable or disable the `spellcheck` attribute on the input. |
| `autocapitalize` | string | no | Optional field to enable or disable autocapitalisation of user input. [See the Autocapitalization section in the HTML spec](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used. |
| `inputWrapper` | object | no | If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element. |
| `inputWrapper.classes` | string | no | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object | no | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the input. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "label": {
    "text": "National Insurance number"
  },
  "name": "test-name"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="test-name">
    National Insurance number
  </label>
  <input class="govuk-input" id="test-name" name="test-name" type="text">
</div>
```

### with hint text

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-with-hint-text",
  "name": "test-name-2"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-hint-text">
    National insurance number
  </label>
  <div id="input-with-hint-text-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input" id="input-with-hint-text" name="test-name-2" type="text" aria-describedby="input-with-hint-text-hint">
</div>
```

### with error message

```json
{
  "label": {
    "text": "National Insurance number"
  },
  "id": "input-with-error-message",
  "name": "test-name-3",
  "errorMessage": {
    "text": "Enter a National Insurance number in the correct format"
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="input-with-error-message">
    National Insurance number
  </label>
  <p id="input-with-error-message-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
  </p>
  <input class="govuk-input govuk-input--error" id="input-with-error-message" name="test-name-3" type="text" aria-describedby="input-with-error-message-error">
</div>
```

### with error and hint

```json
{
  "id": "with-error-hint",
  "name": "with-error-hint",
  "label": {
    "text": "National insurance number"
  },
  "errorMessage": {
    "text": "Enter a National Insurance number in the correct format"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="with-error-hint">
    National insurance number
  </label>
  <div id="with-error-hint-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <p id="with-error-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
  </p>
  <input class="govuk-input govuk-input--error" id="with-error-hint" name="with-error-hint" type="text" aria-describedby="with-error-hint-hint with-error-hint-error">
</div>
```

### with width-2 class

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-2",
  "name": "test-width-2",
  "classes": "govuk-input--width-2"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-2">
    National insurance number
  </label>
  <div id="input-width-2-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-2" id="input-width-2" name="test-width-2" type="text" aria-describedby="input-width-2-hint">
</div>
```

### with width-3 class

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-3",
  "name": "test-width-3",
  "classes": "govuk-input--width-3"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-3">
    National insurance number
  </label>
  <div id="input-width-3-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-3" id="input-width-3" name="test-width-3" type="text" aria-describedby="input-width-3-hint">
</div>
```

### with width-4 class

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-4",
  "name": "test-width-4",
  "classes": "govuk-input--width-4"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-4">
    National insurance number
  </label>
  <div id="input-width-4-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-4" id="input-width-4" name="test-width-4" type="text" aria-describedby="input-width-4-hint">
</div>
```

### with width-5 class

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-5",
  "name": "test-width-5",
  "classes": "govuk-input--width-5"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-5">
    National insurance number
  </label>
  <div id="input-width-5-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-5" id="input-width-5" name="test-width-5" type="text" aria-describedby="input-width-5-hint">
</div>
```

### with width-10 class

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-10",
  "name": "test-width-10",
  "classes": "govuk-input--width-10"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-10">
    National insurance number
  </label>
  <div id="input-width-10-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-10" id="input-width-10" name="test-width-10" type="text" aria-describedby="input-width-10-hint">
</div>
```

### with width-20 class

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-20",
  "name": "test-width-20",
  "classes": "govuk-input--width-20"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-20">
    National insurance number
  </label>
  <div id="input-width-20-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-20" id="input-width-20" name="test-width-20" type="text" aria-describedby="input-width-20-hint">
</div>
```

### with width-30 class

```json
{
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-30",
  "name": "test-width-30",
  "classes": "govuk-input--width-30"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-30">
    National insurance number
  </label>
  <div id="input-width-30-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-30" id="input-width-30" name="test-width-30" type="text" aria-describedby="input-width-30-hint">
</div>
```

### with label as page heading

```json
{
  "label": {
    "text": "National Insurance number",
    "classes": "govuk-label--l",
    "isPageHeading": true
  },
  "id": "input-with-page-heading",
  "name": "test-name"
}
```

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="input-with-page-heading">
      National Insurance number
    </label>
  </h1>
  <input class="govuk-input" id="input-with-page-heading" name="test-name" type="text">
</div>
```

### with prefix

```json
{
  "label": {
    "text": "Amount, in pounds"
  },
  "id": "input-with-prefix",
  "name": "amount",
  "prefix": {
    "text": "£"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-prefix">
    Amount, in pounds
  </label>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input" id="input-with-prefix" name="amount" type="text">
  </div>
</div>
```

### with suffix

```json
{
  "label": {
    "text": "Weight, in kilograms"
  },
  "id": "input-with-suffix",
  "name": "weight",
  "suffix": {
    "text": "kg"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-suffix">
    Weight, in kilograms
  </label>
  <div class="govuk-input__wrapper">
    <input class="govuk-input" id="input-with-suffix" name="weight" type="text">
    <div class="govuk-input__suffix" aria-hidden="true">kg</div>
  </div>
</div>
```

### with prefix and suffix

```json
{
  "label": {
    "text": "Cost per item, in pounds"
  },
  "id": "input-with-prefix-suffix",
  "name": "cost",
  "prefix": {
    "text": "£"
  },
  "suffix": {
    "text": "per item"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-prefix-suffix">
    Cost per item, in pounds
  </label>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input" id="input-with-prefix-suffix" name="cost" type="text">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>
```

### with prefix and suffix and error

```json
{
  "label": {
    "text": "Cost per item, in pounds"
  },
  "id": "input-with-prefix-suffix",
  "name": "cost",
  "prefix": {
    "text": "£"
  },
  "suffix": {
    "text": "per item"
  },
  "errorMessage": {
    "text": "Error message goes here"
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="input-with-prefix-suffix">
    Cost per item, in pounds
  </label>
  <p id="input-with-prefix-suffix-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input govuk-input--error" id="input-with-prefix-suffix" name="cost" type="text" aria-describedby="input-with-prefix-suffix-error">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>
```

### with prefix and suffix and width modifier

```json
{
  "label": {
    "text": "Cost per item, in pounds"
  },
  "id": "input-with-prefix-suffix",
  "name": "cost",
  "classes": "govuk-input--width-5",
  "prefix": {
    "text": "£"
  },
  "suffix": {
    "text": "per item"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-prefix-suffix">
    Cost per item, in pounds
  </label>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input govuk-input--width-5" id="input-with-prefix-suffix" name="cost" type="text">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>
```

### with extra letter spacing

```json
{
  "id": "input-with-extra-letter-spacing",
  "name": "input-with-extra-letter-spacing",
  "label": {
    "text": "National insurance number"
  },
  "classes": "govuk-input--width-30 govuk-input--extra-letter-spacing",
  "value": "QQ 12 34 56 C"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-extra-letter-spacing">
    National insurance number
  </label>
  <input class="govuk-input govuk-input--width-30 govuk-input--extra-letter-spacing" id="input-with-extra-letter-spacing" name="input-with-extra-letter-spacing" type="text" value="QQ 12 34 56 C">
</div>
```

