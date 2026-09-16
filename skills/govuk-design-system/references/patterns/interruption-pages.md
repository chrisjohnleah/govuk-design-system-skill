# Interruption pages

Pause the user journey to give them important information

Use Interruption pages to pause the user’s journey and give them important information.

**Example: Interruption pages**

Nunjucks:

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/panel/macro.njk" import govukPanel %}

  {{ govukBackLink({
    text: "Back"
  }) }}

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      {% call govukPanel({
        titleText: "Is your age correct?",
        classes: "govuk-panel--interruption",
        actions: {
          items: [
            {
              text: "Yes, this is correct",
              href: "#",
              type: "button"
            }, {
              text: "No, change my age",
              href: "#"
            }
          ]
        }
      }) %}
        <p class="govuk-body">You entered your age as <strong>109</strong>.</p>
      {% endcall %}
    </div>
  </div>
```

HTML:

```html
<a href="#" class="govuk-back-link">Back</a>
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <div class="govuk-panel govuk-panel--interruption">
  <h1 class="govuk-panel__title">
    Is your age correct?
  </h1>
  <div class="govuk-panel__body">
        <p class="govuk-body">You entered your age as <strong>109</strong>.</p>
  </div>
  <div class="govuk-panel__actions"><div class="govuk-button-group">
      <a href="#" role="button" draggable="false" class="govuk-button govuk-button--inverse" data-module="govuk-button">
        Yes, this is correct
      </a>
      <a class="govuk-link govuk-link--inverse" href="#">No, change my age</a>
    </div></div>
</div>
    </div>
  </div>
```

## When to use this pattern

Think carefully before you choose to use an Interruption page, as doing this might get in the way of the user completing their task.

Use Interruption pages to warn the user before they:

- do something unusual that’s probably a mistake
- do something that cannot be undone (so you can ask the user “Are you sure?”)
- give an answer that conflicts with existing information

You can also use Interruption pages:

- instead of Confirmation pages to show more varied journey outcomes (that are different to a straightforward success, rejection or completion)
- to show the user important information ahead of a task

## When not to use this pattern

Do not use Interruption pages unless you're confident that both:

- there’s evidence of a clear need to pause the user journey
- it's the only way to give the user information and that they’d otherwise miss it

Read guidance in the Service Manual, particularly to [Map and understand a user's whole problem](https://www.gov.uk/service-manual/design/map-a-users-whole-problem), to find ways to improve the user journey and the organisational processes behind them.

## How it works

Interruption pages pause the user journey to show important information. Use Interruption pages sparingly, as they get less effective the more often users see them.

All important information on the page is shown within an [Interruption panel](https://design-system.service.gov.uk/components/panel/#interruption-panel), to help ensure the user does not miss it.

The panel includes a button that the user must interact with to continue their journey. Information within the panel is usually shown as a heading with some description text, possibly with bullet points and numbered steps.

Keep information within the panel short. Do not place any other components or form elements inside the panel.

### Back links and cancel buttons

The Interruption page includes a back link at the top of a page, to allow users to go back to the previous page they were on.

If it’s helpful for users to jump back to another point in the journey, such as the start of a section, add a link and group it alongside the continue button. Write link text that describes the action it performs or the page it will take the user.

## Research on this pattern

This pattern was originally contributed by the NHS Design System. We thank the team for working with us to publish the [Interruption panel variant of the Panel component](https://design-system.service.gov.uk/components/panel/#interruption-panel) and this pattern.

Guidance in this pattern is based on:

- [Interruption page on NHS Design System](https://service-manual.nhs.uk/design-system/patterns/interruption-page)
- [Interruption card on Ministry of Justice (MOJ) Design System](https://design-patterns.service.justice.gov.uk/components/interruption-card/)

### Next steps

We’d like to get more input from service teams to help us further improve this pattern.

See our [‘Interruption card’ discussion on GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/27) to see some of the areas we're interested in learning more about.
