# Select

Help users select an item from a list

**Example: Select**

Nunjucks:

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated",
      selected: true
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="sort">
    Sort by
  </label>
  <select class="govuk-select" id="sort" name="sort">
    <option value="published">Recently published</option>
    <option value="updated" selected>Recently updated</option>
    <option value="views">Most views</option>
    <option value="comments">Most comments</option>
  </select>
</div>
```

## When to use this component

The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.

## When not to use this component

The select component allows users to choose an option from a long list. Before using the select component, try asking users questions which will allow you to present them with fewer options.

Asking questions means you’re less likely to need to use the select component, and can consider using a different solution, such as a [Radios component](https://design-system.service.gov.uk/components/radios/).

## How it works

If you use the component for settings, you can make an option pre-selected by default when users first see it.

If you use the component for questions, you should not pre-select any of the options in case it influences users' answers.

There are 2 ways to use the select component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: Select** second

Nunjucks:

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated",
      selected: true
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="sort">
    Sort by
  </label>
  <select class="govuk-select" id="sort" name="sort">
    <option value="published">Recently published</option>
    <option value="updated" selected>Recently updated</option>
    <option value="views">Most views</option>
    <option value="comments">Most comments</option>
  </select>
</div>
```

### Select with hint

You can add hint text to help the user understand the options and choose one of them.

Keep hint text to a single short sentence, without any full stops.

Do not use links in hint text. While screen readers will read out the link text, they usually do not tell users the text is a link.

**Example: Select with hint**

