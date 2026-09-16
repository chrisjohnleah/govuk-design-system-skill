# Confirm a phone number

Identifying users when they sign in

Check that a user has access to a specific mobile phone number using a security code sent by text message.

**Example: Confirm a phone number**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/button/macro.njk" import govukButton %}

<h1 class="govuk-heading-l">Check your phone</h1>

<p class="govuk-body">We’ve sent you a text message with a security code.</p>

{{ govukInput({
  label: {
    text: "Security code"
  },
  id: "security-code",
  name: "securityCode",
  type: "text",
  autocomplete: "one-time-code",
  classes: "govuk-input--width-4 govuk-input--extra-letter-spacing",
  inputmode: "numeric"
}) }}

{{ govukButton({
  text: "Continue"
}) }}

<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

HTML:

```html
<h1 class="govuk-heading-l">Check your phone</h1>
<p class="govuk-body">We’ve sent you a text message with a security code.</p>
<div class="govuk-form-group">
  <label class="govuk-label" for="security-code">
    Security code
  </label>
  <input
   class="govuk-input govuk-input--width-4 govuk-input--extra-letter-spacing" id="security-code" name="securityCode" type="text" autocomplete="one-time-code" inputmode="numeric">
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

## When to use this pattern

Ask the user to enter a security code when they need to sign in or complete a higher-risk task, such as changing a password.

Asking the user to enter a security code sent to their mobile phone gives a second layer of security over only [asking for a password](https://design-system.service.gov.uk/patterns/passwords/).

You can ask for a security code every time a user signs in or only once per device, depending on the risk level of your service.

## How it works

Send and ask the user for the security code when they:

- create an account
- sign in later

### When the user creates an account

When the user creates an account, ask for their password and mobile phone number at the same time. Make it clear if you'll only use the mobile number for sending security codes, or if you'll also use it for other purposes.

After saving the user’s password and mobile phone number, verify their mobile phone number by sending them a text message with a 5 digit code in this format:

<div class="govuk-inset-text">
  
12345 is your [service name] security code

</div>

Then ask the user to enter this code:

**Example: Confirm a phone number** second

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/button/macro.njk" import govukButton %}

<h1 class="govuk-heading-l">Check your phone</h1>

<p class="govuk-body">We’ve sent you a text message with a security code.</p>

{{ govukInput({
  label: {
    text: "Security code"
  },
  id: "security-code",
  name: "securityCode",
  type: "text",
  autocomplete: "one-time-code",
  classes: "govuk-input--width-4 govuk-input--extra-letter-spacing",
  inputmode: "numeric"
}) }}

{{ govukButton({
  text: "Continue"
}) }}

<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

HTML:

```html
<h1 class="govuk-heading-l">Check your phone</h1>
<p class="govuk-body">We’ve sent you a text message with a security code.</p>
<div class="govuk-form-group">
  <label class="govuk-label" for="security-code">
    Security code
  </label>
  <input
   class="govuk-input govuk-input--width-4 govuk-input--extra-letter-spacing" id="security-code" name="securityCode" type="text" autocomplete="one-time-code" inputmode="numeric">
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

Let the user enter the code in whatever format is familiar to them. Allow additional spaces, hyphens and dashes.

Give a time limit of 15 minutes for the user to enter the code – the code should expire after this time limit.

If the user enters an expired code that was sent more than:

- 15 minutes ago, show a ‘code has expired’ error message and send the user a new code
- 2 hours ago, show an ‘incorrect security code’ message, even if the code was correct

If the user follows the ‘Not received a text message?’ link, allow them to check which mobile number they entered, and to change it if necessary. This prevents the user becoming stuck if they entered a mobile number incorrectly. Do not allow the user to change the number when they're signing in.

**Example: Request a new security code (first time)**

Nunjucks:

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukBackLink({
  text: "Back",
  href: "#"
}) }}

<h1 class="govuk-heading-l">Request a new security code</h1>

<p class="govuk-body">Text messages sometimes take a few minutes to arrive. If you do not receive the text message, you can request a new one.</p>

{% call govukDetails({
  summaryText: "Change where the text message is sent"
}) %}
  {{ govukInput({
    label: {
      text: "Mobile number"
    },
    value: "07700 900000",
    id: "mobile-number",
    name: "mobileNumber",
    type: "tel",
    autocomplete: "tel",
    classes: "govuk-input--width-20"
  }) }}
{% endcall %}

{{ govukButton({
  text: "Request a new code"
}) }}
```

HTML:

```html
<a href="#" class="govuk-back-link">Back</a>
<h1 class="govuk-heading-l">Request a new security code</h1>
<p class="govuk-body">Text messages sometimes take a few minutes to arrive. If you do not receive the text message, you can request a new one.</p>
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Change where the text message is sent
    </span>
  </summary>
  <div class="govuk-details__text">
<div class="govuk-form-group">
  <label class="govuk-label" for="mobile-number">
    Mobile number
  </label>
  <input
   class="govuk-input govuk-input--width-20" id="mobile-number" name="mobileNumber" type="tel" value="07700 900000" autocomplete="tel">
</div>
  </div>
