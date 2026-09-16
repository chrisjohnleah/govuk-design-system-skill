# Service navigation

Service navigation helps users understand that they’re using your service and lets them navigate around your service

Service navigation helps users understand that they’re using your service and lets them navigate around your service.

**Example: Service navigation**

Nunjucks:

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{{ govukServiceNavigation({
  navigation: [
    {
      href: "#",
      text: "Navigation item 1"
    },
    {
      href: "#",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#",
      text: "Navigation item 3"
    }
  ]
}) }}
```

HTML:

```html
<div 
class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
  <div class="govuk-width-container">
    <div class="govuk-service-navigation__container">
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>
          <ul class="govuk-service-navigation__list" id="navigation" >
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#">
                Navigation item 1
                  </a>
              </li>
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#" aria-current="true">
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>
                  </a>
              </li>
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#">
                Navigation item 3
                  </a>
              </li>
            </ul>
        </nav>
    </div>
    </div>
  </div>
```

If you use the page template, you'll also get the Service navigation without having to add it, as it's included by default. However, if you want to customise the default Service navigation, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

Use the Service navigation to help users understand that they’re using your service.

To decide when to use navigation links in your service, see the [Help users to navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

## How it works

Together, the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) and Service navigation component ensure users get a consistent experience on GOV.UK.

This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.

For guidance on how to plan your header and navigation, see the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

### Showing your service name only

Use the Service navigation component to show your service name.

**Example: Service navigation with service name**

Nunjucks:

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#"
}) }}
```

HTML:

```html
<section aria-label="Service information" 
class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
  <div class="govuk-width-container">
    <div class="govuk-service-navigation__container">
        <span class="govuk-service-navigation__service-name">
            <a href="#" class="govuk-service-navigation__link">
              Service name
            </a>
        </span>
    </div>
    </div>
  </section>
```

### Showing service name and navigation links

Show navigation links to let users navigate to different parts of your service and find useful links and tools.

**Example: Service navigation with service name and navigation**

Nunjucks:

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#",
  navigation: [
    {
      href: "#",
      text: "Navigation item 1"
    },
    {
      href: "#",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#",
      text: "Navigation item 3"
    }
  ]
}) }}
```

HTML:

```html
<section aria-label="Service information" 
class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
  <div class="govuk-width-container">
    <div class="govuk-service-navigation__container">
        <span class="govuk-service-navigation__service-name">
            <a href="#" class="govuk-service-navigation__link">
              Service name
            </a>
        </span>
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>
          <ul class="govuk-service-navigation__list" id="navigation" >
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#">
                Navigation item 1
                  </a>
              </li>
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#" aria-current="true">
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>
                  </a>
              </li>
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#">
                Navigation item 3
                  </a>
              </li>
            </ul>
        </nav>
    </div>
    </div>
  </section>
```

See when and how to show navigation links in the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

## Use ‘slots’ to add custom HTML code

The Service navigation includes the option to use ‘slots’ to render custom HTML code at specific places inside the component.

You must provide your own styles and JavaScript for the custom HTML code within a slot, particularly if you’re not adding an existing component. You’ll need to decide on the most appropriate layout and positioning.

**Example: Service navigation slots**

Nunjucks:

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{% set startHtml %}
  <div class="app-annotate-block">
    <span class="app-annotate-block__label">slot: start</span>
  </div>
{% endset %}

{% set endHtml %}
  <div class="app-annotate-block">
    <span class="app-annotate-block__label">slot: end</span>
  </div>
{% endset %}

{% set navigationStart %}
  <!--
    Notice the wrapping `<li>` as the `navigationStart` slot
    injects content at the start of the `<ul>` listing the navigation items
  -->
  <li class="govuk-service-navigation__item">
    <div class="app-annotate-block app-annotate-block--short">
      <span class="app-annotate-block__label">slot: navigationStart</span>
    </div>
  </li>
{% endset %}

{% set navigationEnd %}
  <!--
    Notice the wrapping `<li>` as the `navigationStart` slot
    injects content at the end of the `<ul>` listing the navigation items
  -->
  <li class="govuk-service-navigation__item">
    <div class="app-annotate-block app-annotate-block--short">
      <span class="app-annotate-block__label">slot: navigationEnd</span>
    </div>
  </li>
{% endset %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#",
  navigation: [
    {
      href: "#",
      text: "Item 1"
    },
    {
      href: "#",
      text: "Item 2",
      active: true
    }
  ],
  slots: {
    start: startHtml,
    end: endHtml,
    navigationStart: navigationStart,
    navigationEnd: navigationEnd
  }
}) }}
```

