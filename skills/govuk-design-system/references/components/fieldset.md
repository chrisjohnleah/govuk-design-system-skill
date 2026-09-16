# Fieldset

Use the fieldset component to group related form inputs

Use the fieldset component to group related form inputs.

## When to use this component

Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when [asking for an address in your service](https://design-system.service.gov.uk/patterns/addresses/).

**Example: Address group**

Nunjucks:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{% call govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}

  {{ govukInput({
    label: {
      text: "Address line 1"
    },
    id: "address-line-1",
    name: "addressLine1",
    autocomplete: "address-line1"
  }) }}

  {{ govukInput({
    label: {
      text: "Address line 2 (optional)"
    },
    id: "address-line-2",
    name: "addressLine2",
    autocomplete: "address-line2"
  }) }}

  {{ govukInput({
    label: {
      text: "Town or city"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-town",
    name: "addressTown",
    autocomplete: "address-level2"
  }) }}

  {{ govukInput({
    label: {
      text: "Postcode"
    },
    classes: "govuk-input--width-10",
    id: "address-postcode",
    name: "addressPostcode",
    autocomplete: "postal-code"
  }) }}

{% endcall %}
```

HTML:

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-line-1">
    Address line 1
  </label>
  <input
   class="govuk-input" id="address-line-1" name="addressLine1" type="text" autocomplete="address-line1">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-line-2">
    Address line 2 (optional)
  </label>
  <input
   class="govuk-input" id="address-line-2" name="addressLine2" type="text" autocomplete="address-line2">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-town">
    Town or city
  </label>
  <input
   class="govuk-input govuk-!-width-two-thirds" id="address-town" name="addressTown" type="text" autocomplete="address-level2">
</div>
<div class="govuk-form-group">
  <label class="govuk-label" for="address-postcode">
    Postcode
  </label>
  <input
   class="govuk-input govuk-input--width-10" id="address-postcode" name="addressPostcode" type="text" autocomplete="postal-code">
</div>
</fieldset>
```

If you’re using the examples or macros for a [Radios component](https://design-system.service.gov.uk/components/radios/), [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) or [Date input component](https://design-system.service.gov.uk/components/date-input/), the fieldset will already be included.

## How it works

The first element inside a fieldset must be a `legend` which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.

If you’re asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

**Example: Fieldset**

Nunjucks:

```njk
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{{ govukFieldset({
  legend: {
    text: "Legend as page heading",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) }}
```

HTML:

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Legend as page heading
    </h1>
  </legend>
</fieldset>
```

On [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/) containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that&nbsp;question.

Include general help text in the legend if it would help the user fill in the form, and you [cannot write it as hint text](https://design-system.service.gov.uk/components/text-input/#hint-text). However, try to keep it as short as possible.

## Nunjucks macro options

Import: `{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `describedBy` | string | no | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `legend` | object | no | The legend for the fieldset component. |
| `legend.text` | string | yes | If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `legend.html` | string | yes | If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `legend.classes` | string | no | Classes to add to the legend. |
| `legend.isPageHeading` | boolean | no | Whether the legend also acts as the heading for the page. |
| `classes` | string | no | Classes to add to the fieldset container. |
| `role` | string | no | Optional ARIA role attribute. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the fieldset container. |
| `html` | string | no | HTML to use/render within the fieldset element. |
| `caller` | nunjucks-block | no | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "legend": {
    "text": "What is your address?"
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    What is your address?
  </legend>
</fieldset>
```

### styled as xl text

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--xl"
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
    What is your address?
  </legend>
</fieldset>
```

### styled as large text

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--l"
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    What is your address?
  </legend>
</fieldset>
```

### styled as medium text

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--m"
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    What is your address?
  </legend>
</fieldset>
```

### styled as small text

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--s"
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
    What is your address?
  </legend>
</fieldset>
```

### as page heading xl

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--xl",
    "isPageHeading": true
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>
```

### as page heading l

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--l",
    "isPageHeading": true
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>
```

### as page heading m

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--m",
    "isPageHeading": true
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>
```

### as page heading s

```json
{
  "legend": {
    "text": "What is your address?",
    "classes": "govuk-fieldset__legend--s",
    "isPageHeading": true
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>
```

### as page heading without class

```json
{
  "legend": {
    "text": "What is your address?",
    "isPageHeading": true
  }
}
```

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>
```

