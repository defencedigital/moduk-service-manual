module.exports = {

  // Environment
  env: process.env.ELEVENTY_ENV || 'development',

  // Service name
  serviceName: 'Defence Service Manual',

  // Service description
  serviceDescription: 'Helping you meet service standards and do your role in Defence.',

  // GOVUK macro assets path
  govukPath: 'node_modules/govuk-frontend/govuk/components/',

  // BaseURL
  baseURL: process.env.BASE_URL || '/'

};
