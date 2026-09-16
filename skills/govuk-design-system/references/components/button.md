# Button

Use the button component to help users carry out an action

**Example: Button**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Save and continue"
}) }}
```

HTML:

```html
<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
```

## When to use this component

Use the button component to help users carry out an action like starting an application or saving their information.

## How it works

Write button text in sentence case, describing the action it performs. For example:

- ‘Start now’ at the [start of your service](https://design-system.service.gov.uk/patterns/start-using-a-service/)
- ‘Sign in’ to an account a user has already created
- ‘Continue’ when the service does not save a user’s information
- ‘Save and continue’ when the service does save a user’s information
- ‘Save and come back later’ when a user can save their information and come back later
- ‘Add another’ to add another item to a list or group
- ‘Pay’ to make a payment
- ‘Confirm and send’ on a [Check answers page](https://design-system.service.gov.uk/patterns/check-answers/) that does not have any legal content a user must agree to
- ‘Accept and send’ on a [Check answers page](https://design-system.service.gov.uk/patterns/check-answers/) that has legal content a user must agree to
- ‘Sign out’ when a user is signed in to an account

You may need to include more or different words to better describe the action. For example, ‘Add another address’ and ‘Accept and claim a tax refund’.

Align the primary action button to the left edge of your form.

There are 2 ways to use the Button component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

### Default buttons

Use a default button for the main call to action on a page.

Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next.

**Example: Button** second

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Save and continue"
}) }}
```

HTML:

```html
<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
```

### Start buttons

Use a start button for the main call to action on [your service’s Start page](https://design-system.service.gov.uk/patterns/start-using-a-service/).
Start buttons do not usually submit form data, so use a link tag instead of a button tag.

**Example: Start now button**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Start now",
  href: "#",
  isStartButton: true
}) }}
```

HTML:

```html
<a href="#" role="button" draggable="false" class="govuk-button govuk-button--start" data-module="govuk-button">
  Start now
  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
  </svg>
</a>
```

### Secondary buttons

Use secondary buttons for secondary calls to action on a page.

Pages with too many calls to action make it hard for users to know what to do next. Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages.

**Example: Secondary button**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Find address",
  classes: "govuk-button--secondary"
}) }}
```

HTML:

```html
<button type="submit" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Find address
</button>
```

You can also [group default and secondary buttons together](#grouping-buttons).

### Warning buttons

Warning buttons are designed to make users think carefully before they use them. They only work if used very sparingly. Most services should not need one.

**Example: Warning button**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Delete account",
  classes: "govuk-button--warning"
}) }}
```

HTML:

```html
<button type="submit" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Delete account
</button>
```

Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account.

When letting users carry out an action like this, it's a good idea to include an additional step which asks them to confirm it.

In this instance, use another style of button for the initial call to action, and a warning button for the final confirmation.

Do not only rely on the red colour of a warning button to communicate the serious nature of the action. This is because not all users will be able to see the colour or will understand what it signifies. Make sure the context and button text make clear what will happen if the user selects it.

### Buttons on dark backgrounds

Use the `govuk-button--inverse` modifier class to show white buttons on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the button – the white button and background colour must have a contrast ratio of at least 4.5:1 to meet [WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Example: Inverse button**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Create an account",
  classes: "govuk-button--inverse"
}) }}
```

HTML:

```html
<button type="submit" class="govuk-button govuk-button--inverse" data-module="govuk-button">
  Create an account
</button>
```

### Disabled buttons

Disabled buttons have poor contrast and can confuse some users, so avoid them if&nbsp;possible.

Only use disabled buttons if research shows it makes the user interface easier to&nbsp;understand.

**Example: Disabled button**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Disabled button",
  disabled: true
}) }}
```

HTML:

```html
<button type="submit" disabled aria-disabled="true" class="govuk-button" data-module="govuk-button">
  Disabled button
</button>
```

### Grouping buttons

Use a button group when two or more buttons are placed together.

**Example: Button group with mixed button types**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

<div class="govuk-button-group">
  {{ govukButton({
    text: "Save and continue"
  }) }}

  {{ govukButton({
    text: "Save as draft",
    classes: "govuk-button--secondary"
  }) }}
</div>
```

HTML:

```html
<div class="govuk-button-group">
<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
<button type="submit" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Save as draft
</button>
</div>
```

Any links within a button group will automatically align with the buttons.

**Example: Button group**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

<div class="govuk-button-group">
  {{ govukButton({
    text: "Continue"
  }) }}

  <a class="govuk-link" href="#">Cancel</a>
</div>
```

HTML:

```html
<div class="govuk-button-group">
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
  <a class="govuk-link" href="#">Cancel</a>