HTML:

```html
<section aria-label="Service information" 
class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
  <div class="govuk-width-container">
  <div class="app-annotate-block">
    <span class="app-annotate-block__label">slot: start</span>
  </div>
<div class="govuk-service-navigation__container">
        <span class="govuk-service-navigation__service-name">
            <a href="#" class="govuk-service-navigation__link">
              Service name
            </a>
        </span>
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>
          <ul class="govuk-service-navigation__list" id="navigation" >
  <!--
    Notice the wrapping `<li>` as the `navigationStart` slot
    injects content at the start of the `<ul>` listing the navigation items
  -->
  <li class="govuk-service-navigation__item">
    <div class="app-annotate-block app-annotate-block--short">
      <span class="app-annotate-block__label">slot: navigationStart</span>
    </div>
  </li>
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#">
                Item 1
                  </a>
              </li>
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#" aria-current="true">
                  <strong class="govuk-service-navigation__active-fallback">Item 2</strong>
                  </a>
              </li>
  <!--
    Notice the wrapping `<li>` as the `navigationStart` slot
    injects content at the end of the `<ul>` listing the navigation items
  -->
  <li class="govuk-service-navigation__item">
    <div class="app-annotate-block app-annotate-block--short">
      <span class="app-annotate-block__label">slot: navigationEnd</span>
    </div>
  </li>
</ul>
        </nav>
    </div>
  <div class="app-annotate-block">
    <span class="app-annotate-block__label">slot: end</span>
  </div>
</div>
  </section>
```

The Help users to navigate a service pattern includes some guidance on ‘[Adding other header and navigation elements](https://design-system.service.gov.uk/patterns/navigate-a-service/#adding-other-header-and-navigation-elements)’.

### Adding language navigation

If you use the [trial Language navigation component](https://design-system.service.gov.uk/components/language-navigation) and provide your whole service in more than one language, you can use the 'end' slot to show language options within the Service navigation and align it with navigation items.

### Align the end slot with the navigation items

When enough space is available on screen, the Service navigation component can render custom HTML inline with navigation items, to their right, rather than underneath the navigation items.

If you use HTML:

1. Place the custom HTML code in the end slot before the closing `</div>` of the `<div class="govuk-width-container">` element.
2. Add the `govuk-service-navigation__inlining-container` to the `<div class="govuk-width-container">` element.

If you use Nunjucks:

1. Place the custom HTML code in the `html` option of the `end` slot.
2. Set the `align` option of the `end` slot to `"inline"`.

This can help save space when showing tools users expect to see in that area, like a [language navigation](https://design-system.service.gov.uk/components/language-navigation), or authentication and account links.

**Example: Service navigation with inline end slot**

Nunjucks:

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}
{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}

{% set languageNavigationHtml %}
  {{ govukLanguageNavigation({
    items: [
      {
        text: "English",
        lang: "en",
        href: "#",
        current: true
      },
      {
        text: "Cymraeg",
        lang: "cy",
        href: "#"
      }
    ]
  }) }}
{% endset %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#",
  navigation: [
    {
      href: "#",
      text: "Item 1"
    },
    {
      href: "#",
      text: "Item 2",
      active: true
    }
  ],
  slots: {
    end: {
      html: languageNavigationHtml,
      align: 'inline'
    }
  }
}) }}
```

HTML:

```html
<section aria-label="Service information" 
class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
  <div class="govuk-width-container govuk-service-navigation__inlining-container">
    <div class="govuk-service-navigation__container">
        <span class="govuk-service-navigation__service-name">
            <a href="#" class="govuk-service-navigation__link">
              Service name
            </a>
        </span>
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>
          <ul class="govuk-service-navigation__list" id="navigation" >
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#">
                Item 1
                  </a>
              </li>
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#" aria-current="true">
                  <strong class="govuk-service-navigation__active-fallback">Item 2</strong>
                  </a>
              </li>
            </ul>
        </nav>
    </div>
