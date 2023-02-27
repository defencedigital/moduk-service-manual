# Call out

## HTML markup

```html
<div class="moduk-callout">

  <h3 class="moduk-callout__label">Title</h3>

  <div class="moduk-callout__content">
    <p>Content goes here...</p>
  </div>

  <ul class="moduk-callout__list">
    <li>
      <a class="govuk-link govuk-link--no-visited-state" href="">Link text</a>
    </li>
  </ul> 

</div>
```

## Nunjucks macro

```
{% from 'components/callout/macro.njk' import list %}

{{ modukcomponent('callout', {
  title: 'Title',
  content: '<p>Content goes here...</p>',
  items: [
    {
      text: 'Link text',
      href: '#0'
    }
  ]
}) }}
```

## Nunjucks arguments

The callout Nunjucks macro takes the following arguments:

| Name             | Type    | Required | Description                                                                                        |
| ---------------- | ------- | -------- | -------------------------------------------------------------------------------------------------- |
| **title**        | string  | Yes      | Title to be displayed on the callout list component                                                |
| **items**        | array   | Yes      | Items to be displayed within the callout list component                                            |
| **headingLevel** | integer | No       | Optional heading level for the title heading. Default: 3                                           |
| **classes**      | string  | No       | Optional additional classes to add to the callout list container. Separate each class with a space |
| **attributes**   | object  | No       | Any extra HTML attributes (for example data attributes) to add to the do and don’t list container  |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
