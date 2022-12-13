// Cookie analytics
window.dataLayer = window.dataLayer || [];
    
const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

function gtag() {
  dataLayer.push(arguments);
}

function sendAnalytics() {
  gtag('js', new Date());
  gtag('config', 'UA-213496264-3');
}

// Cookie manager
var config = {
  userPreferences: {
    cookieName: 'cookie-preferences',
    cookieExpiry: 365,
    cookieSecure: false
  },
  preferencesForm: {
    class: 'cookie-preferences-form'
  },
  cookieBanner: {
    class: 'js-cookie-banner',
    showWithPreferencesForm: false,
    actions: [
      {
        name: 'accept',
        buttonClass: 'js-cookie-banner-accept',
        confirmationClass: 'js-cookie-banner-confirmation-accept',
        consent: true
      },
      {
        name: 'reject',
        buttonClass: 'js-cookie-banner-reject',
        confirmationClass: 'js-cookie-banner-confirmation-reject',
        consent: false
      },
      {
        name: 'hide',
        buttonClass: 'js-cookie-banner-hide'
      }
    ]
  },
  cookieManifest: [
    {
      categoryName: 'analytics',
      optional: true,
      cookies: [
        '_ga',
        '_gid'
      ]
    },
    {
      categoryName: 'clarity',
      optional: true,
      cookies: [
        'MUID',
        'CLID',
        '_clck',
        '_clsk'
      ]
    }
  ] ,
  additionalOptions: {
    defaultConsent: false,
    deleteUndefinedCookies: false,
    disableCookieBanner: false,
    disableCookiePreferencesForm: false
  }
}

// Callback to reload page on cookie form submission
const reloadCallback = function(eventData) {

  var successBanner = document.querySelector('.govuk-notification-banner--success');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  successBanner.removeAttribute('hidden');
  successBanner.focus();

};

// Callback to trigger sending analytics if the analytics preference has been accepted in the cookie banner
const triggerAnalyticsCallback = function(eventData) {
  if (eventData == 'accept') {
    sendAnalytics();
  }
};

// Initialise the cookie manager
window.cookieManager.on('PreferenceFormSubmitted', reloadCallback);
window.cookieManager.on('CookieBannerAction', triggerAnalyticsCallback);
window.cookieManager.init(config);

// Send analytics if the cookie is set
try {
  
  const result = (JSON.parse(getCookieValue('cookie-preferences')).analytics == 'on');
  
  // Cookie has been set
  if (result == true) {
    sendAnalytics()
  }
  
} catch (err) {

  // SyntaxError: Unexpected end of JSON input
  console.log('error', err);

}
