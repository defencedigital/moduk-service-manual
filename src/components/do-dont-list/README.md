# Do and don’t list

## HTML markup

```html
<div class="mod-do-dont">
  
  <h3 class="mod-do-dont__label">Do</h3>
  
  <ul class="mod-do-dont__list mod-do-dont__list--tick">
    
    <li>
      <span class="mod-do-dont__tick" aria-hidden="true"></span>
      Know the classification of all the information you deal with
    </li>

    <li>
      <span class="mod-do-dont__tick" aria-hidden="true"></span>
      Check how to classify information correctly
    </li>

    <li>
      <span class="mod-do-dont__tick" aria-hidden="true"></span>
      Write classifications in all capitals
    </li>

  </ul>

</div>

<div class="mod-do-dont-list">
 
 <h3 class="mod-do-dont-list__label">Don’t</h3>
 
 <ul class="mod-do-dont__list mod-do-dont__list--cross">
    
    <li>
      <span class="mod-do-dont__cross" aria-hidden="true"></span>
      Classify information higher than it needs
    </li>

    <li>
      <span class="mod-do-dont__cross" aria-hidden="true"></span>
      Share anything in person or online that is not OFFICIAL
    </li>

    <li>
      <span class="mod-do-dont__cross" aria-hidden="true"></span>
      Use OFFICIAL-SENSITIVE as a security classification
    </li>

  </ul>

</div>
```

## Nunjucks macro

```
{% from 'components/do-dont-list/macro.njk' import list %}

{{ modList({
  "title": 'Do',
  "type": 'tick',
  "items": [
    {
      "item": 'Know the classification of all the information you deal with'
    },
    {
      "item": 'Check how to classify information correctly'
    },
    {
      "item": 'Write classifications in all capitals'
    }
  ]
}) }}

{{ modList({
  "title": 'Don’t',
  "type": 'cross',
  "items": [
    {
      "item": 'Classify information higher than it needs'
    },
    {
      "item": 'Share anything in person or online that is not OFFICIAL'
    },
    {
      "item": 'Use OFFICIAL-SENSITIVE as a security classification'
    }
  ]
}) }}
```

## Nunjucks arguments

The do and don’t list Nunjucks macro takes the following arguments:

| Name              | Type     | Required  | Description |
| ------------------|----------|-----------|-------------|
| **title**         | string   | Yes       | Title to be displayed on the do and don’t list component |
| **type**          | string   | Yes       | Type of do and don’t list component, "cross", "tick" |
| **items**         | array    | Yes       | Items to be displayed within the do and don’t list component |
| **hidePrefix**    | boolean  | No        | If set to true when type is "cross", then removes the default "do not" text prefix to each item |
| **headingLevel**  | integer  | No        | Optional heading level for the title heading. Default: 3 |
| **classes**       | string   | No        | Optional additional classes to add to the do and don’t list container. Separate each class with a space |
| **attributes**    | object   | No        | Any extra HTML attributes (for example data attributes) to add to the do and don’t list container |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).