<nav class="govuk-language-navigation" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#" rel="alternate" lang="cy" hreflang="cy">Cymraeg
      </a>
    </li>
  </ul>
</nav>
</div>
  </section>
```

### Make sure the ‘aria-label’ is accurate for users of assistive technology

When a service name is shown, we let users know that there’s information about the service with a ‘region landmark’ using the `<section>` element.

Depending on what you add in the slots, you might need to rename the `aria-label` to accurately describe what’s in the section.

### Test with each update of GOV.UK Frontend

There’s a risk that slot contents may look or work differently in a future release of GOV.UK Frontend.

You’ll need to ensure that slot content still works as intended after each update.

## Brand refresh of the Service navigation component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

## Research on this component

See the [research section in the Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/#research-on-this-pattern) for a summary of our research on the GOV.UK header and Service navigation, and how you can share your feedback with us.

## Nunjucks macro options

Import: `{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `classes` | string | no | Classes to add to the service navigation container. |
| `attributes` | object | no | HTML attributes (for example, data attributes) to add to the service navigation container. |
| `ariaLabel` | string | no | The text for the `aria-label` which labels the service navigation container when a service name is included. Defaults to `"Service information"`. |
| `menuButtonText` | string | no | The text of the mobile navigation menu toggle. |
| `menuButtonLabel` | string | no | The screen reader label for the mobile navigation menu toggle. Defaults to the same value as `menuButtonText` if not specified. |
| `navigationLabel` | string | no | The screen reader label for the mobile navigation menu. Defaults to the same value as `menuButtonText` if not specified. |
| `navigationId` | string | no | The ID used to associate the mobile navigation toggle with the navigation menu. Defaults to `navigation`. |
| `navigationClasses` | string | no | Classes to add to the navigation menu container. |
| `collapseNavigationOnMobile` | boolean | no | Whether the navigation should be collapsed inside a menu on mobile. Defaults to true if there is more than one navigation item. |
| `serviceName` | string | no | The name of your service. |
| `serviceUrl` | string | no | The homepage of your service. |
| `navigation` | array | yes | Used to add navigation to the service header. |
| `navigation.current` | boolean | no | If `true`, indicates that the user is currently on this page. This takes precedence over `active`. |
| `navigation.active` | boolean | no | If `true`, indicates that the user is within this group of pages in the navigation hierarchy. |
| `navigation.html` | string | yes | HTML for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation.text` | string | yes | Text for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation.href` | string | no | URL of the navigation item anchor. |
| `navigation.attributes` | object | no | HTML attributes (for example data attributes) to add to the navigation item anchor. |
| `slots` | object | no | Specified points for injecting custom HTML into the service header. |
| `slots.start` | string | no | HTML injected at the start of the service header container. |
| `slots.end` | string | no | HTML injected at the end of the service header container. |
| `slots.end` | object | no | Options for injecting HTML at the end of the service header container. |
| `slots.end.html` | string | no | HTML injected at the end of the service header container. |
| `slots.end.align` | string | no | By default, the `end` slot renders below the navigation items. Use `inline` to render it on the same line as the navigation items when space is available. |
| `slots.navigationStart` | string | no | HTML injected before the first list item in the navigation list. Requires `navigation` to be set. |
| `slots.navigationEnd` | string | no | HTML injected after the last list item in the navigation list. Requires `navigation` to be set. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1"
    },
    {
      "href": "#/2",
      "text": "Navigation item 2"
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    },
    {
      "href": "#/4",
      "text": "Navigation item 4"
    }
  ]
}
```

```html
<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
Navigation item 2
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>
```

### with navigation with a current item

```json
{
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1"
    },
    {
      "href": "#/2",
      "text": "Navigation item 2",
      "current": true
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    },
    {
      "href": "#/4",
      "text": "Navigation item 4"
    }
  ]
}
```

```html
<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="page">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>
```

### with large navigation

```json
{
  "navigation": [
    {
      "href": "#/browse/benefits",
      "text": "Benefits"
    },
    {
      "href": "#/browse/births-deaths-marriages",
      "text": "Births, deaths, marriages and care"
    },
    {
      "href": "#/browse/business",
      "text": "Business and self-employed"
    },
    {
      "href": "#/browse/childcare-parenting",
      "text": "Childcare and parenting"
    },
    {
      "href": "#/browse/citizenship",
      "text": "Citizenship and living in the UK"
    },
    {
      "href": "#/browse/justice",
      "text": "Crime, justice and the law"
    },
    {
      "href": "#/browse/disabilities",
      "text": "Disabled people"
    },
    {
      "href": "#/browse/driving",
      "text": "Driving and transport"
    },
    {
      "href": "#/browse/education",
      "text": "Education and learning"
    },
    {
      "href": "#/browse/employing-people",
      "text": "Employing people"
    },
    {
      "href": "#/browse/environment-countryside",
      "text": "Environment and countryside"
    },
    {
      "href": "#/browse/housing-local-services",
      "text": "Housing and local services"
    },
    {
      "href": "#/browse/tax",
      "text": "Money and tax"
    },
    {
      "href": "#/browse/abroad",
      "text": "Passports, travel and living abroad"
    },
    {
      "href": "#/browse/visas-immigration",
      "text": "Visas and immigration"
    },
    {
      "href": "#/browse/working",
      "text": "Working, jobs and pensions"
    }
  ]
}
```

```html
<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/benefits">
                                    
