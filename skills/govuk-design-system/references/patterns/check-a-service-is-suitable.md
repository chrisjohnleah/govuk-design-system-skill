# Check a service is suitable

Ask users questions to help them work out if they can or should use your service

Ask users questions to help them work out if they can or should use your service.

Doing this helps users save time as it tells them upfront whether they are eligible to use it and if they need it.

It can also help reduce time and money spent processing queries from users confused about whether they’re eligible to use your service, or if it’s suitable for them.

![‘Check a service is suitable’ flow diagram. Contains an introduction page followed by a series of simple questions. If at any point a user is deemed not eligible for the service they will be pointed to a page that explains why they are not eligible. Otherwise they will be presented an ‘application complete’ page. ](check-a-service-is-suitable-new.svg)

## When to use this pattern

If you have complicated eligibility requirements you should follow this pattern. This will save users from having to read through large amounts of documentation outside of your service to work out if they can use it.

Use this pattern to help users work out:

- if they’re eligible to use your service
- how much it will cost them to use
- how much money they will get
- how long it will take to get something

Read guidance about designing your service so you [give users information at the point they need it](https://www.gov.uk/service-manual/design/govuk-content-transactions) in the GOV.UK Service Manual.

## When not to use this pattern

Do not use this pattern if you can reasonably include information users need to know about your service and its eligibility requirements on a start page.

## How it works

You should help people find out whether your service is right for them as soon as you&nbsp;can.

When using this pattern you need to:

- ask a series of simple questions
- automatically work out what a user needs to know
- present the user with a ‘results’ page

If there are general rules about whether a service can or cannot be used such as an age limit or fixed deadline, include these on the start page.

Avoid asking questions the user will need to provide again when using your service.

### Presenting results

Your results page should show the user if they’re eligible to use it. Where applicable, it should also show them:

- if they have to use your service
- how much it will cost them to use it
- how much money they’ll get from using it
- how long the whole process will take

If a user is not eligible to use your service, explain why and, if possible, tell them what they should do instead.

Here’s an example of a results page:

**Example: Result**

Nunjucks:

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}
{% from "govuk/components/phase-banner/macro.njk" import govukPhaseBanner %}
{% from "govuk/components/button/macro.njk" import govukButton %}

  {{ govukPhaseBanner({
    tag: {
      text: "Prototype"
    },
    html: "This isn't a real service – it is an example."
  }) }}
  {{ govukBackLink({
    href: "#",
    text: "Back"
  }) }}

<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">You're eligible to transport goods</h1>
      <p class="govuk-body">Based on your answers, you are eligble to transport goods.</p>
      {{ govukButton({
      text: "Continue"
      }) }}
    </div>
</div>
```

HTML:

```html
<div class="govuk-phase-banner govuk-width-container">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      Prototype
    </strong>
    <span class="govuk-phase-banner__text">
      This isn't a real service – it is an example.
    </span>
  </p>
</div>
  <a href="#" class="govuk-back-link">Back</a>
<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">You're eligible to transport goods</h1>
      <p class="govuk-body">Based on your answers, you are eligble to transport goods.</p>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
    </div>
</div>
```

## Research on this pattern

Read a blog post about [testing and iterating this pattern](https://designnotes.blog.gov.uk/2017/03/30/weve-published-the-check-before-you-start-pattern/).

Please note this pattern used to be called ‘Check before you start’.
