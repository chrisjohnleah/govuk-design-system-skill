# Tabs

Tabs can be a helpful way of letting users quickly switch between related information

The tabs component lets users navigate between related sections of content, displaying one section at a time.

**Example: Tabs**

Nunjucks:

```njk
{% from "govuk/components/tabs/macro.njk" import govukTabs %}
{% from "govuk/components/table/macro.njk" import govukTable %}

{% set pastDayHtml %}
<h2 class="govuk-heading-l">Past day</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "3"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "2"
      },
      {
        text: "0"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastWeekHtml %}
<h2 class="govuk-heading-l">Past week</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "24"
      },
      {
        text: "18"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "16"
      },
      {
        text: "20"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      },
      {
        text: "27"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastMonthHtml %}
<h2 class="govuk-heading-l">Past month</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "98"
      },
      {
        text: "95"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "122"
      },
      {
        text: "131"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "126"
      },
      {
        text: "142"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastYearHtml %}
<h2 class="govuk-heading-l">Past year</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      },
      {
        text: "1472"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      },
      {
        text: "1083"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "1539"
      },
      {
        text: "1265"
      }
    ]
  ]
}) }}
{% endset -%}

{{ govukTabs({
  items: [
    {
      label: "Past day",
      id: "past-day",
      panel: {
        html: pastDayHtml
      }
    },
    {
      label: "Past week",
      id: "past-week",
      panel: {
        html: pastWeekHtml
      }
    },
    {
      label: "Past month",
      id: "past-month",
      panel: {
        html: pastMonthHtml
      }
    },
    {
      label: "Past year",
      id: "past-year",
      panel: {
        html: pastYearHtml
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>
  <ul class="govuk-tabs__list">
          <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#past-day">
        Past day
      </a>
    </li>
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-week">
        Past week
      </a>
    </li>
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-month">
        Past month
      </a>
    </li>
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-year">
        Past year
      </a>
    </li>
  </ul>
      <div class="govuk-tabs__panel" id="past-day">
    <h2 class="govuk-heading-l">Past day</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">3</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">2</td>
          <td class="govuk-table__cell">0</td>
        </tr>
      </tbody>
    </table>
  </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
    <h2 class="govuk-heading-l">Past week</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">18</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">16</td>
          <td class="govuk-table__cell">20</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">27</td>
        </tr>
      </tbody>
    </table>
  </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
    <h2 class="govuk-heading-l">Past month</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">98</td>
          <td class="govuk-table__cell">95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">122</td>
          <td class="govuk-table__cell">131</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">126</td>
          <td class="govuk-table__cell">142</td>
        </tr>
      </tbody>
    </table>
  </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
    <h2 class="govuk-heading-l">Past year</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">1380</td>
          <td class="govuk-table__cell">1472</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1129</td>
          <td class="govuk-table__cell">1083</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">1539</td>
          <td class="govuk-table__cell">1265</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

## When to use this component

Tabs can be a helpful way of letting users quickly switch between related information if:

- your content can be usefully separated into clearly labelled sections
- the first section is more relevant than the others for most users
- users will not need to view all the sections at once

Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use.

## When not to use this component

Do not use the tabs component if the total amount of content the tabs contain will make the page slow to load. For this reason, do not use the tabs component as a form of page navigation.

Tabs hide content from users and not everyone will notice them or understand how they work.

Do not use tabs if your users might need to:

- read through all of the content in order, for example, to understand a step-by-step process
- compare information in different tabs - having to memorise the information and switch backwards and forwards can be frustrating and difficult

Test your content without tabs first. Consider if it’s better to:

- simplify and reduce the amount of content
- split the content across multiple pages
- keep the content on a single page, separated by headings
- use a table of contents to let users navigate quickly to specific sections of content

## Decide between using tabs, accordion and details

The Tabs component, [Accordion component](https://design-system.service.gov.uk/components/accordion/), and [Details component](https://design-system.service.gov.uk/components/details/) all hide sections of content which a user can choose to reveal.

If you decide to use one of these components, consider if:

- the user does not need to view more than one section at a time – consider using tabs
- the user needs to switch quickly between sections – tabs can show content without pushing other sections down the page, unlike accordions
- there are many pieces of content – tabs can fit fewer sections as they’re arranged horizontally, unlike accordions which are arranged vertically
- there’s only one or two pieces of short, less important content – the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs

## How it works

There are 2 ways to use the tabs component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Tabs** second

Nunjucks:

```njk
{% from "govuk/components/tabs/macro.njk" import govukTabs %}
{% from "govuk/components/table/macro.njk" import govukTable %}

{% set pastDayHtml %}
<h2 class="govuk-heading-l">Past day</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "3"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "2"
      },
      {
        text: "0"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastWeekHtml %}