</details>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Request a new code
</button>
```

When the user requests a new code, send them a new one. The new code should have its 15 minute time limit. The previous code should remain valid within its original time limit.

### When the user signs in

When the user returns to your service, verify their password first. Once they have entered this correctly, send a text message to their mobile phone with a 5 digit code in this format:

<div class="govuk-inset-text">
  
12345 is your [service name] security code

</div>

Ask the user to enter this code. Use the same pattern and time limit as when creating an account.

If they follow the ‘Not received a text message?’ link, show them a page allowing them to request a new code. Do not reveal the mobile number you sent it to.

**Example: Request a new security code**

Nunjucks:

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukBackLink({
  text: "Back",
  href: "#"
}) }}

<h1 class="govuk-heading-l">Request a new security code</h1>

<p class="govuk-body">Text messages sometimes take a few minutes to arrive. If you do not receive the text message, you can request a new one.</p>

{% call govukDetails({
  summaryText: "I do not have access to the phone"
}) %}
  <p class="govuk-body">
    If you cannot access the phone number for this account, <a href="#" class="govuk-link">contact the Tax Credits Helpline</a> to get help signing in.
  </p>
{% endcall %}

{{ govukButton({
  text: "Request a new code"
}) }}
```

HTML:

```html
<a href="#" class="govuk-back-link">Back</a>
<h1 class="govuk-heading-l">Request a new security code</h1>
<p class="govuk-body">Text messages sometimes take a few minutes to arrive. If you do not receive the text message, you can request a new one.</p>
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      I do not have access to the phone
    </span>
  </summary>
  <div class="govuk-details__text">
  <p class="govuk-body">
    If you cannot access the phone number for this account, <a href="#" class="govuk-link">contact the Tax Credits Helpline</a> to get help signing in.
  </p>
  </div>
</details>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Request a new code
</button>
```

You should tell the user what to do if they no longer have access to the phone used to sign up.

For example, you might tell them to contact a support address.

### Domain-bound codes

You can also follow the [domain-bound codes](https://developer.apple.com/news/?id=z0i801mg) standard. This improves security by restricting the code to a specific domain.

Include the domain of the service on a new line, prefixed with an `@`, followed by a `#` symbol and the code, like this:

<div class="govuk-inset-text">
  
12345 is your [service name] security code<br><br>@www.example.service.gov.uk #12345

</div>

### Error messages

Style error messages like this:

**Example: Error, incorrect security code**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/button/macro.njk" import govukButton %}

<h1 class="govuk-heading-l">Check your phone</h1>

<p class="govuk-body">We’ve sent you a text message with a security code.</p>

{{ govukInput({
  label: {
    text: "Security code"
  },
  errorMessage: {
    text: "Enter a correct security code"
  },
  id: "security-code",
  name: "securityCode",
  type: "text",
  autocomplete: "one-time-code",
  classes: "govuk-input--width-4 govuk-input--extra-letter-spacing",
  inputmode: "numeric"
}) }}

{{ govukButton({
  text: "Continue"
}) }}

<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

HTML:

```html
<h1 class="govuk-heading-l">Check your phone</h1>
<p class="govuk-body">We’ve sent you a text message with a security code.</p>
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="security-code">
    Security code
  </label>
  <p id="security-code-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a correct security code
  </p>
  <input
   class="govuk-input govuk-input--width-4 govuk-input--extra-letter-spacing govuk-input--error" id="security-code" name="securityCode" type="text" aria-describedby="security-code-error" autocomplete="one-time-code" inputmode="numeric">
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

If the user does not enter enough digits:
<br>Say ‘You've not entered enough numbers, the code must be 5 numbers’.

If the user enters too many digits:
<br>Say ‘You’ve entered too many numbers, the code must be 5 numbers’.

If the user enters non-numeric characters, other than spaces:
<br>Say ‘The code must be 5 numbers’.

If the code has expired, show this message:

**Example: Error, security code expired**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/button/macro.njk" import govukButton %}

<h1 class="govuk-heading-l">Check your phone</h1>

<p class="govuk-body">We’ve sent you a text message with a security code.</p>

{{ govukInput({
  label: {
    text: "Security code"
  },
  errorMessage: {
    text: "The security code has expired. New code sent."
  },
  id: "security-code",
  name: "securityCode",
  type: "text",
  autocomplete: "one-time-code",
  classes: "govuk-input--width-4 govuk-input--extra-letter-spacing",
  inputmode: "numeric"
}) }}

{{ govukButton({
  text: "Continue"
}) }}

<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

HTML:

```html
<h1 class="govuk-heading-l">Check your phone</h1>
<p class="govuk-body">We’ve sent you a text message with a security code.</p>
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="security-code">
    Security code
  </label>
  <p id="security-code-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> The security code has expired. New code sent.
  </p>
  <input
   class="govuk-input govuk-input--width-4 govuk-input--extra-letter-spacing govuk-input--error" id="security-code" name="securityCode" type="text" aria-describedby="security-code-error" autocomplete="one-time-code" inputmode="numeric">
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
<p class="govuk-body"><a href="#" class="govuk-link">Not received a text message?</a></p>
```

If the code was sent more than 2 hours ago, show the 'incorrect security code' message.

### Technical security measures

Use [technical measures to prevent automated attacks](https://www.ncsc.gov.uk/collection/passwords/updating-your-approach#tip2-password-collection). For example, add a time delay after 10 incorrect number entries.

Set up monitoring for potentially malicious behaviour, such as activity from unexpected geographical areas.

## Research on this pattern

[Read the National Cyber Security Centre’s guidance on multi-factor authentication](https://www.ncsc.gov.uk/collection/mfa-for-your-corporate-online-services).

### Services using this pattern

This pattern has been used in a number of services, including the following:

**Government Digital Service**<br>
GOV.UK Notify<br>
GOV.UK Pay

**Department for Work and Pensions**<br>
DWP Authenticate

**Home Office**<br>
EU Settlement Service

**Office for Product Safety and Standards**<br>
Product Safety Database

### Next steps

We need more research to know whether it’s useful to partially show the user the phone number that the security code was sent to.

If you’ve used this pattern, get in touch to share your user research findings.
