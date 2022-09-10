// Note: Prototype config can be overridden using environment variables
module.exports = {

  // Service name
  serviceName: 'Defence Service Manual',

  // Base URL
  baseURL: process.env.BASE_URL || '/',

  // Environment
  env: process.env.NODE_ENV || 'development',

  // Port to run local development server on
  port: process.env.PORT || 3000,

  // Session secret
  secret: process.env.SESSION_SECRET || 'mysecret'

};