</div>
```

### Stop users from accidentally sending information more than once

Sometimes, users double click buttons because they:

- have used operating systems where they have to double click items to make them work
- are experiencing a slow connection which means they are not given feedback on their action quickly enough
- have motor impairments such as hand tremors which cause them to click the button involuntarily

In some cases, this can mean their information is sent twice.

For example, the GOV.UK Notify team discovered that a number of users were receiving invitations twice, because the person sending them was double clicking the 'send' button.

If you are working in production and research shows that users are frequently sending information twice, you can configure the button to ignore the second click.

To do this, set the `data-prevent-double-click` attribute to `true`. You can do this directly in the HTML or, if you’re using Nunjucks, you can use the Nunjucks macro as shown in this example.

**Example: Button with prevent double click**

Nunjucks:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Confirm and send",
  preventDoubleClick: true
}) }}
```

HTML:

```html
<button type="submit" data-prevent-double-click="true" class="govuk-button" data-module="govuk-button">
  Confirm and send
</button>
```

This feature will prevent double clicks for users that have JavaScript enabled, however you should also think about the issue server-side to protect against attacks.

In the case of slow connections, aim to give the user information about what’s happening, for example, by showing a loading spinner or a modal, before using `data-prevent-double-click`.

## Research on this component

Testing on GOV.UK has shown that [using green as the colour of start buttons improved click-through rates](https://github.com/alphagov/govuk-design-system-backlog/issues/34#issuecomment-699537400).

## Nunjucks macro options

Import: `{% from "govuk/components/button/macro.njk" import govukButton %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `text` | string | yes | If `html` is set, this is not required. Text for the button. If `html` is provided, the `text` option will be ignored. |
| `html` | string | yes | If `text` is set, this is not required. HTML for the button. If `html` is provided, the `text` option will be ignored. |
| `type` | string | no | Type of the button, determining its behaviour in forms – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect if `href` is set. |
| `name` | string | no | Name of the button, sent when a form is submitted. This has no effect if `href` is set. |
| `value` | string | no | Value of the button, sent when a form is submitted. This has no effect if `href` is set. |
| `disabled` | boolean | no | Whether the button should be disabled. `disabled` and `aria-disabled` attributes will be set automatically. This has no effect if `href` is set. |
| `href` | string | no | The URL that the button should link to. |
| `classes` | string | no | Classes to add to the button. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the button. |
| `preventDoubleClick` | boolean | no | Prevent accidental double clicks on submit buttons from submitting forms multiple times. This has no effect if `href` is set. |
| `isStartButton` | boolean | no | Use for the main call to action on your service's start page. |
| `id` | string | no | The ID of the button. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "text": "Save and continue"
}
```

```html
<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
```

### disabled

```json
{
  "text": "Disabled button",
  "disabled": true
}
```

```html
<button type="submit" disabled aria-disabled="true" class="govuk-button" data-module="govuk-button">
  Disabled button
</button>
```

### link

```json
{
  "text": "Link button",
  "href": "/"
}
```

```html
<a href="/" role="button" draggable="false" class="govuk-button" data-module="govuk-button">
  Link button
</a>
```

### start

```json
{
  "text": "Start now button",
  "isStartButton": true
}
```

```html
<button type="submit" class="govuk-button govuk-button--start" data-module="govuk-button">
  Start now button
  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
  </svg>
</button>
```

### secondary

```json
{
  "name": "secondary",
  "text": "Secondary button",
  "classes": "govuk-button--secondary"
}
```

```html
<button type="submit" name="secondary" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Secondary button
</button>
```

### secondary disabled

```json
{
  "name": "secondary",
  "text": "Secondary button disabled",
  "classes": "govuk-button--secondary",
  "disabled": true
}
```

```html
<button type="submit" name="secondary" disabled aria-disabled="true" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Secondary button disabled
</button>
```

### warning

```json
{
  "name": "Warning",
  "text": "Warning button",
  "classes": "govuk-button--warning"
}
```

```html
<button type="submit" name="Warning" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Warning button
</button>
```

### warning disabled

```json
{
  "name": "warning",
  "text": "Warning button disabled",
  "classes": "govuk-button--warning",
  "disabled": true
}
```

```html
<button type="submit" name="warning" disabled aria-disabled="true" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Warning button disabled
</button>
```

### inverse

```json
{
  "name": "Inverse",
  "text": "Inverse button",
  "classes": "govuk-button--inverse"
}
```

```html
<button type="submit" name="Inverse" class="govuk-button govuk-button--inverse" data-module="govuk-button">
  Inverse button
</button>
```

### inverse disabled

```json
{
  "name": "Inverse",
  "text": "Inverse button",
  "classes": "govuk-button--inverse",
  "disabled": true
}
```

```html
<button type="submit" name="Inverse" disabled aria-disabled="true" class="govuk-button govuk-button--inverse" data-module="govuk-button">
  Inverse button
</button>
```

