# Type scale

The type scale underpins all of the text styles on GOV.UK

The type scale is a collection of font sizes and line heights that underpin all of the typographic styles on GOV.UK. It has been [tested and iterated](https://designnotes.blog.gov.uk/2022/12/12/making-the-gov-uk-frontend-typography-scale-more-accessible/) for readability on different devices.

When creating new components, always start by using the existing typography styles. If you need to create a new style, align it with one of the points on the type scale.

## How it works

Like the [spacing scale](https://design-system.service.gov.uk/styles/spacing/), every point on the type scale uses a line height in a multiple of 5px. This creates a consistent vertical rhythm, which makes pages easier to scan and read.

GOV.UK Frontend outputs CSS in relative units like `em` or `rem`. This helps the type resize better when zoomed or magnified. We've used pixels (px) here so it's easier to understand.

## Responsive behaviour

The type scale changes based on screen size.

The scale for ‘large screens’ is used when the screen is wider than the tablet breakpoint (640px).

<table class="govuk-table">

  <caption class="govuk-table__caption govuk-table__caption--m">Large screens</caption>

  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
    
      <th scope="col" class="govuk-table__header">Point on type scale</th>
    
      <th scope="col" class="govuk-table__header">Used by</th>
    
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Font size</th>
    
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Line height</th>
    
    </tr>
  </thead>

  <tbody class="govuk-table__body">

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">80</td>
      
    
      
      
      <td class="govuk-table__cell">Only used in exceptional circumstances</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">80px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">80px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">48</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-xl</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">48px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">50px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">36</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-l</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">36px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">40px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">27</td>
      
    
      
      
      <td class="govuk-table__cell">Only used in exceptional circumstances</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">27px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">30px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">24</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-m</code>, <code>govuk-body-l</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">24px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">30px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">19</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-s</code>, <code>govuk-body</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">19px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">25px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">16</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-body-s</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">16px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">20px</td>
      
    
    </tr>
  

  </tbody>
</table>

<table class="govuk-table">

  <caption class="govuk-table__caption govuk-table__caption--m">Small screens</caption>

  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
    
      <th scope="col" class="govuk-table__header">Point on type scale</th>
    
      <th scope="col" class="govuk-table__header">Used by</th>
    
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Font size</th>
    
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Line height</th>
    
    </tr>
  </thead>

  <tbody class="govuk-table__body">

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">80</td>
      
    
      
      
      <td class="govuk-table__cell">Only used in exceptional circumstances</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">53px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">55px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">48</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-xl</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">32px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">35px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">36</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-l</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">27px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">30px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">27</td>
      
    
      
      
      <td class="govuk-table__cell">Only used in exceptional circumstances</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">21px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">25px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">24</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-m</code>, <code>govuk-body-l</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">21px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">25px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">19</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-heading-s</code>, <code>govuk-body</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">19px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">25px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">16</td>
      
    
      
      
      <td class="govuk-table__cell"><code>govuk-body-s</code></td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">16px</td>
      
    
      
      
      <td class="govuk-table__cell govuk-table__cell--numeric">20px</td>
      
    
    </tr>
  

  </tbody>
</table>

## Using the type scale in your own CSS

Include the [`govuk-font` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font) to use GOV.UK typography in your CSS.

For example, if you want a custom element to use type scale point 19, use:

```scss
@include govuk-font($size: 19);
```

You can add additional arguments to control font weight, use tabular font spacing, or to override the line height:

```scss
@include govuk-font($size: 19, $weight: bold, $tabular: true);
```

### If you only want to set the font size

Do not use `govuk-font` if you only want to change the font size and line height as it includes additional typography-related CSS like the New Transport font family. Instead, you should use the [`govuk-font-size` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font-size):

```scss
@include govuk-font-size($size: 19);
```
