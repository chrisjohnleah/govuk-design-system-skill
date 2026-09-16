# Feedback

Ask users to give their feedback about your service at any point of the journey

Ask users to give feedback about their experience using your service.

**Example: Feedback**

Nunjucks:

```njk
{% from "govuk/components/feedback/macro.njk" import govukFeedback %}

{% call govukFeedback({
  titleText: "Help us improve this service"
}) %}
  <p class="govuk-body">
    Tell us about your experience using this service. <a href="#" class="govuk-link">Give us your feedback</a>
  </p>
{% endcall %}
```

HTML:

```html
<div class="govuk-feedback govuk-width-container">
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h2 class="govuk-feedback__title">
        Help us improve this service
      </h2>
        <div class="govuk-feedback__body">
  <p class="govuk-body">
    Tell us about your experience using this service. <a href="#" class="govuk-link">Give us your feedback</a>
  </p>
        </div>
    </div>
  </div>
</div>
```

## When to use this component

Use the Feedback component to give users the opportunity to give feedback at any point in their journey. This helps you gather a wide range of feedback to understand how well your service performs and improvements you can make.

## How it works

Show the Feedback component on as many pages of your service as you can.

The component is designed to allow users to give feedback at any time without distracting them.

### Ask for feedback at the end of each page

Place the Feedback component just before the GOV.UK footer component.

If your service is using Nunjucks, you can use the [GOV.UK Frontend page template](https://design-system.service.gov.uk/styles/page-template/) to add the Feedback component by placing it in the `footerStart` template block.

### Asking users for feedback

The heading and message in the Feedback component should tell users:

- why you want feedback
- what you'll do with their feedback

Also try to give users some idea about:

- how long it'll take to give feedback
- the difference between giving feedback and asking for support

You must include a link to a feedback page, which could be either:

- [a GOV.UK feedback page](https://www.gov.uk/service-manual/service-assessments/get-feedback-page)
- a feedback page page of your own, if you need to ask specific questions

## Research on this component

During design exploration for this component, desk research suggested that services struggled to get enough feedback from users using a previous version of this component.

This version separates the feedback link from the [Phase banner component](https://design-system.service.gov.uk/components/phase-banner/).

We've released this Feedback component in trial status as we want to understand whether:

- moving the feedback link from the phase banner increases the amount of feedback services receive
- placing the feedback link its own dedicated location helps users know where to provide feedback when they need to, by overcoming potential 'banner blindness' of the phase banner.

Until we have enough evidence that these needs are being met, the component will remain in trial.

We thank the service teams across government who worked with us in the early stages of this component to measure its effectiveness.

We’d also like to thank the GOV.UK Forms team for helping us build this component.

## Nunjucks macro options

Import: `{% from "govuk/components/feedback/macro.njk" import govukFeedback %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `titleText` | string | yes | Text to use within the title of the Feedback component. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleHtml` | string | yes | HTML to use within the title of the Feedback component. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `headingLevel` | integer | no | Heading level, from `1` to `6`. Default is `2`. |
| `text` | string | yes | Text to use within the Feedback component content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | yes | HTML to use within the Feedback component content. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | no | Not strictly a parameter but a [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block lets you call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you'll need to wrap the entire Feedback component in a `call` block. |
| `classes` | string | no | Classes to add to the Feedback component container. |
| `attributes` | object | no | HTML attributes (for example, data attributes) to add to the Feedback component container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "titleText": "Help us improve this service",
  "html": "<p class=\"govuk-body\">Tell us about your experience using this service. <a href=\"#\" class=\"govuk-link\">Give us your feedback</a></p>\n"
}
```

```html
<div class="govuk-feedback govuk-width-container">
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h2 class="govuk-feedback__title">
        Help us improve this service
      </h2>
        <div class="govuk-feedback__body">
            <p class="govuk-body">Tell us about your experience using this service. <a href="#" class="govuk-link">Give us your feedback</a></p>
        </div>
    </div>
  </div>
</div>
```

### silly example

```json
{
  "titleText": "Help us improve this service",
  "html": "<p class=\"govuk-body\">Tell us about your experience using this service.</p>\n<p class=\"govuk-body\">Click this cool link to <a href=\"#\" class=\"govuk-link\">give us your feedback</a>.</p>\n<p class=\"govuk-body\">There's another paragraph here.</p>\n<ul class=\"govuk-list govuk-list--bullet\">\n  <li>There is also a list</li>\n  <li>With items in</li>\n  <li>How strange!</li>\n</ul>\n"
}
```

```html
<div class="govuk-feedback govuk-width-container">
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h2 class="govuk-feedback__title">
        Help us improve this service
      </h2>
        <div class="govuk-feedback__body">
            <p class="govuk-body">Tell us about your experience using this service.</p>
    <p class="govuk-body">Click this cool link to <a href="#" class="govuk-link">give us your feedback</a>.</p>
    <p class="govuk-body">There's another paragraph here.</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>There is also a list</li>
      <li>With items in</li>
      <li>How strange!</li>
    </ul>
        </div>
    </div>
  </div>
</div>
```

