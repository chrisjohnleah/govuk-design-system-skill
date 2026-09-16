# Table

Use the table component to make information easier to compare and scan for users

Use the table component to make information easier to compare and scan for users.

**Example: Table**

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Amount"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      }
    ]
  ]
}) }}
```

HTML:

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Dates and amounts</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Date</th>
      <th scope="col" class="govuk-table__header">Amount</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">First 6 weeks</th>
      <td class="govuk-table__cell">£109.80 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Next 33 weeks</th>
      <td class="govuk-table__cell">£109.80 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Total estimated pay</th>
      <td class="govuk-table__cell">£4,282.20</td>
    </tr>
  </tbody>
</table>
```

## When to use this component

Use the table component to let users compare information in rows and columns.

## When not to use this component

Never use the table component to layout content on a page. Instead, use the [grid system](https://design-system.service.gov.uk/styles/layout/#using-the-grid-system).

## How it works

### Table captions

Use the `<caption>` element to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.

There are other styling options for table captions. You can use `govuk-table__caption--s`, `govuk-table__caption--m`, `govuk-table__caption--l` and `govuk-table__caption--xl` classes to make them larger or smaller from the default.

**Example: Custom caption size**

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Months and rates",
  captionClasses: "govuk-table__caption--l",
  firstCellIsHeader: true,
  head: [
    {
      text: "Month you apply"
    },
    {
      text: "Rate for vehicles"
    }
  ],
  rows: [
    [
      {
        text: "January"
      },
      {
        text: "£95"
      }
    ],
    [
      {
        text: "February"
      },
      {
        text: "£55"
      }
    ],
    [
      {
        text: "March"
      },
      {
        text: "£125"
      }
    ]
  ]
}) }}
```

HTML:

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--l">Months and rates</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">January</th>
      <td class="govuk-table__cell">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">February</th>
      <td class="govuk-table__cell">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">March</th>
      <td class="govuk-table__cell">£125</td>
    </tr>
  </tbody>
</table>
```

### Table headers

Use table headers to tell users what the rows and columns represent. Use the `scope` attribute to help users of assistive technology distinguish between row and column headers.

There are 2 ways to use the table component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Table** second

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Amount"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      }
    ]
  ]
}) }}
```

HTML:

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Dates and amounts</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Date</th>
      <th scope="col" class="govuk-table__header">Amount</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">First 6 weeks</th>
      <td class="govuk-table__cell">£109.80 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Next 33 weeks</th>
      <td class="govuk-table__cell">£109.80 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Total estimated pay</th>
      <td class="govuk-table__cell">£4,282.20</td>
    </tr>
  </tbody>
</table>
```

## Numbers in a table

When comparing columns of numbers, align the numbers to the right in table cells.

**Example: Numbers in a table**

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Months and rates",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Month you apply"
    },
    {
      text: "Rate for bicycles",
      format: "numeric"
    },
    {
      text: "Rate for vehicles",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "January"
      },
      {
        text: "£85",
        format: "numeric"
      },
      {
        text: "£95",
        format: "numeric"
      }
    ],
    [
      {
        text: "February"
      },
      {
        text: "£75",
        format: "numeric"
      },
      {
        text: "£55",
        format: "numeric"
      }
    ],
    [
      {
        text: "March"
      },
      {
        text: "£165",
        format: "numeric"
      },
      {
        text: "£125",
        format: "numeric"
      }
    ]
  ]
}) }}
```

HTML:

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Months and rates</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">January</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">February</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">March</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>
```

## Custom column widths

You can use the [width override classes](https://design-system.service.gov.uk/styles/layout/#width-override-classes) to set the width of table columns.

**Example: Custom width using override classes**

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Month you apply",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date",
      classes: "govuk-!-width-one-half"
    },
    {
      text: "Rate for vehicles",
      classes: "govuk-!-width-one-quarter"
    },
    {
      text: "Rate for bicycles",
      classes: "govuk-!-width-one-quarter"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      },
      {
        text: "£59.10 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£159.80 per week"
      },
      {
        text: "£89.10 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      },
      {
        text: "£2,182.20"
      }
    ]
  ]
}) }}
```

HTML:

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Month you apply</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header govuk-!-width-one-half">Date</th>
      <th scope="col" class="govuk-table__header govuk-!-width-one-quarter">Rate for vehicles</th>
      <th scope="col" class="govuk-table__header govuk-!-width-one-quarter">Rate for bicycles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">First 6 weeks</th>
      <td class="govuk-table__cell">£109.80 per week</td>
      <td class="govuk-table__cell">£59.10 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Next 33 weeks</th>
      <td class="govuk-table__cell">£159.80 per week</td>
      <td class="govuk-table__cell">£89.10 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Total estimated pay</th>
      <td class="govuk-table__cell">£4,282.20</td>
      <td class="govuk-table__cell">£2,182.20</td>
    </tr>
  </tbody>
</table>
```

