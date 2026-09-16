# Checkboxes

Let users select one or more options by using the checkboxes component

Let users select one or more options by using the checkboxes component.

**Example: Checkboxes**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "waste",
  fieldset: {
    legend: {
      text: "Which types of waste do you transport?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all that apply"
  },
  items: [
    {
      value: "carcasses",
      text: "Waste from animal carcasses"
    },
    {
      value: "mines",
      text: "Waste from mines or quarries"
    },
    {
      value: "farm",
      text: "Farm or agricultural waste"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport?
    </h1>
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="carcasses">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
    </div>
  </div>
</fieldset>
</div>
```

## When to use this component

Use the checkboxes component when you need to help users:

- select multiple options from a list
- toggle a single option on or off

## When not to use this component

Do not use the checkboxes component if users can only choose one option from a selection. In this case, use the [Radios component](https://design-system.service.gov.uk/components/radios/).

## How it works

Always position checkboxes to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.

Unlike with radios, users can select multiple options from a list of checkboxes. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.

If needed, add a hint explaining this, for example, 'Select all that apply'.

Do not pre-select checkbox options as this makes it more likely that users will:

- not realise they’ve missed a question
- submit the wrong answer

Order checkbox options alphabetically by default.

In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for ‘What is your nationality?’ based on population size.

Group checkboxes together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘How would you like to be contacted?’.

### If you’re asking one question on the page

If you're asking just [one question per page](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the checkboxes component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Checkboxes** second

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "waste",
  fieldset: {
    legend: {
      text: "Which types of waste do you transport?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all that apply"
  },
  items: [
    {
      value: "carcasses",
      text: "Waste from animal carcasses"
    },
    {
      value: "mines",
      text: "Waste from mines or quarries"
    },
    {
      value: "farm",
      text: "Farm or agricultural waste"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport?
    </h1>
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="carcasses">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**Example: Checkboxes without a heading**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "waste",
  fieldset: {
    legend: {
      text: "Which types of waste do you transport?"
    }
  },
  hint: {
    text: "Select all that apply"
  },
  items: [
    {
      value: "carcasses",
      text: "Waste from animal carcasses"
    },
    {
      value: "mines",
      text: "Waste from mines or quarries"
    },
    {
      value: "farm",
      text: "Farm or agricultural waste"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport?
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="carcasses">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### Checkbox items with hints

You can add hints to checkbox items to provide additional information about the options.

Keep each hint to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with an item. This could frustrate users if the text is long.

Do not use links in hint text. While screen readers will read out the link text when describing the item, they usually do not tell users the text is a link.

**Example: Checkbox items with hint**

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
    text: "If you have dual nationality, select all options that are relevant to you."
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
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your nationality?
    </h1>
  </legend>
  <div id="nationality-hint" class="govuk-hint">
    If you have dual nationality, select all options that are relevant to you.
  </div>
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

### Add an option for ‘none’

When 'none' would be a valid answer, give users the option to check a box to say none of the other options apply to them – without this option, users would have to leave all of the boxes unchecked. Giving users this option also makes sure they do not skip the question by accident.

Remember to [start by asking one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page). You might be able to remove the need for a 'none' option by asking the user a better question or filtering them out with a ‘filter question’ beforehand. The GOV.UK Service Manual has guidance on [designing good questions](https://www.gov.uk/service-manual/design/designing-good-questions).

Show the ‘none’ option last. Separate it from the other options using a divider. The text is usually the word ‘or’.

Write a label that repeats the key part of the question.

For example, for the question 'Will you be travelling to any of these countries?', say 'No, I will not be travelling to any of these countries.'

To enable some JavaScript that unchecks all other checkboxes when the user clicks 'None', add the `exclusive` behaviour to the 'none' checkbox.

**Example: Checkboxes with 'none' option**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "countries",
  fieldset: {
    legend: {
      text: "Will you be travelling to any of these countries?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all countries that apply"
  },
  items: [
    {
      value: "france",
      text: "France"
    },
    {
      value: "portugal",
      text: "Portugal"
    },
    {
      value: "spain",
      text: "Spain"
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "No, I will not be travelling to any of these countries",
      behaviour: "exclusive"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="countries-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Will you be travelling to any of these countries?
    </h1>
  </legend>
  <div id="countries-hint" class="govuk-hint">
    Select all countries that apply
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries" name="countries" type="checkbox" value="france">
      <label class="govuk-label govuk-checkboxes__label" for="countries">
        France
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries-2" name="countries" type="checkbox" value="portugal">
      <label class="govuk-label govuk-checkboxes__label" for="countries-2">
        Portugal
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries-3" name="countries" type="checkbox" value="spain">
      <label class="govuk-label govuk-checkboxes__label" for="countries-3">
        Spain
      </label>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries-5" name="countries" type="checkbox" value="none" data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="countries-5">
        No, I will not be travelling to any of these countries
      </label>
    </div>
  </div>
</fieldset>
</div>
```

If JavaScript is unavailable, and a user selects both the ‘none’ checkbox and another checkbox, display an error message.

**Example: Checkboxes with 'none' option showing an error**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "countries",
  fieldset: {
    legend: {
      text: "Will you be travelling to any of these countries?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select countries you will be travelling to, or select ‘No, I will not be travelling to any of these countries’"
  },
  items: [
    {
      value: "france",
      text: "France",
      checked: true
    },
    {
      value: "portugal",
      text: "Portugal"
    },
    {
      value: "spain",
      text: "Spain"
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "No, I will not be travelling to any of these countries",
      checked: true,
      behaviour: "exclusive"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="countries-error">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Will you be travelling to any of these countries?
    </h1>
  </legend>
  <p id="countries-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select countries you will be travelling to, or select ‘No, I will not be travelling to any of these countries’
  </p>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries" name="countries" type="checkbox" value="france" checked>
      <label class="govuk-label govuk-checkboxes__label" for="countries">
        France
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries-2" name="countries" type="checkbox" value="portugal">
      <label class="govuk-label govuk-checkboxes__label" for="countries-2">
        Portugal
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries-3" name="countries" type="checkbox" value="spain">
      <label class="govuk-label govuk-checkboxes__label" for="countries-3">
        Spain
      </label>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="countries-5" name="countries" type="checkbox" value="none" checked data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="countries-5">
        No, I will not be travelling to any of these countries
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### Conditionally revealing a related question

You can ask the user a related question when they select a particular checkbox, so they only see the question when it's relevant to them.

This might make 2 related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the 'Contact me by phone' option.

**Example: Checkboxes with conditionally revealing content**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set emailHtml %}
{{ govukInput({
  id: "contact-by-email",
  name: "contactByEmail",
  type: "email",
  autocomplete: "email",
  spellcheck: false,
  classes: "govuk-!-width-one-third",
  label: {
    text: "Email address"
  }
}) }}
{% endset -%}

{% set phoneHtml %}
{{ govukInput({
  id: "contact-by-phone",
  name: "contactByPhone",
  type: "tel",
  autocomplete: "tel",
  classes: "govuk-!-width-one-third",
  label: {
    text: "Phone number"
  }
}) }}
{% endset -%}

{% set textHtml %}
{{ govukInput({
  id: "contact-by-text",
  name: "contactByText",
  type: "tel",
  autocomplete: "tel",
  classes: "govuk-!-width-one-third",
  label: {
    text: "Mobile phone number"
  }
}) }}
{% endset -%}

{{ govukCheckboxes({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all options that are relevant to you"
  },
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: emailHtml
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: phoneHtml
      }
    },
    {
      value: "text message",
      text: "Text message",
      conditional: {
        html: textHtml
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="contact-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      How would you like to be contacted?
    </h1>
  </legend>
  <div id="contact-hint" class="govuk-hint">
    Select all options that are relevant to you
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="contact" name="contact" type="checkbox" value="email" data-aria-controls="conditional-contact">
      <label class="govuk-label govuk-checkboxes__label" for="contact">
        Email
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-contact">
      <div class="govuk-form-group">
  <label class="govuk-label" for="contact-by-email">
    Email address
  </label>
  <input
   class="govuk-input govuk-!-width-one-third" id="contact-by-email" name="contactByEmail" type="email" spellcheck="false" autocomplete="email">
</div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="contact-2" name="contact" type="checkbox" value="phone" data-aria-controls="conditional-contact-2">
      <label class="govuk-label govuk-checkboxes__label" for="contact-2">
        Phone
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-contact-2">
      <div class="govuk-form-group">
  <label class="govuk-label" for="contact-by-phone">
    Phone number
  </label>
  <input
   class="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contactByPhone" type="tel" autocomplete="tel">
</div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="contact-3" name="contact" type="checkbox" value="text message" data-aria-controls="conditional-contact-3">
      <label class="govuk-label govuk-checkboxes__label" for="contact-3">
        Text message
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-contact-3">
      <div class="govuk-form-group">
  <label class="govuk-label" for="contact-by-text">
    Mobile phone number
  </label>
  <input
   class="govuk-input govuk-!-width-one-third" id="contact-by-text" name="contactByText" type="tel" autocomplete="tel">
</div>
    </div>
  </div>
</fieldset>
</div>
```

Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead.

You should only conditionally reveal questions - do not show or hide anything that is not a question.

#### Known issues

Users are not always notified when a conditionally revealed question is shown or hidden. This fails [WCAG 2.2 success criterion 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html).

However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long as it’s kept simple. It confused our test users when we conditionally revealed complicated questions to them.

We’ll keep looking for opportunities to [learn more about how conditionally revealed questions should be used in services](https://github.com/alphagov/govuk-design-system-backlog/issues/37).

### Smaller checkboxes

Use standard-sized checkboxes in most cases. However, smaller checkboxes work well on pages where it’s helpful to make them less visually prominent.

For example, on a page of search results, the main user need is to see the results. Using smaller checkboxes lets users see and change search filters without distracting them from the main content.

**Example: Small checkboxes**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "organisation",
  classes: "govuk-checkboxes--small",
  fieldset: {
    legend: {
      text: "Organisation",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--m"
    }
  },
  items: [
    {
      value: "hmrc",
      text: "HM Revenue and Customs (HMRC)"
    },
    {
      value: "employment-tribunal",
      text: "Employment Tribunal"
    },
    {
      value: "MOD",
      text: "Ministry of Defence"
    },
    {
      value: "DfT",
      text: "Department for Transport"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    <h1 class="govuk-fieldset__heading">
      Organisation
    </h1>
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="organisation" name="organisation" type="checkbox" value="hmrc">
      <label class="govuk-label govuk-checkboxes__label" for="organisation">
        HM Revenue and Customs (HMRC)
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="organisation-2" name="organisation" type="checkbox" value="employment-tribunal">
      <label class="govuk-label govuk-checkboxes__label" for="organisation-2">
        Employment Tribunal
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="organisation-3" name="organisation" type="checkbox" value="MOD">
      <label class="govuk-label govuk-checkboxes__label" for="organisation-3">
        Ministry of Defence
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="organisation-4" name="organisation" type="checkbox" value="DfT">
      <label class="govuk-label govuk-checkboxes__label" for="organisation-4">
        Department for Transport
      </label>
    </div>
  </div>
</fieldset>
</div>
```

Small checkboxes can work well on information dense screens in services designed for repeat use, like caseworking systems.

In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times.

### Error messages

Error messages should be styled like this:

**Example: Checkbox items with error**

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

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If nothing is selected and the question has options in it

Say ‘Select if [whatever it is]’.<br>
For example, ‘Select if you are British, Irish or a citizen of a different country’.

#### If nothing is selected and the question does not have options in it

Say ‘Select [whatever it is]’.<br>
For example, ‘Select your nationality or nationalities’.

#### If users check both a 'none' checkbox and another checkbox

Say:

<div class="govuk-inset-text">Select [option label text] or select ‘[none of the above label text]’</div>

For example:

<div class="govuk-inset-text">Select countries you will be travelling to, or select ‘No, I will not be travelling to any of these countries’</div>

## Research on this component

If you’ve done any user research involving conditionally revealed questions, particularly with users of assistive technologies, [tell us what you’ve learned by adding a comment to the discussion about this component](https://github.com/alphagov/govuk-design-system-backlog/issues/37).

Read a blog post about [an update to the radios and checkboxes components in 2016](https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/).

## Nunjucks macro options

Import: `{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `describedBy` | string | no | One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users. |
| `fieldset` | object (component options) | no | Can be used to add a fieldset to the checkboxes component. |
| `hint` | object (component options) | no | Can be used to add a hint to the checkboxes component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object | no | Additional options for the form group containing the checkboxes component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object | no | Content to add before all checkbox items within the checkboxes component. |
| `formGroup.beforeInputs.text` | string | yes | Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | yes | HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object | no | Content to add after all checkbox items within the checkboxes component. |
| `formGroup.afterInputs.text` | string | yes | Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | yes | HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string | no | Optional prefix. This is used to prefix the `id` attribute for each checkbox item input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | yes | Name attribute for all checkbox items. |
| `items` | array | yes | The checkbox items within the checkboxes component. |
| `items.text` | string | yes | If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | yes | If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items.id` | string | no | Specific ID attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied. |
| `items.name` | string | no | Specific name for the checkbox item. If omitted, then component global `name` string will be applied. |
| `items.value` | string | yes | Value for the checkbox input. |
| `items.label` | object (component options) | no | Subset of options for the label used by each checkbox item within the checkboxes component. |
| `items.label.classes` | string | no | Classes to add to the label tag. |
| `items.label.attributes` | object | no | HTML attributes (for example data attributes) to add to the label tag. |
| `items.hint` | object (component options) | no | Can be used to add a hint to each checkbox item within the checkboxes component. |
| `items.divider` | string | no | Divider text to separate checkbox items, for example the text `"or"`. |
| `items.checked` | boolean | no | Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option. |
| `items.conditional` | object | no | Provide additional content to reveal when the checkbox is checked. |
| `items.conditional.html` | string | yes | The HTML to reveal when the checkbox is checked. |
| `items.behaviour` | string | no | If set to `"exclusive"`, implements a 'None of these' type behaviour via JavaScript when checkboxes are clicked. |
| `items.disabled` | boolean | no | If `true`, checkbox will be disabled. |
| `items.attributes` | object | no | HTML attributes (for example data attributes) to add to the checkbox input tag. |
| `values` | array | no | Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string | no | Classes to add to the checkboxes container. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the checkboxes container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "name": "nationality",
  "fieldset": {
    "legend": {
      "text": "What is your nationality?"
    }
  },
  "items": [
    {
      "value": "british",
      "text": "British"
    },
    {
      "value": "irish",
      "text": "Irish"
    },
    {
      "value": "other",
      "text": "Citizen of another country"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
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

### with hint

```json
{
  "name": "nationality",
  "fieldset": {
    "legend": {
      "text": "What is your nationality?"
    }
  },
  "hint": {
    "text": "Select all that apply"
  },
  "items": [
    {
      "value": "british",
      "text": "British"
    },
    {
      "value": "irish",
      "text": "Irish"
    },
    {
      "value": "other",
      "text": "Citizen of another country"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-hint">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <div id="nationality-hint" class="govuk-hint">
    Select all that apply
  </div>
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

### with pre-checked values

```json
{
  "name": "how-contacted-checked",
  "idPrefix": "how-contacted-checked",
  "fieldset": {
    "legend": {
      "text": "How do you want to be contacted?"
    }
  },
  "values": [
    "email",
    "text"
  ],
  "items": [
    {
      "value": "email",
      "text": "Email",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"context-email\">Email address</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      "value": "phone",
      "text": "Phone",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"contact-phone\">Phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-phone\" type=\"text\" id=\"contact-phone\">\n"
      }
    },
    {
      "value": "text",
      "text": "Text message",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"contact-text-message\">Mobile phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-text-message\" type=\"text\" id=\"contact-text-message\">\n"
      }
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" checked data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" checked data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>
```

### with divider and None

```json
{
  "name": "with-divider-and-none",
  "fieldset": {
    "legend": {
      "text": "Which types of waste do you transport regularly?"
    }
  },
  "items": [
    {
      "value": "animal",
      "text": "Waste from animal carcasses"
    },
    {
      "value": "mines",
      "text": "Waste from mines or quarries"
    },
    {
      "value": "farm",
      "text": "Farm or agricultural waste"
    },
    {
      "divider": "or"
    },
    {
      "value": "none",
      "text": "None of these",
      "behaviour": "exclusive"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none" name="with-divider-and-none" type="checkbox" value="animal">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-2" name="with-divider-and-none" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-3" name="with-divider-and-none" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-3">
        Farm or agricultural waste
      </label>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-5" name="with-divider-and-none" type="checkbox" value="none" data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-5">
        None of these
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with divider, None and conditional items

```json
{
  "name": "with-divider-and-none-and-conditional-items",
  "fieldset": {
    "legend": {
      "text": "Do you have any access needs?"
    }
  },
  "items": [
    {
      "value": "accessible-toilets",
      "text": "Accessible toilets available"
    },
    {
      "value": "braille",
      "text": "Braille translation service available"
    },
    {
      "value": "disabled-car-parking",
      "text": "Disabled car parking available"
    },
    {
      "value": "another-access-need",
      "text": "Another access need",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"other-access-needs\">Other access needs</label>\n<textarea class=\"govuk-textarea govuk-!-width-one-third\" name=\"other-access-needs\" id=\"other-access-needs\"></textarea>\n"
      }
    },
    {
      "divider": "or"
    },
    {
      "value": "none",
      "text": "None of these",
      "behaviour": "exclusive"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Do you have any access needs?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items" name="with-divider-and-none-and-conditional-items" type="checkbox" value="accessible-toilets">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items">
        Accessible toilets available
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-2" name="with-divider-and-none-and-conditional-items" type="checkbox" value="braille">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-2">
        Braille translation service available
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-3" name="with-divider-and-none-and-conditional-items" type="checkbox" value="disabled-car-parking">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-3">
        Disabled car parking available
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-4" name="with-divider-and-none-and-conditional-items" type="checkbox" value="another-access-need" data-aria-controls="conditional-with-divider-and-none-and-conditional-items-4">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-4">
        Another access need
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-with-divider-and-none-and-conditional-items-4">
      <label class="govuk-label" for="other-access-needs">Other access needs</label>
<textarea class="govuk-textarea govuk-!-width-one-third" name="other-access-needs" id="other-access-needs"></textarea>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-6" name="with-divider-and-none-and-conditional-items" type="checkbox" value="none" data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-6">
        None of these
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with hints on items

```json
{
  "name": "with-hints-on-items",
  "fieldset": {
    "legend": {
      "text": "How do you want to sign in?"
    }
  },
  "items": [
    {
      "name": "gateway",
      "id": "government-gateway",
      "value": "gov-gateway",
      "text": "Sign in with Government Gateway",
      "hint": {
        "text": "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
      }
    },
    {
      "name": "verify",
      "id": "govuk-verify",
      "value": "gov-verify",
      "text": "Sign in with GOV.UK Verify",
      "hint": {
        "text": "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      }
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to sign in?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="government-gateway" name="gateway" type="checkbox" value="gov-gateway" aria-describedby="government-gateway-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="government-gateway">
        Sign in with Government Gateway
      </label>
      <div id="government-gateway-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have a user ID if you&#39;ve registered for Self Assessment or filed a tax return online before.
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="govuk-verify" name="verify" type="checkbox" value="gov-verify" aria-describedby="govuk-verify-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="govuk-verify">
        Sign in with GOV.UK Verify
      </label>
      <div id="govuk-verify-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have an account if you&#39;ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
    </div>
  </div>
</fieldset>
</div>
```

### with legend as a page heading

```json
{
  "name": "waste",
  "fieldset": {
    "legend": {
      "text": "Which types of waste do you transport regularly?",
      "classes": "govuk-fieldset__legend--l",
      "isPageHeading": true
    }
  },
  "hint": {
    "text": "Select all that apply"
  },
  "items": [
    {
      "value": "animal",
      "text": "Waste from animal carcasses"
    },
    {
      "value": "mines",
      "text": "Waste from mines or quarries"
    },
    {
      "value": "farm",
      "text": "Farm or agricultural waste"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport regularly?
    </h1>
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with error message

```json
{
  "name": "waste",
  "errorMessage": {
    "text": "Please select an option"
  },
  "fieldset": {
    "legend": {
      "text": "Which types of waste do you transport regularly?"
    }
  },
  "items": [
    {
      "value": "animal",
      "text": "Waste from animal carcasses",
      "hint": {
        "text": "Nullam id dolor id nibh ultricies vehicula ut id elit."
      }
    },
    {
      "value": "mines",
      "text": "Waste from mines or quarries",
      "hint": {
        "text": "Nullam id dolor id nibh ultricies vehicula ut id elit."
      }
    },
    {
      "value": "farm",
      "text": "Farm or agricultural waste",
      "hint": {
        "text": "Nullam id dolor id nibh ultricies vehicula ut id elit."
      }
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="waste-error">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal" aria-describedby="waste-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
      <div id="waste-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines" aria-describedby="waste-2-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
      <div id="waste-2-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm" aria-describedby="waste-3-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
      <div id="waste-3-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
    </div>
  </div>
</fieldset>
</div>
```

### with very long option text

```json
{
  "name": "waste",
  "hint": {
    "text": "Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  "fieldset": {
    "legend": {
      "text": "Maecenas faucibus mollis interdum?"
    }
  },
  "items": [
    {
      "value": "nullam",
      "text": "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."
    },
    {
      "value": "aenean",
      "text": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."
    },
    {
      "value": "fusce",
      "text": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis."
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend">
    Maecenas faucibus mollis interdum?
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="nullam">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="aenean">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="fusce">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with conditional items

```json
{
  "name": "with-conditional-items",
  "idPrefix": "how-contacted",
  "fieldset": {
    "legend": {
      "text": "How do you want to be contacted?"
    }
  },
  "items": [
    {
      "value": "email",
      "text": "Email",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"context-email\">Email address</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      "value": "phone",
      "text": "Phone",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"contact-phone\">Phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-phone\" type=\"text\" id=\"contact-phone\">\n"
      }
    },
    {
      "value": "text",
      "text": "Text message",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"contact-text-message\">Mobile phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-text-message\" type=\"text\" id=\"contact-text-message\">\n"
      }
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted" name="with-conditional-items" type="checkbox" value="email" data-aria-controls="conditional-how-contacted">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        Email
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-2" name="with-conditional-items" type="checkbox" value="phone" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        Phone
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-3" name="with-conditional-items" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-3">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-3">
        Text message
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>
```

### with optional form-group classes showing group error

```json
{
  "name": "how-contacted-checked",
  "idPrefix": "how-contacted-checked",
  "formGroup": {
    "classes": "govuk-form-group--error"
  },
  "fieldset": {
    "legend": {
      "text": "How do you want to be contacted?"
    }
  },
  "items": [
    {
      "value": "email",
      "text": "Email",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"context-email\">Email address</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      "value": "phone",
      "text": "Phone",
      "checked": true,
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"contact-phone\">Phone number</label>\n<span id=\"contact-phone-error\" class=\"govuk-error-message\">Problem with input</span>\n<input class=\"govuk-input govuk-input--error govuk-!-width-one-third\" name=\"contact-phone\" type=\"text\" id=\"contact-phone\" aria-describedby=\"contact-phone-error\">\n"
      }
    },
    {
      "value": "text",
      "text": "Text message",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"contact-text-message\">Mobile phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-text-message\" type=\"text\" id=\"contact-text-message\">\n"
      }
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" checked data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>
```

### small

```json
{
  "idPrefix": "nationality",
  "name": "nationality",
  "classes": "govuk-checkboxes--small",
  "fieldset": {
    "legend": {
      "text": "Filter by"
    }
  },
  "items": [
    {
      "value": "a",
      "text": "a thing"
    },
    {
      "value": "b",
      "text": "another thing"
    },
    {
      "value": "c",
      "text": "this thing"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with long text

```json
{
  "idPrefix": "nationality",
  "name": "nationality",
  "classes": "govuk-checkboxes--small",
  "fieldset": {
    "legend": {
      "text": "Filter by"
    }
  },
  "items": [
    {
      "value": "nullam",
      "text": "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."
    },
    {
      "value": "aenean",
      "text": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."
    },
    {
      "value": "fusce",
      "text": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis."
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="nullam">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="aenean">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="fusce">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with error

```json
{
  "idPrefix": "nationality",
  "name": "nationality",
  "classes": "govuk-checkboxes--small",
  "errorMessage": {
    "text": "Select a thing"
  },
  "fieldset": {
    "legend": {
      "text": "Filter by"
    }
  },
  "items": [
    {
      "value": "a",
      "text": "a thing"
    },
    {
      "value": "b",
      "text": "another thing"
    },
    {
      "value": "c",
      "text": "this thing"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-error">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <p id="nationality-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a thing
  </p>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with hint

```json
{
  "idPrefix": "nationality",
  "name": "nationality",
  "classes": "govuk-checkboxes--small",
  "fieldset": {
    "legend": {
      "text": "Filter by"
    }
  },
  "items": [
    {
      "value": "a",
      "text": "a thing",
      "hint": {
        "text": "hint for a thing"
      }
    },
    {
      "value": "b",
      "text": "another thing"
    },
    {
      "value": "c",
      "text": "this thing"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a" aria-describedby="nationality-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
      <div id="nationality-item-hint" class="govuk-hint govuk-checkboxes__hint">
        hint for a thing
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with conditional reveal

```json
{
  "name": "how-contacted",
  "idPrefix": "how-contacted",
  "classes": "govuk-checkboxes--small",
  "fieldset": {
    "legend": {
      "text": "How do you want to be contacted?"
    }
  },
  "items": [
    {
      "value": "a",
      "text": "a thing",
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"context-email\">Foo</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      "value": "b",
      "text": "another thing"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted" name="how-contacted" type="checkbox" value="a" data-aria-controls="conditional-how-contacted">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        a thing
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
      <label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-2" name="how-contacted" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        another thing
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with divider and None

```json
{
  "name": "small-with-divider-and-none",
  "classes": "govuk-checkboxes--small",
  "fieldset": {
    "legend": {
      "text": "Which types of waste do you transport regularly?"
    }
  },
  "items": [
    {
      "value": "animal",
      "text": "Waste from animal carcasses"
    },
    {
      "value": "mines",
      "text": "Waste from mines or quarries"
    },
    {
      "value": "farm",
      "text": "Farm or agricultural waste"
    },
    {
      "divider": "or"
    },
    {
      "value": "none",
      "text": "None of these",
      "behaviour": "exclusive"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none" name="small-with-divider-and-none" type="checkbox" value="animal">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none-2" name="small-with-divider-and-none" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none-3" name="small-with-divider-and-none" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none-3">
        Farm or agricultural waste
      </label>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none-5" name="small-with-divider-and-none" type="checkbox" value="none" data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none-5">
        None of these
      </label>
    </div>
  </div>
</fieldset>
</div>
```

