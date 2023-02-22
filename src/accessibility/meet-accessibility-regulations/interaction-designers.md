---
layout: "layouts/guidance.njk"
section: "Accessibility"
title: "Interaction Designers"
description: "How Interaction Designers help create accessible services in Defence. Use existing patterns, things to add and things to avoid."
datePublished: 2022-11-07
eleventyNavigation:
  parent: "Accessibility"
  parent.url: "/accessibility/"
  key: "Meet accessibility regulations"
  url: "/accessibility/meet-accessibility-regulations/"
---

Designing simple screens and interactions makes things easier for everybody. To deliver digital products and services that anyone can use, we need to design them that way.

## Start with existing patterns

Before designing a new product, service or feature, check what patterns are already available. Existing patterns and components are more likely to be accessible.

{{ component('inset-text', {
  html: 'You need to check the <a href="https://design-system.service.gov.uk/" rel="external nofollow">GOV.UK Design System</a>.'
}) }}

If you need to adapt an existing pattern, make sure you:

- have evidence to show why it is needed, for example research findings
- do accessibility testing before you release it
- share it with the MOD design library team

## Avoid dynamic content

Dynamic content, such as live data, can cause accessibility issues. Changes are not always clear to assistive technologies.

If the content of a page has to change dynamically, assistive technology needs to know about the change. Work with a Frontend Developer to make sure all dynamic content has the right attributes, or [ask the UCD community](/your-community/user-centred-design/).

## Use simple labels and instructions

For anything that needs user input, you must add a label. Every label should describe what is expected in the input.

Keep labels simple at first and only include hint text or additional instructions if your user research shows there is a need for it.

Work with a Content Designer to create labels and any hint text needed. You can also [check the GOV.UK pattern for text inputs](https://design-system.service.gov.uk/components/text-input/).

## Add visually hidden text

People who use assistive technologies sometimes need additional text to complete a task. The text does not appear on the screen for everyone as it is visually hidden.

For example, when checking your details there can be several ‘Change’ links. Screen readers need to tell assisted digital users what they are changing. 

### Example visually hidden text 
The GOV.UK pattern for summary lists includes descriptions for what users are changing.

    <a class="govuk-link" href="#">
      Change<span class="govuk-visually-hidden"> name</span>
    </a>
 
If you can, work with a Content Designer to create visually hidden text. Find more advice in [Content Designers and accessibility](/accessibility/meet-accessibility-regulations/content-designers/). 

## Images and icons 

Do not add unnecessary images or visual design. Before adding any images, work with a User Researcher and a Content Designer to check if users need them.

If your users need an image or an icon to help them understand something, add a description for screen readers. This is known as 'alternative text' or 'alt text'. 

### Example alt text 

When the Ministry of Defence logo appears on screen, use this alt text:
 
    <img src="ministry-of-defence.svg" alt="Ministry of Defence logo">
 
If you can, work with a Content Designer to create alt text. Find more advice in the [GOV.UK guidance on images](https://design-system.service.gov.uk/styles/images/).


## Only use images that users need

Government digital services need to be simple. Do not add unnecessary images or visual design. Before adding icons and images, work with a User Researcher and a Content Designer to check if users need them.

## Be careful with columns

Before using columns, consider the impact on accessibility.

If users need a sidebar, check how it works for people who are blind or use a screen magnifier. You also need to check how a sidebar appears on mobile devices.

## Related guidance

- [Design for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices/)
- [Blogs about accessibility and design](https://www.craigabbott.co.uk/blog/)
{.govuk-list}
