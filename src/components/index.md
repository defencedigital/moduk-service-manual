---
layout: "layouts/landing.njk"
title: "Components"
---

## Attachment examples

{{ modukcomponent('attachment', {
  title: 'Department for Transport information asset register',
  file: {
    type: 'pdf',
    size: '19.5 KB',
    pages: '7 pages'
  },
  assistive: true
}) }}

<hr class="govuk-section-break govuk-section-break--m">

{{ modukcomponent('attachment', {
  title: 'Apply for a medal alpha report',
  file: {
    type: 'pdf',
    size: '19.5 KB',
    pages: '7 pages'
  },
  result: 'met',
  assistive: true
}) }}

<hr class="govuk-section-break govuk-section-break--m">

{{ modukcomponent('attachment', {
  title: 'Department for Transport information asset register',
  file: {
    type: 'xls',
    size: '19.5 KB',
    pages: '7 pages'
  }
}) }}

<hr class="govuk-section-break govuk-section-break--m">

{{ modukcomponent('attachment', {
  title: 'Department for Transport information asset register',
  file: {
    type: 'csv',
    size: '19.5 KB'
  }
}) }}

<hr class="govuk-section-break govuk-section-break--m">

{{ modukcomponent('attachment', {
  title: 'BEIS Information Asset Register',
  file: {
    type: 'ods',
    size: '19.5 KB'
  }
}) }}

<hr class="govuk-section-break govuk-section-break--m">

{{ modukcomponent('attachment', {
  title: 'Courses available in the higher education short courses trial',
  file: {
    type: 'html'
  }
}) }}
