# Related content

## Nunjucks macro

```
{% from 'components/related-content/macro.njk' import related-content %}

{{ modukcomponent('related-content', {
  "ariaLabel": 'Related content',
  "id": 'related-join-the-community',
  "title": 'Join the community',
  "description": 'Share what you are doing and learn from projects across Defence.',
  "items": [
    {
      "text": 'User-centred design community',
      "url": '#0'
    }
  ]
}) }}
```
