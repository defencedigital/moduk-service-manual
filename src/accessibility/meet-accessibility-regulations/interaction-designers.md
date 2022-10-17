---
layout: "layouts/guidance.njk"
section: "Accessibility"
title: "Interaction Designers"
datePublished: "October 2022"
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
  html: 'You need to check the <a href="https://design-system.service.gov.uk" rel="external nofollow">GOV.UK Design System</a>.'
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

Work with a Content Designer to create labels and any hint text needed. You can also [check the GOV.UK pattern for text inputs](https://design-system.service.gov.uk/components/text-input).

## Add visually hidden text

People who use assistive technologies may need more content to describe something on screen, for example a photo or a graph. This additional description is known as ‘alternative text’ or ‘alt text’. It does not appear on the screen for all users.

For example, ‘Change’ doesn’t work out of context. Screen readers need to know what it is that users are changing. In HTML code, this is how you add the alt text:

[Add code example here]

Work with a Content Designer to create alt text. Find tips on writing alt text in [Content Designers and accessibility](/accessibility/meet-accessibility-regulations/content-designers/) and the [GOV.UK guidance on images](https://design-system.service.gov.uk/styles/images).

## Only use images that users need

Government digital services need to be simple. Do not add unnecessary images or visual design. Before adding icons and images, work with a User Researcher and a Content Designer to check if users need them.

## Be careful with columns

Before using columns, consider the impact on accessibility.

If users need a sidebar, check how it works for people who are blind or use a screen magnifier. You also need to check how a sidebar appears on mobile devices.

## Useful links

- [Design for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices)
- [Blogs about accessibility and design](https://www.craigabbott.co.uk/blog)
