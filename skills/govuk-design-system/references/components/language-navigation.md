# Language navigation

The Language navigation component helps users choose and switch between languages when using a service.

The Language navigation component helps users choose and switch between languages when using a service.

**Example: Language navigation**

Nunjucks:

```njk
{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}

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
```

HTML:

```html
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
```

## When to use this component

Use the Language navigation component when you can provide your service in more than one language.

For example, to help users switch from a page in English to a version of the same page in Welsh.

How you use this component will depend on whether you offer a choice of languages for:

- [specific pages within your service](#if-you-only-offer-specific-pages-in-another-language)
- [your whole service](#if-you-offer-your-whole-service-in-another-language)

## When not to use this component

Do not use this component unless you can provide all the same key information on a page in another language.

## How it works

The Language navigation component shows users a choice of languages and helps the user choose and switch between them.

Use the native name of each language, such as <span lang="cy">Cymraeg</span> for Welsh. This helps speakers of that language recognise the link.

The component does not translate content. You'll need to create, test and maintain content for all the languages you offer your service in.

See some of the other things you might need to do as part of [designing services that offer multiple languages](#designing-services-that-offer-multiple-languages).

Make sure the user does not lose any data they've entered when they navigate to another language. Do not ask the user to re-enter information they've already given.

### Placement on pages

Where you place the Language navigation component helps users understand whether they can use your entire service or only specific pages in another language.

Choose a single consistent location that works best for your users.

Use the same placement throughout your service in all languages. This helps users in many ways. For example, some users often switch languages throughout their journey as a way to check their understanding of a page.

### If you only offer specific pages in another language

You could place the language navigation at the top of a page, after the `h1` element.

If you choose to place the language navigation elsewhere on a page, it should be in a sensible place in the page heading structure with its own visible or hidden heading.

**Example: Language navigation after H1**

Nunjucks:

```njk
{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}

  <!--
    Note the override class adding the same margin
    as the heading would have to this `<div>`
  -->
  <div class="govuk-!-margin-bottom-8">
    <!--
      Note the override class setting a smaller margin between
      the heading and the Language navigation
    -->
    <h1 class="govuk-heading-xl govuk-!-margin-bottom-3">Find protected areas of countryside</h1>
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
  </div>
  <p class="govuk-body">Nature sites and areas of countryside can be ‘designated’, which means they have special status as protected areas because of their natural and cultural importance.</p>
  <p class="govuk-body">...</p>
```

HTML:

```html
<!--
    Note the override class adding the same margin
    as the heading would have to this `<div>`
  -->
  <div class="govuk-!-margin-bottom-8">
    <!--
      Note the override class setting a smaller margin between
      the heading and the Language navigation
    -->
    <h1 class="govuk-heading-xl govuk-!-margin-bottom-3">Find protected areas of countryside</h1>
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
  <p class="govuk-body">Nature sites and areas of countryside can be ‘designated’, which means they have special status as protected areas because of their natural and cultural importance.</p>
  <p class="govuk-body">...</p>
```

### If you offer your whole service in another language

If users can change the language for your whole service, you can place the [Language navigation component into the Service navigation component](https://design-system.service.gov.uk/components/service-navigation/#adding-language-navigation).

The Service navigation component includes options to align the language navigation with navigation items as shown in this example.

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

### Ensure hidden text and attributes are in the correct languages

The code in this component contains a navigation landmark and some hidden text to help users, including users of assistive technology. Make sure to translate these attributes as needed.

`aria-label` (or `ariaLabel` in Nunjucks) labels the component's navigation landmark. By default the label is 'language', which will be announced by a screen reader as 'language navigation'. Translate this label to the language of the page it's on.

Hidden text within the link for each language option (or `languageDescriptionText` in Nunjucks) explains what the link will do. For example, 'Change the language to English'. Translate these to the language you're linking to.

### Language navigation on dark backgrounds

Use the `govuk-language-navigation--inverse` modifier class to show white links and text on a dark background – for example, inside a Service navigation with a dark background.

Make sure all users can see the language navigation – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Example: Invers Language navigation - Language navigation**

Nunjucks:

```njk
{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}

{{ govukLanguageNavigation({
  classes: 'govuk-language-navigation--inverse',
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
```

HTML:

```html
<nav class="govuk-language-navigation govuk-language-navigation--inverse" aria-label="Language">
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
```

## Designing services that offer multiple languages

GOV.UK Content and publishing guidance gives some advice on things you need to [consider when translating content](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/consider-translations/).

Test your service with users in your intended language to spot potential issues such as word inaccuracies and cultural differences. The Service Manual for Wales shows how you can [consider bilingualism in your research](https://digitalpublicservices.gov.wales/guidance-and-standards/service-manual/researching-your-users-and-testing-your-service/considering-bilingualism-in-your-research/).

### Internationalisation and localisation

If you choose to show larger parts of your service in another language, consider if you need to translate the text within components such as navigation, buttons and accordions.

Our components use English by default but include methods to translate text within them. Follow our documentation on how to [localise GOV.UK Frontend](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#localise-gov-uk-frontend/).

For some languages, you’ll need to [modify components](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/) to make sure text displays well and is understandable by users of assistive technologies. For example, to show languages using scripts that read from right to left, such as Arabic, you’ll need to make changes to components and layouts.

See [W3C’s introduction to internationalisation](https://www.w3.org/International/i18n-drafts/nav/about) for more about some of the things you might need to consider.

Keep in mind that language and regional differences can affect the format users expect to see and enter information such as names, numbers and addresses.

## Research on this component

We’ve released this Language navigation component in trial status.

Thank you to the teams in departments across government who worked with us to contribute and share their research to get the component to this point.

We know from research contributed that users:

- want the option to change language to be easy to find and recognise
- want data to persist so they can navigate between languages and understand unfamiliar words
- want navigating languages across government services to be consistent
- want to change the language for a whole journey or page whilst moving through a service

### Share your research

If you use this component, we'd like to get your feedback to help us improve it.

We'd particularly like to know more about how different services use language navigation and how well users find it.

Until we're confident we're providing well-defined guidance for services to use language navigation consistently in a way that meets user needs, we'll keep this component in trial status.

## Nunjucks macro options

Import: `{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `items` | array | yes | The languages to display within the language navigation. |
| `items.text` | string | yes | If `html` is set, this is not required. Name of the language, written in that language (for example, <span lang="cy">"Cymraeg"</span> for Welsh). If `html` is provided, the `text` option will be ignored. |
| `items.html` | string | yes | If `text` is set, this is not required. HTML to use for the language item. If `html` is provided, the `text` option will be ignored. |
| `items.lang` | string | yes | The language tag for the language item text (for example, `cy` for Welsh). Added as a `lang` attribute so that assistive technologies pronounce the language name correctly. |
| `items.hrefLang` | string | no | The language tag for the linked page (for example, `cy` for Welsh). Added as an `hreflang` attribute for search engines and other machine readers. Defaults to `lang` when omitted. |
| `items.dir` | string | no | The text direction of the script the language name is written in (`ltr` for left-to-right scripts or `rtl` for right-to-left). Set this on every item if the navigation includes scripts written in different directions. |
| `items.href` | string | no | Link to the current page in this language. |
| `items.current` | boolean | no | Whether this is the language of the current page. Defaults to `true` when `href` is not provided. |
| `items.languageDescriptionText` | string | no | Visually hidden text after a language link to indicate what the link will do. Write it in the language of the link (for example, "Change the language to English"). |
| `items.classes` | string | no | Classes to add to the language item anchor. |
| `items.attributes` | object | no | HTML attributes to add to the language item anchor. |
| `ariaLabel` | string | no | Plain text label identifying the navigation landmark to screen readers. Write it in the language of the current page. Defaults to "Language". |
| `classes` | string | no | Classes to add to the language navigation container. |
| `attributes` | object | no | HTML attributes to add to the language navigation container. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "items": [
    {
      "text": "English",
      "lang": "en",
      "current": true
    },
    {
      "text": "Cymraeg",
      "lang": "cy",
      "href": "#/cy"
    }
  ]
}
```

```html
<nav class="govuk-language-navigation" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" rel="alternate" lang="cy" hreflang="cy">Cymraeg      </a>
    </li>
  </ul>
</nav>
```

### with multiple languages

```json
{
  "items": [
    {
      "text": "English",
      "lang": "en",
      "current": true
    },
    {
      "text": "Français",
      "lang": "fr",
      "href": "#/fr"
    },
    {
      "text": "हिंदी",
      "lang": "hi",
      "href": "#/hi"
    },
    {
      "text": "日本語",
      "lang": "ja",
      "href": "#/ja"
    },
    {
      "text": "اردو",
      "lang": "ur",
      "href": "#/ur"
    },
    {
      "text": "中文",
      "lang": "zh",
      "href": "#/zh"
    }
  ]
}
```

```html
<nav class="govuk-language-navigation" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/fr" rel="alternate" lang="fr" hreflang="fr">Français      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/hi" rel="alternate" lang="hi" hreflang="hi">हिंदी      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ja" rel="alternate" lang="ja" hreflang="ja">日本語      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ur" rel="alternate" lang="ur" hreflang="ur">اردو      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/zh" rel="alternate" lang="zh" hreflang="zh">中文      </a>
    </li>
  </ul>
</nav>
```

### with large amount of multiple languages

```json
{
  "items": [
    {
      "text": "English",
      "lang": "en",
      "current": true
    },
    {
      "text": "العربيَّة",
      "lang": "ar",
      "href": "#/ar"
    },
    {
      "text": "български",
      "lang": "bg",
      "href": "#/bg"
    },
    {
      "text": "বাংলা",
      "lang": "bn",
      "href": "#/bn"
    },
    {
      "text": "Deutsch",
      "lang": "de",
      "href": "#/de"
    },
    {
      "text": "Ελληνικά",
      "lang": "el",
      "href": "#/el"
    },
    {
      "text": "Español",
      "lang": "es",
      "href": "#/es"
    },
    {
      "text": "فارسی",
      "lang": "fa",
      "href": "#/fa"
    },
    {
      "text": "Français",
      "lang": "fr",
      "href": "#/fr"
    },
    {
      "text": "જોર્જિયન",
      "lang": "gu",
      "href": "#/gu"
    },
    {
      "text": "हिंदी",
      "lang": "hi",
      "href": "#/hi"
    },
    {
      "text": "Magyar",
      "lang": "hu",
      "href": "#/hu"
    },
    {
      "text": "Italiano",
      "lang": "it",
      "href": "#/it"
    },
    {
      "text": "Lietuvių",
      "lang": "lt",
      "href": "#/lt"
    },
    {
      "text": "Latviešu",
      "lang": "lv",
      "href": "#/lv"
    },
    {
      "text": "नेपाली",
      "lang": "ne",
      "href": "#/ne"
    },
    {
      "text": "ਪੰਜਾਬੀ ਗੁਰਮੁਖੀ",
      "lang": "pa",
      "href": "#/pa"
    },
    {
      "text": "Polski",
      "lang": "pl",
      "href": "#/pl"
    },
    {
      "text": "پښتو",
      "lang": "ps",
      "href": "#/ps"
    },
    {
      "text": "Português",
      "lang": "pt",
      "href": "#/pt"
    },
    {
      "text": "Română",
      "lang": "ro",
      "href": "#/ro"
    },
    {
      "text": "Русский язык",
      "lang": "ru",
      "href": "#/ru"
    },
    {
      "text": "Slovensky",
      "lang": "sk",
      "href": "#/sk"
    },
    {
      "text": "Soomaali",
      "lang": "so",
      "href": "#/so"
    },
    {
      "text": "Shqip",
      "lang": "sq",
      "href": "#/sq"
    },
    {
      "text": "தமிழ்",
      "lang": "ta",
      "href": "#/ta"
    },
    {
      "text": "Türkçe",
      "lang": "tr",
      "href": "#/tr"
    },
    {
      "text": "Українська",
      "lang": "uk",
      "href": "#/uk"
    },
    {
      "text": "اردو",
      "lang": "ur",
      "href": "#/ur"
    },
    {
      "text": "简体中文",
      "lang": "zh",
      "href": "#/zh"
    },
    {
      "text": "w\">繁體中文（臺灣）",
      "lang": "zh",
      "href": "#/zh"
    }
  ]
}
```

```html
<nav class="govuk-language-navigation" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ar" rel="alternate" lang="ar" hreflang="ar">العربيَّة      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/bg" rel="alternate" lang="bg" hreflang="bg">български      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/bn" rel="alternate" lang="bn" hreflang="bn">বাংলা      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/de" rel="alternate" lang="de" hreflang="de">Deutsch      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/el" rel="alternate" lang="el" hreflang="el">Ελληνικά      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/es" rel="alternate" lang="es" hreflang="es">Español      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/fa" rel="alternate" lang="fa" hreflang="fa">فارسی      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/fr" rel="alternate" lang="fr" hreflang="fr">Français      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/gu" rel="alternate" lang="gu" hreflang="gu">જોર્જિયન      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/hi" rel="alternate" lang="hi" hreflang="hi">हिंदी      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/hu" rel="alternate" lang="hu" hreflang="hu">Magyar      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/it" rel="alternate" lang="it" hreflang="it">Italiano      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/lt" rel="alternate" lang="lt" hreflang="lt">Lietuvių      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/lv" rel="alternate" lang="lv" hreflang="lv">Latviešu      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ne" rel="alternate" lang="ne" hreflang="ne">नेपाली      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/pa" rel="alternate" lang="pa" hreflang="pa">ਪੰਜਾਬੀ ਗੁਰਮੁਖੀ      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/pl" rel="alternate" lang="pl" hreflang="pl">Polski      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ps" rel="alternate" lang="ps" hreflang="ps">پښتو      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/pt" rel="alternate" lang="pt" hreflang="pt">Português      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ro" rel="alternate" lang="ro" hreflang="ro">Română      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ru" rel="alternate" lang="ru" hreflang="ru">Русский язык      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/sk" rel="alternate" lang="sk" hreflang="sk">Slovensky      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/so" rel="alternate" lang="so" hreflang="so">Soomaali      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/sq" rel="alternate" lang="sq" hreflang="sq">Shqip      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ta" rel="alternate" lang="ta" hreflang="ta">தமிழ்      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/tr" rel="alternate" lang="tr" hreflang="tr">Türkçe      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/uk" rel="alternate" lang="uk" hreflang="uk">Українська      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ur" rel="alternate" lang="ur" hreflang="ur">اردو      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/zh" rel="alternate" lang="zh" hreflang="zh">简体中文      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/zh" rel="alternate" lang="zh" hreflang="zh">w&quot;&gt;繁體中文（臺灣）      </a>
    </li>
  </ul>
</nav>
```

### inverse

```json
{
  "classes": "govuk-language-navigation--inverse",
  "items": [
    {
      "text": "English",
      "lang": "en",
      "current": true
    },
    {
      "text": "Cymraeg",
      "lang": "cy",
      "href": "#/cy"
    }
  ]
}
```

```html
<nav class="govuk-language-navigation govuk-language-navigation--inverse" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" rel="alternate" lang="cy" hreflang="cy">Cymraeg      </a>
    </li>
  </ul>
</nav>
```

### with translated navigation label

```json
{
  "ariaLabel": "Dewis iaith",
  "attributes": {
    "lang": "cy"
  },
  "items": [
    {
      "text": "English",
      "lang": "en",
      "href": "#/en"
    },
    {
      "text": "Cymraeg",
      "lang": "cy",
      "current": true
    }
  ]
}
```

```html
<nav class="govuk-language-navigation" lang="cy" aria-label="Dewis iaith">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/en" rel="alternate" lang="en" hreflang="en">English      </a>
    </li>
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="cy">Cymraeg</span>
    </li>
  </ul>
</nav>
```

### with mixed text directions

```json
{
  "items": [
    {
      "text": "English",
      "lang": "en",
      "dir": "ltr",
      "current": true
    },
    {
      "text": "العربية",
      "lang": "ar",
      "dir": "rtl",
      "href": "#/ar"
    }
  ]
}
```

```html
<nav class="govuk-language-navigation" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en" dir="ltr">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/ar" rel="alternate" lang="ar" hreflang="ar" dir="rtl">العربية      </a>
    </li>
  </ul>
</nav>
```

### with language description

```json
{
  "attributes": {
    "lang": "cy"
  },
  "items": [
    {
      "text": "English",
      "lang": "en",
      "current": true
    },
    {
      "text": "Cymraeg",
      "lang": "cy",
      "href": "#/cy",
      "languageDescriptionText": "Newid yr iaith i'r Cymraeg"
    }
  ]
}
```

```html
<nav class="govuk-language-navigation" lang="cy" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" rel="alternate" lang="cy" hreflang="cy">Cymraeg<span class="govuk-visually-hidden"> Newid yr iaith i&#39;r Cymraeg</span>      </a>
    </li>
  </ul>
</nav>
```

