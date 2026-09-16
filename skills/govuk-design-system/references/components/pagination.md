# Pagination

Help users navigate collections of numbered pages like search results

Help users navigate forwards and backwards through a series of pages. For example, search results or guidance that's divided into multiple website pages.

**Example: Pagination**

Nunjucks:

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      current: true,
      href: "#"
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="#" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 1">
        1
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 2" aria-current="page">
        2
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 3">
        3
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="#" rel="next">
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

## When to use this component

Consider using pagination when:

- showing all the content on a single page makes the page take too long to load
- most users will only need the content on the first page or first few pages

## When not to use this component

Only break up content onto separate pages if it improves the performance or usability of your service.

Avoid using the 'infinite scroll' technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users.

Do not use this Pagination component for linear journeys – for example, where you’re asking the user to complete a form. Instead, use the [Button component](https://design-system.service.gov.uk/components/button/) (usually a 'Continue' button) to let the user move to the next page – and a [Back link component](https://design-system.service.gov.uk/components/back-link/) to let them move to the previous page.

## How it works

Add the pagination component after the content on each page that you're paginating.

[View an example of Pagination in a standard GOV.UK page template](in-page/index.html).

Do not show pagination if there's only one page of content.

Redirect users to the first page if they enter a URL of a page that no longer exists.

## For navigating between content pages

Use the 'block' style of pagination to let users navigate through related content that has been split across multiple pages. Stack the links vertically, so they’re more obvious to screen magnifier users when they’re zoomed in.

You can use link labels to give context on what the neighbouring pages are about.

**Example: Pagination with text labels**

Nunjucks:

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    labelText: "Applying for a provisional lorry or bus licence",
    href: "#"
  },
  next: {
    labelText: "Driver CPC part 1 test: theory",
    href: "#"
  }
}) }}
```

HTML:

```html
<nav class="govuk-pagination govuk-pagination--block" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="#" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
      <span class="govuk-visually-hidden">:</span>
      <span class="govuk-pagination__link-label">Applying for a provisional lorry or bus licence</span>
    </a>
  </div>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="#" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <span class="govuk-visually-hidden">:</span>
      <span class="govuk-pagination__link-label">Driver CPC part 1 test: theory</span>
    </a>
  </div>
</nav>
```

## For navigating between pages of items

Use a list-type layout if users need to navigate through pages of similar items. For example, a list of search results or a list of cases in a case working system.

**Example: Pagination with numbered labels**

Nunjucks:

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      ellipsis: true
    },
    {
      number: 6,
      href: "#"
    },
    {
      number: 7,
      current: true,
      href: "#"
    },
    {
      number: 8,
      href: "#"
    },
    {
      ellipsis: true
    },
    {
      number: 42,
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="#" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 1">
        1
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--ellipsis">
      &ctdot;
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 6">
        6
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 7" aria-current="page">
        7
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 8">
        8
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--ellipsis">
      &ctdot;
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 42">
        42
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="#" rel="next">
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

Show the page number in the page `<title>` so that screen reader users know they’ve navigated to a different page. For example, 'Search results (page 1 of 4)'.

Show an appropriate number of pages to fit the horizontal space available.

For smaller screens, show page numbers for:

- the current page
- previous and next pages
- first and last pages

For larger screens, show page numbers for:

- the current page
- at least one page immediately before and after the current page
- first and last pages

Use ellipses (…) to replace any skipped pages. For example:

- **[1]** 2 … 100
- 1 **[2]** 3 … 100
- 1 2 **[3]** 4 … 100
- 1 2 3 **[4]** 5 … 100
- 1 … 4 **[5]** 6 … 100
- 1 … 97 **[98]** 99 100
- 1 … 98 **[99]** 100
- 1 … 99 **[100]**

### First and last pages

Do not show the previous page link on the first page – and do not show the next page link on the last page.

**Example: First page**

Nunjucks:

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      current: true,
      href: "#"
    },
    {
      number: 2,
      href: "#"
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 1" aria-current="page">
        1
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 2">
        2
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 3">
        3
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="#" rel="next">
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

**Example: Last page**

Nunjucks:

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      href: "#"
    },
    {
      number: 3,
      current: true,
      href: "#"
    }
  ]
}) }}
```

HTML:

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="#" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 1">
        1
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 2">
        2
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 3" aria-current="page">
        3
      </a>
    </li>
  </ul>
</nav>
```

### Filtering and sorting

Consider adding filtering or sorting options if it helps users to find what they need in a long list of pages. For example, [the business support finder on GOV.UK](https://www.gov.uk/business-finance-support) has filtering options.

If the user filters or sorts the list of pages, apply this to the whole list (not just the current page) and redirect them back to the first page of the new results.

Set defaults to minimise how many pages most users have to click through to find what they need.

## Research on this component

This component is based on similar ones developed and used successfully by the Government Digital Service, Ministry of Justice and the Home Office, and on feedback in the Design System backlog.

## Nunjucks macro options

Import: `{% from "govuk/components/pagination/macro.njk" import govukPagination %}`

| Option | Type | Required | Description |
|---|---|---|---|
| `items` | array | no | The items within the pagination component. |
| `items.number` | string | no | The pagination item text – usually a page number. Required unless the item is an ellipsis. |
| `items.visuallyHiddenText` | string | no | The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". |
| `items.href` | string | no | The link's URL. Required unless the item is an ellipsis. |
| `items.current` | boolean | no | Set to `true` to indicate the current page the user is on. |
| `items.ellipsis` | boolean | no | Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored. |
| `items.attributes` | object | no | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `previous` | object | no | A link to the previous page, if there is a previous page. |
| `previous.text` | string | no | The text content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.html` | string | no | The HTML content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.labelText` | string | no | The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes. |
| `previous.href` | string | yes | The previous page's URL. |
| `previous.attributes` | object | no | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `next` | object | no | A link to the next page, if there is a next page. |
| `next.text` | string | no | The text content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.html` | string | no | The HTML content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.labelText` | string | no | The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes. |
| `next.href` | string | yes | The next page's URL. |
| `next.attributes` | object | no | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `landmarkLabel` | string | no | The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`. |
| `classes` | string | no | The classes you want to add to the pagination `nav` parent. |
| `attributes` | object | no | The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent. |

