# Summary list

Use the summary list to summarise information, for example, a user’s responses at the end of a form.

Use a summary list to summarise information, for example, a user’s responses at the end of a form.

**Example: Summary list**

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Add",
            visuallyHiddenText: "contact details"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

HTML:

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

## When to use this component

Use a summary list to show information as a list of key facts.

You can use it to display metadata like ‘Last updated’ with a date like ‘22 June 2018’, or to summarise a user’s responses at the end of a form like the [Check answers pattern](https://design-system.service.gov.uk/patterns/check-answers/).

[Summary cards are a variant within this component](#summary-cards). You can use summary cards to show multiple summary lists that describe the same type of thing, such as people. You can also add card actions that apply to the entire summary list.

## When not to use this component

The summary list uses the description list (`<dl>`) HTML element, so only use it to present information that has a key and at least one value.

Do not use it for tabular data or a simple list of information or tasks, like a [Task list component](https://design-system.service.gov.uk/components/task-list/). For those use a `<table>`, `<ul>` or `<ol>`.

## How it works

Each row of a summary list is made up of a:

- ‘key’ that’s a description or label of a piece of information, like “Name”
- ‘value’ which is the piece of information itself, such as “John Smith”

You can show a single or multiple summary lists on a page. If you’re showing multiple summary lists on a page, you can add structure by using headings or summary cards.

There are 2 ways to use the summary list component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Without actions**

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      }
    }
  ]
}) }}
```

HTML:

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
  </div>
</dl>
```

### Adding actions to each row

You can add ‘row actions’ to a summary list. For example, you can help users go back and edit an answer by adding a ‘change’ link.

When navigating visually, the borders above and below each row help to show which row action is tied to which piece of information.

Assistive technology users, including those who use a screen reader, might hear a row action link out of context and might not know what it will do. To give more context, add visually hidden text to the links. This means a screen reader user will hear the row action and the ‘key’ label for the information it will affect, like ‘Change name’ or ‘Change date of birth’.

If a user decides to go back to a previous answer through a card or row action, make sure information they've already entered is pre-populated.

**Example: Summary list** second

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Add",
            visuallyHiddenText: "contact details"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

HTML:

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

#### Showing rows with and without actions

If you’re showing a mix of rows (where some rows include actions and some do not), add the `govuk-summary-list__row--no-actions` modifier class to the rows without actions. This is to ensure the bottom border is drawn correctly in some browsers.

**Example: Summary list with a mix of rows with and without actions**

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Add",
            visuallyHiddenText: "contact details"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

HTML:

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row govuk-summary-list__row--no-actions">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

### Removing the borders

The summary list includes separating borders to help users by joining the information on each row and its action together.

Think carefully before you remove row borders. Borders help many users find and read information that’s laid out in rows, especially users who zoom in on pages or use assistive technologies to magnify their screen.

If your summary list does not have any actions, you can choose to remove the separating borders with the `govuk-summary-list--no-border` class.

**Example: Without borders**

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  classes: "govuk-summary-list--no-border",
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      }
    }
  ]
}) }}
```

HTML:

```html
<dl class="govuk-summary-list govuk-summary-list--no-border">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
  </div>
</dl>
```

To remove borders on a single row, use the `govuk-summary-list__row--no-border` class.

### Showing missing information

In some contexts, you might need to show rows that have missing information. This can happen when:

- a user returns to an incomplete journey
- you've added or changed the questions in a service.

Show a link to the appropriate question page in the `value` column so the user can enter the missing information, instead of showing a 'change' link on that row.

**Example: Summary list with missing information**

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: '<a href="#" class="govuk-link">Enter contact information</a>'
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<a href="#" class="govuk-link">Enter contact details</a>'
      }
    }
  ]
}) }}
```

HTML:

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row govuk-summary-list__row--no-actions">
    <dt class="govuk-summary-list__key">
      Contact information
    </dt>
    <dd class="govuk-summary-list__value">
      <a href="#" class="govuk-link">Enter contact information</a>
    </dd>
  </div>
  <div class="govuk-summary-list__row govuk-summary-list__row--no-actions">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <a href="#" class="govuk-link">Enter contact details</a>
    </dd>
  </div>
