# Bank details

How to ask users for their bank details

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

**Example: Bank details**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/input/macro.njk" import govukInput %}

<h1 class="govuk-heading-l">Bank or building society account details</h1>

{{ govukInput({
  label: {
    text: "Name on the account"
  },
  id: "name-on-the-account",
  name: "nameOnTheAccount",
  autocomplete: "name",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Sort code"
  },
  classes: "govuk-input--width-5 govuk-input--extra-letter-spacing",
  hint: {
    text: "Must be 6 digits long"
  },
  id: "sort-code",
  name: "sortCode",
  inputmode: "numeric",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Account number"
  },
  classes: "govuk-input--width-10 govuk-input--extra-letter-spacing",
  hint: {
    text: "Must be between 6 and 8 digits long"
  },
  id: "account-number",
  name: "accountNumber",
  inputmode: "numeric",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Building society roll number (if you have one)"
  },
  classes: "govuk-input--width-10 govuk-input--extra-letter-spacing",
  hint: {
    text: "You can find it on your card, statement or passbook"
  },
  id: "roll-number",
  name: "rollNumber",
  spellcheck: false
}) }}

{{ govukButton({
  text: "Continue"
}) }}
```

HTML:

```html
<h1 class="govuk-heading-l">Bank or building society account details</h1>
<div class="govuk-form-group">
  <label class="govuk-label" for="name-on-the-account">
    Name on the account
  </label>
  <input
   class="govuk-input" id="name-on-the-account" name="nameOnTheAccount" type="text" spellcheck="false" autocomplete="name">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="sort-code">
    Sort code
  </label>
  <div id="sort-code-hint" class="govuk-hint">
    Must be 6 digits long
  </div>
  <input
   class="govuk-input govuk-input--width-5 govuk-input--extra-letter-spacing" id="sort-code" name="sortCode" type="text" spellcheck="false" aria-describedby="sort-code-hint" inputmode="numeric">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="account-number">
    Account number
  </label>
  <div id="account-number-hint" class="govuk-hint">
    Must be between 6 and 8 digits long
  </div>
  <input
   class="govuk-input govuk-input--width-10 govuk-input--extra-letter-spacing" id="account-number" name="accountNumber" type="text" spellcheck="false" aria-describedby="account-number-hint" inputmode="numeric">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="roll-number">
    Building society roll number (if you have one)
  </label>
  <div id="roll-number-hint" class="govuk-hint">
    You can find it on your card, statement or passbook
  </div>
  <input
   class="govuk-input govuk-input--width-10 govuk-input--extra-letter-spacing" id="roll-number" name="rollNumber" type="text" spellcheck="false" aria-describedby="roll-number-hint">
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

## When to use this pattern

Follow this pattern if you need users to provide their bank details so you can pay them.

Only ask for bank details securely within your service. For example, do not ask users to send their bank details by email.

This pattern does yet not cover asking users for bank details so they can pay by Direct Debit.

If your service lets users set up Direct Debit payments, first check if you can use [GOV.UK Pay](https://www.payments.service.gov.uk/direct-debit/).

## How it works

Include extra fields if your payment service provider needs additional information.

### Do not ask users for their account type

Do not ask users if they have a bank account or building society account as not all users know this.

If your service does not support building society accounts, remove building society from the content and do not ask for a roll number.

### Asking for building society roll numbers

Roll numbers are only used by some building societies for certain types of account, so make this field optional.

However, you need a user’s roll number when they have one. This is why the label says ‘(if you have one)’.

### Allow different formats for the sort code

Let users enter their sort code in whatever format is familiar to them. Allow additional spaces, hyphens and dashes.

Use one input for the sort code. It allows users to enter their sort code more quickly, and avoids them needing to read and understand multiple input labels.

### Use a branching question if users can choose how to get paid

Not everyone has a bank account or wants to share their account details online.

Let users choose to get paid by an alternative method.

Adapt this question depending on what payment options your users need and what your service can support.

**Example: Branch question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "methodOfPayment",
  fieldset: {
    legend: {
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l",
      text: "How do you want to be paid?"
    }
  },
  items: [
    {
      value: "bank-account-or-building-society",
      text: "UK bank or building society account"
    },
    {
      value: "non-uk-bank-account",
      text: "Non-UK bank account"
    },
    {
      value: "cheque",
      text: "Cheque"
    },
    {
      value: "none",
      text: "None of the above",
      hint: {
        text: "We'll contact you to arrange payment"
      }
    }
  ]
}) }}

