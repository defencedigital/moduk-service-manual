module.exports = {

  // Service name
  serviceName: 'Defence Service Manual',

  // Service description
  serviceDescription: 'Helping you meet service standards and do your role in Defence.',

  // Base URL
  baseURL: '/',

  // GOVUK macro assets path
  govukPath: 'node_modules/govuk-frontend/govuk/components/',

  // Url
  url: process.env.ELEVENTY_ENV === 'development' ? '/' : '/moduk-service-manual/'

};