</dl>
```

## Summary cards

If you’re showing multiple summary lists on a page, you can show each list within a summary card. This lets you visually separate each summary list and give each a title and some actions.

Use summary cards when you need to show:

- multiple summary lists that all describe the same type of thing, such as people
- actions that will apply to all the items in a list

Summary cards are often used in case working systems to help users quickly view a set of information and related actions.

Do not use summary cards if you only need to show a small amount of related information. Use summary lists instead, and structure them with headings if needed.

If you’re showing summary cards at the end of a longer journey, you might want to familiarise the user with them earlier on – such as when the user reviews individual sections.

### Card titles

Use the summary card’s header area to give each summary list a title.

Each title must be unique and help identify what the summary list describes. For example, this could be the name of a specific person, organisation or professional qualification.

Try to keep titles short and relevant. You can use one or two important values in the summary list – such as the first and last name of a person.

**Example: Summary in a card with a title**

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  card: {
    title: {
      text: "Lead tenant"
    }
  },
  rows: [
    {
      key: {
        text: "Age"
      },
      value: {
        html: "38"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "age"
          }
        ]
      }
    },
    {
      key: {
        text: "Nationality"
      },
      value: {
        html: "UK national resident in UK"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "nationality"
          }
        ]
      }
    },
    {
      key: {
        text: "Working situation"
      },
      value: {
        html: "Part time – less than 30 hours a week"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "working situation"
          }
        ]
      }
    }
  ]
}) }}

{{ govukSummaryList({
  card: {
    title: {
      text: "Person 2"
    }
  },
  rows: [
    {
      key: {
        text: "Details known"
      },
      value: {
        html: "Yes"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "whether details are known"
          }
        ]
      }
    },
    {
      key: {
        text: "Relationship to lead tenant"
      },
      value: {
        html: "Partner"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "relationship to lead tenant"
          }
        ]
      }
    },
    {
      key: {
        text: "Age"
      },
      value: {
        html: "42"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "age"
          }
        ]
      }
    },
    {
      key: {
        text: "Working situation"
      },
      value: {
        html: "Unable to work because of long-term sickness or disability"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "working situation"
          }
        ]
      }
    }
  ]
}) }}

{{ govukSummaryList({
  card: {
    title: {
      text: "Person 3"
    }
  },
  rows: [
    {
      key: {
        text: "Details known"
      },
      value: {
        html: "Yes"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "whether details are known"
          }
        ]
      }
    },
    {
      key: {
        text: "Relationship to lead tenant"
      },
      value: {
        html: "Child"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "relationship to lead tenant"
          }
        ]
      }
    },
    {
      key: {
        text: "Age"
      },
      value: {
        html: "7"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "age"
          }
        ]
      }
    },
    {
      key: {
        text: "Working situation"
      },
      value: {
        html: "Child under 16"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "working situation"
          }
        ]
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Lead tenant
    </h2>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Age
        </dt>
        <dd class="govuk-summary-list__value">
          38
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> age (Lead tenant)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Nationality
        </dt>
        <dd class="govuk-summary-list__value">
          UK national resident in UK
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> nationality (Lead tenant)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Working situation
        </dt>
        <dd class="govuk-summary-list__value">
          Part time – less than 30 hours a week
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> working situation (Lead tenant)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Person 2
    </h2>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Details known
        </dt>
        <dd class="govuk-summary-list__value">
          Yes
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> whether details are known (Person 2)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Relationship to lead tenant
        </dt>
        <dd class="govuk-summary-list__value">
          Partner
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> relationship to lead tenant (Person 2)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Age
        </dt>
        <dd class="govuk-summary-list__value">
          42
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> age (Person 2)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Working situation
        </dt>
        <dd class="govuk-summary-list__value">
          Unable to work because of long-term sickness or disability
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> working situation (Person 2)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Person 3
    </h2>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Details known
        </dt>
        <dd class="govuk-summary-list__value">
          Yes
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> whether details are known (Person 3)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Relationship to lead tenant
        </dt>
        <dd class="govuk-summary-list__value">
          Child
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> relationship to lead tenant (Person 3)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Age
        </dt>
        <dd class="govuk-summary-list__value">
          7
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> age (Person 3)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Working situation
        </dt>
        <dd class="govuk-summary-list__value">
          Child under 16
        </dd>
        <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> working situation (Person 3)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
```

### Adding card actions

You can add card actions in the header, which will be shown after the summary card's title.

