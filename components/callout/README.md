# Call out

## HTML markup

```html
<div class="moduk-callout">

  <h3 class="moduk-callout__label">Title</h3>

  <div class="moduk-callout__content">
    <p>Content goes here...</p>
    <p><a class="govuk-link govuk-link--no-visited-state" href="#0">Find out more</a></p>
  </div>

</div>
```

## Nunjucks macro

```
{{ modukcomponent('callout', {
  title: 'Title',
  content: '<p>Content goes here...</p>',
  link: '<a href="#0">Find out more</a>'
}) }}
```

## Nunjucks arguments

The callout Nunjucks macro takes the following arguments:

| Name             | Type    | Required | Description                                                                                   |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------------------- |
| **title**        | string  | Yes      | Title to be displayed on the callout component                                                |
| **link**         | string  | Yes      | Link to be displayed on the callout component                                                 |
| **headingLevel** | integer | No       | Optional heading level for the title heading. Default: 3                                      |
| **classes**      | string  | No       | Optional additional classes to add to the callout container. Separate each class with a space |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
