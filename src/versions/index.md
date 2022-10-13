---
layout: "layouts/landing.njk"
title:  "Versions"
datePublished: ""
dateUpdated: ""
eleventyNavigation:
  key: ""
---

# Version history

## Version 4 {.govuk-heading-m}

This is what we’re working on for the next rounds of testing.

{% set htmlOutput %}
  <ul class="govuk-list govuk-list--bullet">
    <li>Added do and don’t list component</li>
    <li>Simplified feedback form</li>
    <li>Added steps component</li>
    <li>Iterated the design section</li>
    <li>Added a dedicated page to sign up for user research</li>
    <li>Updated product and delivery community page</li>
    <li>Improved navigation of accessibility section</li>
    <li>Improved navigation of security section</li>
    <li>Updated section on large amounts of data</li>
  </ul>
{% endset %}

{{ component('details', {
  summaryText: 'What’s changed',
  html: htmlOutput,
  open: true
}) }}


## Version 3 {.govuk-heading-m}

This is the most recent prototype tested with users.

{% set htmlOutput %}
  <ul class="govuk-list govuk-list--bullet">
    <li>Ministry of Defence logo</li>
    <li>Layout and visual fixes</li>
    <li>Phase banner updates</li>
    <li>Feedback to improve the Defence Service Manual</li>
    <li>Standards in Defence</li>
    <li>Get in touch</li>
    <li>Add or update content</li>
    <li>Security added</li>
    <li>Site map added</li>
    <li>Design, User research, Accessibility content updated</li>
    <li>Improvements in navigation structure</li>
    <li>Page contents added (sticky)</li>
  </ul>
{% endset %}

{{ component('details', {
  summaryText: 'What’s changed',
  html: htmlOutput,
  open: true
}) }}


## [Version 2](https://dmdsm.herokuapp.com/dsm-home) {.govuk-heading-m}

This is an old version of the prototype that was tested with users.
