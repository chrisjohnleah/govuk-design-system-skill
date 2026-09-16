# Service unavailable pages

This is a page that tells someone a service is unavailable. It should say when the service will be available or what to do if it is permanently closed

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Tell the user a service is unavailable on purpose. These are also known as 503 and shutter pages.

**Example: Service unavailable pages**

HTML:

```html
<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
      <p class="govuk-body">
        You will be able to use the service from 9am on Monday 19&nbsp;November&nbsp;2018.
      </p>
      <p class="govuk-body">
        <a class="govuk-link" href="#">Contact the Tax Credits Helpline</a> if you need to make changes to your claim or speak to someone about your tax credits.
      </p>
    </div>
  </div>
```

## When to use this pattern

Use a service unavailable page when a service has been closed on purpose. This could be for a specific period of time or permanently.

If there is a problem with the service, [use a There is a problem with the service page](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/).

Have a general page in case you need to close a service and do not have time to update the page. As soon as you know when the service will be available, update the page.

## How it works

The page should have:

- ‘Sorry, the service is unavailable – service name – GOV.UK’ as the page title
- ‘Sorry, the service is unavailable’ as the H1
- the day, date and time it is going to be available or what to do if it is permanently closed
- information about what has happened to their answers if they are in the middle of a transaction
- contact information, if it exists and helps meet a user need
- a link to another service, if they can use it to do what they came to do

Contact information should either be:

- a link to a specific page that includes numbers and opening times
- include all numbers and opening times

Have clear and concise content and do not use:

- breadcrumbs
- vague, unhelpful words like maintenance, improvements
- red text to warn people

### General page

**Example: General page**

HTML:

```html
<div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
      <p class="govuk-body">
        You will be able to use the service later.
      </p>
      <p class="govuk-body">
        We saved your answers. They will be available for 30 days.
      </p>
      <p class="govuk-body"><a class="govuk-link" href="#">
        Contact the Tax Credits Helpline</a> if you need to make changes to your claim or speak to someone about your tax credits.
      </p>
    </div>
  </div>
```

### When you know when a service will be available

**Example: When you know when a service will be available**

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
    <p class="govuk-body">
      You will be able to use the service on Monday 19&nbsp;November&nbsp;2018.
    </p>
    <p class="govuk-body">
      We have not saved your answers. When the service is available, you will have to start again.
    </p>
    <p class="govuk-body">
      <a class="govuk-link" href="#">Contact the Tax Credits Helpline</a> if you need to make changes to your claim or speak to someone about your tax credits.
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
    <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
    <p class="govuk-body">
      You will be able to use the service from 9am on Monday 19&nbsp;November&nbsp;2018.
    </p>
    <p class="govuk-body">
      You can <a class="govuk-link" href="#">change other VAT details</a>.
    </p>
    <p class="govuk-body">
      <a class="govuk-link" href="#">Contact the Tax Credits Helpline</a> if you need to make changes to your claim or speak to someone about your tax credits.
    </p>
  </div>
</div>
```

### Service is closed for part of the year

This is for a service like tax credit renewals.

#### After a service closes

**Example: After a service closes**

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
    <p class="govuk-body">
      You cannot use the online service to renew your tax credits.
    </p>
    <p class="govuk-body">
      <a class="govuk-link" href="#">Contact the Tax Credits Helpline</a> to renew your tax credits by phone or letter.
    </p>
    <p class="govuk-body">
      You can use the tax credits service to:
    </p>
    <ul class="govuk-list govuk-list--bullet">
      <li>find out more about your payments</li>
      <li>see who is on your claim</li>
      <li>make changes to your claim</li>
      <li>check the status of your renewal</li>
    </ul>
  </div>
</div>
```

#### Before a service opens

Do not include any contact information.

**Example: Before a service opens**

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
    <p class="govuk-body">
      You will be able to renew your tax credits from Tuesday 24&nbsp;April&nbsp;2018.
    </p>
    <p class="govuk-body"><a class="govuk-link" href="#">
      Contact the Tax Credits Helpline</a> to renew your tax credits by phone or letter.
    </p>
    <p class="govuk-body">
      You can <a class="govuk-link" href="#">use the tax credits service</a> to:
    </p>
    <ul class="govuk-list govuk-list--bullet">
      <li>find out more about your payments</li>
      <li>see who is on your claim</li>
      <li>make changes to your claim</li>
    </ul>
  </div>
</div>
```

### Service is closed forever

#### Nothing has replaced the service

**Example: Nothing has replaced the service**

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
    <p class="govuk-body">
      The submit an employment intermediary report service has closed.
    </p>
    <p class="govuk-body">
      Contact us if you need to speak to someone about the service and your reports.
    </p>
    <p class="govuk-body">Phone:<br>
      <strong class="govuk-!-font-weight-bold">0808 157 3900</strong>
    </p>
    <p class="govuk-body">Opening times:<br>
      <strong class="govuk-!-font-weight-bold">Monday to Friday: 8:30am to 4:30pm</strong>
    </p>
  </div>
</div>
```

#### Something has replaced the service

**Example: Something has replaced the service**

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>
    <p class="govuk-body">Universal Credit has replaced tax credits.</p>
    <p class="govuk-body"><a class="govuk-link" href="#">
      Contact the Tax Credits Helpline</a> if you need to speak to someone about your tax credits.
    </p>
    <p class="govuk-body">You can:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li><a class="govuk-link" href="#">find out more about Universal Credit</a></li>
      <li><a class="govuk-link" href="#">apply for Universal Credit</a></li>
      <li><a class="govuk-link" href="#">sign in to your Universal Credit account</a></li>
    </ul>
  </div>
</div>
```

## Research on this pattern

This pattern was tested with 5 users. The user needs identified were to say:

- when the service will be available
- how they can do what they came to do

To meet the needs:

- give clear information about when the service will be available again
- if the service has closed forever, what has replaced it
- say what someone needs to do if they need to speak to someone
- include a link to another service or contact information about offline support

### Next steps

More research is needed to find out:

- what people need to know
- what their expectations are after reading the page
- if people understand what is going on when they see the page
