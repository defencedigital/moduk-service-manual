---
layout: "layouts/guidance.njk"
section: "Accessibility"
title: "Content Designers"
description: "How Content Designers help create accessible services in Defence. Making content easy to understand makes it better for everyone."
datePublished: 2022-11-07
eleventyNavigation:
  parent: "Accessibility"
  parent.url: "/accessibility/"
  key: "Meet accessibility regulations"
  url: "/accessibility/meet-accessibility-regulations/"
---

Making content easy to understand makes it better for everyone. Simple content is even more important for people who have difficulty reading and anyone whose first language is not English.

## Write in plain English

To create accessible content, it’s important to:

- only include content that people need
- use simple words
- keep sentences short
- avoid long paragraphs

You need to follow the <a href="//www.gov.uk/guidance/content-design/writing-for-gov-uk/" target="_blank">GOV.UK guidance on writing content <span class="govuk-visually-hidden">(opens in a new tab)</span></a>.

## Use clear and unique page titles

Page titles should clearly describe the purpose and content of the page. Work with a User Researcher to check users understand page titles.

Every page should have a unique title. This makes it easier to find the content you are looking for. If pages have the same or similar headings, it’s hard for assistive technologies to tell you which page you are on.

Often, the page URL can be the same as the page title. Clear URLs make content easier to find if you need to come back later.

**This is a good url:**

```/guidance/pensions-and-compensation-for-veterans```

**This is a bad url:**

```/user/56256655226/post/817837847.php```

Work with a Frontend Developer to make sure all URLs follow a user-friendly format.

## Use the right headings

Avoid using bold text instead of a heading style. Assistive technology does not recognise bold as a header.

A heading style can be any level from H1 to H6. Make sure you use the correct level of headings. Start with H1 as the page title. Do not skip levels, for example following a H2 with a H4.

<a href="https://www.gov.uk/guidance/content-design/writing-for-gov-uk#headings" target="_blank">GOV.UK guidance on heading levels <span class="govuk-visually-hidden">(opens in a new tab)</span></a>.

## Add visually hidden text

People who use assistive technologies sometimes need additional text to complete a task. The text does not appear on the screen for everyone as it is visually hidden.

For example, when checking your details there can be several ‘Change’ links. Screen readers need to tell assisted digital users what they are changing. 

### Example visually hidden text 
The GOV.UK pattern for summary lists includes descriptions for what users are changing.

    <a class="govuk-link" href="#0">
      Change<span class="govuk-visually-hidden"> name</span>
    </a>
 
If you can, work with a Content Designer to create visually hidden text. Find more advice in [Content Designers and accessibility](/accessibility/meet-accessibility-regulations/content-designers/). 

## Images and icons 

Do not add unnecessary images or visual design. Before adding any images, work with a User Researcher and a Content Designer to check if users need them.

If your users need an image or an icon to help them understand something, add a description for screen readers. This is known as 'alternative text' or 'alt text'. 

### Example alt text 

When the Ministry of Defence logo appears on screen, use this alt text:
 
    <img src="ministry-of-defence.svg" alt="Ministry of Defence logo">
 
If you can, work with a Content Designer to create alt text. Find more advice in the <a href="https://design-system.service.gov.uk/styles/images/" target="_blank">GOV.UK guidance on images <span class="govuk-visually-hidden">(opens in a new tab)</span></a>.

## Captions and transcripts

If you have audio or video content, make sure it is accessible to everyone including people with sight and hearing impairments. You might need captions on the screen or a description of the content in a written transcript.

Check the <a href="https://gov.uk/guidance/how-to-publish-on-gov-uk/images-and-videos/" target="_blank">GOV.UK guidance on captions and transcripts <span class="govuk-visually-hidden">(opens in a new tab)</span></a>.

## Make links work out of context

Link content needs to make sense without any of the content around it. Many assistive technologies have the option to drop all content from a page except the links.

Try removing everything else on the page to make sure links make sense out of context. If the link takes you to do something, start with a verb. For example, ‘Give feedback’.

Do not use ‘Click here’ or ‘More’. Out of context these words do not make sense, and ‘click’ assumes a mouse is being used.

Follow the <a href="https://www.gov.uk/guidance/content-design/links/" target="_blank">GOV.UK guidance on writing link text <span class="govuk-visually-hidden">(opens in a new tab)</span></a>. 

## Be consistent

You need to use consistent labels and descriptions across a digital product or service.

If the button at the bottom of each page is labelled ‘Continue’, it should be labelled ‘Continue’ on all pages and not something similar like ‘Next’. This is a better experience for all users.

## Write good error messages

When a user enters information incorrectly, it’s best practice to help them with a short, clear message. For example, if a user does not fill in their name correctly the error message should be: ‘Enter your name’.

If there are security considerations, you still need to provide an error message but it can be vague. When signing in to an account, the error message should be: ‘Enter your email and password correctly.’

Work with a Frontend Developer and a QA Tester to work out what error messages you need to write content for.

Before you write a new error message, check the <a href="https://design-system.service.gov.uk/components/error-message/#use-error-message-templates" target="_blank">GOV.UK error message templates <span class="govuk-visually-hidden">(opens in a new tab)</span></a>.

## Related guidance

- <a href="https://gov.uk/guidance/guidance-and-tools-for-digital-accessibility#designing-accessible-content" target="_blank">Designing accessible content <span class="govuk-visually-hidden">(opens in a new tab)</span></a>
- <a href="https://gds.blog.gov.uk/2016/02/23/writing-content-for-everyone/" target="_blank">Writing content for everyone in your audience <span class="govuk-visually-hidden">(opens in a new tab)</span></a>
- <a href="https://gcs.civilservice.gov.uk/guidance/digital-communication/accessible-communications/" target="_blank">Creating accessible communications <span class="govuk-visually-hidden">(opens in a new tab)</span></a>

{.govuk-list}
