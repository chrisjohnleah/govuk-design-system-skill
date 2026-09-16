# Headings

Use headings to structure content on pages

Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page. Apply a heading class, such as `govuk-heading-l`, to style them visually. Style headings consistently to create a clear content structure throughout your service.

For [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/), or pages with long headings, follow the usual hierarchy of heading levels and styles associated with them. For example, `govuk-heading-l` for an `<h1>`, followed by `govuk-heading-m` for an `<h2>` and so on. In rare cases, you might want to alter how you use the headings hierarchy to achieve a better visual balance. An example of this is in [the design system's notification banner](https://design-system.service.gov.uk/components/notification-banner/success/) which uses heading levels in a different order to emphasise the most important information. If you do change the heading hierarchy in a similar way, it needs to go through accessibility testing before use.

Write all headings in sentence case.

**Example: Headings**

HTML:

```html
<h1 class="govuk-heading-l">govuk-heading-l</h1>
<h2 class="govuk-heading-m">govuk-heading-m</h2>
<h3 class="govuk-heading-s">govuk-heading-s</h3>
```

If your page has lots of long form content, start with `govuk-heading-xl` for an `<h1>`, `govuk-heading-l` for an `<h2>`, and so on.

**Example: Headings for pages with long form content**

HTML:

```html
<h1 class="govuk-heading-xl">govuk-heading-xl</h1>
<h2 class="govuk-heading-l">govuk-heading-l</h2>
<h3 class="govuk-heading-m">govuk-heading-m</h3>
```

## Headings with captions

Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading with a caption above it.

**Example: Headings with captions**

HTML:

```html
<span class="govuk-caption-xl">govuk-caption-xl</span>
<h1 class="govuk-heading-xl">govuk-heading-xl</h1>
<span class="govuk-caption-l">govuk-caption-l</span>
<h1 class="govuk-heading-l">govuk-heading-l</h1>
<span class="govuk-caption-m">govuk-caption-m</span>
<h1 class="govuk-heading-m">govuk-heading-m</h1>
```

If the caption should be considered part of the page heading, you can also nest the caption within the `<h1>`.

**Example: Headings with captions nested**

HTML:

```html
<h1 class="govuk-heading-l">
  <span class="govuk-caption-l">govuk-caption-l</span>
  govuk-heading-l
</h1>
```
