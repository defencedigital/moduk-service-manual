# Attachment

## HTML markup

```html
<div class="moduk-attachment"></div>
```

## Nunjucks macro

```
{{ modukcomponent('attachment', {
  classes: 'govuk-!-padding-top-2 govuk-!-padding-bottom-6',
  title: 'Apply for a medal alpha report',
  url: '#0',
  file: {
    type: 'pdf',
    size: '19.5 KB',
    pages: '7 pages'
  },
  result: 'met',
  assistive: true
}) }}
```

## Nunjucks arguments

The attachment Nunjucks macro takes the following arguments:

| Name             | Type         | Required | Description                                                                                      |
| ---------------- | ------------ | -------- | ------------------------------------------------------------------------------------------------ |
| **title**        | string       | Yes      | Title to be displayed on the attachment component                                                |
| **headingLevel** | integer      | No       | Optional heading level for the title heading. Default: 3                                         |
| **url**          | string       | Yes      | The URL for the attachment link                                                                  |
| **attributes**   | object       | No       | HTML attributes (for example, data attributes) to add to the attachment component                |
| **classes**      | string       | No       | Optional additional classes to add to the attachment container. Separate each class with a space |
| **file**         | object<File> | No       | An object to describe the details of the attachment such as format and size                      |

| Name      | Type    | Required | Description                                                        |
| --------- | ------- | -------- | ------------------------------------------------------------------ |
| **type**  | string  | Yes      | Format of the file, for example "PDF", "XLS", "ODS", "CSV", "HTML" |
| **size**  | integer | Yes      | Size of the file in megabytes or kilobytes, for example, "19.5 KB" |
| **pages** | string  | No       | Number of pages in the file, for example, "7 pages"                |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
