# Accordion

The accordion component lets users show and hide sections of related content on a page

The accordion component lets users show and hide sections of related content on a page.

**Example: Accordion**

Nunjucks:

```njk
{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

{{ govukAccordion({
  id: "accordion-default",
  items: [
    {
      heading: {
        text: "Writing well for the web"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Writing well for the web.</p>'
      }
    },
    {
      heading: {
        text: "Writing well for specialists"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Writing well for specialists.</p>'
      }
    },
    {
      heading: {
        text: "Know your audience"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Know your audience.</p>'
      }
    },
    {
      heading: {
        text: "How people read"
      },
      content: {
        html: '<p class="govuk-body">This is the content for How people read.</p>'
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-1">
          Writing well for the web
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for Writing well for the web.</p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-2">
          Writing well for specialists
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-2" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for Writing well for specialists.</p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-3">
          Know your audience
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-3" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for Know your audience.</p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-4">
          How people read
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-4" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for How people read.</p>
    </div>
  </div>
</div>
```

## When to use this component

Only use an accordion if there's evidence it’s helpful for the user to:

- see an overview of multiple, related sections of content
- choose to show and hide sections that are relevant to them
- look across information that might otherwise be on different pages

For example, an accordion can work well if the user needs to reveal and compare information that’s relevant to them.

Accordions can also work well for people who use a service regularly. For example, users of caseworking systems who need to do familiar tasks quickly.

Test with users to decide if using an accordion outweighs the potential problems with hiding content.

## When not to use this component

Accordions hide content from the user. Not all users will notice them or understand how they work. For this reason, you should only use them in specific situations and if user research supports it.

Do not use an accordion for content that all users need to see.

Test your content without an accordion first. Well-written and structured content, as shown in [GOV.UK writing standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/), can remove the need to use an accordion.

It’s usually better to:

- simplify and reduce the amount of content
- split the content across multiple pages
- keep the content on a single page, separated by headings
- use a list of links at the start of the page (known as 'anchor links') to take the user to particular sections of a page

Accordions work best for simple content and links. Do not use accordions to split up a series of questions. Use separate pages instead.

Do not put accordions within accordions, as it will make content difficult to find.

Do not use the accordion component if the amount of content inside will make the page slow to load.

## Decide between using accordions, tabs and details