For example, if you have multiple rows with "change" actions that all take the user to the same place, you can show a single “change” card action instead. This helps avoid repeating the same row action on every row.

Card actions are shown in bold text to make them visually distinct from row actions – and help alert the user that the card action will affect the entire summary card.

Write link text for card actions to tell the user what the card action will do and that it will apply to the entire summary card. It should also be as short as possible, usually 2 words.

Example card actions include:

- Remove tenant
- Edit qualification
- Update issue
- Approve application
- Cancel order

Keep it short and do not add more than 2 to 3 actions in a header.

If a card action cannot easily be undone or might have serious consequences, consider adding a warning or asking the user for confirmation.

**Example: Summary in a card with a title and actions**

Nunjucks:

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  card: {
    title: {
      text: "University of Gloucestershire"
    },
    actions: {
      items: [
        {
          href: "#",
          text: "Delete choice"
        },
        {
          href: "#",
          text: "Withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Course"
      },
      value: {
        html: "English (3DMD)<br>PGCE with QTS full time"
      }
    },
    {
      key: {
        text: "Location"
      },
      value: {
        html: "School name<br>Road, City, SW1 1AA"
      }
    }
  ]
}) }}

{{ govukSummaryList({
  card: {
    title: {
      text: "University of Bristol"
    },
    actions: {
      items: [
        {
          href: "#",
          text: "Delete choice"
        },
        {
          href: "#",
          text: "Withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Course"
      },
      value: {
        html: "English (Q3X1)<br>PGCE with QTS full time"
      }
    },
    {
      key: {
        text: "Location"
      },
      value: {
        html: "School name<br>Road, City, SW2 1AA"
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      University of Gloucestershire
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Delete choice<span class="govuk-visually-hidden"> (University of Gloucestershire)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Withdraw<span class="govuk-visually-hidden"> (University of Gloucestershire)</span></a>
      </li>
    </ul>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Course
        </dt>
        <dd class="govuk-summary-list__value">
          English (3DMD)<br>PGCE with QTS full time
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Location
        </dt>
        <dd class="govuk-summary-list__value">
          School name<br>Road, City, SW1 1AA
        </dd>
      </div>
    </dl>
  </div>
</div>
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      University of Bristol
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Delete choice<span class="govuk-visually-hidden"> (University of Bristol)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Withdraw<span class="govuk-visually-hidden"> (University of Bristol)</span></a>
      </li>
    </ul>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Course
        </dt>
        <dd class="govuk-summary-list__value">
          English (Q3X1)<br>PGCE with QTS full time
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Location
        </dt>
        <dd class="govuk-summary-list__value">
          School name<br>Road, City, SW2 1AA
        </dd>
      </div>
    </dl>
  </div>
</div>
```

## Research on this component

This component was developed and tested by the Government Digital Service as part of the [check answers pattern](https://design-system.service.gov.uk/patterns/check-answers/).

The Department for Education contributed the summary card. It’s being used in some of their services, such as:

- [Apply for teacher training](https://www.gov.uk/apply-for-teacher-training), used by the general public
- [Register trainee teachers](https://www.register-trainee-teachers.service.gov.uk/), used by people that work for training providers

The summary card is also used in services run by other departments, such us:

- manage supervisions (Ministry of Justice)
- submit social housing lettings and sales data (Department for Levelling Up, Housing & Communities)

### Next steps

We still want to learn more about when this component works well.

If you use this component in your service, we'd like to hear about how you use the summary list and summary card, as well as any research findings you might have.

## Nunjucks macro options

Import: `{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `rows` | array | yes | The rows within the summary list component. |
| `rows.classes` | string | no | Classes to add to the row `div`. |
| `rows.key` | object | yes | The reference content (key) for each row item in the summary list component. |
| `rows.key.text` | string | yes | If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.html` | string | yes | If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows.key.classes` | string | no | Classes to add to the key wrapper. |
| `rows.value` | object | yes | The value for each row item in the summary list component. |
| `rows.value.text` | string | yes | If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.html` | string | yes | If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows.value.classes` | string | no | Classes to add to the value wrapper. |
| `rows.actions` | object | no | The action link content for each row item in the summary list component. |
| `rows.actions.items` | array | no | The action link items within the row item of the summary list component. |
| `rows.actions.items.href` | string | yes | The value of the link's `href` attribute for an action item. |
| `rows.actions.items.text` | string | yes | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.html` | string | yes | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows.actions.items.visuallyHiddenText` | string | no | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `rows.actions.items.classes` | string | no | Classes to add to the action item. |
| `rows.actions.items.attributes` | object | no | HTML attributes (for example data attributes) to add to the action item. |
| `rows.actions.classes` | string | no | Classes to add to the actions wrapper. |
| `card` | object | no | Can be used to wrap a summary card around the summary list component. If any of these options are present, a summary card will wrap around the summary list. |
| `card.title` | object | no | Data for the summary card header. |
| `card.title.text` | string | no | Text to use within each title. If `html` is provided, the `text` option will be ignored. |
| `card.title.html` | string | no | Text to use within each title. If `html` is provided, the `text` option will be ignored. |
| `card.title.headingLevel` | integer | no | Heading level, from `1` to `6`. Default is `2`. |
| `card.title.classes` | string | no | Classes to add to the title wrapper. |
| `card.actions` | object | no | The action link content shown in the header of each summary card wrapped around the summary list component. |
| `card.actions.items` | array | no | The action link items shown in the header within the summary card wrapped around the summary list component. |
| `card.actions.items.href` | string | yes | The value of the link's `href` attribute for an action item. |
| `card.actions.items.text` | string | yes | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `card.actions.items.html` | string | yes | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `card.actions.items.visuallyHiddenText` | string | no | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `card.actions.items.classes` | string | no | Classes to add to the action item. |
| `card.actions.items.attributes` | object | no | HTML attributes (for example data attributes) to add to the action item. |
| `card.actions.classes` | string | no | Classes to add to the actions wrapper. |
| `card.classes` | string | no | Classes to add to the container. |
| `card.attributes` | object | no | HTML attributes (for example data attributes) to add to the container. |
| `classes` | string | no | Classes to add to the container. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      }
    },
    {
      "key": {
        "text": "Contact information"
      },
      "value": {
        "html": "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      }
    }
  ]
}
```

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Firstname Lastname
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      13/08/1980
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact information
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">
        email@email.com
      </p>
      <p class="govuk-body">
        Address line 1<br>
        Address line 2<br>
        Address line 3<br>
        Address line 4<br>
        Address line 5
      </p>
    </dd>
  </div>
</dl>
```

### with actions

```json
{
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Edit",
            "visuallyHiddenText": "name"
          },
          {
            "href": "#",
            "text": "Delete",
            "visuallyHiddenText": "name"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Change",
            "visuallyHiddenText": "date of birth"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Contact information"
      },
      "value": {
        "html": "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Edit",
            "visuallyHiddenText": "contact information"
          },
          {
            "href": "#",
            "text": "Change",
            "visuallyHiddenText": "contact information"
          }
        ]
      }
    }
  ]
}
```

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Firstname Lastname
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Edit<span class="govuk-visually-hidden"> name</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Delete<span class="govuk-visually-hidden"> name</span></a>
        </li>
      </ul>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      13/08/1980
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact information
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">
        email@email.com
      </p>
      <p class="govuk-body">
        Address line 1<br>
        Address line 2<br>
        Address line 3<br>
        Address line 4<br>
        Address line 5
      </p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Edit<span class="govuk-visually-hidden"> contact information</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact information</span></a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

### no-border

```json
{
  "classes": "govuk-summary-list--no-border",
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      }
    },
    {
      "key": {
        "text": "Contact information"
      },
      "value": {
        "html": "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      }
    }
  ]
}
```

```html
<dl class="govuk-summary-list govuk-summary-list--no-border">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Firstname Lastname
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      13/08/1980
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact information
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">
        email@email.com
      </p>
      <p class="govuk-body">
        Address line 1<br>
        Address line 2<br>
        Address line 3<br>
        Address line 4<br>
        Address line 5
      </p>
    </dd>
  </div>
</dl>
```

### no-border on last row

```json
{
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      }
    },
    {
      "key": {
        "text": "Contact information"
      },
      "value": {
        "html": "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      },
      "classes": "govuk-summary-list__row--no-border"
    }
  ]
}
```

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Firstname Lastname
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      13/08/1980
    </dd>
  </div>
  <div class="govuk-summary-list__row govuk-summary-list__row--no-border">
    <dt class="govuk-summary-list__key">
      Contact information
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">
        email@email.com
      </p>
      <p class="govuk-body">
        Address line 1<br>
        Address line 2<br>
        Address line 3<br>
        Address line 4<br>
        Address line 5
      </p>
    </dd>
  </div>
</dl>
```

### extreme

```json
{
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Buy"
          },
          {
            "href": "#",
            "text": "Use"
          },
          {
            "href": "#",
            "text": "Break"
          },
          {
            "href": "#",
            "text": "Fix"
          },
          {
            "href": "#",
            "text": "Trash"
          },
          {
            "href": "#",
            "text": "Change"
          },
          {
            "href": "#",
            "text": "Mail"
          },
          {
            "href": "#",
            "text": "Upgrade"
          },
          {
            "href": "#",
            "text": "Charge"
          },
          {
            "href": "#",
            "text": "Point"
          },
          {
            "href": "#",
            "text": "Zoom"
          },
          {
            "href": "#",
            "text": "Press"
          },
          {
            "href": "#",
            "text": "Snap"
          },
          {
            "href": "#",
            "text": "Work"
          },
          {
            "href": "#",
            "text": "Quick"
          },
          {
            "href": "#",
            "text": "Erase"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Long website address"
      },
      "value": {
        "html": "<a class=\"govuk-link\" href=\"https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch\">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>\n"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Change",
            "visuallyHiddenText": "long website address"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Long email address"
      },
      "value": {
        "html": "<a class=\"govuk-link\" href=\"mailto:webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com\">webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com</a>\n"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Change",
            "visuallyHiddenText": "long email address"
          }
        ]
      }
    },
    {
      "key": {
        "text": "No wrapping allowed"
      },
      "value": {
        "html": "<p class=\"govuk-body\" style=\"white-space: nowrap;\">michelle.longish.name@example.com</p>\n"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Change",
            "visuallyHiddenText": "no wrapping allowed"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Pneumonoultramicroscopicsilicovolcanoconiosis"
      },
      "value": {
        "html": "<p class=\"govuk-body\">Pneumonoultramicroscopicsilicovolcanoconiosis is a word coined by the president of the National Puzzlers’ League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the Oxford English Dictionary, which defines it as \"an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust.\"</p>\n<p class=\"govuk-body\">Silicosis is a form of occupational lung disease caused by inhalation of crystalline silica dust, and is marked by inflammation and scarring in the form of nodular lesions in the upper lobes of the lungs. It is a type of pneumoconiosis.</p>\n"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Write"
          },
          {
            "href": "#",
            "text": "Cut"
          },
          {
            "href": "#",
            "text": "Paste"
          },
          {
            "href": "#",
            "text": "Save"
          },
          {
            "href": "#",
            "text": "Load"
          },
          {
            "href": "#",
            "text": "Check"
          },
          {
            "href": "#",
            "text": "Quick"
          },
          {
            "href": "#",
            "text": "Rewrite"
          },
          {
            "href": "#",
            "text": "Plug"
          },
          {
            "href": "#",
            "text": "Play"
          },
          {
            "href": "#",
            "text": "Burn"
          },
          {
            "href": "#",
            "text": "Rip"
          },
          {
            "href": "#",
            "text": "Drag and drop"
          },
          {
            "href": "#",
            "text": "Zip"
          },
          {
            "href": "#",
            "text": "Unzip"
          },
          {
            "href": "#",
            "text": "Lock"
          },
          {
            "href": "#",
            "text": "Fill"
          },
          {
            "href": "#",
            "text": "Curl"
          },
          {
            "href": "#",
            "text": "Find"
          },
          {
            "href": "#",
            "text": "View"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Its vanished trees, the trees that had made way for Gatsby’s house, Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder."
      },
      "value": {
        "text": "The Great Gatsby"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Code"
          },
          {
            "href": "#",
            "text": "Jam"
          },
          {
            "href": "#",
            "text": "Unlock"
          },
          {
            "href": "#",
            "text": "Surf"
          },
          {
            "href": "#",
            "text": "Scroll"
          },
          {
            "href": "#",
            "text": "Pose"
          },
          {
            "href": "#",
            "text": "Click"
          },
          {
            "href": "#",
            "text": "Cross"
          },
          {
            "href": "#",
            "text": "Crack"
          },
          {
            "href": "#",
            "text": "Twitch"
          },
          {
            "href": "#",
            "text": "Update"
          },
          {
            "href": "#",
            "text": "Name"
          },
          {
            "href": "#",
            "text": "Read"
          },
          {
            "href": "#",
            "text": "Tune"
          },
          {
            "href": "#",
            "text": "Print"
          },
          {
            "href": "#",
            "text": "Scan"
          },
          {
            "href": "#",
            "text": "Send"
          },
          {
            "href": "#",
            "text": "Fax"
          },
          {
            "href": "#",
            "text": "Rename"
          },
          {
            "href": "#",
            "text": "Touch"
          },
          {
            "href": "#",
            "text": "Bring"
          },
          {
            "href": "#",
            "text": "Pay"
          },
          {
            "href": "#",
            "text": "Watch"
          },
          {
            "href": "#",
            "text": "Turn"
          },
          {
            "href": "#",
            "text": "Leave"
          },
          {
            "href": "#",
            "text": "Stop"
          },
          {
            "href": "#",
            "text": "Format"
          }
        ]
      }
    }
  ]
}
```

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Buy</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Use</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Break</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Fix</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Trash</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Mail</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Upgrade</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Charge</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Point</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Zoom</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Press</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Snap</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Work</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Quick</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Erase</a>
        </li>
      </ul>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Long website address
    </dt>
    <dd class="govuk-summary-list__value">
      <a class="govuk-link" href="https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> long website address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Long email address
    </dt>
    <dd class="govuk-summary-list__value">
      <a class="govuk-link" href="mailto:webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com">webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com</a>
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> long email address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      No wrapping allowed
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body" style="white-space: nowrap;">michelle.longish.name@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> no wrapping allowed</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Pneumonoultramicroscopicsilicovolcanoconiosis
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">Pneumonoultramicroscopicsilicovolcanoconiosis is a word coined by the president of the National Puzzlers’ League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the Oxford English Dictionary, which defines it as "an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust."</p>
      <p class="govuk-body">Silicosis is a form of occupational lung disease caused by inhalation of crystalline silica dust, and is marked by inflammation and scarring in the form of nodular lesions in the upper lobes of the lungs. It is a type of pneumoconiosis.</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Write</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Cut</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Paste</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Save</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Load</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Check</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Quick</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Rewrite</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Plug</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Play</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Burn</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Rip</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Drag and drop</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Zip</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Unzip</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Lock</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Fill</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Curl</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Find</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">View</a>
        </li>
      </ul>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Its vanished trees, the trees that had made way for Gatsby’s house, Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder.
    </dt>
    <dd class="govuk-summary-list__value">
      The Great Gatsby
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Code</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Jam</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Unlock</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Surf</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Scroll</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Pose</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Click</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Cross</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Crack</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Twitch</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Update</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Name</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Read</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Tune</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Print</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Scan</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Send</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Fax</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Rename</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Touch</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Bring</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Pay</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Watch</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Turn</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Leave</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Stop</a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Format</a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

### as a summary card with a text header

```json
{
  "card": {
    "title": {
      "text": "Undergraduate teaching assistant"
    }
  },
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      }
    }
  ]
}
```

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Undergraduate teaching assistant
    </h2>
  </div>

  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
    </dl>
  </div>
</div>
```