Benefits
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/births-deaths-marriages">
                                    
Births, deaths, marriages and care
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/business">
                                    
Business and self-employed
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/childcare-parenting">
                                    
Childcare and parenting
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/citizenship">
                                    
Citizenship and living in the UK
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/justice">
                                    
Crime, justice and the law
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/disabilities">
                                    
Disabled people
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/driving">
                                    
Driving and transport
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/education">
                                    
Education and learning
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/employing-people">
                                    
Employing people
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/environment-countryside">
                                    
Environment and countryside
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/housing-local-services">
                                    
Housing and local services
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/tax">
                                    
Money and tax
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/abroad">
                                    
Passports, travel and living abroad
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/visas-immigration">
                                    
Visas and immigration
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/browse/working">
                                    
Working, jobs and pensions
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>
```

### with HTML navigation items

```json
{
  "navigation": [
    {
      "href": "#/1",
      "html": "<em>Navigation item 1</em>"
    },
    {
      "href": "#/2",
      "html": "<em>Navigation item 2</em>"
    },
    {
      "href": "#/3",
      "html": "<em>Navigation item 3</em>"
    }
  ]
}
```

```html
<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
<em>Navigation item 1</em>
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
<em>Navigation item 2</em>
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
<em>Navigation item 3</em>
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>
```

### with non-link navigation items

```json
{
  "navigation": [
    {
      "text": "Navigation item 1"
    },
    {
      "html": "<em>Navigation item 2</em>"
    },
    {
      "text": "Navigation item 3"
    }
  ]
}
```

```html
<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <span class="govuk-service-navigation__text">
                                    
Navigation item 1
                  </span>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <span class="govuk-service-navigation__text">
                                    
<em>Navigation item 2</em>
                  </span>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <span class="govuk-service-navigation__text">
                                    
Navigation item 3
                  </span>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>
