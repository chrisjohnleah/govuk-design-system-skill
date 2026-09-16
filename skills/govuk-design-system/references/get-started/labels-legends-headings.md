# Making labels and legends headings

How to markup and style labels, legends and headings

Whenever you design a form, you should start by splitting it across multiple pages with each page containing just one thing, for example:

- one piece of information you’re telling a user
- one decision they have to make
- one question they have to answer

This helps users focus and understand what’s being asked of them.

When you’re asking just one question on a page, you can make the question the page’s heading. Your page heading will then most likely be the same as the `<label>` or `<legend>` for the input.

For example, on a page that only asks users for their postcode, the question ‘What is your postcode’ would be both the page heading and the most logical `<label>` for your text input.

To avoid repetition, one option is to use a visually hidden `<label>` or `<legend>`.

However, this option only removes visual duplication and will not help users of screen readers. They will still hear both the page heading and the visually hidden `<label>` or `<legend>`.

To prevent this, set the contents of the `<label>` or `<legend>` as the page heading (except if you're asking more than one question on the page).

## Labels as page headings

To set the contents of a label as the page heading, you need to put the `<label>` tag inside the `<h1>` tag. You can either do this in HTML, or by using the Nunjucks macro and setting `isPageHeading: true`.

You then need to apply classes to the `<label>` to make it look like a heading.

**Example: Labels as page headings**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "govuk-label--l",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "This example shows an <h1> around a <label> with the class of govuk-label--l"
  },
  id: "example",
  name: "example"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="example">
      govuk-label--l
    </label>
  </h1>
  <div id="example-hint" class="govuk-hint">
    This example shows an <h1> around a <label> with the class of govuk-label--l
  </div>
  <input
   class="govuk-input" id="example" name="example" type="text" aria-describedby="example-hint">
</div>
```

## Legends as page headings

To set the contents of a legend as the page heading, you need to put the `<legend>` tag outside the `<h1>` tag. You can either do this in HTML, or by using the Nunjucks macro and setting `isPageHeading: true`.

As with labels, you also need to apply classes to the `<legend>` to make it look like a heading.

**Example: Legends as page headings**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "checkbox",
  fieldset: {
    legend: {
      text: "govuk-fieldset__legend--l",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "This example shows an <h1> inside a <legend> with the class of govuk-fieldset__legend--l"
  },
  items: [
    {
      value: "checkbox",
      text: "Checkbox 1"
    },
    {
      value: "checkbox",
      text: "Checkbox 2"
    },
    {
      value: "checkbox",
      text: "Checkbox 3"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="checkbox-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      govuk-fieldset__legend--l
    </h1>
  </legend>
  <div id="checkbox-hint" class="govuk-hint">
    This example shows an <h1> inside a <legend> with the class of govuk-fieldset__legend--l
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox" name="checkbox" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox">
        Checkbox 1
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox-2" name="checkbox" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox-2">
        Checkbox 2
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox-3" name="checkbox" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox-3">
        Checkbox 3
      </label>
    </div>
  </div>
</fieldset>
</div>
```

## Styling options for labels and legends

Instead of styling them as page headings, you can apply other classes to legends and labels to make them larger and bolder than the default.

### Styling labels

**Example: Styling labels**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "govuk-label--m",
    classes: "govuk-label--m"
  },
  hint: {
    text: "This example shows a <label> with the class of govuk-label--m"
  },
  id: "example",
  name: "example"
}) }}

{{ govukInput({
  label: {
    text: "govuk-label--s",
    classes: "govuk-label--s"
  },
  hint: {
    text: "This example shows a <label> with the class of govuk-label--s"
  },
  id: "example-2",
  name: "example2"
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label govuk-label--m" for="example">
    govuk-label--m
  </label>
  <div id="example-hint" class="govuk-hint">
    This example shows a <label> with the class of govuk-label--m
  </div>
  <input
   class="govuk-input" id="example" name="example" type="text" aria-describedby="example-hint">
</div>
<div class="govuk-form-group">
  <label class="govuk-label govuk-label--s" for="example-2">
    govuk-label--s
  </label>
  <div id="example-2-hint" class="govuk-hint">
    This example shows a <label> with the class of govuk-label--s
  </div>
  <input
   class="govuk-input" id="example-2" name="example2" type="text" aria-describedby="example-2-hint">
</div>
```

### Styling legends

**Example: Styling legends**

Nunjucks:

```njk
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "checkbox1",
  fieldset: {
    legend: {
      text: "govuk-fieldset__legend--m",
      classes: "govuk-fieldset__legend--m"
    }
  },
  hint: {
    text: "This example shows a <legend> with the class of govuk-fieldset__legend--m"
  },
  items: [
    {
      value: "checkbox",
      text: "Checkbox 1"
    },
    {
      value: "checkbox",
      text: "Checkbox 2"
    },
    {
      value: "checkbox",
      text: "Checkbox 3"
    }
  ]
}) }}

{{ govukCheckboxes({
  name: "checkbox2",
  fieldset: {
    legend: {
      text: "govuk-fieldset__legend--s",
      classes: "govuk-fieldset__legend--s"
    }
  },
  hint: {
    text: "This example shows a <legend> with the class of govuk-fieldset__legend--s"
  },
  items: [
    {
      value: "checkbox",
      text: "Checkbox 1"
    },
    {
      value: "checkbox",
      text: "Checkbox 2"
    },
    {
      value: "checkbox",
      text: "Checkbox 3"
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="checkbox1-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    govuk-fieldset__legend--m
  </legend>
  <div id="checkbox1-hint" class="govuk-hint">
    This example shows a <legend> with the class of govuk-fieldset__legend--m
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox1" name="checkbox1" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox1">
        Checkbox 1
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox1-2" name="checkbox1" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox1-2">
        Checkbox 2
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox1-3" name="checkbox1" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox1-3">
        Checkbox 3
      </label>
    </div>
  </div>
</fieldset>
</div>
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="checkbox2-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
    govuk-fieldset__legend--s
  </legend>
  <div id="checkbox2-hint" class="govuk-hint">
    This example shows a <legend> with the class of govuk-fieldset__legend--s
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox2" name="checkbox2" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox2">
        Checkbox 1
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox2-2" name="checkbox2" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox2-2">
        Checkbox 2
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="checkbox2-3" name="checkbox2" type="checkbox" value="checkbox">
      <label class="govuk-label govuk-checkboxes__label" for="checkbox2-3">
        Checkbox 3
      </label>
    </div>
  </div>
</fieldset>
</div>
```