If the [width override classes](https://design-system.service.gov.uk/styles/layout/#width-override-classes) do not meet your needs you can create your own width classes and apply them to the cells in the table head. These can be added using the `classes` option in the Nunjucks macro or adding the class directly to the individual cells within `govuk-table__head` as below.

To learn more about this, read guidance on [extending and modifying components in production](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/).

**Example: Custom width using custom classes**

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Month you apply",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date",
      classes: "app-custom-class"
    },
    {
      text: "Rate for vehicles",
      classes: "app-custom-class"
    },
    {
      text: "Rate for bicycles",
      classes: "app-custom-class"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      },
      {
        text: "£59.10 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£159.80 per week"
      },
      {
        text: "£89.10 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      },
      {
        text: "£2,182.20"
      }
    ]
  ]
}) }}
```

HTML:

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Month you apply</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header app-custom-class">Date</th>
      <th scope="col" class="govuk-table__header app-custom-class">Rate for vehicles</th>
      <th scope="col" class="govuk-table__header app-custom-class">Rate for bicycles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">First 6 weeks</th>
      <td class="govuk-table__cell">£109.80 per week</td>
      <td class="govuk-table__cell">£59.10 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Next 33 weeks</th>
      <td class="govuk-table__cell">£159.80 per week</td>
      <td class="govuk-table__cell">£89.10 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Total estimated pay</th>
      <td class="govuk-table__cell">£4,282.20</td>
      <td class="govuk-table__cell">£2,182.20</td>
    </tr>
  </tbody>
</table>
```

## Tables with a lot of data

If possible, you should aim to have less data in your tables. If you have a lot of data, try to organise it into multiple tables or multiple pages.

If you cannot split your data, you can use the CSS class `govuk-table--small-text-until-tablet`. This class reduces the size of the text on small screens so large amounts of data has more empty space around it. This makes it easier to visually differentiate between each piece of data when read on small screens.

<div class="govuk-inset-text">
  

  <p>The CSS class <code>govuk-table--small-text-until-tablet</code> is only available in version 5.2 of GOV.UK Frontend and later.</p>
  <p>Read about <a href="/get-started/new-type-scale/">updating your service to use the new type scale</a>.</p>

</div>

You should not use this class on tables unless your table has a lot of data, because a smaller amount of data is easier to read if the text is larger.

**Example: Lots of data**

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  classes: "govuk-table--small-text-until-tablet",
  head: [
    {
      text: "Date"
    },
    {
      text: "First amount"
    },
    {
      text: "Second amount"
    }
  ],
  rows: [
    [
      {
        text: "First 3 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Next 6 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Next 24 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      },
      {
        text: "£5,288.40"
      }
    ]
  ]
}) }}
```

HTML:

```html
<table class="govuk-table govuk-table--small-text-until-tablet">
  <caption class="govuk-table__caption govuk-table__caption--m">Dates and amounts</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Date</th>
      <th scope="col" class="govuk-table__header">First amount</th>
      <th scope="col" class="govuk-table__header">Second amount</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">First 3 weeks</th>
      <td class="govuk-table__cell">£27.45 per week</td>
      <td class="govuk-table__cell">£33.90 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Next 6 weeks</th>
      <td class="govuk-table__cell">£27.45 per week</td>
      <td class="govuk-table__cell">£33.90 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Next 24 weeks</th>
      <td class="govuk-table__cell">£27.45 per week</td>
      <td class="govuk-table__cell">£33.90 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Next 33 weeks</th>
      <td class="govuk-table__cell">£27.45 per week</td>
      <td class="govuk-table__cell">£33.90 per week</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Total estimated pay</th>
      <td class="govuk-table__cell">£4,282.20</td>
      <td class="govuk-table__cell">£5,288.40</td>
    </tr>
  </tbody>