The Accordion component, [Tabs component](https://design-system.service.gov.uk/components/tabs/) and [Details component](https://design-system.service.gov.uk/components/details/) all work by hiding sections of content which a user can choose to reveal. Avoid using any of these components within one another.

If you decide to use one of these components, consider if:

- the user needs to look at more than one section at a time – an accordion can show multiple sections at a time, unlike tabs
- the user needs to switch quickly between sections – tabs can show content without pushing other sections down the page, unlike accordions
- there are many sections of content – accordions can fit more sections as they’re arranged vertically, unlike tabs which are arranged horizontally
- there’s only one or two pieces of short, less important content – the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs

## How it works

There are 2 ways to use the accordion component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

The accordion component uses JavaScript. When JavaScript is not available, users will see all the content displayed with the section labels as headings.

If you are using HTML, you must add an 'id' attribute to the `<div>` tag with the `govuk-accordion` class. It must be unique across the service's domain to maintain the persistent expanded state of the accordion.

### Section heading buttons

An accordion will usually start with all sections hidden. To show a section, the user can interact anywhere in the heading button.

The heading button includes all of these areas:

- heading text
- summary line (if you decide to add one)
- call-to-action text to 'show' or 'hide'

For users of screen readers, all the text in the button will be read as a single statement (separated by commas to allow for slight pauses). There’s also some visually hidden content in the heading text to help announce the call-to-action as 'show this section' or 'hide this section'.

**Example: Accordion** second

Nunjucks:

```njk
{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

{{ govukAccordion({
  id: "accordion-default",
  items: [
    {
      heading: {
        text: "Writing well for the web"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Writing well for the web.</p>'
      }
    },
    {
      heading: {
        text: "Writing well for specialists"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Writing well for specialists.</p>'
      }
    },
    {
      heading: {
        text: "Know your audience"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Know your audience.</p>'
      }
    },
    {
      heading: {
        text: "How people read"
      },
      content: {
        html: '<p class="govuk-body">This is the content for How people read.</p>'
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-1">
          Writing well for the web
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for Writing well for the web.</p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-2">
          Writing well for specialists
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-2" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for Writing well for specialists.</p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-3">
          Know your audience
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-3" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for Know your audience.</p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-4">
          How people read
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-4" class="govuk-accordion__section-content">
      <p class="govuk-body">This is the content for How people read.</p>
    </div>
  </div>
</div>
```

#### Write clear button text

Write the heading and summary line like any other button text. Use sentence case, describe the content that will show, and keep it short.

Users of screen readers might find it difficult to navigate the accordion if the button text is too long.

If you struggle to come up with clear button text, it might be because the way you’ve separated the content is not clear. Organise sections in a way that makes sense to users, based on their needs.

#### Adding a summary line

Only add a summary line if it’s actually needed, as it's likely to make the button text too long.

If you’ve decided that you need the summary line, you must make it as short as possible.

**Example: Accordion with summary sections**

Nunjucks:

```njk
{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

{{ govukAccordion({
  id: "accordion-with-summary-sections",
  items: [
    {
      heading: {
        text: "Understanding agile project management"
      },
      summary: {
        text: "Introductions, methods, core features."
      },
      content: {
        html:
        '<ul class="govuk-list">
            <li>
              <a class="govuk-link" href="#">Agile and government services: an introduction</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Agile methods: an introduction</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Core principles of agile</a>
            </li>
        </ul>'
      }
    },
    {
      heading: {
        text: "Working with agile methods"
      },
      summary: {
        text: "Workspaces, tools and techniques, user stories, planning."
      },
      content: {
        html:
        '<ul class="govuk-list">
            <li>
              <a class="govuk-link" href="#">Creating an agile working environment</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Agile tools and techniques</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Set up a team wall</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Writing user stories</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Planning in agile</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Deciding on priorities</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Developing a roadmap</a>
            </li>
        </ul>'
      }
    },
    {
      heading: {
        text: "Governing agile services"
      },
      summary: {
        text: "Principles, measuring progress, spending money."
      },
      content: {
        html:
        '<ul class="govuk-list">
            <li>
              <a class="govuk-link" href="#">Governance principles for agile service delivery</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Measuring and reporting progress</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Spend controls: check if you need approval to spend money on a service</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Spend controls: apply for approval to spend money on a service</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Spend controls: the new pipeline process</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Working across organisational boundaries</a>
            </li>
        </ul>'
      }
    },
    {
      heading: {
        text: "Phases of an agile project"
      },
      summary: {
        text: "Discovery, alpha, beta, live and retirement."
      },
      content: {
        html:
        '<ul class="govuk-list">
            <li>
              <a class="govuk-link" href="#">How the discovery phase works</a>
            </li>
            <li>
              <a class="govuk-link" href="#">How the alpha phase works</a>
            </li>
            <li>
              <a class="govuk-link" href="#">How the beta phase works</a>
            </li>
            <li>
              <a class="govuk-link" href="#">How the live phase works</a>
            </li>
            <li>
              <a class="govuk-link" href="#">Retiring your service</a>
            </li>
        </ul>'
      }
    }
  ]
}) }}
```

HTML:

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-with-summary-sections">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-with-summary-sections-heading-1">
          Understanding agile project management
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
        Introductions, methods, core features.
      </div>
    </div>
    <div id="accordion-with-summary-sections-content-1" class="govuk-accordion__section-content">
      <ul class="govuk-list">
                  <li>
                    <a class="govuk-link" href="#">Agile and government services: an introduction</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Agile methods: an introduction</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Core principles of agile</a>
                  </li>
              </ul>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-with-summary-sections-heading-2">
          Working with agile methods
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-2">
        Workspaces, tools and techniques, user stories, planning.
      </div>
    </div>
    <div id="accordion-with-summary-sections-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list">
                  <li>
                    <a class="govuk-link" href="#">Creating an agile working environment</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Agile tools and techniques</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Set up a team wall</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Writing user stories</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Planning in agile</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Deciding on priorities</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Developing a roadmap</a>
                  </li>
              </ul>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-with-summary-sections-heading-3">
          Governing agile services
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-3">
        Principles, measuring progress, spending money.
      </div>
    </div>
    <div id="accordion-with-summary-sections-content-3" class="govuk-accordion__section-content">
      <ul class="govuk-list">
                  <li>
                    <a class="govuk-link" href="#">Governance principles for agile service delivery</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Measuring and reporting progress</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Spend controls: check if you need approval to spend money on a service</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Spend controls: apply for approval to spend money on a service</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Spend controls: the new pipeline process</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Working across organisational boundaries</a>
                  </li>
              </ul>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-with-summary-sections-heading-4">
          Phases of an agile project
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-4">
        Discovery, alpha, beta, live and retirement.
      </div>
    </div>
    <div id="accordion-with-summary-sections-content-4" class="govuk-accordion__section-content">
      <ul class="govuk-list">
                  <li>
                    <a class="govuk-link" href="#">How the discovery phase works</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">How the alpha phase works</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">How the beta phase works</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">How the live phase works</a>
                  </li>
                  <li>
                    <a class="govuk-link" href="#">Retiring your service</a>
                  </li>
              </ul>
    </div>
  </div>
</div>
```

#### Structure section headings with the rest of the page

The accordion component shows section headings as `<h2>` headings. If needed, change the heading level of the section headings to make them fit within the other headings on the page.

### Starting with sections open

Users might need some sections to be open from the start. If they leave and then return to the page, they might also need sections they opened to stay open.

By default, if the user leaves and then returns to the page within the same page session, the accordion component will use ['session storage'](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to remember which sections were open. This functionality can be turned off by adding `rememberExpanded: false` to the Nunjucks macro.

To see the changes you've made, you may need to create a new 'session'. For example, by opening a page in a new tab or window.

Add the `govuk-accordion__section--expanded` class to the `govuk-accordion__section` `div` to make individual sections open from the start. You can also do this using nunjucks macro options, if you are using the nunjucks macro by setting the `expanded` option to `true` on the individual accordion items you want to be expanded.

You can configure sections to start and stay open, but not stay closed.

### Do not disable sections

Disabling controls is normally confusing for users. If there is no content for a section, either remove the section or, if this would be confusing for your users, explain why there is no content when the section is opened.

## Research on this component

We updated this component in December 2021 to solve an accessibility issue where the buttons and section labels might be mistaken for links.

[Read about the research and development that went into improving the accordion component](https://github.com/alphagov/govuk-design-system-backlog/issues/1#issuecomment-995675898).

The team made sure the component is accessible, for example that users can interact with it using just the keyboard.

### Users that navigate using ‘elements lists’

We need to find out more about users that navigate using ‘elements lists’ of headings, buttons, links and other elements – such as users of speech recognition software and partially-sighted users of screen readers.

For these users, it might not be clear enough that the section headings are considered buttons. This could mislead them to navigate (less efficiently) using the show or hide labels.

While this experience is inconvenient at first, it's likely the user will better understand the button area once they interact with it and see its focus state. [See ‘Testing with Dragon’ in the accessibility clinic summary](https://github.com/alphagov/govuk-frontend/issues/2295#issuecomment-906449543).

We want to hear about any user research done in this area so we can identify potential issues.

### Known issues and gaps

Adding a summary line with more than a few short words will likely make the button text too long, particularly for users of screen readers.

We need to better understand when service teams use summary lines and how this affects users of screen readers. [Share your findings and research with us](https://github.com/alphagov/govuk-design-system-backlog/issues/1).

We want to get feedback to inform us what to do next.

## Nunjucks macro options

Import: `{% from "govuk/components/accordion/macro.njk" import govukAccordion %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `id` | string | yes | Must be unique across the domain of your service if `rememberExpanded` is `true` (as the expanded state of individual instances of the component persists across page loads using [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)). Used as an `id` in the HTML for the accordion as a whole, and also as a prefix for the `id`s of the section contents and the buttons that open them, so that those `id`s can be the target of `aria-control` attributes. |
| `headingLevel` | integer | no | Heading level, from `1` to `6`. Default is `2`. |
| `classes` | string | no | Classes to add to the accordion. |
| `attributes` | object | no | HTML attributes (for example data attributes) to add to the accordion. |
| `rememberExpanded` | boolean | no | Whether the expanded/collapsed state of the accordion should be saved when a user leaves the page and restored when they return. Default is `true`. |
| `hideAllSectionsText` | string | no | The text content of the 'Hide all sections' button at the top of the accordion when all sections are expanded. |
| `hideSectionText` | string | no | The text content of the 'Hide' button within each section of the accordion, which is visible when the section is expanded. |
| `hideSectionAriaLabelText` | string | no | Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is expanded. Defaults to `"Hide this section"`. |
| `showAllSectionsText` | string | no | The text content of the 'Show all sections' button at the top of the accordion when at least one section is collapsed. |
| `showSectionText` | string | no | The text content of the 'Show' button within each section of the accordion, which is visible when the section is collapsed. |
| `showSectionAriaLabelText` | string | no | Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is collapsed. Defaults to `"Show this section"`. |
| `items` | array | yes | The sections within the accordion. |
| `items.heading` | object | yes | The heading of each accordion section. |
| `items.heading.text` | string | yes | If `html` is set, this is not required. The heading text of each section. If `html` is provided, the `text` option will be ignored. |
| `items.heading.html` | string | yes | If `text` is set, this is not required. The heading HTML content of each section. The header is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored. |
| `items.summary` | object | no | The summary line of each accordion section. |
| `items.summary.text` | string | no | The summary line text content of each section. If `html` is provided, the `text` option will be ignored. |
| `items.summary.html` | string | no | The summary line HTML content of each section. The summary line is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored. |
| `items.content` | object | yes | The content of each accordion section. |
| `items.content.text` | string | yes | If `html` is set, this is not required. The text content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored. |
| `items.content.html` | string | yes | If `text` is set, this is not required. The HTML content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored. |
| `items.expanded` | boolean | no | Sets whether the section should be expanded when the page loads for the first time. Defaults to `false`. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "id": "default-example",
  "items": [
    {
      "heading": {
        "text": "Section A"
      },
      "content": {
        "text": "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post."
      }
    },
    {
      "heading": {
        "text": "Section B"
      },
      "content": {
        "html": "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}
```

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="default-example">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="default-example-heading-1">
          Section A
        </span>
      </h2>
    </div>
    <div id="default-example-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">
        We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
      </p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="default-example-heading-2">
          Section B
        </span>
      </h2>
    </div>
    <div id="default-example-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>
```

### with additional descriptions

```json
{
  "id": "with-descriptions",
  "items": [
    {
      "heading": {
        "text": "Test"
      },
      "summary": {
        "text": "Additional description"
      },
      "content": {
        "html": "<p class=\"govuk-body\">\n  We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.\n</p>\n<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 1</li>\n</ul>\n"
      }
    },
    {
      "heading": {
        "text": "Test 2"
      },
      "summary": {
        "html": "<span class=\"govuk-!-font-weight-regular\">Additional description (wrapped in span)</span>"
      },
      "content": {
        "html": "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}
```

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="with-descriptions">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-descriptions-heading-1">
          Test
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-descriptions-summary-1">
        Additional description
      </div>
    </div>
    <div id="with-descriptions-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">
        We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
      </p>
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-descriptions-heading-2">
          Test 2
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-descriptions-summary-2">
        <span class="govuk-!-font-weight-regular">Additional description (wrapped in span)</span>
      </div>
    </div>
    <div id="with-descriptions-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>
```

### with long content and description

```json
{
  "id": "with-long-content-and-description",
  "items": [
    {
      "heading": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis tortor porttitor."
      },
      "summary": {
        "text": "Etiam diam dui, tempus ut pharetra in, aliquet non dui. Nunc pulvinar maximus tortor, ac finibus augue congue vitae. Donec sed cursus lorem."
      },
      "content": {
        "html": "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 1</li>\n</ul>\n"
      }
    },
    {
      "heading": {
        "text": "Praesent faucibus leo feugiat libero pharetra lacinia. Aliquam aliquet ante vitae mollis vestibulum."
      },
      "summary": {
        "html": "<span class=\"govuk-!-font-weight-regular\">Maecenas nec <abbr>est</abbr> sapien. Etiam varius luctus mauris non porttitor. </span>"
      },
      "content": {
        "html": "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}
```

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="with-long-content-and-description">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-long-content-and-description-heading-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis tortor porttitor.
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-long-content-and-description-summary-1">
        Etiam diam dui, tempus ut pharetra in, aliquet non dui. Nunc pulvinar maximus tortor, ac finibus augue congue vitae. Donec sed cursus lorem.
      </div>
    </div>
    <div id="with-long-content-and-description-content-1" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-long-content-and-description-heading-2">
          Praesent faucibus leo feugiat libero pharetra lacinia. Aliquam aliquet ante vitae mollis vestibulum.
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-long-content-and-description-summary-2">
        <span class="govuk-!-font-weight-regular">Maecenas nec <abbr>est</abbr> sapien. Etiam varius luctus mauris non porttitor. </span>
      </div>
    </div>
    <div id="with-long-content-and-description-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>
```

### with all sections already open

```json
{
  "id": "all-sections-open-example",
  "items": [
    {
      "heading": {
        "text": "Section A"
      },
      "expanded": true,
      "content": {
        "html": "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 1</li>\n</ul>\n"
      }
    },
    {
      "heading": {
        "text": "Section B"
      },
      "expanded": true,
      "content": {
        "html": "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}
```

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="all-sections-open-example">
  <div class="govuk-accordion__section govuk-accordion__section--expanded">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="all-sections-open-example-heading-1">
          Section A
        </span>
      </h2>
    </div>
    <div id="all-sections-open-example-content-1" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section govuk-accordion__section--expanded">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="all-sections-open-example-heading-2">
          Section B
        </span>
      </h2>
    </div>
    <div id="all-sections-open-example-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>
```

