# Macro examples

## Do and Don’t

Use Do and Don’t to help users understand more easily what they should and shouldn’t do.

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
  "hidePrefix": true,
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

## Inset text

Use the inset text component to differentiate a block of text from the content that surrounds it, for example:

- quotes
- examples
- additional information about the page

{{ govukInsetText({
  text: "When you create new information or capture new data, check how to classify it."
}) }}