</table>
```

## Nunjucks macro options

Import: `{% from "govuk/components/table/macro.njk" import govukTable %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `rows` | array | yes | The rows within the table component. |
| `rows.text` | string | yes | If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows.html` | string | yes | If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows.format` | string | no | Specify format of a cell. Currently we only use "numeric". |
| `rows.classes` | string | no | Classes to add to the table row cell. |
| `rows.colspan` | integer | no | Specify how many columns a cell extends. |
| `rows.rowspan` | integer | no | Specify how many rows a cell extends. |
| `rows.attributes` | object | no | HTML attributes (for example data attributes) to add to the table cell. |
| `head` | array | no | Can be used to add a row of table header cells (`<th>`) at the top of the table component. |
| `head.text` | string | no | If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head.html` | string | no | If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head.format` | string | no | Specify format of a cell. Currently we only use "numeric". |
| `head.classes` | string | no | Classes to add to the table head cell. |
| `head.colspan` | integer | no | Specify how many columns a cell extends. |
| `head.rowspan` | integer | no | Specify how many rows a cell extends. |
| `head.attributes` | object | no | HTML attributes (for example data attributes) to add to the table cell. |
| `caption` | string | no | Caption text. |
| `captionClasses` | string | no | Classes for caption text size. Classes should correspond to the available typography heading classes. |
| `firstCellIsHeader` | boolean | no | If set to `true`, the first cell in each row will be a table header (`<th>`). |
| `classes` | string | no | Classes to add to the table container. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the table container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "rows": [
    [
      {
        "text": "January"
      },
      {
        "text": "£85",
        "format": "numeric"
      },
      {
        "text": "£95",
        "format": "numeric"
      }
    ],
    [
      {
        "text": "February"
      },
      {
        "text": "£75",
        "format": "numeric"
      },
      {
        "text": "£55",
        "format": "numeric"
      }
    ],
    [
      {
        "text": "March"
      },
      {
        "text": "£165",
        "format": "numeric"
      },
      {
        "text": "£125",
        "format": "numeric"
      }
    ]
  ]
}
```

```html
<table class="govuk-table">
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">January</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">February</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">March</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>
```

### with head

```json
{
  "head": [
    {
      "text": "Month you apply"
    },
    {
      "text": "Rate for bicycles",
      "format": "numeric"
    },
    {
      "text": "Rate for vehicles",
      "format": "numeric"
    }
  ],
  "rows": [
    [
      {
        "text": "January"
      },
      {
        "text": "£85",
        "format": "numeric"
      },
      {
        "text": "£95",
        "format": "numeric"
      }
    ],
    [
      {
        "text": "February"
      },
      {
        "text": "£75",
        "format": "numeric"
      },
      {
        "text": "£55",
        "format": "numeric"
      }
    ],
    [
      {
        "text": "March"
      },
      {
        "text": "£165",
        "format": "numeric"
      },
      {
        "text": "£125",
        "format": "numeric"
      }
    ]
  ]
}
```

```html
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">January</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">February</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">March</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>
```

### with head and caption

```json
{
  "caption": "Caption 1: Months and rates",
  "captionClasses": "govuk-table__caption--m",
  "firstCellIsHeader": true,
  "head": [
    {
      "text": "Month you apply"
    },
    {
      "text": "Rate for bicycles",
      "format": "numeric"
    },
    {
      "text": "Rate for vehicles",
      "format": "numeric"
    }
  ],
  "rows": [
    [
      {
        "text": "January"
      },
      {
        "text": "£85",
        "format": "numeric"
      },
      {
        "text": "£95",
        "format": "numeric"
      }
    ],
    [
      {
        "text": "February"
      },
      {
        "text": "£75",
        "format": "numeric"
      },
      {
        "text": "£55",
        "format": "numeric"
      }
    ],
    [
      {
        "text": "March"
      },
      {
        "text": "£165",
        "format": "numeric"
      },
      {
        "text": "£125",
        "format": "numeric"
      }
    ]
  ]
}
```

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Caption 1: Months and rates</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">January</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">February</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">March</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>
```

