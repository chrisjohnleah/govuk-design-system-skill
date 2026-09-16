# Radios

Let users select a single option from a list using the radios component

**Example: Radios**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Where do you live?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
        England
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
        Scotland
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
        Wales
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
        Northern Ireland
      </label>
    </div>
  </div>
</fieldset>
</div>
```

## When to use this component

Use the radios component when users can only select one option from a list.

## When not to use this component

Do not use the radios component if users might need to select more than one option. In this case, you should use the [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) instead.

## How it works

Always position radios to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.

Unlike with checkboxes, users can only select one option from a list of radios. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.

If needed, add a hint explaining this, for example, 'Select one option'.

Do not pre-select radio options as this makes it more likely that users will:

- not realise they've missed a question
- submit the wrong answer

Users cannot go back to having no option selected once they have selected one, without refreshing their browser window. Therefore, you should include 'None of the above' or 'I do not know' if they are valid options.

Order radio options alphabetically by default.

In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for 'Where do you live?' based on population size.

However you should do this with extreme caution as it can reinforce bias in your service. If in doubt, order alphabetically.

Group radios together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.

### If you’re asking one question on the page

If you are asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the radios component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Radios** second

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Where do you live?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
        England
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
        Scotland
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
        Wales
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
        Northern Ireland
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**Example: Radios without a heading**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Where do you live?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
        England
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
        Scotland
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
        Wales
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
        Northern Ireland
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### Inline radios

In some cases, you can choose to display radios 'inline' beside one another (horizontally).

Only use inline radios when:

- the question only has two options
- both options are short

Remember that on small screens such as mobile devices, the radios will still be 'stacked' on top of one another (vertically).

**Example: Inline radios**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  classes: "govuk-radios--inline",
  name: "changedName",
  fieldset: {
    legend: {
      text: "Have you changed your name?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "This includes changing your last name or spelling your name differently"
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="changedName-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Have you changed your name?
    </h1>
  </legend>
  <div id="changedName-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently
  </div>
  <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="changedName" name="changedName" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="changedName">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="changedName-2" name="changedName" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="changedName-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### Radio items with hints

You can add hints to radio items to provide additional information about the options.

Keep each hint to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with an item. This could frustrate users if the text is long.

Do not use links in hint text. While screen readers will read out the link text when describing the item, they usually do not tell users the text is a link.

**Example: Radio items with hint**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "signIn",
  fieldset: {
    legend: {
      text: "How do you want to sign in?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "You’ll need an account to prove your identity and complete your Self Assessment"
  },
  items: [
    {
      value: "government-gateway",
      text: "Sign in with Government Gateway",
      hint: {
        text: "You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before"
      }
    },
    {
      value: "govuk-one-login",
      text: "Sign in with GOV.UK One Login",
      hint: {
        text: "If you don’t have a GOV.UK One Login, you can create one"
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="signIn-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  </legend>
  <div id="signIn-hint" class="govuk-hint">
    You’ll need an account to prove your identity and complete your Self Assessment
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="signIn" name="signIn" type="radio" value="government-gateway" aria-describedby="signIn-item-hint">
      <label class="govuk-label govuk-radios__label" for="signIn">
        Sign in with Government Gateway
      </label>
      <div id="signIn-item-hint" class="govuk-hint govuk-radios__hint">
        You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before
      </div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="signIn-2" name="signIn" type="radio" value="govuk-one-login" aria-describedby="signIn-2-item-hint">
      <label class="govuk-label govuk-radios__label" for="signIn-2">
        Sign in with GOV.UK One Login
      </label>
      <div id="signIn-2-item-hint" class="govuk-hint govuk-radios__hint">
        If you don’t have a GOV.UK One Login, you can create one
      </div>
    </div>
  </div>
</fieldset>
</div>
```

### Radio items with a text divider

If one or more of your radio options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.

