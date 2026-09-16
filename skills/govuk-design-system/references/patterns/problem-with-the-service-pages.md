# There is a problem with the service pages

This is a page that tells someone there is something wrong with the service. They are also known as 500 pages

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Tell the user there is something wrong with the service. These are also known as 500 and internal server error pages.

**Example: Service has a specific page that includes numbers and opening times**

HTML:

```html
<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>
      <p class="govuk-body">Try again later.</p>
      <p class="govuk-body">We saved your answers. They will be available for 30 days.</p>
      <p class="govuk-body">
        <a class="govuk-link" href="#">Contact the Tax Credits Helpline</a> if you need to make changes to your claim or speak to someone about your tax credits.
      </p>
    </div>
  </div>
```

## When to use this pattern

Use this page when there is an unexpected problem with the service. Use the same page for all unexpected problems.

Log all errors and fix them as quickly as possible.

Only display the page for a short time. If a problem cannot be fixed quickly, close the service and [use a Service unavailable page](https://design-system.service.gov.uk/patterns/service-unavailable-pages/).

## How it works

These pages should have:

- ‘Sorry, there is a problem with the service – service name – GOV.UK’ as the page title
- ‘Sorry, there is a problem with the service’ as the H1
- ‘Try again later.’ as a normal paragraph
- information about what has happened to their answers if they are in the middle of a transaction
- contact information, if it exists and helps meet a user need
- a link to another service, if they can use it to do what they came to do

Contact information should either be:

- a link to a specific page that includes numbers and opening times
- include all numbers and opening times

Have clear and concise content and do not use:

- breadcrumbs
- jargon like 500 or bad request
- ‘We are experiencing technical difficulties’
- red text to warn people

Store previously entered information for a reasonable amount of time so users can resume a journey with re-populated information when the service becomes available again.

### Showing contact information

Contact information should either:

- include all numbers and opening times in one place on the page
- be a link out to a page that includes numbers and opening times

You might choose to link to a ‘contact information’ page, such as one shown in the [‘Contact a department or service team’ pattern](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/).

### Service has a specific page that includes numbers and opening times

**Example: Service has a specific page that includes numbers and opening times** second

HTML:

```html
<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>
      <p class="govuk-body">Try again later.</p>
      <p class="govuk-body">We saved your answers. They will be available for 30 days.</p>
      <p class="govuk-body">
        <a class="govuk-link" href="#">Contact the Tax Credits Helpline</a> if you need to make changes to your claim or speak to someone about your tax credits.
      </p>
    </div>
  </div>
```

### Service has offline support but no specific page that includes numbers and opening times

**Example: Service has offline support but no specific page that includes numbers and opening times**

HTML:

```html
<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>
      <p class="govuk-body">Try again later.</p>
      <p class="govuk-body">
        We have not saved your answers. When the service is available, you will have to start again.
      </p>
      <p class="govuk-body">
        Contact the Tax Credits Helpline if you have any questions.
      </p>
      <p class="govuk-body">
        Phone:<br>
        <strong class="govuk-!-font-weight-bold">0808 157 3900</strong>
      </p>
      <p class="govuk-body">
        Textphone:<br>
        <strong class="govuk-!-font-weight-bold">0808 157 3909</strong>
      </p>
      <p class="govuk-body">
        Outside UK:<br>
        <strong class="govuk-!-font-weight-bold">+44 0808 157 0192</strong>
      </p>
      <p class="govuk-body">
        Opening times:<br>
        <strong class="govuk-!-font-weight-bold">Monday to Friday: 8am to 8pm</strong>
      </p>
      <p class="govuk-body">
        Closed Easter Sunday, Christmas Day, Boxing Day and New Year’s Day.
      </p>
    </div>
  </div>
```

### A link to another service

**Example: A link to another service**

HTML:

```html
<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>
      <p class="govuk-body">Try again later.</p>
      <p class="govuk-body">
        You can <a class="govuk-link" href="#">change other VAT details</a>.
      </p>
      <p class="govuk-body">
        <a class="govuk-link" href="#">Contact the Income Tax Helpline</a> if you need to speak to someone about your tax calculation.
      </p>
    </div>
  </div>
```

## Research on this pattern

The pattern was tested with 5 users. The user needs identified were to say:

- when the service will be available
- how they can do what they came to do

We cannot meet the first need because we do not know what has happened.

To meet the other need:

- say what someone needs to do if they need to speak to someone
- include a link to another service or contact information about offline support

### Next steps

More research is needed to find out:

- what people need to know
- what their expectations are after reading the page
- if people understand what is going on when they see the page
- if people need to know if this affects only them or other people too
- if people expect to see please and sorry
