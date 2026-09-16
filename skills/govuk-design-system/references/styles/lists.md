# Lists

Use lists to make blocks of text easier to read, and to break information into manageable chunks.

Use lists to make blocks of text easier to read, and to break information into manageable chunks.

**Example: Lists**

HTML:

```html
<ul class="govuk-list">
  <li>
    <a class="govuk-link" href="#">Benefits calculators</a>
  </li>
  <li>
    <a class="govuk-link" href="#">Benefit overpayments</a>
  </li>
  <li>
    <a class="govuk-link" href="#">Benefit fraud</a>
  </li>
  <li>
    <a class="govuk-link" href="#">More</a>
  </li>
</ul>
```

## Bulleted lists

Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end.

**Example: Bulleted lists**

HTML:

```html
<p class="govuk-body">You can buy:</p>
<ul class="govuk-list govuk-list--bullet">
  <li>apples</li>
  <li>oranges</li>
  <li>pears</li>
</ul>
```

## Numbered lists

Use numbered lists instead of bulleted lists when the order of the items is relevant.

You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop because each should be a complete sentence.

**Example: Numbered lists**

HTML:

```html
<ol class="govuk-list govuk-list--number">
  <li>Delivery address.</li>
  <li>Payment.</li>
  <li>Confirmation.</li>
</ol>
```

## Adding extra spacing between list items

If a list is hard to read because the items run across multiple lines you can add extra spacing.

**Example: Spaced lists**

HTML:

```html
<p class="govuk-body">You will have to apply the reverse charge if you supply any of these services:</p>
<ul class="govuk-list govuk-list--bullet govuk-list--spaced">
  <li>
    constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services
  </li>
  <li>
    constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours
  </li>
  <li>
    pipelines, reservoirs, water mains, wells, sewers, industrial plant and installations for purposes of land drainage, coast protection or defence
  </li>
  <li>
    installing heating, lighting, air-conditioning, ventilation, power supply, drainage, sanitation, water supply or fire protection systems in any building or structure
  </li>
  <li>
    internal cleaning of buildings and structures, so far as carried out in the course of their construction, alteration, repair, extension or restoration
  </li>
  <li>
    painting or decorating the inside or the external surfaces of any building or structure
  </li>
  <li>
    services which form an integral part of, or are part of the preparation or completion of the services described above - including site clearance, earth-moving, excavation, tunnelling and boring, laying of foundations, erection of scaffolding, site restoration, landscaping and the provision of roadways and other access works
  </li>
</ul>
```