**Example: Radios with a text divider**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    },
    {
      divider: "or"
    },
    {
      value: "abroad",
      text: "I am a British citizen living abroad"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Where do you live?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
        England
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
        Scotland
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
        Wales
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
        Northern Ireland
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-6" name="whereDoYouLive" type="radio" value="abroad">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-6">
        I am a British citizen living abroad
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### Conditionally revealing a related question

You can ask the user a related question when they select a particular radio option, so they only see the question when it's relevant to them.

This might make two related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the 'Contact me by phone' option.

**Example: Radios with conditionally revealing content**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}
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

{{ govukRadios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you prefer to be contacted?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select one option"
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
      value: "text",
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
      How would you prefer to be contacted?
    </h1>
  </legend>
  <div id="contact-hint" class="govuk-hint">
    Select one option
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="contact" name="contact" type="radio" value="email" data-aria-controls="conditional-contact">
      <label class="govuk-label govuk-radios__label" for="contact">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact">
      <div class="govuk-form-group">
  <label class="govuk-label" for="contact-by-email">
    Email address
  </label>
  <input
   class="govuk-input govuk-!-width-one-third" id="contact-by-email" name="contactByEmail" type="email" spellcheck="false" autocomplete="email">
</div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="contact-2" name="contact" type="radio" value="phone" data-aria-controls="conditional-contact-2">
      <label class="govuk-label govuk-radios__label" for="contact-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-2">
      <div class="govuk-form-group">
  <label class="govuk-label" for="contact-by-phone">
    Phone number
  </label>
  <input
   class="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contactByPhone" type="tel" autocomplete="tel">
</div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="contact-3" name="contact" type="radio" value="text" data-aria-controls="conditional-contact-3">
      <label class="govuk-label govuk-radios__label" for="contact-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-3">
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

Do not conditionally reveal questions to inline radios, such as ‘yes’ and ‘no’ options placed next to each other.

Conditionally reveal questions only - do not show or hide anything that is not a question.

#### Known issues

Users are not always notified when a conditionally revealed question is shown or hidden. This fails [WCAG 2.2 success criterion 4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html).

However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long it’s kept simple. Users we tested with did get confused when complicated questions were conditionally revealed to them, particularly questions with more than one part.

We’ll keep looking for opportunities to [learn more about how conditionally revealed questions be used in services](https://github.com/alphagov/govuk-design-system-backlog/issues/59).

### Smaller radios

Use standard-sized radios in nearly all cases. However, smaller versions work well on pages where it’s helpful to make them less visually prominent.

For example, on a page of search results, the primary user need is to see the results. Using smaller radios lets users see and change search filters without distracting them from the main content.

**Example: Small radios**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  classes: "govuk-radios--small",
  name: "changedName",
  fieldset: {
    legend: {
      text: "Filter",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--m"
    }
  },
  items: [
    {
      value: "month",
      text: "Monthly"
    },
    {
      value: "year",
      text: "Yearly"
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
      Filter
    </h1>
  </legend>
  <div class="govuk-radios govuk-radios--small" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="changedName" name="changedName" type="radio" value="month">
      <label class="govuk-label govuk-radios__label" for="changedName">
        Monthly
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="changedName-2" name="changedName" type="radio" value="year">
      <label class="govuk-label govuk-radios__label" for="changedName-2">
        Yearly
      </label>
    </div>
  </div>
</fieldset>
</div>
```

Small radios can work well on information dense screens in services designed for repeat use, like caseworking systems.

In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times.

### Error messages

Display an error message if the user has not:

- selected any radios
- answered a conditionally revealed question

Error messages should be styled like this:

**Example: Inline radios with error**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ],
  errorMessage: {
    text: "Select the country where you live"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="whereDoYouLive-error">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Where do you live?
    </h1>
  </legend>
  <p id="whereDoYouLive-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select the country where you live
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
        England
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
        Scotland
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
        Wales
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
        Northern Ireland
      </label>
    </div>
  </div>
</fieldset>
</div>
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If it’s a ‘yes’ or ‘no’ question

Say ‘Select yes if [whatever it is is true]’. For example, ‘Select yes if Sarah normally lives with you’.

#### If there are two options which are not ‘yes’ and ‘no’

Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.

#### If there are more than two options

Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.

#### If it's a conditionally revealed question

Include an [Error message component](https://design-system.service.gov.uk/components/error-message/) that is clearly related to the initial question.

**Example: Radios with conditionally revealing content showing an error**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set emailHtml %}
{{ govukInput({
  id: "contact-by-email",
  name: "contactByEmail",
  type: "email",
  autocomplete: "email",
  spellcheck: false,
  classes: "govuk-!-width-one-half",
  label: {
    text: "Email address"
  },
  errorMessage: {
    text: "Email address cannot be blank"
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

{{ govukRadios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you prefer to be contacted?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select one option"
  },
  items: [
    {
      value: "email",
      text: "Email",
      checked: true,
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
      value: "text",
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
      How would you prefer to be contacted?
    </h1>
  </legend>
  <div id="contact-hint" class="govuk-hint">
    Select one option
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="contact" name="contact" type="radio" value="email" checked data-aria-controls="conditional-contact">
      <label class="govuk-label govuk-radios__label" for="contact">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional" id="conditional-contact">
      <div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="contact-by-email">
    Email address
  </label>
  <p id="contact-by-email-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Email address cannot be blank
  </p>
  <input
   class="govuk-input govuk-!-width-one-half govuk-input--error" id="contact-by-email" name="contactByEmail" type="email" spellcheck="false" aria-describedby="contact-by-email-error" autocomplete="email">
</div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="contact-2" name="contact" type="radio" value="phone" data-aria-controls="conditional-contact-2">
      <label class="govuk-label govuk-radios__label" for="contact-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-2">
      <div class="govuk-form-group">
  <label class="govuk-label" for="contact-by-phone">
    Phone number
  </label>
  <input
   class="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contactByPhone" type="tel" autocomplete="tel">
</div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="contact-3" name="contact" type="radio" value="text" data-aria-controls="conditional-contact-3">
      <label class="govuk-label govuk-radios__label" for="contact-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-3">
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

## Research on this component

If you’ve done any user research involving conditionally revealed questions, particularly with users of assistive technologies, [tell us what you’ve learned by adding a comment to the discussion about this component](https://github.com/alphagov/govuk-design-system-backlog/issues/59).

Read a blog post about [an update to the radios and checkboxes components in 2016](https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/).

## Nunjucks macro options

Import: `{% from "govuk/components/radios/macro.njk" import govukRadios %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `fieldset` | object (component options) | no | The fieldset used by the radios component. |
| `hint` | object (component options) | no | Can be used to add a hint to the radios component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object | no | Additional options for the form group containing the radios component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object | no | Content to add before all radio items within the radios component. |
| `formGroup.beforeInputs.text` | string | yes | Text to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | yes | HTML to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object | no | Content to add after all radio items within the radios component. |
| `formGroup.afterInputs.text` | string | yes | Text to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | yes | HTML to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string | no | Optional prefix. This is used to prefix the `id` attribute for each radio input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | yes | Name attribute for the radio items. |
| `items` | array | yes | The radio items within the radios component. |
| `items.text` | string | yes | If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | yes | If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items.id` | string | no | Specific ID attribute for the radio item. If omitted, then `idPrefix` string will be applied. |
| `items.value` | string | yes | Value for the radio input. |
| `items.label` | object (component options) | no | Subset of options for the label used by each radio item within the radios component. |
| `items.label.classes` | string | no | Classes to add to the label tag. |
| `items.label.attributes` | object | no | HTML attributes (for example data attributes) to add to the label tag. |
| `items.hint` | object (component options) | no | Can be used to add a hint to each radio item within the radios component. |
| `items.divider` | string | no | Divider text to separate radio items, for example the text `"or"`. |
| `items.checked` | boolean | no | Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option. |
| `items.conditional` | object | no | Provide additional content to reveal when the radio is checked. |
| `items.conditional.html` | string | yes | The HTML to reveal when the radio is checked. |
| `items.disabled` | boolean | no | If `true`, radio will be disabled. |
| `items.attributes` | object | no | HTML attributes (for example data attributes) to add to the radio input tag. |
| `value` | string | no | The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string | no | Classes to add to the radio container. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the radio container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "name": "example-default",
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-default" name="example-default" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example-default">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-default-2" name="example-default" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="example-default-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with hint

```json
{
  "name": "example-with-hint",
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "hint": {
    "text": "This includes changing your last name or spelling your name differently."
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="example-with-hint-hint">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <div id="example-with-hint-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-with-hint" name="example-with-hint" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example-with-hint">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-with-hint-2" name="example-with-hint" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="example-with-hint-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### inline

```json
{
  "idPrefix": "example",
  "classes": "govuk-radios--inline",
  "name": "example",
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "hint": {
    "text": "This includes changing your last name or spelling your name differently."
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No",
      "checked": true
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="example-hint">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <div id="example-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>
  <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example" name="example" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
      <label class="govuk-label govuk-radios__label" for="example-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with legend as page heading

```json
{
  "idPrefix": "housing-act",
  "name": "housing-act",
  "fieldset": {
    "legend": {
      "text": "Which part of the Housing Act was your licence issued under?",
      "classes": "govuk-fieldset__legend--l",
      "isPageHeading": true
    }
  },
  "hint": {
    "text": "Select one of the options below."
  },
  "items": [
    {
      "value": "part-2",
      "html": "<span class=\"govuk-heading-s govuk-!-margin-bottom-1\">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people"
    },
    {
      "value": "part-3",
      "html": "<span class=\"govuk-heading-s govuk-!-margin-bottom-1\">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="housing-act-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Which part of the Housing Act was your licence issued under?
    </h1>
  </legend>
  <div id="housing-act-hint" class="govuk-hint">
    Select one of the options below.
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="housing-act" name="housing-act" type="radio" value="part-2">
      <label class="govuk-label govuk-radios__label" for="housing-act">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="housing-act-2" name="housing-act" type="radio" value="part-3">
      <label class="govuk-label govuk-radios__label" for="housing-act-2">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with a divider

```json
{
  "idPrefix": "example-divider",
  "name": "example",
  "fieldset": {
    "legend": {
      "text": "How do you want to sign in?"
    }
  },
  "items": [
    {
      "value": "government-gateway",
      "text": "Use Government Gateway"
    },
    {
      "value": "govuk-verify",
      "text": "Use GOV.UK Verify"
    },
    {
      "divider": "or"
    },
    {
      "value": "create-account",
      "text": "Create an account"
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
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-divider" name="example" type="radio" value="government-gateway">
      <label class="govuk-label govuk-radios__label" for="example-divider">
        Use Government Gateway
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-divider-2" name="example" type="radio" value="govuk-verify">
      <label class="govuk-label govuk-radios__label" for="example-divider-2">
        Use GOV.UK Verify
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-divider-4" name="example" type="radio" value="create-account">
      <label class="govuk-label govuk-radios__label" for="example-divider-4">
        Create an account
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with hints on items

```json
{
  "idPrefix": "gov",
  "name": "gov",
  "fieldset": {
    "legend": {
      "text": "How do you want to sign in?",
      "classes": "govuk-fieldset__legend--l",
      "isPageHeading": true
    }
  },
  "items": [
    {
      "value": "gateway",
      "text": "Sign in with Government Gateway",
      "id": "gateway",
      "hint": {
        "text": "You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
      }
    },
    {
      "value": "verify",
      "text": "Sign in with GOV.UK Verify",
      "id": "verify",
      "hint": {
        "text": "You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      }
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="gateway" name="gov" type="radio" value="gateway" aria-describedby="gateway-item-hint">
      <label class="govuk-label govuk-radios__label" for="gateway">
        Sign in with Government Gateway
      </label>
      <div id="gateway-item-hint" class="govuk-hint govuk-radios__hint">
        You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.
      </div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="verify" name="gov" type="radio" value="verify" aria-describedby="verify-item-hint">
      <label class="govuk-label govuk-radios__label" for="verify">
        Sign in with GOV.UK Verify
      </label>
      <div id="verify-item-hint" class="govuk-hint govuk-radios__hint">
        You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
    </div>
  </div>
</fieldset>
</div>
```

### without fieldset

```json
{
  "name": "colours",
  "items": [
    {
      "value": "red",
      "text": "Red"
    },
    {
      "value": "green",
      "text": "Green"
    },
    {
      "value": "blue",
      "text": "Blue"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="colours" name="colours" type="radio" value="red">
      <label class="govuk-label govuk-radios__label" for="colours">
        Red
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="colours-2" name="colours" type="radio" value="green">
      <label class="govuk-label govuk-radios__label" for="colours-2">
        Green
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="colours-3" name="colours" type="radio" value="blue">
      <label class="govuk-label govuk-radios__label" for="colours-3">
        Blue
      </label>
    </div>
  </div>
</div>
```

### with fieldset and error message

```json
{
  "idPrefix": "example",
  "name": "example",
  "errorMessage": {
    "text": "Please select an option"
  },
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No",
      "checked": true
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="example-error">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <p id="example-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example" name="example" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
      <label class="govuk-label govuk-radios__label" for="example-2">
        No
      </label>
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
  "errorMessage": {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
  <legend class="govuk-fieldset__legend">
    Maecenas faucibus mollis interdum?
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
  </div>
  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="waste" name="waste" type="radio" value="nullam">
      <label class="govuk-label govuk-radios__label" for="waste">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="waste-2" name="waste" type="radio" value="aenean">
      <label class="govuk-label govuk-radios__label" for="waste-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="waste-3" name="waste" type="radio" value="fusce">
      <label class="govuk-label govuk-radios__label" for="waste-3">
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
  "idPrefix": "how-contacted",
  "name": "how-contacted",
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
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted">
      <label class="govuk-label govuk-radios__label" for="how-contacted">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted" type="radio" value="phone" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-3" name="how-contacted" type="radio" value="text" data-aria-controls="conditional-how-contacted-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>
```

### with conditional item checked

```json
{
  "idPrefix": "how-contacted-checked",
  "name": "how-contacted-checked",
  "fieldset": {
    "legend": {
      "text": "How do you want to be contacted?"
    }
  },
  "items": [
    {
      "value": "email",
      "text": "Email",
      "checked": true,
      "conditional": {
        "html": "<label class=\"govuk-label\" for=\"context-email\">Email</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
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
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked" name="how-contacted-checked" type="radio" value="email" checked data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-2" name="how-contacted-checked" type="radio" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-3" name="how-contacted-checked" type="radio" value="text" data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-3">
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
  "idPrefix": "how-contacted-2",
  "name": "how-contacted-2",
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
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone" checked data-aria-controls="conditional-how-contacted-2-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional" id="conditional-how-contacted-2-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text" data-aria-controls="conditional-how-contacted-2-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2-3">
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
  "idPrefix": "how-contacted-2",
  "name": "how-contacted-2",
  "formGroup": {
    "classes": "govuk-radios--small"
  },
  "fieldset": {
    "legend": {
      "text": "How do you want to be contacted?"
    }
  },
  "items": [
    {
      "value": "email",
      "text": "Email"
    },
    {
      "value": "phone",
      "text": "Phone"
    },
    {
      "value": "text",
      "text": "Text message"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-radios--small">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with long text

```json
{
  "idPrefix": "foo",
  "name": "foo",
  "classes": "govuk-radios--small",
  "fieldset": {
    "legend": {
      "text": "Venenatis Condimentum"
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
    Venenatis Condimentum
  </legend>
  <div class="govuk-radios govuk-radios--small" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="foo" name="foo" type="radio" value="nullam">
      <label class="govuk-label govuk-radios__label" for="foo">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="foo-2" name="foo" type="radio" value="aenean">
      <label class="govuk-label govuk-radios__label" for="foo-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="foo-3" name="foo" type="radio" value="fusce">
      <label class="govuk-label govuk-radios__label" for="foo-3">
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
  "idPrefix": "how-contacted-2",
  "name": "how-contacted-2",
  "formGroup": {
    "classes": "govuk-radios--small"
  },
  "fieldset": {
    "legend": {
      "text": "How do you want to be contacted?"
    }
  },
  "errorMessage": {
    "text": "Select a thing"
  },
  "items": [
    {
      "value": "email",
      "text": "Email"
    },
    {
      "value": "phone",
      "text": "Phone"
    },
    {
      "value": "text",
      "text": "Text message"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error govuk-radios--small">
  <fieldset class="govuk-fieldset" aria-describedby="how-contacted-2-error">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <p id="how-contacted-2-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a thing
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with hint

```json
{
  "idPrefix": "how-contacted-2",
  "name": "how-contacted-2",
  "formGroup": {
    "classes": "govuk-radios--small"
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
      "hint": {
        "text": "Hint for email address"
      }
    },
    {
      "value": "phone",
      "text": "Phone"
    },
    {
      "value": "text",
      "text": "Text message"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-radios--small">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" aria-describedby="how-contacted-2-item-hint">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
      <div id="how-contacted-2-item-hint" class="govuk-hint govuk-radios__hint">
        Hint for email address
      </div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with conditional reveal

```json
{
  "idPrefix": "how-contacted-2",
  "name": "how-contacted-2",
  "formGroup": {
    "classes": "govuk-radios--small"
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
        "html": "<label class=\"govuk-label\" for=\"context-email\">Foo</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      "value": "phone",
      "text": "Phone"
    },
    {
      "value": "text",
      "text": "Text message"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-radios--small">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small inline

```json
{
  "idPrefix": "sort",
  "classes": "govuk-radios--small govuk-radios--inline",
  "name": "example",
  "fieldset": {
    "legend": {
      "text": "Sort by"
    }
  },
  "items": [
    {
      "value": "relevance",
      "text": "relevance"
    },
    {
      "value": "title",
      "text": "A to Z"
    },
    {
      "value": "created",
      "text": "creation date"
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Sort by
  </legend>
  <div class="govuk-radios govuk-radios--small govuk-radios--inline" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sort" name="example" type="radio" value="relevance">
      <label class="govuk-label govuk-radios__label" for="sort">
        relevance
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sort-2" name="example" type="radio" value="title">
      <label class="govuk-label govuk-radios__label" for="sort-2">
        A to Z
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sort-3" name="example" type="radio" value="created">
      <label class="govuk-label govuk-radios__label" for="sort-3">
        creation date
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### small with a divider

```json
{
  "idPrefix": "example-small-divider",
  "name": "example",
  "fieldset": {
    "legend": {
      "text": "How do you want to sign in?"
    }
  },
  "classes": "govuk-radios--small",
  "items": [
    {
      "value": "government-gateway",
      "text": "Use Government Gateway"
    },
    {
      "value": "govuk-verify",
      "text": "Use GOV.UK Verify"
    },
    {
      "divider": "or"
    },
    {
      "value": "create-account",
      "text": "Create an account"
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
  <div class="govuk-radios govuk-radios--small" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-small-divider" name="example" type="radio" value="government-gateway">
      <label class="govuk-label govuk-radios__label" for="example-small-divider">
        Use Government Gateway
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-small-divider-2" name="example" type="radio" value="govuk-verify">
      <label class="govuk-label govuk-radios__label" for="example-small-divider-2">
        Use GOV.UK Verify
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-small-divider-4" name="example" type="radio" value="create-account">
      <label class="govuk-label govuk-radios__label" for="example-small-divider-4">
        Create an account
      </label>
    </div>
  </div>
</fieldset>
</div>
```

### with conditional items and pre-checked value

```json
{
  "idPrefix": "how-contacted-checked",
  "name": "how-contacted-checked",
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
        "html": "<label class=\"govuk-label\" for=\"context-email\">Email</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
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
  ],
  "value": "text"
}
```

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked" name="how-contacted-checked" type="radio" value="email" data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-2" name="how-contacted-checked" type="radio" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-3" name="how-contacted-checked" type="radio" value="text" checked data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional" id="conditional-how-contacted-checked-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>
```