Nunjucks:

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "location",
  name: "location",
  label: {
    text: "Choose location"
  },
  hint: {
    text: "This can be different to where you went before"
  },
  items: [
    {
      value: "choose",
      text: "Choose location",
      selected: true
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="location">
    Choose location
  </label>
  <div id="location-hint" class="govuk-hint">
    This can be different to where you went before
  </div>
  <select class="govuk-select" id="location" name="location" aria-describedby="location-hint">
    <option value="choose" selected>Choose location</option>
    <option value="eastmidlands">East Midlands</option>
    <option value="eastofengland">East of England</option>
    <option value="london">London</option>
    <option value="northeast">North East</option>
    <option value="northwest">North West</option>
    <option value="southeast">South East</option>
    <option value="southwest">South West</option>
    <option value="westmidlands">West Midlands</option>
    <option value="yorkshire">Yorkshire and the Humber</option>
  </select>
</div>
```

### Error messages

Display an error message if the user has not selected an option.

Style error messages as shown in the example:

**Example: Select with error**

Nunjucks:

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "location",
  name: "location",
  label: {
    text: "Choose location"
  },
  hint: {
    text: "This can be different to where you went before"
  },
  errorMessage: {
    text: "Select a location"
  },
  items: [
    {
      value: "choose",
      text: "Choose location",
      selected: true
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="location">
    Choose location
  </label>
  <div id="location-hint" class="govuk-hint">
    This can be different to where you went before
  </div>
  <p id="location-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a location
  </p>
  <select class="govuk-select govuk-select--error" id="location" name="location" aria-describedby="location-hint location-error">
    <option value="choose" selected>Choose location</option>
    <option value="eastmidlands">East Midlands</option>
    <option value="eastofengland">East of England</option>
    <option value="london">London</option>
    <option value="northeast">North East</option>
    <option value="northwest">North West</option>
    <option value="southeast">South East</option>
    <option value="southwest">South West</option>
    <option value="westmidlands">West Midlands</option>
    <option value="yorkshire">Yorkshire and the Humber</option>
  </select>
</div>
```

### Avoid adding functionality to allow selecting multiple options

The select component does not support selecting multiple options, [as there’s a history of poor usability and assistive technology support for `<select multiple>`](https://www.24a11y.com/2019/select-your-poison/). If you need to ask the user to pick more than one item from a list, it’s almost always better to use another method, such as a list of checkboxes.

## Research on this component

User research has shown that some users struggle with selects.

### Known issues and gaps

Research shows that users can struggle with selects, particularly when users have:

- been unable to close the select
- tried to type into the select
- confused focused items with selected items
- tried to pinch zoom select options on smaller devices
- not understood that they can scroll down to see more items, or how to

For more detail watch this video with [examples of users struggling with selects](https://www.youtube.com/watch?v=-dH6a6eMdXE).

This blog shows [an example where a text input is used over a select](https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/) for asking a user for a date.

## Nunjucks macro options

Import: `{% from "govuk/components/select/macro.njk" import govukSelect %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `id` | string | no | ID for the select box. Defaults to the value of `name`. |
| `name` | string | yes | Name property for the select. |
| `items` | array | yes | The items within the select component. |
| `items.value` | string | no | Value for the option. If this is omitted, the value is taken from the text content of the option element. |
| `items.text` | string | yes | Text for the option item. |
| `items.selected` | boolean | no | Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option. |
| `items.disabled` | boolean | no | Sets the option item as disabled. |
| `items.attributes` | object | no | HTML attributes (for example data attributes) to add to the option. |
| `value` | string | no | Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item. |
| `disabled` | boolean | no | If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options. |
| `describedBy` | string | no | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object (component options) | yes | The label used by the select component. |
| `hint` | object (component options) | no | Can be used to add a hint to the select component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object | no | Additional options for the form group containing the select component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | no | Content to add before the select used by the select component. |
| `formGroup.beforeInput.text` | string | yes | Text to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | yes | HTML to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | no | Content to add after the select used by the select component. |
| `formGroup.afterInput.text` | string | yes | Text to add after the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | yes | HTML to add after the select. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | no | Classes to add to the select. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the select. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "name": "select-1",
  "label": {
    "text": "Label text goes here"
  },
  "items": [
    {
      "value": 1,
      "text": "GOV.UK frontend option 1"
    },
    {
      "value": 2,
      "text": "GOV.UK frontend option 2",
      "selected": true
    },
    {
      "value": 3,
      "text": "GOV.UK frontend option 3",
      "disabled": true
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select" id="select-1" name="select-1">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```

### with hint text and error message

```json
{
  "id": "select-2",
  "name": "select-2",
  "label": {
    "text": "Label text goes here"
  },
  "hint": {
    "text": "Hint text goes here"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "value": 1,
      "text": "GOV.UK frontend option 1"
    },
    {
      "value": 2,
      "text": "GOV.UK frontend option 2"
    },
    {
      "value": 3,
      "text": "GOV.UK frontend option 3"
    }
  ]
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="select-2">
    Label text goes here
  </label>
  <div id="select-2-hint" class="govuk-hint">
    Hint text goes here
  </div>
  <p id="select-2-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <select class="govuk-select govuk-select--error" id="select-2" name="select-2" aria-describedby="select-2-hint select-2-error">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2">GOV.UK frontend option 2</option>
    <option value="3">GOV.UK frontend option 3</option>
  </select>
</div>
```

### with label as page heading

```json
{
  "id": "select-3",
  "name": "select-3",
  "label": {
    "text": "Label text goes here",
    "classes": "govuk-label--l",
    "isPageHeading": true
  },
  "items": [
    {
      "value": 1,
      "text": "GOV.UK frontend option 1"
    },
    {
      "value": 2,
      "text": "GOV.UK frontend option 2",
      "selected": true
    },
    {
      "value": 3,
      "text": "GOV.UK frontend option 3",
      "disabled": true
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="select-3">
      Label text goes here
    </label>
  </h1>
  <select class="govuk-select" id="select-3" name="select-3">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```

### with full width override

```json
{
  "id": "select-1",
  "name": "select-1",
  "classes": "govuk-!-width-full",
  "label": {
    "text": "Label text goes here"
  },
  "items": [
    {
      "value": 1,
      "text": "GOV.UK frontend option 1"
    },
    {
      "value": 2,
      "text": "GOV.UK frontend option 2",
      "selected": true
    },
    {
      "value": 3,
      "text": "GOV.UK frontend option 3",
      "disabled": true
    }
  ]
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select govuk-!-width-full" id="select-1" name="select-1">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```