### as a summary card with a html header

```json
{
  "card": {
    "title": {
      "html": "<em>Undergraduate teaching assistant</em>"
    }
  },
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      }
    }
  ]
}
```

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      <em>Undergraduate teaching assistant</em>
    </h2>
  </div>

  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
    </dl>
  </div>
</div>
```

### as a summary card with actions

```json
{
  "card": {
    "title": {
      "text": "Undergraduate teaching assistant"
    },
    "actions": {
      "items": [
        {
          "text": "Delete job history",
          "href": "#"
        },
        {
          "text": "Withdraw job history",
          "href": "#"
        }
      ]
    }
  },
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      }
    }
  ]
}
```

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Undergraduate teaching assistant
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Delete job history<span class="govuk-visually-hidden"> (Undergraduate teaching assistant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Withdraw job history<span class="govuk-visually-hidden"> (Undergraduate teaching assistant)</span></a>
      </li>
    </ul>
  </div>

  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
    </dl>
  </div>
</div>
```

### as a summary card with actions plus summary list actions

```json
{
  "card": {
    "title": {
      "text": "Undergraduate teaching assistant"
    },
    "actions": {
      "items": [
        {
          "text": "Delete job history",
          "href": "#"
        },
        {
          "text": "Withdraw job history",
          "href": "#"
        }
      ]
    }
  },
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Firstname Lastname"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Edit",
            "visuallyHiddenText": "name"
          },
          {
            "href": "#",
            "text": "Delete",
            "visuallyHiddenText": "name"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Date of birth"
      },
      "value": {
        "text": "13/08/1980"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Change",
            "visuallyHiddenText": "date of birth"
          }
        ]
      }
    }
  ]
}
```

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Undergraduate teaching assistant
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Delete job history<span class="govuk-visually-hidden"> (Undergraduate teaching assistant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Withdraw job history<span class="govuk-visually-hidden"> (Undergraduate teaching assistant)</span></a>
      </li>
    </ul>
  </div>

  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
        <dd class="govuk-summary-list__actions">
          <ul class="govuk-summary-list__actions-list">
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Edit<span class="govuk-visually-hidden"> name (Undergraduate teaching assistant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Delete<span class="govuk-visually-hidden"> name (Undergraduate teaching assistant)</span></a>
            </li>
          </ul>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth (Undergraduate teaching assistant)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
```

### as a summary card extreme

```json
{
  "card": {
    "title": {
      "text": "Senior mid-level customer experience enhancement consultant"
    },
    "actions": {
      "items": [
        {
          "text": "Bop it",
          "href": "#"
        },
        {
          "text": "Twist it",
          "href": "#"
        },
        {
          "text": "Pull it",
          "href": "#"
        },
        {
          "text": "Flick it",
          "href": "#"
        },
        {
          "text": "Spin it",
          "href": "#"
        },
        {
          "text": "Shout it",
          "href": "#"
        },
        {
          "text": "Shake it",
          "href": "#"
        }
      ]
    }
  },
  "rows": [
    {
      "key": {
        "text": "Name"
      },
      "value": {
        "text": "Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Buy"
          },
          {
            "href": "#",
            "text": "Use"
          },
          {
            "href": "#",
            "text": "Break"
          },
          {
            "href": "#",
            "text": "Fix"
          },
          {
            "href": "#",
            "text": "Trash"
          },
          {
            "href": "#",
            "text": "Change"
          },
          {
            "href": "#",
            "text": "Mail"
          },
          {
            "href": "#",
            "text": "Upgrade"
          },
          {
            "href": "#",
            "text": "Charge"
          },
          {
            "href": "#",
            "text": "Point"
          },
          {
            "href": "#",
            "text": "Zoom"
          },
          {
            "href": "#",
            "text": "Press"
          },
          {
            "href": "#",
            "text": "Snap"
          },
          {
            "href": "#",
            "text": "Work"
          },
          {
            "href": "#",
            "text": "Quick"
          },
          {
            "href": "#",
            "text": "Erase"
          }
        ]
      }
    },
    {
      "key": {
        "text": "Long website address"
      },
      "value": {
        "html": "<a class=\"govuk-link\" href=\"https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch\">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>\n"
      },
      "actions": {
        "items": [
          {
            "href": "#",
            "text": "Change",
            "visuallyHiddenText": "long website address"
          }
        ]
      }
    }
  ]
}
```

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Senior mid-level customer experience enhancement consultant
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Bop it<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Twist it<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Pull it<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Flick it<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Spin it<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Shout it<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Shake it<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
      </li>
    </ul>
  </div>

  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky
        </dd>
        <dd class="govuk-summary-list__actions">
          <ul class="govuk-summary-list__actions-list">
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Buy<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Use<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Break<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Fix<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Trash<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Mail<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Upgrade<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Charge<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Point<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Zoom<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Press<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Snap<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Work<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Quick<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="#">Erase<span class="govuk-visually-hidden"> (Senior mid-level customer experience enhancement consultant)</span></a>
            </li>
          </ul>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Long website address
        </dt>
        <dd class="govuk-summary-list__value">
          <a class="govuk-link" href="https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> long website address (Senior mid-level customer experience enhancement consultant)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
```

