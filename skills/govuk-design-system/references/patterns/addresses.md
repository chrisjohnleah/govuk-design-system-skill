# Addresses

Help users provide an address

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Help users provide an address using one of the following:

- Multiple text inputs
- Address lookup
- Textarea

## Multiple text inputs

**Example: Multiple text inputs**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{% call govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}

  {{ govukInput({
    label: {
      text: "Address line 1"
    },
    id: "address-line-1",
    name: "addressLine1",
    autocomplete: "address-line1"
  }) }}

  {{ govukInput({
    label: {
      text: "Address line 2 (optional)"
    },
    id: "address-line-2",
    name: "addressLine2",
    autocomplete: "address-line2"
  }) }}

  {{ govukInput({
    label: {
      text: "Town or city"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-town",
    name: "addressTown",
    autocomplete: "address-level2"
  }) }}

  {{ govukInput({
    label: {
      text: "County (optional)"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-county",
    name: "addressCounty"
  }) }}

  {{ govukInput({
    label: {
      text: "Postcode"
    },
    classes: "govuk-input--width-10",
    id: "address-postcode",
    name: "addressPostcode",
    autocomplete: "postal-code"
  }) }}

{% endcall %}
```

HTML:

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-line-1">
    Address line 1
  </label>
  <input
   class="govuk-input" id="address-line-1" name="addressLine1" type="text" autocomplete="address-line1">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-line-2">
    Address line 2 (optional)
  </label>
  <input
   class="govuk-input" id="address-line-2" name="addressLine2" type="text" autocomplete="address-line2">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-town">
    Town or city
  </label>
  <input
   class="govuk-input govuk-!-width-two-thirds" id="address-town" name="addressTown" type="text" autocomplete="address-level2">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-county">
    County (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-two-thirds" id="address-county" name="addressCounty" type="text">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-postcode">
    Postcode
  </label>
  <input
   class="govuk-input govuk-input--width-10" id="address-postcode" name="addressPostcode" type="text" autocomplete="postal-code">
</div>
</fieldset>
```

### When to use multiple text inputs

Only use multiple text inputs when you know which countries the addresses will come from and can find a format that supports them all. This can be difficult to know if you’re asking for addresses outside of the UK.

Using multiple text inputs means:

- you can easily extract and use specific parts of an address
- you can give help for individual text inputs
- you can validate each part of the address separately
- users can complete the form using their browser’s autocomplete function

The disadvantages of using multiple text inputs are that:

- it’s hard to find a single format that works for all addresses
- there’s no guarantee that users will use the text inputs the way you think they will
- users cannot easily paste addresses from their clipboards

### How multiple text inputs work

If you use multiple text inputs, you should:

- only make individual text inputs mandatory if you really need the information
- make the text inputs the appropriate length for the content – it helps people understand the form, for example, make postcode text inputs shorter than street text inputs
- <a href="#allow-different-postcode-formats">let users enter postcodes in different formats</a>

Make sure there are enough text inputs to accommodate longer addresses if you know your users will need them. For example, allow users to include a company name or flat&nbsp;number.

Make it optional for users to enter their county (such as Berkshire or Cumbria). It’s not part of a correct UK address, according to Royal Mail, and it’s not used to deliver post.

Remove the county field if you’re sure your users will not need it, and your service will not use it.

#### Use the autocomplete attribute on multiple address fields

Use the `autocomplete` attribute on each individual address field to help users enter their address more quickly. This lets you specify each input’s purpose so browsers can autofill the information on a user’s behalf if they’ve entered it previously.

[Check which input purpose to use](https://www.w3.org/TR/WCAG22/#input-purposes) for each field.

In production, you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.

#### Error messages

Error messages should be styled like this:

**Example: Pattern error**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{% call govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}

  {{ govukInput({
    label: {
      text: 'Address line 1'
    },
    id: "address-line-1",
    name: "addressLine1",
    errorMessage: {
    text: "Enter address line 1, typically the building and street"
    },
    autocomplete: "address-line1"
  }) }}

  {{ govukInput({
    label: {
      text: 'Address line 2 (optional)'
    },
    id: "address-line-2",
    name: "addressLine2",
    autocomplete: "address-line2"
  }) }}

  {{ govukInput({
    label: {
      text: "Town or city"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-town",
    name: "addressTown",
    errorMessage: {
    text: "Enter town or city"
    },
    autocomplete: "address-level2"
  }) }}

  {{ govukInput({
    label: {
      text: "County (optional)"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-county",
    name: "addressCounty"
  }) }}

  {{ govukInput({
    label: {
      text: "Postcode"
    },
    classes: "govuk-input--width-10",
    id: "address-postcode",
    name: "addressPostcode",
    errorMessage: {
    text: "Enter postcode"
    },
    autocomplete: "postal-code"
  }) }}

{% endcall %}
```

HTML:

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="address-line-1">
    Address line 1
  </label>
  <p id="address-line-1-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter address line 1, typically the building and street
  </p>
  <input
   class="govuk-input govuk-input--error" id="address-line-1" name="addressLine1" type="text" aria-describedby="address-line-1-error" autocomplete="address-line1">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-line-2">
    Address line 2 (optional)
  </label>
  <input
   class="govuk-input" id="address-line-2" name="addressLine2" type="text" autocomplete="address-line2">
</div>
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="address-town">
    Town or city
  </label>
  <p id="address-town-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter town or city
  </p>
  <input
   class="govuk-input govuk-!-width-two-thirds govuk-input--error" id="address-town" name="addressTown" type="text" aria-describedby="address-town-error" autocomplete="address-level2">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-county">
    County (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-two-thirds" id="address-county" name="addressCounty" type="text">
</div>
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="address-postcode">
    Postcode
  </label>
  <p id="address-postcode-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter postcode
  </p>
  <input
   class="govuk-input govuk-input--width-10 govuk-input--error" id="address-postcode" name="addressPostcode" type="text" aria-describedby="address-postcode-error" autocomplete="postal-code">
</div>
</fieldset>
```

If a postcode entered is not a real postcode, use a message like this:

**Example: Postcode error**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Postcode"
  },
  classes: "govuk-input--width-10",
  id: "address-postcode",
  name: "addressPostcode",
  value: "Not a postcode",
  errorMessage: {
    text: "Enter a full UK postcode"
  },
  autocomplete: "postal-code"
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="address-postcode">
    Postcode
  </label>
  <p id="address-postcode-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a full UK postcode
  </p>
  <input
   class="govuk-input govuk-input--width-10 govuk-input--error" id="address-postcode" name="addressPostcode" type="text" value="Not a postcode" aria-describedby="address-postcode-error" autocomplete="postal-code">
</div>
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

## Address lookup

An address lookup helps users find a full address from partial information such as a postcode.

### When to use an address lookup

Use an address lookup when you’re asking users for a UK address.

### When not to use an address lookup

Address lookups generally only work for UK addresses. Use a manual option such as multiple text inputs or a textarea when you are collecting mostly or only international&nbsp;addresses

### How an address lookup works

An address lookup lets users specify a UK address by entering their postcode and selecting their address from a list. There is also an option to enter a street name or&nbsp;number.

When using an address lookup, you should:

- make it clear that it will only work for UK addresses
- provide a manual option for people with international addresses or addresses that are missing or not properly listed in the address lookup
- let people enter their postcodes in upper or lower case and with or without spaces

#### Allow different postcode formats

It's easier for users if you accept and ignore unwanted characters. This is better than rejecting the input and telling the user they have not provided a valid postcode.

You should let users enter postcodes that contain:

- upper and lower case letters
- no spaces
- additional spaces at the beginning, middle or end
- punctuation like hyphens, brackets, dashes and full stops

## Textarea

**Example: Textarea**

Nunjucks:

```njk
{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "address",
  id: "address",
  autocomplete: "street-address",
  label: {
    text: "What is your address?"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="address">
    What is your address?
  </label>
  <textarea class="govuk-textarea" id="address" name="address" rows="5" autocomplete="street-address"></textarea>
</div>
```

### When to use textarea

Use a textarea if you expect a broad range of address formats and you do not need to format the address for print or use specific sub-parts of the address (for example, street or postcode).

### When not to use textarea

You should not use a textarea if you:

- need to separate an address into accurate sub-parts (for example, street or postcode)
- need to help users look up an address

### How a textarea works

Textareas let users enter an address in any format and make it easy to copy and paste addresses from their clipboard.

#### Use the autocomplete attribute on a textarea

Use the `autocomplete` attribute on the textarea component when you're asking for an address. This lets browsers autofill the information on a user's behalf if they’ve entered it previously.

To do this, set the `autocomplete` attribute to `street-address` as shown in the HTML and Nunjucks tabs in the textarea example above.

If you are working in production you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.