## Rendered fixtures (govuk-frontend 6.5.1)

Every public example the package ships, as macro options and the exact HTML they render to.

### default

```json
{
  "previous": {
    "href": "/previous"
  },
  "next": {
    "href": "/next"
  },
  "items": [
    {
      "number": 1,
      "href": "/page/1"
    },
    {
      "number": 2,
      "href": "/page/2",
      "current": true
    },
    {
      "number": 3,
      "href": "/page/3"
    }
  ]
}
```

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
        1
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2" aria-current="page">
        2
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3">
        3
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

### with custom link and item text

```json
{
  "previous": {
    "href": "/previous",
    "text": "Previous page"
  },
  "next": {
    "href": "/next",
    "text": "Next page"
  },
  "items": [
    {
      "number": "one",
      "href": "/page/1"
    },
    {
      "number": "two",
      "href": "/page/2",
      "current": true
    },
    {
      "number": "three",
      "href": "/page/3"
    }
  ]
}
```

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous page
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page one">
        one
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page two" aria-current="page">
        two
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page three">
        three
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <span class="govuk-pagination__link-title">
        Next page
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

### with many pages

```json
{
  "previous": {
    "href": "/previous"
  },
  "next": {
    "href": "/next"
  },
  "items": [
    {
      "number": 1,
      "href": "/page/1"
    },
    {
      "ellipsis": true
    },
    {
      "number": 8,
      "href": "/page/8"
    },
    {
      "number": 9,
      "href": "/page/9"
    },
    {
      "number": 10,
      "href": "/page/10",
      "current": true
    },
    {
      "number": 11,
      "href": "/page/11"
    },
    {
      "number": 12,
      "href": "/page/12"
    },
    {
      "ellipsis": true
    },
    {
      "number": 40,
      "href": "/page/40"
    }
  ]
}
```

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
        1
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--ellipsis">
      &ctdot;
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/8" aria-label="Page 8">
        8
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/9" aria-label="Page 9">
        9
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="/page/10" aria-label="Page 10" aria-current="page">
        10
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/11" aria-label="Page 11">
        11
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/12" aria-label="Page 12">
        12
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--ellipsis">
      &ctdot;
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/40" aria-label="Page 40">
        40
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

### first page

```json
{
  "next": {
    "href": "/next"
  },
  "items": [
    {
      "number": 1,
      "href": "/page/1",
      "current": true
    },
    {
      "number": 2,
      "href": "/page/2"
    },
    {
      "number": 3,
      "href": "/page/3"
    }
  ]
}
```

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1" aria-current="page">
        1
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2">
        2
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3">
        3
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

### last page

```json
{
  "previous": {
    "href": "/previous"
  },
  "items": [
    {
      "number": 1,
      "href": "/page/1"
    },
    {
      "number": 2,
      "href": "/page/2"
    },
    {
      "number": 3,
      "href": "/page/3",
      "current": true
    }
  ]
}
```

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
        1
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2">
        2
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3" aria-current="page">
        3
      </a>
    </li>
  </ul>
</nav>
```

### with prev and next only

```json
{
  "previous": {
    "href": "/previous"
  },
  "next": {
    "href": "/next"
  }
}
```

```html
<nav class="govuk-pagination govuk-pagination--block" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
      <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
</nav>
```

### with prev and next only and labels

```json
{
  "previous": {
    "text": "Previous page",
    "labelText": "Paying VAT and duty",
    "href": "/previous"
  },
  "next": {
    "text": "Next page",
    "labelText": "Registering an imported vehicle",
    "href": "/next"
  }
}
```

```html
<nav class="govuk-pagination govuk-pagination--block" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous page
      </span>
      <span class="govuk-visually-hidden">:</span>
      <span class="govuk-pagination__link-label">Paying VAT and duty</span>
    </a>
  </div>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Next page
      </span>
      <span class="govuk-visually-hidden">:</span>
      <span class="govuk-pagination__link-label">Registering an imported vehicle</span>
    </a>
  </div>
</nav>
```

### with prev and next only and very long labels

```json
{
  "previous": {
    "text": "Previous page",
    "labelText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "href": "/previous"
  },
  "next": {
    "text": "Next page",
    "labelText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "href": "/next"
  }
}
```

```html
<nav class="govuk-pagination govuk-pagination--block" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous page
      </span>
      <span class="govuk-visually-hidden">:</span>
      <span class="govuk-pagination__link-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </a>
  </div>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Next page
      </span>
      <span class="govuk-visually-hidden">:</span>
      <span class="govuk-pagination__link-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </a>
  </div>
</nav>
```

### with previous only

```json
{
  "previous": {
    "href": "/previous"
  }
}
```

```html
<nav class="govuk-pagination govuk-pagination--block" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
</nav>
```

### with next only

```json
{
  "next": {
    "href": "/next"
  }
}
```

```html
<nav class="govuk-pagination govuk-pagination--block" aria-label="Pagination">
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
      <span class="govuk-pagination__link-title govuk-pagination__link-title--decorated">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
</nav>
```