<h2 class="govuk-heading-l">Past week</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "24"
      },
      {
        text: "18"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "16"
      },
      {
        text: "20"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      },
      {
        text: "27"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastMonthHtml %}
<h2 class="govuk-heading-l">Past month</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "98"
      },
      {
        text: "95"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "122"
      },
      {
        text: "131"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "126"
      },
      {
        text: "142"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastYearHtml %}
<h2 class="govuk-heading-l">Past year</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      },
      {
        text: "1472"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      },
      {
        text: "1083"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "1539"
      },
      {
        text: "1265"
      }
    ]
  ]
}) }}
{% endset -%}

{{ govukTabs({
  items: [
    {
      label: "Past day",
      id: "past-day",
      panel: {
        html: pastDayHtml
      }
    },
    {
      label: "Past week",
      id: "past-week",
      panel: {
        html: pastWeekHtml
      }
    },
    {
      label: "Past month",
      id: "past-month",
      panel: {
        html: pastMonthHtml
      }
    },
    {
      label: "Past year",
      id: "past-year",
      panel: {
        html: pastYearHtml
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>
  <ul class="govuk-tabs__list">
          <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#past-day">
        Past day
      </a>
    </li>
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-week">
        Past week
      </a>
    </li>
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-month">
        Past month
      </a>
    </li>
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-year">
        Past year
      </a>
    </li>
  </ul>
      <div class="govuk-tabs__panel" id="past-day">
    <h2 class="govuk-heading-l">Past day</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">3</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">2</td>
          <td class="govuk-table__cell">0</td>
        </tr>
      </tbody>
    </table>
  </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
    <h2 class="govuk-heading-l">Past week</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">18</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">16</td>
          <td class="govuk-table__cell">20</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">27</td>
        </tr>
      </tbody>
    </table>
  </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
    <h2 class="govuk-heading-l">Past month</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">98</td>
          <td class="govuk-table__cell">95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">122</td>
          <td class="govuk-table__cell">131</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">126</td>
          <td class="govuk-table__cell">142</td>
        </tr>
      </tbody>
    </table>
  </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
    <h2 class="govuk-heading-l">Past year</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th scope="col" class="govuk-table__header">Case manager</th>
          <th scope="col" class="govuk-table__header">Cases opened</th>
          <th scope="col" class="govuk-table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">1380</td>
          <td class="govuk-table__cell">1472</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1129</td>
          <td class="govuk-table__cell">1083</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">1539</td>
          <td class="govuk-table__cell">1265</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

The tabs component uses JavaScript. When JavaScript is not available, users will see the tabbed content on a single page, in order from first to last, with a table of contents that links to each of the sections.

This is also how the component currently behaves on small screens, though more research is needed on this.

### The current tab gets stored in the URL

When moving between tabs, the URL gets updated with a fragment (`#id-of-the-tab`) corresponding to the current tab's `id` attribute's value.

If the tab's name is "United Kingdom" then the fragment could be `#tab_united-kingdom`.

Because of this feature, pressing the browser's 'back' button should navigate back to the previous tab.

### Use clear labels

Tabs hide content, so the tab labels need to make it very clear what they link to, otherwise users will not know if they need to click on them.

If you struggle to come up with clear labels, it might be because the way you’ve separated the content is not clear.

### Order the tabs according to user needs

The first tab should be the most commonly-needed section. Arrange the other tabs in the order that makes most sense for your users.

### Do not disable tabs

Disabling elements is normally confusing for users. If there is no content for a tab, either remove the tab or, if that would be confusing for your users, explain why there is no content when the tab is selected.

### Avoid tabs that wrap over more than one line

If you use too many tabs or they have long labels then they may wrap over more than one line. This makes it harder for users to see the connection between the selected tab and its content.

### Add headings to tab content

Include a heading at the beginning of each tab that duplicates the information in the tab label. Providing a heading improves navigation on smaller screen sizes and for screen reader users.

## Research and testing

This component has not yet been tried in research with users.

The design, code and guidance here are based on recommendations from [Inclusive Components](https://inclusive-components.design/tabbed-interfaces/) and the [Nielsen Norman Group](https://www.nngroup.com/articles/tabs-used-right/) as well as user research findings and examples of tabs in the following services:

- Manage bereavement support payment (DWP)
- Support for check your state pension (DWP)
- Access to work integrated system (DWP)
- Bank holidays (GDS)
- Universal Credit (DWP)
- Criminal Justice Services (CPP)
- Judiciary UI internal systems (HMCTS)
- Rural Payments (Defra)

### Next steps

User research is needed to confirm:

- which types of services tabs work best in
- that this approach to tabs is the best option for screen reader users and sighted keyboard users
- how this component should behave on small screen sizes

## Nunjucks macro options

Import: `{% from "govuk/components/tabs/macro.njk" import govukTabs %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `id` | string | no | This is used for the main component and to compose the ID attribute for each item. |
| `idPrefix` | string | no | Optional prefix. This is used to prefix the `id` attribute for each tab item and panel, separated by `-`. |
| `title` | string | no | Title for the tabs table of contents. |
| `items` | array | yes | The individual tabs within the tabs component. |
| `items.id` | string | yes | Specific ID attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items.label` | string | yes | The text label of a tab item. |
| `items.attributes` | object | no | HTML attributes (for example data attributes) to add to the tab. |
| `items.panel` | object | yes | The contents of each tab within the tabs component. This is referenced as a panel. |
| `items.panel.text` | string | yes | If `html` is set, this is not required. Text to use within each tab panel. If `html` is provided, the `text` option will be ignored. |
| `items.panel.html` | string | yes | If `text` is set, this is not required. HTML to use within each tab panel. If `html` is provided, the `text` option will be ignored. |
| `items.panel.attributes` | object | no | HTML attributes (for example data attributes) to add to the tab panel. |
| `classes` | string | no | Classes to add to the tabs component. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the tabs component. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "items": [
    {
      "label": "Past day",
      "id": "past-day",
      "panel": {
        "html": "<h2 class=\"govuk-heading-l\">Past day</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">3</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">1</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">2</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      "label": "Past week",
      "id": "past-week",
      "panel": {
        "html": "<h2 class=\"govuk-heading-l\">Past week</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">24</td>\n      <td class=\"govuk-table__cell\">18</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">16</td>\n      <td class=\"govuk-table__cell\">20</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">24</td>\n      <td class=\"govuk-table__cell\">27</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      "label": "Past month",
      "id": "past-month",
      "panel": {
        "html": "<h2 class=\"govuk-heading-l\">Past month</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">98</td>\n      <td class=\"govuk-table__cell\">95</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">122</td>\n      <td class=\"govuk-table__cell\">131</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">126</td>\n      <td class=\"govuk-table__cell\">142</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      "label": "Past year",
      "id": "past-year",
      "panel": {
        "text": "There is no data for this year yet, check back later"
      }
    }
  ]
}
```

```html
<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>
  <ul class="govuk-tabs__list">
    <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#past-day">
        Past day
      </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-week">
        Past week
      </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-month">
        Past month
      </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-year">
        Past year
      </a>
    </li>
  </ul>
  <div class="govuk-tabs__panel" id="past-day">
    <h2 class="govuk-heading-l">Past day</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">3</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">2</td>
          <td class="govuk-table__cell">0</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
    <h2 class="govuk-heading-l">Past week</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">18</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">16</td>
          <td class="govuk-table__cell">20</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">27</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
    <h2 class="govuk-heading-l">Past month</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">98</td>
          <td class="govuk-table__cell">95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">122</td>
          <td class="govuk-table__cell">131</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">126</td>
          <td class="govuk-table__cell">142</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
    <p class="govuk-body">There is no data for this year yet, check back later</p>
  </div>
</div>
```

### tabs-with-anchor-in-panel

```json
{
  "items": [
    {
      "label": "Tab 1",
      "id": "tab-1",
      "panel": {
        "html": "<h2 class=\"govuk-heading-l\">Tab 1</h2>\n<p class=\"govuk-body\">Testing that when you click the anchor it moves to the anchor point successfully</p>\n<p class=\"govuk-body\"><a class=\"govuk-link\" href=\"#anchor\">Anchor</a></p>\n<p class=\"govuk-body\"><a id=\"anchor\" tabindex=\"0\">Anchor Point</a></p>\n"
      }
    },
    {
      "label": "Tab 2",
      "id": "tab-2",
      "panel": {
        "html": "<h2 class=\"govuk-heading-l\">Tab 2</h2>\n"
      }
    }
  ]
}
```

```html
<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>
  <ul class="govuk-tabs__list">
    <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#tab-1">
        Tab 1
      </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#tab-2">
        Tab 2
      </a>
    </li>
  </ul>
  <div class="govuk-tabs__panel" id="tab-1">
    <h2 class="govuk-heading-l">Tab 1</h2>
    <p class="govuk-body">Testing that when you click the anchor it moves to the anchor point successfully</p>
    <p class="govuk-body"><a class="govuk-link" href="#anchor">Anchor</a></p>
    <p class="govuk-body"><a id="anchor" tabindex="0">Anchor Point</a></p>
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="tab-2">
    <h2 class="govuk-heading-l">Tab 2</h2>
  </div>
</div>
```

