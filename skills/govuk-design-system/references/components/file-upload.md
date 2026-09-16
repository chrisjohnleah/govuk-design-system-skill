# File upload

Help users select and upload a file

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Help users select and upload a file.

**Example: File upload**

Nunjucks:

```njk
{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}

{{ govukFileUpload({
  id: "file-upload-1",
  name: "fileUpload1",
  label: {
    text: "Upload a file"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload" id="file-upload-1" name="fileUpload1" type="file">
</div>
```

## When to use this component

You should only ask users to upload something if it’s critical to the delivery of your service.

We improved the component in March 2025, so you’ll need to enable the [improved File upload component](#using-the-improved-file-upload-component) as a new feature.

Read a blog post about [design tips for helping users upload things](https://designnotes.blog.gov.uk/2017/02/14/some-design-tips-for-uploading-things/).

## How it works

To upload a file, the user can either:

- use the ‘Choose file’ button
- drag and drop a file into the file upload input area

### Let users reuse uploaded files

Make sure users can easily reuse a previously uploaded file within a single journey, unless doing so would be a major security or privacy concern.

For example, a user might need to upload a photo of their driving licence to prove their identity, and again to prove their address.

You can make it easier for the user to reuse a file by showing it as an option for the user to select so they do not need to upload it again. Consider users on public devices before choosing to make the file available to preview or download.

There are 2 ways to use the file upload component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**Example: File upload** second

Nunjucks:

```njk
{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}

{{ govukFileUpload({
  id: "file-upload-1",
  name: "fileUpload1",
  label: {
    text: "Upload a file"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload" id="file-upload-1" name="fileUpload1" type="file">
</div>
```

### Error messages

Error messages should be styled like this:

**Example: Error**

Nunjucks:

```njk
{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}

{{ govukFileUpload({
  id: "file-upload-1",
  name: "fileUpload1",
  label: {
    text: "Upload a file"
  },
  errorMessage: {
    text: "The CSV must be smaller than 2MB"
  }
}) }}
```

HTML:

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <p id="file-upload-1-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> The CSV must be smaller than 2MB
  </p>
  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-1" name="fileUpload1" type="file" aria-describedby="file-upload-1-error">
</div>
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If no file has been selected

Say ‘Select a [whatever they need to select]’.<br>
For example, ‘Select a report’.

#### If the file is the wrong file type

Say ‘The selected file must be a [list of file types]’.<br>
For example, ‘The selected file must be a CSV or ODS’ or ‘The selected file must be a JPG, BMP, PNG, TIF or PDF’.

#### If the file is too big

Say ‘The selected file must be smaller than [largest file size]’.<br>
For example, ‘The selected file must be smaller than 2MB’.

#### If the file is empty

Say ‘The selected file is empty’.

#### If the file contains a virus

Say ‘The selected file contains a virus’.

#### If the file is password protected

Say ‘The selected file is password protected’.

#### If there was a problem and the file was not uploaded

Say ‘The selected file could not be uploaded – try again’.

#### If there is a limit on how many files the user can select

Say ‘You can only select up to [highest number] files at the same time’.<br>
For example, ‘You can only select up to 10 files at the same time’.

#### If the file is not in a template that must be used or the template has been changed

Say ‘The selected file must use the template’.

## Using the improved File upload component

In March 2025, we introduced changes to the File upload component that service teams can opt in to as part of GOV.UK Frontend 5.9.0.

The improved component is intended to:

- fix accessibility issues
- improve the user experience
- allow text in the component to be translated

We recommend service teams start using the latest component to improve the experience for users. However, it's a visual change from the previous component and might affect existing designs and layouts.

To let teams migrate at their own pace, the improvements are only enabled if you use the `javascript` macro option or extra markup in your HTML.

This example shows you how to enable the improved File upload component:

**Example: Enhanced - File upload**

Nunjucks:

```njk
{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}

{{ govukFileUpload({
  id: "file-upload-1",
  name: "fileUpload1",
  label: {
    text: "Upload a file"
  },
  javascript: true
}) }}
```

HTML:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload"
  >
  <input class="govuk-file-upload" id="file-upload-1" name="fileUpload1" type="file">
  </div>
</div>
```

### About HTML attributes

JavaScript creates the improved version of the component out of the input (`<input type="file">`) and then hides the input from the user. The improved version consists of a `<button>` with a few `<span>` elements inside.

Some HTML attributes applied to the input might not work or work differently.

These attributes must stay in the original input since they're used by the button:

- `id` and its value are added to the button and renamed on the input
- `disabled` is copied and synchronised with any changes that happen on the input
- `aria-describedby` is copied

These attributes must stay in the original input since they only work in the input (and not the button):

- `name`
- `accept`
- `capture`
- `accesskey`
- `multiple`, which also changes the behaviour of the button as text is added when multiple files are selected

To add any other attributes to the improved version, you'll have to add them either to the parent `<div>` or through JavaScript to the button.

Screen readers will not read out the `required` attribute in the improved version. Although we [recommend not to use that attribute](https://design-system.service.gov.uk/patterns/validation/#turn-off-html5-validation).

### Changes in the improved component

To make it easier for users to drag and drop files, we’ve made the drop zone:

- bigger
- visible at all times
- more visually responsive to user interactions

We’ve also changed the ‘Choose file’ button to be more consistent with the secondary button in the [Button component](https://design-system.service.gov.uk/components/button).

Service teams can change the text on the button and in the ‘No file chosen’ message. We decided to make this text changeable for translation purposes and to let teams be specific about the file to upload. However, teams should aim to keep the text as short as possible for accessibility purposes. For example, screen reader users might find it difficult to use the component if the text is too long.

All the text in the component can now be translated to match the language of the page content when JavaScript is running.

#### Improvements for assistive technology users

Users of Dragon, a speech recognition tool, [cannot activate their browser’s native file inputs](https://github.com/alphagov/govuk-frontend/issues/3686) by using commands for interacting with [web page controls](https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/Web/working_with_chrome.htm?Highlight=click%20button). They have to rely on [mouse commands](https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/CommandandControl/using_your_mouse.htm) or [keyboard commands](https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/CommandandControl/using_your_keyboard.htm), which take multiple steps to activate the component.

With the improved File upload component, users can say commands for interacting with web page controls to choose files.

However, due to [browser security features](https://developer.mozilla.org/en-US/docs/Web/Security/User_activation), this may not work right away or on subsequent interactions on the same page. If users cannot interact with the component, they'll first need to perform another action, such as a mouse click.

## Research on this component

### Colour and 'interaction state' updates from the GOV.UK brand refresh

In February 2026, we updated the improved File upload component.

As part of colour changes to the GOV.UK brand, we improved the various ‘states’ that show as the user interacts with the component. For example, we’ve made it easier for users to see when they’ve added a file.

We’ve also updated the colours to make user interaction more consistent and less distracting than before.

### Known issues and gaps

The earlier version of the File upload component does not show a visual target area when dragging and dropping a file. The component inherits and uses the browser’s default behaviour. More detail on the findings can be found in the [GitHub issue: ‘Upload file component has no visual target area when dragging and dropping a file’](https://github.com/alphagov/govuk-frontend/issues/3685).

We revisited this issue in March 2025 and have published an improved File upload component to improve accessibility. Although we’re confident the new component is an improvement on the browser’s default behaviour, teams can continue to use the existing component until the next major release, when the new version will be enabled by default.

## Nunjucks macro options

Import: `{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `name` | string | yes | The name of the input, which is submitted with the form data. |
| `id` | string | no | The ID of the input. Defaults to the value of `name`. If `javascript` is provided, this ID will be on the button of the improved version, and the hidden input's ID will get the suffix "-input". |
| `disabled` | boolean | no | If `true`, file input will be disabled. |
| `multiple` | boolean | no | If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system. |
| `describedBy` | string | no | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object (component options) | yes | The label used by the file upload component. |
| `hint` | object (component options) | no | Can be used to add a hint to the file upload component. |
| `errorMessage` | object (component options) | no | Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. |
| `formGroup` | object | no | Additional options for the form group containing the file upload component. |
| `formGroup.classes` | string | no | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | no | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | no | Content to add before the input used by the file upload component. |
| `formGroup.beforeInput.text` | string | yes | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | yes | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | no | Content to add after the input used by the file upload component. |
| `formGroup.afterInput.text` | string | yes | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | yes | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `javascript` | boolean | no | Can be used to enable JavaScript enhancements for the component. |
| `chooseFilesButtonText` | string | no | The text of the button that opens the file picker. Default is `"Choose file"`. If `javascript` is not provided, this option will be ignored. |
| `dropInstructionText` | string | no | The text informing users they can drop files. Default is `"or drop file"`. If `javascript` is not provided, this option will be ignored. |
| `multipleFilesChosenText` | object | no | The text displayed when multiple files have been chosen by the user. The component will replace the `%{count}` placeholder with the number of files selected. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). If `javascript` is not provided, this option will be ignored. |
| `noFileChosenText` | string | no | The text displayed when no file has been chosen by the user. Default is `"No file chosen"`. If `javascript` is not provided, this option will be ignored. |
| `enteredDropZoneText` | string | no | The text announced by assistive technology when user drags files and enters the drop zone. Default is `"Entered drop zone"`. If `javascript` is not provided, this option will be ignored. |
| `leftDropZoneText` | string | no | The text announced by assistive technology when user drags files and leaves the drop zone without dropping. Default is `"Left drop zone"`. If `javascript` is not provided, this option will be ignored. |
| `classes` | string | no | Classes to add to the file upload `<input>` element. If `javascript` is provided, these are not copied to the visible button. To use classes for the visible button, use the `wrapperClasses` option. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the file upload `<input>` element. If `javascript` is provided, these are not copied to the visible button. To add attributes to the container, use the `wrapperAttributes` option instead. |
| `wrapperClasses` | string | no | Classes to add to the improved file upload component's wrapper. If `javascript` is not provided, this option will be ignored. |
| `wrapperAttributes` | object | no | HTML attributes (for example data attributes) to add to the improved file upload component's wrapper. If `javascript` is not provided, this option will be ignored. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "name": "file-upload-1",
  "label": {
    "text": "Upload a file"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>
```

### with hint text

```json
{
  "id": "file-upload-2",
  "name": "file-upload-2",
  "label": {
    "text": "Upload your photo"
  },
  "hint": {
    "text": "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-2">
    Upload your photo
  </label>
  <div id="file-upload-2-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>
  <input class="govuk-file-upload" id="file-upload-2" name="file-upload-2" type="file" aria-describedby="file-upload-2-hint">
</div>
```

### with error message and hint

```json
{
  "id": "file-upload-3",
  "name": "file-upload-3",
  "label": {
    "text": "Upload a file"
  },
  "hint": {
    "text": "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."
  },
  "errorMessage": {
    "text": "Error message goes here"
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-3">
    Upload a file
  </label>
  <div id="file-upload-3-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>
  <p id="file-upload-3-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-3" name="file-upload-3" type="file" aria-describedby="file-upload-3-hint file-upload-3-error">
</div>
```

### with label as page heading

```json
{
  "id": "file-upload-1",
  "name": "file-upload-1",
  "label": {
    "text": "Upload a file",
    "classes": "govuk-label--l",
    "isPageHeading": true
  }
}
```

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="file-upload-1">
      Upload a file
    </label>
  </h1>
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>
```

### enhanced

```json
{
  "id": "file-upload-1",
  "name": "file-upload-1",
  "label": {
    "text": "Upload a file"
  },
  "javascript": true
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload"
  >
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
  </div>
</div>
```

### enhanced, with error message and hint

```json
{
  "javascript": true,
  "id": "file-upload-3",
  "name": "file-upload-3",
  "label": {
    "text": "Upload a file"
  },
  "hint": {
    "text": "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."
  },
  "errorMessage": {
    "text": "Error message goes here"
  }
}
```

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-3">
    Upload a file
  </label>
  <div id="file-upload-3-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>
  <p id="file-upload-3-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload"
  >
  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-3" name="file-upload-3" type="file" aria-describedby="file-upload-3-hint file-upload-3-error">
  </div>
</div>
```

### enhanced, multiple files

```json
{
  "javascript": true,
  "id": "file-upload-3",
  "name": "file-upload-3",
  "label": {
    "text": "Upload files"
  },
  "multiple": true
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-3">
    Upload files
  </label>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload"
  >
  <input class="govuk-file-upload" id="file-upload-3" name="file-upload-3" type="file" multiple>
  </div>
</div>
```

### enhanced, custom wrapper classes and attributes

```json
{
  "javascript": true,
  "id": "file-upload-3",
  "name": "file-upload-3",
  "label": {
    "text": "Upload files"
  },
  "wrapperClasses": "app-file-upload--custom-class",
  "wrapperAttributes": {
    "data-custom-attribute": "custom-value",
    "data-custom-attribute-2": "custom-value-2"
  }
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-3">
    Upload files
  </label>
  <div
    class="govuk-file-upload-wrapper app-file-upload--custom-class"
    data-module="govuk-file-upload" data-custom-attribute="custom-value" data-custom-attribute-2="custom-value-2"
  >
  <input class="govuk-file-upload" id="file-upload-3" name="file-upload-3" type="file">
  </div>
</div>
```

### translated

```json
{
  "id": "file-upload-1",
  "name": "file-upload-1",
  "label": {
    "text": "Llwythwch ffeil i fyny"
  },
  "multiple": true,
  "javascript": true,
  "chooseFilesButtonText": "Dewiswch ffeil",
  "dropInstructionText": "neu ollwng ffeil",
  "noFileChosenText": "Dim ffeil wedi'i dewis",
  "multipleFilesChosenText": {
    "other": "%{count} ffeil wedi'u dewis",
    "one": "%{count} ffeil wedi'i dewis"
  },
  "enteredDropZoneText": "Wedi mynd i mewn i'r parth gollwng",
  "leftDropZoneText": "Parth gollwng i'r chwith"
}
```

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Llwythwch ffeil i fyny
  </label>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload" data-i18n.choose-files-button="Dewiswch ffeil" data-i18n.no-file-chosen="Dim ffeil wedi&#39;i dewis" data-i18n.multiple-files-chosen.other="%{count} ffeil wedi&#39;u dewis" data-i18n.multiple-files-chosen.one="%{count} ffeil wedi&#39;i dewis" data-i18n.drop-instruction="neu ollwng ffeil" data-i18n.entered-drop-zone="Wedi mynd i mewn i&#39;r parth gollwng" data-i18n.left-drop-zone="Parth gollwng i&#39;r chwith"
  >
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file" multiple>
  </div>
</div>
```