```

### with service name

```json
{
  "serviceName": "Service name"
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <span class="govuk-service-navigation__text">Service name</span>
        </span>

      
    </div>

    </div>

  </section>
```

### with service link

```json
{
  "serviceName": "Service name",
  "serviceUrl": "#/"
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Service name
            </a>
        </span>

      
    </div>

    </div>

  </section>
```

### with long service name

```json
{
  "serviceName": "Apply to receive a rare holofoil Charizard Pokémon card from the King",
  "serviceUrl": "#/"
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply to receive a rare holofoil Charizard Pokémon card from the King
            </a>
        </span>

      
    </div>

    </div>

  </section>
```

### with service name and navigation

```json
{
  "serviceName": "Apply for a juggling license",
  "serviceUrl": "#/",
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1"
    },
    {
      "href": "#/2",
      "text": "Navigation item 2",
      "active": true
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    },
    {
      "href": "#/4",
      "text": "Navigation item 4"
    }
  ]
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>
```

### inverse

```json
{
  "classes": "govuk-service-navigation--inverse",
  "serviceName": "Apply for a juggling license",
  "serviceUrl": "#/",
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1"
    },
    {
      "href": "#/2",
      "text": "Navigation item 2",
      "active": true
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    },
    {
      "href": "#/4",
      "text": "Navigation item 4"
    }
  ]
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation govuk-service-navigation--inverse"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>
```

### with collapseNavigationOnMobile set to false

```json
{
  "serviceName": "Apply for a juggling license",
  "serviceUrl": "#/",
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1"
    },
    {
      "href": "#/2",
      "text": "Navigation item 2",
      "active": true
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    },
    {
      "href": "#/4",
      "text": "Navigation item 4"
    }
  ],
  "collapseNavigationOnMobile": false
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>
```

### with a single navigation item

```json
{
  "serviceName": "Apply for a juggling license",
  "serviceUrl": "#/",
  "navigation": [
    {
      "href": "#/1",
      "text": "Log out"
    }
  ]
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Log out
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>
```

### with a single navigation item and collapseNavigationOnMobile set to true

```json
{
  "serviceName": "Apply for a juggling license",
  "serviceUrl": "#/",
  "navigation": [
    {
      "href": "#/1",
      "text": "Log out"
    }
  ],
  "collapseNavigationOnMobile": true
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Log out
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </section>
```

### with language navigation

```json
{
  "serviceName": "Service name",
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1",
      "active": true
    },
    {
      "href": "#/2",
      "text": "Navigation item 2"
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    }
  ],
  "slots": {
    "end": "<nav class=\"govuk-language-navigation\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
  }
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <span class="govuk-service-navigation__text">Service name</span>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/1" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 1</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
Navigation item 2
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    <nav class="govuk-language-navigation" aria-label="Language navigation">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text" lang="en" aria-current="true">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" lang="cy" hreflang="cy" rel="alternate">Cymraeg</a>
    </li>
  </ul>
</nav></div>

  </section>
```

### with right-aligned language navigation

```json
{
  "serviceName": "Service name",
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1",
      "active": true
    },
    {
      "href": "#/2",
      "text": "Navigation item 2"
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    }
  ],
  "slots": {
    "end": {
      "align": "inline",
      "html": "<nav class=\"govuk-language-navigation\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
    }
  }
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container govuk-service-navigation__inlining-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <span class="govuk-service-navigation__text">Service name</span>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/1" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 1</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
Navigation item 2
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    <nav class="govuk-language-navigation" aria-label="Language navigation">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text" lang="en" aria-current="true">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" lang="cy" hreflang="cy" rel="alternate">Cymraeg</a>
    </li>
  </ul>
</nav></div>

  </section>
```

### inverse with language navigation

```json
{
  "classes": "govuk-service-navigation--inverse",
  "serviceName": "Apply for a juggling license",
  "serviceUrl": "#/",
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1"
    },
    {
      "href": "#/2",
      "text": "Navigation item 2",
      "active": true
    },
    {
      "href": "#/3",
      "text": "Navigation item 3"
    },
    {
      "href": "#/4",
      "text": "Navigation item 4"
    }
  ],
  "slots": {
    "end": "<nav class=\"govuk-language-navigation govuk-language-navigation--inverse\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
  }
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation govuk-service-navigation--inverse"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <a href="#/" class="govuk-service-navigation__link">
              Apply for a juggling license
            </a>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                  <a class="govuk-service-navigation__link" href="#/2" aria-current="true">
                                    
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>

                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    <nav class="govuk-language-navigation govuk-language-navigation--inverse" aria-label="Language navigation">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text" lang="en" aria-current="true">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" lang="cy" hreflang="cy" rel="alternate">Cymraeg</a>
    </li>
  </ul>
</nav></div>

  </section>
```

### with `inline` end slot

```json
{
  "serviceName": "Service name",
  "navigation": [
    {
      "href": "#/1",
      "text": "Navigation item 1"
    }
  ],
  "slots": {
    "end": {
      "html": "<div>[end]</div>",
      "align": "inline"
    }
  }
}
```

```html
<section aria-label="Service information" class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container govuk-service-navigation__inlining-container">

    <div class="govuk-service-navigation__container">
      
        <span class="govuk-service-navigation__service-name">
            <span class="govuk-service-navigation__text">Service name</span>
        </span>

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    <div>[end]</div></div>

  </section>
```

