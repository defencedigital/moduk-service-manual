# Macro examples

## Do and Don’t

Use Do and Don’t to help users understand more easily what they should and shouldn’t do.

{{ modukList({
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

{{ modukList({
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

## Steps

{{ modukSteps({
  "items": [
    {
      "item": '<b>Create a master document with their details and participant number</b> <br> This must be password protected. Only share it with people in your team who need it. If you leave a project, make sure someone on the team knows the password.'
    },
    {
      "item": '<b>Remove personal information from all other documents</b> <br> This includes notes, reports, presentations and transcripts. If you have consent from the participant and want to share a video clip, check that it does not include personal information.'
    },
    {
      "item": '<b>Use participant numbers not names</b> <br> Before saving user research files other than the master file, replace participant names with the participant numbers. For example, P04.'
    }
  ]
}) }}