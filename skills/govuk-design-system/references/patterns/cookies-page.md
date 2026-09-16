# Cookies page

Tell users about the cookies you’re setting on their device and let them accept or reject different types of non-essential cookies.

Tell users about the cookies you’re setting on their device and let them accept or reject different types of non-essential cookies.

**Example: Full page**

Nunjucks:

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">Cookies</h1>
    <p class="govuk-body">Cookies are small files saved on your phone, tablet or computer when you visit a website.</p>
    <p class="govuk-body">We use cookies to make this site work and collect information about how you use our service.</p>
    <h2 class="govuk-heading-m">Essential cookies</h2>
    <p class="govuk-body">Essential cookies keep your information secure while you use this service. We do not need to ask permission to use them.</p>
    {{ govukTable({
      caption: "Essential cookies we use",
      captionClasses: "govuk-table__caption--s",
      firstCellIsHeader: false,
      head: [
        {
          text: "Name"
        },
        {
          text: "Purpose"
        },
        {
          text: "Expires"
        }
      ],
      rows: [
        [
          {
            text: "session_cookie"
          },
          {
            text: "Used to keep you signed in"
          },
          {
            text: "20 hours"
          }
        ],
        [
          {
            text: "cookie_policy"
          },
          {
            text: "Saves your cookie consent settings"
          },
          {
            text: "1 year"
          }
        ]
      ]
    }) }}
  </div>
</div>
```

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">Cookies</h1>
    <p class="govuk-body">Cookies are small files saved on your phone, tablet or computer when you visit a website.</p>
    <p class="govuk-body">We use cookies to make this site work and collect information about how you use our service.</p>
    <h2 class="govuk-heading-m">Essential cookies</h2>
    <p class="govuk-body">Essential cookies keep your information secure while you use this service. We do not need to ask permission to use them.</p>
    <table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--s">Essential cookies we use</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Name</th>
      <th scope="col" class="govuk-table__header">Purpose</th>
      <th scope="col" class="govuk-table__header">Expires</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">session_cookie</td>
      <td class="govuk-table__cell">Used to keep you signed in</td>
      <td class="govuk-table__cell">20 hours</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">cookie_policy</td>
      <td class="govuk-table__cell">Saves your cookie consent settings</td>
      <td class="govuk-table__cell">1 year</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
```

## When to use this pattern

Use a cookies page to tell the user about any cookies your service uses - or any other technologies that work in a similar way and store information on the user’s device. For example, HTML5 local storage or service workers.

## How it works