{{ govukButton({
  text: "Continue"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      How do you want to be paid?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="methodOfPayment" name="methodOfPayment" type="radio" value="bank-account-or-building-society">
      <label class="govuk-label govuk-radios__label" for="methodOfPayment">
        UK bank or building society account
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="methodOfPayment-2" name="methodOfPayment" type="radio" value="non-uk-bank-account">
      <label class="govuk-label govuk-radios__label" for="methodOfPayment-2">
        Non-UK bank account
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="methodOfPayment-3" name="methodOfPayment" type="radio" value="cheque">
      <label class="govuk-label govuk-radios__label" for="methodOfPayment-3">
        Cheque
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="methodOfPayment-4" name="methodOfPayment" type="radio" value="none" aria-describedby="methodOfPayment-4-item-hint">
      <label class="govuk-label govuk-radios__label" for="methodOfPayment-4">
        None of the above
      </label>
      <div id="methodOfPayment-4-item-hint" class="govuk-hint govuk-radios__hint">
        We'll contact you to arrange payment
      </div>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### International bank account details

If you expect your users will have a non-UK bank account, you’ll need to:

- use different fields to sort code and account number - usually BIC code (also known as 'SWIFT code') and IBAN
- do research on other fields you may need to add for the countries your service supports
- only show the fields for the country your user selects

If you expect your users to have a non-UK bank account, give them an option to select this.

International bank accounts require different fields to sort code and account number.

Different countries ask for additional details. This guidance does not cover all possibilities. You will need to research what information is needed by the countries your service supports.

Only show the fields that relate to that country.

Most countries need the IBAN and BIC, sometimes known as the SWIFT code.

**Example: International bank account details**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "BIC or SWIFT code"
  },
  classes: "govuk-input--width-10 govuk-input--extra-letter-spacing",
  hint: {
    text: "Must be between 8 and 11 characters long – you can ask your bank or check your bank statement"
  },
  id: "bic-code",
  name: "bicCode",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "IBAN"
  },
  classes: "govuk-input--extra-letter-spacing",
  hint: {
    text: "You can ask your bank or check your bank statement"
  },
  id: "iban",
  name: "iban",
  spellcheck: false
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="bic-code">
    BIC or SWIFT code
  </label>
  <div id="bic-code-hint" class="govuk-hint">
    Must be between 8 and 11 characters long – you can ask your bank or check your bank statement
  </div>
  <input
   class="govuk-input govuk-input--width-10 govuk-input--extra-letter-spacing" id="bic-code" name="bicCode" type="text" spellcheck="false" aria-describedby="bic-code-hint">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="iban">
    IBAN
  </label>
  <div id="iban-hint" class="govuk-hint">
    You can ask your bank or check your bank statement
  </div>
  <input
   class="govuk-input govuk-input--extra-letter-spacing" id="iban" name="iban" type="text" spellcheck="false" aria-describedby="iban-hint">
</div>
```

### Error messages

Error messages should be styled like this:

**Example: Errors**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Sort code"
  },
  classes: "govuk-input--width-5 govuk-input--extra-letter-spacing",
  hint: {
    text: "Must be 6 digits long"
  },
  value: "12",
  id: "sort-code",
  name: "sortCode",
  inputmode: "numeric",
  spellcheck: false,
  errorMessage: {
    text: "Enter a valid sort code like 309430"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="sort-code">
    Sort code
  </label>
  <div id="sort-code-hint" class="govuk-hint">
    Must be 6 digits long
  </div>
  <p id="sort-code-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a valid sort code like 309430
  </p>
  <input
   class="govuk-input govuk-input--width-5 govuk-input--extra-letter-spacing govuk-input--error" id="sort-code" name="sortCode" type="text" spellcheck="false" value="12" aria-describedby="sort-code-hint sort-code-error" inputmode="numeric">
</div>
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If the name on the account is empty

Say 'Enter the name on the account'.

#### If the sort code is empty

Say 'Enter a sort code'.

#### If the sort code is not in the correct format

Say 'Enter a valid sort code like 309430'.

#### If the account number is empty

Say 'Enter an account number'

#### If the account number is not in the correct format

Say 'Enter a valid account number like 00733445'.

#### If the account number is too long or too short

Say 'Account number must be between 6 and 8 digits'.

#### If the building society roll number is too long

Say 'Building society roll number must be between 1 and 18 characters'.

#### If the building society roll number uses characters that are not allowed

Say 'Building society roll number must only include letters a to z, numbers, hyphens, spaces, forward slashes and full stops'.

## Research on this pattern

This pattern was originally contributed by a team at the Ministry of Justice.

It has not been tested in user research yet. It's closely based on the pattern used by GOV.UK Pay, and patterns used by the following government services.

**Department for Work and Pensions**<br>
Universal Credit<br>
Get Jobseeker’s Allowance<br>
Get your State Pension

**HM Revenue & Customs**<br>
Register your anti-money laundering supervision<br>
Tax-Free Childcare

**Office of the Public Guardian**<br>
Claim a power of attorney refund

**Ministry of Justice**<br>
Claim for costs of a child’s funeral

If you’ve used this pattern, get in touch to share your user research findings.

### Next steps

The team that developed this pattern only found one service, Claim power of attorney refund, that warns users their bank details will be hidden for their security.

But GoCardless says to display a user's bank details again before the user submits them.

Some users with older bank or building society accounts might have account numbers that are 9 or 10 digits long. Research is needed to confirm that these users know how to shorten their account number to fit into the field.

More research is also needed on:

- how to ask users for their bank details in the context of setting up Direct Debit payments
- whether bank details should be shown or not on a ‘Check your answers’ page and how that affects this pattern
- how to handle international bank accounts so users are only asked for information that’s needed based on the location of their bank account
- the information required to pay credit union accounts and how to ask credit union members for that information
