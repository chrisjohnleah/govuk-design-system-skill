# Equality information

This pattern explains how to ask users for equality information

Public sector organisations have a duty to consider the need to avoid discrimination and advance equality of opportunity as part of what they do. This is part of what’s called the [public sector equality duty](https://www.gov.uk/guidance/equality-act-2010-guidance#public-sector-equality-duty).

Public sector bodies often collect equality information about service users to help them meet this duty.

## When to use this pattern

These patterns are based on the [harmonised standards developed by the Government Statistical Service](https://analysisfunction.civilservice.gov.uk/government-statistical-service-and-statistician-group/gss-support/gss-harmonisation-support/harmonised-standards-and-guidance/).

Collecting equality information in a consistent way across the public sector makes the data more useful. For example, an organisation can benchmark its own services against other public sector services or the population in general. And it can adjust its approach if it finds a particular group is under-represented.

Do not use this pattern to collect information for operational reasons - especially if you’re legally required to ask for the information in a particular way.

## How it works

When asking users for equality information, make it clear:

- that the questions are different from other questions in the service
- why you’re asking the questions, and what you’ll do with the information
- that the questions are optional

### Where to place equality questions

For a service that people are likely to use on a one-off basis:

- place equality questions between [your service's Check your answers page](https://design-system.service.gov.uk/patterns/check-answers/) and [your Confirmation page](https://design-system.service.gov.uk/patterns/confirmation-pages/)
- show the user a screen explaining why you’re asking the questions and what you’ll do with the information they provide, like the one below

**Example: Explainer screen for equality information questions**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/details/macro.njk" import govukDetails %}
{% from "govuk/components/button/macro.njk" import govukButton %}

{% set hintHtml %}
  <p class="govuk-!-margin-top-0">These questions are optional. Your answers will not affect your application.</p>
{% endset -%}

<h1 class="govuk-heading-l">We have received your application</h1>

<p class="govuk-body">Before you finish using the service, we’d like to ask some equality questions.</p>
<p class="govuk-body">[Add a couple of sentences explaining why you’re asking the questions and what you’ll do with the information].</p>

{{ govukRadios({
  name: "equalitiesInfo",
  fieldset: {
    legend: {
      text: "Do you want to answer the equality questions?",
      classes: "govuk-fieldset__legend--m"
    }
  },
  hint: {
    html: hintHtml
  },
  items: [
    {
      value: "yes",
      text: "Yes, answer the equality questions (takes 2 minutes)"
    },
    {
      value: "no",
      text: "No, skip the equality questions"
    }
  ]
}) }}

{% call govukDetails({
  summaryText: "Why we ask equality questions"
}) %}
  [Consider adding an optional longer explanation of what you’re asking the questions and what you’ll do with the information].
{% endcall %}

{{ govukButton({
  text: "Continue"
}) }}
```

HTML:

```html
<h1 class="govuk-heading-l">We have received your application</h1>
<p class="govuk-body">Before you finish using the service, we’d like to ask some equality questions.</p>
<p class="govuk-body">[Add a couple of sentences explaining why you’re asking the questions and what you’ll do with the information].</p>
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="equalitiesInfo-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    Do you want to answer the equality questions?
  </legend>
  <div id="equalitiesInfo-hint" class="govuk-hint">
    <p class="govuk-!-margin-top-0">These questions are optional. Your answers will not affect your application.</p>
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="equalitiesInfo" name="equalitiesInfo" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="equalitiesInfo">
        Yes, answer the equality questions (takes 2 minutes)
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="equalitiesInfo-2" name="equalitiesInfo" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="equalitiesInfo-2">
        No, skip the equality questions
      </label>
    </div>
  </div>
</fieldset>
</div>
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Why we ask equality questions
    </span>
  </summary>
  <div class="govuk-details__text">
  [Consider adding an optional longer explanation of what you’re asking the questions and what you’ll do with the information].
  </div>
</details>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

#### Longer term services

With a service that you expect users to return to multiple times, you’ll need to decide where to place the equality questions. For example, with an account-type service with tasks that need to be completed at different times, you might choose to make answering the equality questions an optional task.

You’ll also need to give users the option to update their equality information in case anything changes.

### Updating equality information

Some categories of equality information can change over time, including changes to:

- marriage or partnership status
- disability
- religion
- sexual orientation
- gender identity

When possible, offer users the option to update their equality information. Users should be able to update their equality information through an online account, a change request form, or other contact methods. Integrating the option to update equality information directly into your service or user account system is often the most usable and efficient method.

Updating equality information is especially relevant for longer term services and services that use the same equality information multiple times.

## Get specialist privacy or data protection advice

Some or all of the equality information you collect is likely to be what’s called ‘[special category personal data](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/)’, meaning it has special legal protections.

So before you start collecting equality information, it’s important to get advice and approval from your organisation’s privacy or data protection expert on how to collect and process the information.

You’ll also need to update [the service’s privacy notice](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users).

## What information to collect

Public sector organisations will have someone who is responsible for making sure the organisation is meeting its obligations under the public sector equality duty. They can help you work out what equality information to collect.

This pattern covers:

- age
- disability
- ethnic group
- marital or partnership status
- religion
- sex and gender identity
- sexual orientation

### Collecting more detailed information

Start with the harmonised standards, keeping the categories of responses in the same order. Break them down into subcategories if necessary. For example if your service is aimed at a disabled people in particular, you may want to collect more detailed information about their disability. But make sure any categories you use map back to a ‘parent’ category in the harmonised standard.

### Collecting other types of equality information

See the [full list of Government Statistical Service harmonised standards](https://analysisfunction.civilservice.gov.uk/government-statistical-service-and-statistician-group/gss-support/gss-harmonisation-support/harmonised-standards-and-guidance/) if you want to collect other types of equality information. For example, about income or employment status.

### Asking about date of birth (age)

Use this approach to ask for the user’s date of birth.

**Example: Date of birth equality question**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukDateInput({
  id: "date-of-birth",
  namePrefix: "date-of-birth",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980 – if you prefer not to say, continue without entering any information"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2",
      autocomplete: "bday-day"
    },
    {
      name: "month",
      classes: "govuk-input--width-2",
      autocomplete: "bday-month"
    },
    {
      name: "year",
      classes: "govuk-input--width-4",
      autocomplete: "bday-year"
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
  <fieldset class="govuk-fieldset" role="group" aria-describedby="date-of-birth-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        What is your date of birth?
      </h1>
    </legend>
    <div id="date-of-birth-hint" class="govuk-hint">
      For example, 31 3 1980 – if you prefer not to say, continue without entering any information
    </div>
    <div class="govuk-date-input" id="date-of-birth">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="date-of-birth-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="date-of-birth-day" name="date-of-birth-day" type="text" autocomplete="bday-day" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="date-of-birth-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="date-of-birth-month" name="date-of-birth-month" type="text" autocomplete="bday-month" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="date-of-birth-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--width-4" id="date-of-birth-year" name="date-of-birth-year" type="text" autocomplete="bday-year" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### Asking about disability

Use this approach to ask about disability.

**Example: Disability equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "disability",
  fieldset: {
    legend: {
      text: "Do you have any physical or mental health conditions or illness lasting or expected to last 12 months or more?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      Do you have any physical or mental health conditions or illness lasting or expected to last 12 months or more?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="disability" name="disability" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="disability">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="disability-2" name="disability" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="disability-2">
        No
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="disability-4" name="disability" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="disability-4">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

If the user answers ‘yes’, ask about the impact of their condition or illness.

**Example: Disability impact equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "disability",
  fieldset: {
    legend: {
      text: "Do any of your conditions or illnesses reduce your ability to carry out day to day activities?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example eating, washing, walking or going shopping"
  },
  items: [
    {
      value: "lot",
      text: "Yes, a lot"
    },
    {
      value: "little",
      text: "Yes, a little"
    },
    {
      value: "no",
      text: "Not at all"
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
  <fieldset class="govuk-fieldset" aria-describedby="disability-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Do any of your conditions or illnesses reduce your ability to carry out day to day activities?
    </h1>
  </legend>
  <div id="disability-hint" class="govuk-hint">
    For example eating, washing, walking or going shopping
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="disability" name="disability" type="radio" value="lot">
      <label class="govuk-label govuk-radios__label" for="disability">
        Yes, a lot
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="disability-2" name="disability" type="radio" value="little">
      <label class="govuk-label govuk-radios__label" for="disability-2">
        Yes, a little
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="disability-3" name="disability" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="disability-3">
        Not at all
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="disability-5" name="disability" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="disability-5">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### Asking about ethnic group

The ethnic groups used here are for England. The Government Statistical Service harmonised standard uses [different categories for ethnicity data collected in Wales, Scotland and Northern Ireland](https://analysisfunction.civilservice.gov.uk/policy-store/ethnicity-harmonised-standard/). This is to reflect differences in local populations.

If your service covers more than one of England, Wales, Scotland or Northern Ireland, you should accommodate these differences in your design. For example, by changing the ethnic groups shown depending on where the user is based. Where this is not possible, use the English categories.

First ask about the user’s broad ethnic group.

**Example: Ethnic group equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "ethnicity",
  fieldset: {
    legend: {
      text: "What is your ethnic group?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "white",
      text: "White"
    },
    {
      value: "multiple",
      text: "Mixed or multiple ethnic groups"
    },
    {
      value: "asian",
      text: "Asian or Asian British"
    },
    {
      value: "black",
      text: "Black, African, Caribbean or Black British"
    },
    {
      value: "other",
      text: "Other ethnic group"
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      What is your ethnic group?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity" name="ethnicity" type="radio" value="white">
      <label class="govuk-label govuk-radios__label" for="ethnicity">
        White
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-2" name="ethnicity" type="radio" value="multiple">
      <label class="govuk-label govuk-radios__label" for="ethnicity-2">
        Mixed or multiple ethnic groups
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-3" name="ethnicity" type="radio" value="asian">
      <label class="govuk-label govuk-radios__label" for="ethnicity-3">
        Asian or Asian British
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-4" name="ethnicity" type="radio" value="black">
      <label class="govuk-label govuk-radios__label" for="ethnicity-4">
        Black, African, Caribbean or Black British
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-5" name="ethnicity" type="radio" value="other">
      <label class="govuk-label govuk-radios__label" for="ethnicity-5">
        Other ethnic group
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-7" name="ethnicity" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="ethnicity-7">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

Then ask for a more detailed category, depending on which broad ethnic group the user selects. Always give the user the option to enter their own description of their background.

**Example: White ethnicity equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set ethnicityHtml %}
  {{ govukInput({
    id: "other-description",
    name: "otherDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "How would you describe your background? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "ethnicityDetail",
  fieldset: {
    legend: {
      text: "Which of the following best describes your White background?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "british",
      text: "English, Welsh, Scottish, Northern Irish or British"
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "gypsy-traveller",
      text: "Gypsy or Irish Traveller"
    },
    {
      value: "other",
      text: "Any other White background",
      conditional: {
        html: ethnicityHtml
      }
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      Which of the following best describes your White background?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail" name="ethnicityDetail" type="radio" value="british">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail">
        English, Welsh, Scottish, Northern Irish or British
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-2" name="ethnicityDetail" type="radio" value="irish">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-2">
        Irish
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-3" name="ethnicityDetail" type="radio" value="gypsy-traveller">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-3">
        Gypsy or Irish Traveller
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-4" name="ethnicityDetail" type="radio" value="other" data-aria-controls="conditional-ethnicityDetail-4">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-4">
        Any other White background
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-ethnicityDetail-4">
      <div class="govuk-form-group">
  <label class="govuk-label" for="other-description">
    How would you describe your background? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="other-description" name="otherDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-6" name="ethnicityDetail" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-6">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

**Example: Multiple ethnicity equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set ethnicityHtml %}
  {{ govukInput({
    id: "other-description",
    name: "otherDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "How would you describe your background? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "ethnicityDetail",
  fieldset: {
    legend: {
      text: "Which of the following best describes your mixed or multiple ethnic groups background?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "white-black-caribbean",
      text: "White and Black Caribbean"
    },
    {
      value: "white-black-african",
      text: "White and Black African"
    },
    {
      value: "white-asian",
      text: "White and Asian"
    },
    {
      value: "other",
      text: "Any other mixed or multiple ethnic background",
      conditional: {
        html: ethnicityHtml
      }
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      Which of the following best describes your mixed or multiple ethnic groups background?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail" name="ethnicityDetail" type="radio" value="white-black-caribbean">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail">
        White and Black Caribbean
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-2" name="ethnicityDetail" type="radio" value="white-black-african">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-2">
        White and Black African
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-3" name="ethnicityDetail" type="radio" value="white-asian">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-3">
        White and Asian
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-4" name="ethnicityDetail" type="radio" value="other" data-aria-controls="conditional-ethnicityDetail-4">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-4">
        Any other mixed or multiple ethnic background
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-ethnicityDetail-4">
      <div class="govuk-form-group">
  <label class="govuk-label" for="other-description">
    How would you describe your background? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="other-description" name="otherDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-6" name="ethnicityDetail" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-6">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

**Example: Asian ethnicity equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set ethnicityHtml %}
  {{ govukInput({
    id: "other-description",
    name: "otherDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "How would you describe your background? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "ethnicityDetail",
  fieldset: {
    legend: {
      text: "Which of the following best describes your Asian or Asian British background?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "indian",
      text: "Indian"
    },
    {
      value: "pakistani",
      text: "Pakistani"
    },
    {
      value: "bangladeshi",
      text: "Bangladeshi"
    },
    {
      value: "chinese",
      text: "Chinese"
    },
    {
      value: "other",
      text: "Any other Asian background",
      conditional: {
        html: ethnicityHtml
      }
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      Which of the following best describes your Asian or Asian British background?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail" name="ethnicityDetail" type="radio" value="indian">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail">
        Indian
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-2" name="ethnicityDetail" type="radio" value="pakistani">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-2">
        Pakistani
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-3" name="ethnicityDetail" type="radio" value="bangladeshi">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-3">
        Bangladeshi
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-4" name="ethnicityDetail" type="radio" value="chinese">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-4">
        Chinese
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-5" name="ethnicityDetail" type="radio" value="other" data-aria-controls="conditional-ethnicityDetail-5">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-5">
        Any other Asian background
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-ethnicityDetail-5">
      <div class="govuk-form-group">
  <label class="govuk-label" for="other-description">
    How would you describe your background? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="other-description" name="otherDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-7" name="ethnicityDetail" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-7">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

**Example: Black ethnicity equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set ethnicityHtml %}
  {{ govukInput({
    id: "other-description",
    name: "otherDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "How would you describe your background? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "ethnicityDetail",
  fieldset: {
    legend: {
      text: "Which of the following best describes your Black, African, Caribbean or Black British background?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "african",
      text: "African"
    },
    {
      value: "caribbean",
      text: "Caribbean"
    },
    {
      value: "other",
      text: "Any other Black, African or Caribbean background",
      conditional: {
        html: ethnicityHtml
      }
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      Which of the following best describes your Black, African, Caribbean or Black British background?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail" name="ethnicityDetail" type="radio" value="african">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail">
        African
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-2" name="ethnicityDetail" type="radio" value="caribbean">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-2">
        Caribbean
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-3" name="ethnicityDetail" type="radio" value="other" data-aria-controls="conditional-ethnicityDetail-3">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-3">
        Any other Black, African or Caribbean background
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-ethnicityDetail-3">
      <div class="govuk-form-group">
  <label class="govuk-label" for="other-description">
    How would you describe your background? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="other-description" name="otherDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-5" name="ethnicityDetail" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-5">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

**Example: Other ethnicity equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set ethnicityHtml %}
  {{ govukInput({
    id: "other-description",
    name: "otherDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "How would you describe your background? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "ethnicityDetail",
  fieldset: {
    legend: {
      text: "Which of the following best describes your background?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "arab",
      text: "Arab"
    },
    {
      value: "other",
      text: "Any other ethnic group",
      conditional: {
        html: ethnicityHtml
      }
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      Which of the following best describes your background?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail" name="ethnicityDetail" type="radio" value="arab">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail">
        Arab
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-2" name="ethnicityDetail" type="radio" value="other" data-aria-controls="conditional-ethnicityDetail-2">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-2">
        Any other ethnic group
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-ethnicityDetail-2">
      <div class="govuk-form-group">
  <label class="govuk-label" for="other-description">
    How would you describe your background? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="other-description" name="otherDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicityDetail-4" name="ethnicityDetail" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="ethnicityDetail-4">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### Asking about marriage or civil partnership status

Use this approach to ask about marriage or civil partnership status.

**Example: Marriage or civil partnership status equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "marriageCivilPartnership",
  fieldset: {
    legend: {
      text: "What is your legal marital or registered civil partnership status?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "never",
      text: "Never married and never registered in a civil partnership"
    },
    {
      value: "married",
      text: "Married"
    },
    {
      value: "civil-partnership",
      text: "In a registered civil partnership"
    },
    {
      value: "separated-married",
      text: "Separated, but still legally married"
    },
    {
      value: "separated-civil-partnership",
      text: "Separated, but still legally in a civil partnership"
    },
    {
      value: "divorced",
      text: "Divorced"
    },
    {
      value: "dissolved-civil-partnership",
      text: "Formerly in a civil partnership which is now legally dissolved"
    },
    {
      value: "widowed",
      text: "Widowed"
    },
    {
      value: "widowed-civil-partnership",
      text: "Surviving partner from a registered civil partnership"
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      What is your legal marital or registered civil partnership status?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership" name="marriageCivilPartnership" type="radio" value="never">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership">
        Never married and never registered in a civil partnership
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-2" name="marriageCivilPartnership" type="radio" value="married">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-2">
        Married
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-3" name="marriageCivilPartnership" type="radio" value="civil-partnership">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-3">
        In a registered civil partnership
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-4" name="marriageCivilPartnership" type="radio" value="separated-married">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-4">
        Separated, but still legally married
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-5" name="marriageCivilPartnership" type="radio" value="separated-civil-partnership">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-5">
        Separated, but still legally in a civil partnership
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-6" name="marriageCivilPartnership" type="radio" value="divorced">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-6">
        Divorced
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-7" name="marriageCivilPartnership" type="radio" value="dissolved-civil-partnership">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-7">
        Formerly in a civil partnership which is now legally dissolved
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-8" name="marriageCivilPartnership" type="radio" value="widowed">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-8">
        Widowed
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-9" name="marriageCivilPartnership" type="radio" value="widowed-civil-partnership">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-9">
        Surviving partner from a registered civil partnership
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="marriageCivilPartnership-11" name="marriageCivilPartnership" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="marriageCivilPartnership-11">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### Asking about religion

The categories used here are for England. The Government Statistical Service harmonised standard uses [different categories for religion data collected in Wales, Scotland and Northern Ireland](https://gss.civilservice.gov.uk/policy-store/religion/). This is to reflect differences in local populations.

If your service covers more than one of England, Wales, Scotland or Northern Ireland, you should accommodate these differences in your design. For example, by changing the categories shown depending on where the user is based. Where this is not possible, use the English categories.

**Example: Religion equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set religionHtml %}
  {{ govukInput({
    id: "other-description",
    name: "otherDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "What is your religion? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "religion",
  fieldset: {
    legend: {
      text: "What is your religion?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "none",
      text: "No religion"
    },
    {
      value: "christian",
      text: "Christian",
      hint: {
        text: "Including Church of England, Catholic, Protestant and all other Christian denominations"
      }
    },
    {
      value: "buddhist",
      text: "Buddhist"
    },
    {
      value: "hindu",
      text: "Hindu"
    },
    {
      value: "jewish",
      text: "Jewish"
    },
    {
      value: "muslim",
      text: "Muslim"
    },
    {
      value: "sikh",
      text: "Sikh"
    },
    {
      value: "other",
      text: "Any other religion",
      conditional: {
        html: religionHtml
      }
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      What is your religion?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion" name="religion" type="radio" value="none">
      <label class="govuk-label govuk-radios__label" for="religion">
        No religion
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-2" name="religion" type="radio" value="christian" aria-describedby="religion-2-item-hint">
      <label class="govuk-label govuk-radios__label" for="religion-2">
        Christian
      </label>
      <div id="religion-2-item-hint" class="govuk-hint govuk-radios__hint">
        Including Church of England, Catholic, Protestant and all other Christian denominations
      </div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-3" name="religion" type="radio" value="buddhist">
      <label class="govuk-label govuk-radios__label" for="religion-3">
        Buddhist
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-4" name="religion" type="radio" value="hindu">
      <label class="govuk-label govuk-radios__label" for="religion-4">
        Hindu
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-5" name="religion" type="radio" value="jewish">
      <label class="govuk-label govuk-radios__label" for="religion-5">
        Jewish
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-6" name="religion" type="radio" value="muslim">
      <label class="govuk-label govuk-radios__label" for="religion-6">
        Muslim
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-7" name="religion" type="radio" value="sikh">
      <label class="govuk-label govuk-radios__label" for="religion-7">
        Sikh
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-8" name="religion" type="radio" value="other" data-aria-controls="conditional-religion-8">
      <label class="govuk-label govuk-radios__label" for="religion-8">
        Any other religion
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-religion-8">
      <div class="govuk-form-group">
  <label class="govuk-label" for="other-description">
    What is your religion? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="other-description" name="otherDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="religion-10" name="religion" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="religion-10">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### Asking about sex and gender identity

Use this approach to ask about sex and gender identity.

**Example: Sex and gender equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

<h1 class="govuk-heading-l">Sex and gender identity</h1>

{% set genderHtml %}
  {{ govukInput({
    id: "gender-description",
    name: "genderDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "What is your gender identity? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "sex",
  fieldset: {
    legend: {
      text: "What is your sex?",
      classes: "govuk-fieldset__legend--m"
    }
  },
  items: [
    {
      value: "female",
      text: "Female"
    },
    {
      value: "male",
      text: "Male"
    },
    {
      value: "skip",
      text: "Prefer not to say"
    }
  ]
}) }}

{{ govukRadios({
  name: "genderIdentity",
  fieldset: {
    legend: {
      text: "Is the gender you identify with the same as your sex registered at birth?",
      classes: "govuk-fieldset__legend--m"
    }
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No",
      conditional: {
        html: genderHtml
      }
    },
    {
      value: "skip",
      text: "Prefer not to say"
    }
  ]
}) }}

{{ govukButton({
  text: "Continue"
}) }}
```

HTML:

```html
<h1 class="govuk-heading-l">Sex and gender identity</h1>
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    What is your sex?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sex" name="sex" type="radio" value="female">
      <label class="govuk-label govuk-radios__label" for="sex">
        Female
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sex-2" name="sex" type="radio" value="male">
      <label class="govuk-label govuk-radios__label" for="sex-2">
        Male
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sex-3" name="sex" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="sex-3">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    Is the gender you identify with the same as your sex registered at birth?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="genderIdentity" name="genderIdentity" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="genderIdentity">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="genderIdentity-2" name="genderIdentity" type="radio" value="no" data-aria-controls="conditional-genderIdentity-2">
      <label class="govuk-label govuk-radios__label" for="genderIdentity-2">
        No
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-genderIdentity-2">
      <div class="govuk-form-group">
  <label class="govuk-label" for="gender-description">
    What is your gender identity? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="gender-description" name="genderDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="genderIdentity-3" name="genderIdentity" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="genderIdentity-3">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### Asking about sexual orientation

Use this approach to ask about sexual orientation.

**Example: Sexual orientation equality question**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set sexualOrientationHtml %}
  {{ govukInput({
    id: "other-description",
    name: "otherDescription",
    type: "text",
    classes: "govuk-!-width-one-half",
    label: {
      text: "How would you describe your sexual orientation? (optional)"
    }
  }) }}
{% endset -%}

{{ govukRadios({
  name: "sexualOrientation",
  fieldset: {
    legend: {
      text: "Which of the following best describes your sexual orientation?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "heterosexual",
      text: "Heterosexual or straight"
    },
    {
      value: "gay-lesbian",
      text: "Gay or lesbian"
    },
    {
      value: "bisexual",
      text: "Bisexual"
    },
    {
      value: "other",
      text: "Other",
      conditional: {
        html: sexualOrientationHtml
      }
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
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
      Which of the following best describes your sexual orientation?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sexualOrientation" name="sexualOrientation" type="radio" value="heterosexual">
      <label class="govuk-label govuk-radios__label" for="sexualOrientation">
        Heterosexual or straight
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sexualOrientation-2" name="sexualOrientation" type="radio" value="gay-lesbian">
      <label class="govuk-label govuk-radios__label" for="sexualOrientation-2">
        Gay or lesbian
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sexualOrientation-3" name="sexualOrientation" type="radio" value="bisexual">
      <label class="govuk-label govuk-radios__label" for="sexualOrientation-3">
        Bisexual
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sexualOrientation-4" name="sexualOrientation" type="radio" value="other" data-aria-controls="conditional-sexualOrientation-4">
      <label class="govuk-label govuk-radios__label" for="sexualOrientation-4">
        Other
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-sexualOrientation-4">
      <div class="govuk-form-group">
  <label class="govuk-label" for="other-description">
    How would you describe your sexual orientation? (optional)
  </label>
  <input
   class="govuk-input govuk-!-width-one-half" id="other-description" name="otherDescription" type="text">
</div>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sexualOrientation-6" name="sexualOrientation" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="sexualOrientation-6">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

### Validation and error messages

If a user enters information that’s valid but incomplete, accept it. For example, they might just enter their year of birth without the day or month.

Error messages should be styled like this -

**Example: Ethnicity question with error**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukRadios({
  name: "ethnicity",
  fieldset: {
    legend: {
      text: "What is your ethnic group?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select an ethnic group or ‘Prefer not to say’"
  },
  items: [
    {
      value: "white",
      text: "White"
    },
    {
      value: "multiple",
      text: "Mixed or multiple ethnic groups"
    },
    {
      value: "asian",
      text: "Asian or Asian British"
    },
    {
      value: "black",
      text: "Black, African, Caribbean or Black British"
    },
    {
      value: "other",
      text: "Other ethnic group"
    },
    {
      divider: "or"
    },
    {
      value: "skip",
      text: "Prefer not to say"
    }
  ]
}) }}

{{ govukButton({
  text: "Continue"
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="ethnicity-error">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your ethnic group?
    </h1>
  </legend>
  <p id="ethnicity-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select an ethnic group or ‘Prefer not to say’
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity" name="ethnicity" type="radio" value="white">
      <label class="govuk-label govuk-radios__label" for="ethnicity">
        White
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-2" name="ethnicity" type="radio" value="multiple">
      <label class="govuk-label govuk-radios__label" for="ethnicity-2">
        Mixed or multiple ethnic groups
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-3" name="ethnicity" type="radio" value="asian">
      <label class="govuk-label govuk-radios__label" for="ethnicity-3">
        Asian or Asian British
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-4" name="ethnicity" type="radio" value="black">
      <label class="govuk-label govuk-radios__label" for="ethnicity-4">
        Black, African, Caribbean or Black British
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-5" name="ethnicity" type="radio" value="other">
      <label class="govuk-label govuk-radios__label" for="ethnicity-5">
        Other ethnic group
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="ethnicity-7" name="ethnicity" type="radio" value="skip">
      <label class="govuk-label govuk-radios__label" for="ethnicity-7">
        Prefer not to say
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

**Example: Date of birth equality question with error**

Nunjucks:

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukDateInput({
  id: "date-of-birth",
  namePrefix: "date-of-birth",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Enter your date of birth or leave blank"
  },
  hint: {
    text: "For example, 31 3 1980 – if you prefer not to say, continue without entering any information"
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

{{ govukButton({
  text: "Continue"
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="date-of-birth-hint date-of-birth-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        What is your date of birth?
      </h1>
    </legend>
    <div id="date-of-birth-hint" class="govuk-hint">
      For example, 31 3 1980 – if you prefer not to say, continue without entering any information
    </div>
    <p id="date-of-birth-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Enter your date of birth or leave blank
    </p>
    <div class="govuk-date-input" id="date-of-birth">
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="date-of-birth-day">
            Day
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="date-of-birth-day" name="date-of-birth-day" type="text" autocomplete="bday-day" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="date-of-birth-month">
            Month
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-2" id="date-of-birth-month" name="date-of-birth-month" type="text" autocomplete="bday-month" inputmode="numeric">
        </div>
      </div>
            <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="date-of-birth-year">
            Year
          </label>
          <input
           class="govuk-input govuk-date-input__input govuk-input--error govuk-input--width-4" id="date-of-birth-year" name="date-of-birth-year" type="text" autocomplete="bday-year" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

## Research on this pattern

The two-step approach to asking for ethnicity information is based on:

- user research by the [Race Disparity Unit](https://www.gov.uk/government/organisations/race-disparity-unit)
- [examples of ways to ask about ethnic groups](https://designnotes.blog.gov.uk/2019/01/29/researching-how-we-ask-users-about-their-ethnicity/) from a number of different government services

### Questions we’d like to answer through research

For one-off services, we’ve suggested placing the equality and diversity questions between the ‘check your answers’ and confirmation pages.

This is based on where the ‘Do you want to create an account?’ question is placed in the ‘Get support if you’re clinically extremely vulnerable to coronavirus’ service - but we’d like to confirm whether this placement works for the equality questions too.

We’d also appreciate any the following questions:

- do users understand from the first ‘Equality questions’ screen that the questions they’re about to answer are different from other questions in the service?
- do we need to explain why we’re asking each question individually, or is it enough to have an explanation at the start?
- what’s the best way to ask for equality information in different types of service where you expect to have more than one contact with the user?
- is including the ‘If you prefer not to say, continue without entering any information’ text the clearest way to get across that all the text inputs on that screen are optional?