A cookies page helps you to be transparent about the cookies you’re using. The Service Manual has [guidance on how and when to use cookies](https://www.gov.uk/service-manual/technology/working-with-cookies-and-similar-technologies).

## Preparing your cookies page

You must publish a cookies page by the time your service goes into public beta. The cookies page must be unique to your service: do not link to the cookie policy for the main GOV.UK website.

Follow the steps below to create a cookie policy.

1. Audit your cookies.
2. Categorise your cookies.
3. Write your cookies page.

## Auditing and categorising your cookies

List all the cookies you’re using in the service. Divide the list into:

- essential cookies - these are cookies you need to set so the service will work
- functional cookies - the service will work without them, but the user will not be able to take advantage of some functionality (for example, remembering the settings they’ve chosen between different visits)
- analytics cookies - cookies that let you collect analytics data to use within your own organisation
- any other types of cookie you’re using

You should also identify if each cookie is set on the server or client.

The result of your audit will guide your cookie policy and how the service should use a cookies page and cookie banner.

The [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/) shows several options for using a cookie banner for services that:

- only set essential cookies
- sets non-essential cookies on the server - including services that also set non-essential cookies on the client
- sets non-essential cookies - but only on the client

## Writing your cookies page

Work with your organisation’s privacy expert to write the cookies page.

Cookie policy must be written in [clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/tone-of-voice/clear-language/).

List the cookies individually on the cookies page, under the relevant category. For each cookie, give:

- the cookie name
- a brief description of what the cookie does
- for third party cookies, who is setting the cookie (for example, social media websites may require users to accept their cookies in order to provide their functionality as part of your service)
- when the cookie will expire

You can see an example on the [GOV.UK Notify cookies page](https://www.notifications.service.gov.uk/cookies).

Do not bury your cookie policy in a ‘terms and conditions’ page.

Have an agreed process for updating the cookie policy when you add or remove a cookie. Make sure the relevant people on your team know what the process is.

## Which cookies you need consent for

You do not need the user’s consent to set essential or ‘strictly necessary’ cookies. A cookie is ‘strictly necessary’ if the service will not work without it.

The Information Commissioner’s Office (ICO) has [guidance on what types of cookie are likely to be considered ‘strictly necessary’](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/). For example, load balancing cookies are likely to be strictly necessary - but cookies that collect analytics data are not.

You must get the user’s consent before you set any cookies that are not strictly necessary.

You can get the user’s consent:

- by using a [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/)
- by letting the user change and save their settings on the cookies page

## Publishing your cookies page

Link to the cookies page from the [Footer component](https://design-system.service.gov.uk/components/footer/) and from the [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/).

## Letting users accept or reject cookies on the cookies page

Use a [Radios component](https://design-system.service.gov.uk/components/radios/) and a [Button component](https://design-system.service.gov.uk/components/button/) to let users accept or reject non-essential cookies.

Load the page with the radios set to ‘no’ on the user’s first visit. If they’ve previously used the service and set their preferences, load the page with those preferences selected.

**Example: Cookie preferences form**

Nunjucks:

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/button/macro.njk" import govukButton %}

<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h2 class="govuk-heading-l">Change your cookie settings</h2>
    <form action="/form-handler" method="post" novalidate>
      {{ govukRadios({
          name: "cookies[functional]",
          idPrefix: "cookies-functional",
          fieldset: {
            legend: {
              text: "Do you want to accept functional cookies?",
              classes: "govuk-fieldset__legend--s"
            }
          },
          items: [
            {
              value: "yes",
              text: "Yes"
            },
            {
              value: "no",
              text: "No",
              checked: true
            }
          ]
        }) }}

        {{ govukRadios({
          name: "cookies[analytics]",
          idPrefix: "cookies-analytics",
          fieldset: {
            legend: {
              text: "Do you want to accept analytics cookies?",
              classes: "govuk-fieldset__legend--s"
            }
          },
          items: [
            {
              value: "yes",
              text: "Yes"
            },
            {
              value: "no",
              text: "No",
              checked: true
            }
          ]
        }) }}

        {{ govukButton({
          text: "Save cookie settings"
        }) }}
    </form>
  </div>
</div>
```

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h2 class="govuk-heading-l">Change your cookie settings</h2>
    <form action="/form-handler" method="post" novalidate>
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
    Do you want to accept functional cookies?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="cookies-functional" name="cookies[functional]" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="cookies-functional">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="cookies-functional-2" name="cookies[functional]" type="radio" value="no" checked>
      <label class="govuk-label govuk-radios__label" for="cookies-functional-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
    Do you want to accept analytics cookies?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="cookies-analytics" name="cookies[analytics]" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="cookies-analytics">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="cookies-analytics-2" name="cookies[analytics]" type="radio" value="no" checked>
      <label class="govuk-label govuk-radios__label" for="cookies-analytics-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>
<button type="submit" class="govuk-button" data-module="govuk-button">
  Save cookie settings
</button>
    </form>
  </div>
</div>
```

When the user sets or changes their cookie preferences, use a green [Notification banner component](https://design-system.service.gov.uk/components/notification-banner/) to confirm that the service has updated the user’s cookie settings. This is so they can get back to the page they were looking at.

**Example: Cookie preferences updated**

Nunjucks:

```njk
{% from "govuk/components/notification-banner/macro.njk" import govukNotificationBanner %}

{% call govukNotificationBanner({
  type: "success"
}) %}
  <p class="govuk-notification-banner__heading">
    You’ve set your cookie preferences. <a class="govuk-notification-banner__link" href="#">Go back to the page you were looking at</a>.
  </p>
{% endcall %}
```

HTML:

```html
<div class="govuk-notification-banner govuk-notification-banner--success" role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Success
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
  <p class="govuk-notification-banner__heading">
    You’ve set your cookie preferences. <a class="govuk-notification-banner__link" href="#">Go back to the page you were looking at</a>.
  </p>
  </div>
</div>
```

## If you depend on JavaScript to ask users to accept or reject cookies

If you depend on JavaScript to ask about cookie preferences and the user’s device is not running JavaScript, show them a different version of the cookies page.

Replace the radios with a section of text explaining what the user needs to do in order to change their cookie settings.

**Example: No JavaScript**

HTML:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h2 class="govuk-heading-l">Change your cookie settings</h2>
    <p class="govuk-body">We cannot change your cookie settings at the moment because JavaScript is not running in your browser. To fix this, try:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>turning on JavaScript in your browser settings</li>
      <li>reloading this page</li>
    </ul>
  </div>
</div>
```

## Keeping your cookies page up to date and asking for new consent

Update your cookies page when you change the cookies you’re using. Check with your organisation’s privacy expert:

- how you should classify the new cookie
- whether you’ll need to ask for new consent from all users (including those who’ve already consented to the cookies you were previously using)

It’s likely you’ll need to ask for new consent if:

- you start using a type of non-essential cookie you have not used before (for example, if you start using functional cookies for the first time)
- you start using cookies which could be considered intrusive (for example because they collect sensitive information which could be associated with an individual, like health information)
- you start doing something with the data you’re collecting through cookies which is significantly different to what the user originally consented to

Do not set any new non-essential cookies until the user has given their consent again.
