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

You need to follow the [GOV.UK guidance on writing content](https://www.gov.uk/guidance/content-design/writing-for-gov-uk/).

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

Follow the [GOV.UK guidance on heading levels](https://www.gov.uk/guidance/content-design/writing-for-gov-uk#headings).

## Add visually hidden text

People who use assistive technologies may need more content to describe something on screen, for example a photo or a graph. This additional description is known as “alternative text” or “alt text”. It does not appear on the screen for all users.

You only need to add alt text to images that provide useful context, for example where to sign your passport. If an image is purely decorative, you do not need to add alt text. Consider if users need a decorative image at all.

Find tips on writing alt text in the [GOV.UK Design System’s guidance on images](https://design-system.service.gov.uk/styles/images/).

## Captions and transcripts

If you have audio or video content, make sure it is accessible to everyone including people with sight and hearing impairments. You might need captions on the screen or a description of the content in a written transcript.

Check the [GOV.UK guidance on captions and transcripts](https://www.gov.uk/guidance/how-to-publish-on-gov-uk/images-and-videos/).

## Make links work out of context

Link content needs to make sense without any of the content around it. Many assistive technologies have the option to drop all content from a page except the links.

Try removing everything else on the page to make sure links make sense out of context. If the link takes you to do something, start with a verb. For example, ‘Give feedback’.

Do not use ‘Click here’ or ‘More’. Out of context these words do not make sense, and ‘click’ assumes a mouse is being used.

Follow the [GOV.UK guidance on writing link text](https://www.gov.uk/guidance/content-design/links/).

## Be consistent

You need to use consistent labels and descriptions across a digital product or service.

If the button at the bottom of each page is labelled ‘Continue’, it should be labelled ‘Continue’ on all pages and not something similar like ‘Next’. This is a better experience for all users.

## Write good error messages

When a user enters information incorrectly, it’s best practice to help them with a short, clear message. For example, if a user does not fill in their name correctly the error message should be: ‘Enter your name’.

If there are security considerations, you still need to provide an error message but it can be vague. When signing in to an account, the error message should be: ‘Enter your email and password correctly.’

Work with a Frontend Developer and a QA Tester to work out what error messages you need to write content for.

Before you write a new error message, check the [GOV.UK error message templates](https://design-system.service.gov.uk/components/error-message/#use-error-message-templates).

## Related content

- [Designing accessible content](https://www.gov.uk/guidance/guidance-and-tools-for-digital-accessibility#designing-accessible-content)
- [Writing content for everyone in your audience](https://gds.blog.gov.uk/2016/02/23/writing-content-for-everyone/)
- [Creating accessible communications](https://gcs.civilservice.gov.uk/guidance/digital-communication/accessible-communications/)
