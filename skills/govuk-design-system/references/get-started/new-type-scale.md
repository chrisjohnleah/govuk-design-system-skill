# Using the updated type scale

The GOV.UK Design System team has updated the GOV.UK Frontend type scale used in version 6.0.0 and later. Here's how to use it, what's changed and what to expect when implementing it into your service.

The GOV.UK Design System team has updated the GOV.UK Frontend type scale used in version 6.0.0 and later.

Here's how to use it, what's changed and what to expect when implementing the update to your service.

## Changes we've made

The updated type scale includes these changes from the previous scale:

<table class="govuk-table">

  <caption class="govuk-table__caption govuk-table__caption--m">Changes to the type scale</caption>

  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
    
      <th scope="col" class="govuk-table__header">Point on type scale</th>
    
      <th scope="col" class="govuk-table__header">Change</th>
    
    </tr>
  </thead>

  <tbody class="govuk-table__body">

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">14</td>
      
    
      
      
      <td class="govuk-table__cell">Deprecated as a scale point and removed in GOV.UK Frontend version 6.0.0 and later</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">16</td>
      
    
      
      
      <td class="govuk-table__cell">Now 16px across all screen sizes</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">19</td>
      
    
      
      
      <td class="govuk-table__cell">Now 19px across all screen sizes</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">24</td>
      
    
      
      
      <td class="govuk-table__cell">On small screens, is now font size 21px instead of 18px and line height 25px instead of 20px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">27</td>
      
    
      
      
      <td class="govuk-table__cell">On small screens, is now font size 21px instead of 18px and line height 25px instead of 20px</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <td class="govuk-table__cell">36</td>
      
    
      
      
      <td class="govuk-table__cell">On small screens, is now font size 27px instead of 24px and line height 30px instead of 25px</td>
      
    
    </tr>
  

  </tbody>
</table>

### Making our typography scale more accessible

[Read more about this work and why we updated our type scale](https://designnotes.blog.gov.uk/2022/12/12/making-the-gov-uk-frontend-typography-scale-more-accessible/).

### Remove the $govuk-new-typography-scale feature flag

The updated type scale was first introduced as an 'opt in' feature under a feature flag. You no longer need to use the `$govuk-new-typography-scale` Sass variable and should remove it.

## Test your service against the updated type scale

If your service uses custom elements made using GOV.UK Frontend, test your service against the new type scale to assess if you need to make any adjustments.

Some key things to look for are:

- spacing – with the increased font sizes, your custom elements may now look squashed on small screens.
- specific positioning values – you may need to adjust these values, for example an `absolute` positioned element
