# Links

Use links to navigate between pages

Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

**Example: Links**

HTML:

```html
<p class="govuk-body">
  Jump to <a href="#" class="govuk-link">HTML example</a>.
</p>
```

## Links without a visited state

Use the `govuk-link--no-visited-state` modifier class where it is not helpful to distinguish between visited and unvisited states, for example when linking to pages with frequently-changing content such as the dashboard for an admin interface.

**Example: Links with no visited state**

HTML:

```html
<p class="govuk-body">
  <a href="#" class="govuk-link govuk-link--no-visited-state">link text (with no visited state)</a>
</p>
```

## External links

If it's an external link to a non-government website, make that clear in the link text. For example, 'read advice on writing link text from [name of organisation]'. There's no need to say explicitly that you're linking to an external site. [Do not use an external link icon](https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/).

## Opening links in a new tab

Avoid opening links in a new tab or window. It can be disorienting - and [can cause accessibility problems for people who cannot visually perceive that the new tab has opened](https://www.w3.org/TR/WCAG20-TECHS/G200.html).

If you need a link to open in a new tab, include the words ‘opens in new tab’ as part of the link. A use case example is to stop the user losing information they’ve entered into a form. There's no need to tell the user the new tab opens in a new window as this is the default behaviour for most browsers.

Include `rel="noreferrer noopener"` along with `target="_blank"` to reduce the risk of [reverse tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing). The following example shows how to do this in HTML.

**Example: Links that open in a new tab**

HTML:

```html
<p class="govuk-body">
  <a href="#" class="govuk-link" rel="noreferrer noopener" target="_blank">link text (opens in new tab)</a>
</p>
```

If you're displaying lots of links together and want to save space and avoid repetition, consider doing both of the following:

- adding a line of text before the links saying 'The following links open in a new tab'
- including `<span class="govuk-visually-hidden">(opens in new tab)</span>` as part of the link text, so that part of the link text is visually hidden but still accessible to screen readers

## Links on dark backgrounds

Use the `govuk-link--inverse` modifier class to show white links on dark backgrounds. For example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the links. The white links and background colour must have a contrast ratio of at least 4.5:1 to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Example: Links on dark backgrounds**

HTML:

```html
<p class="govuk-body">
  <a href="#" class="govuk-link govuk-link--inverse">link text (on dark background)</a>
</p>
```

## Links without underlines

Use the `govuk-link--no-underline` modifier class to remove underlines from links.

Only do this if the context tells the user that the text is a link, even without the underline.

For example, links in a header or side navigation might not need underlines. Users will understand that they’re links because of where they are on the page.

**Example: Links without underlines**

HTML:

```html
<p class="govuk-body">
  <a href="#" class="govuk-link govuk-link--no-underline">link text (with no underline)</a>
</p>
```
