export const klaroConfig = {
  // With the 0.7.0 release we introduce a 'version' paramter that will make
  // it easier for us to keep configuration files backwards-compatible in the future.
  version: 1,

  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: "klaro",

  // You can override CSS style variables here. For IE11, Klaro will
  // dynamically inject the variables into the CSS. If you still consider
  // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
  // with an external stylesheet as the dynamic replacement won't work there.
  styling: {
    theme: ["light", "center", "wide"],
  },

  // Setting this to true will keep Klaro from automatically loading itself
  // when the page is being loaded.
  noAutoLoad: false,

  // Setting this to true will render the descriptions of the consent
  // modal and consent notice are HTML. Use with care.
  htmlTexts: true,

  // Setting 'embedded' to true will render the Klaro modal and notice without
  // the modal background, allowing you to e.g. embed them into a specific element
  // of your website, such as your privacy notice.
  embedded: false,

  // You can group services by their purpose in the modal. This is advisable
  // if you have a large number of services. Users can then enable or disable
  // entire groups of services instead of having to enable or disable every service.
  groupByPurpose: true,

  // How Klaro should store the user's preferences. It can be either 'cookie'
  // (the default) or 'localStorage'.
  storageMethod: "cookie",

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: "klaro",

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 365,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  //cookieDomain: '.github.com',

  // You can change to cookie path for the consent manager itself.
  // Use this to restrict the cookie visibility to a specific path.
  // If undefined, Klaro will use '/' as cookie path.
  //cookiePath: '/',

  // Defines the default state for services (true=enabled by default).
  default: false,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party services.
  mustConsent: false,

  // Show "accept all" to accept all services instead of "ok" that only accepts
  // required and "default: true" services
  acceptAll: true,

  // replace "decline" with cookie manager modal
  hideDeclineAll: true,

  // hide "learnMore" link
  hideLearnMore: false,

  // show cookie notice as modal
  noticeAsModal: true,

  // You can also remove the 'Realized with Klaro!' text in the consent modal.
  // Please don't do this! We provide Klaro as a free open source tool.
  // Placing a link to our website helps us spread the word about it,
  // which ultimately enables us to make Klaro! better for everyone.
  // So please be fair and keep the link enabled. Thanks :)
  //disablePoweredBy: true,

  // you can specify an additional class (or classes) that will be added to the Klaro `div`
  //additionalClass: 'my-klaro',

  // You can define the UI language directly here. If undefined, Klaro will
  // use the value given in the global "lang" variable. If that does
  // not exist, it will use the value given in the "lang" attribute of your
  // HTML tag. If that also doesn't exist, it will use 'en'.
  //lang: 'en',

  // You can overwrite existing translations and add translations for your
  // service descriptions and purposes. See `src/translations/` for a full
  // list of translations that can be overwritten:
  // https://github.com/KIProtect/klaro/tree/master/src/translations

  // Example config that shows how to overwrite translations:
  // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
  translations: {
    // translationsed defined under the 'zz' language code act as default
    // translations.
    zz: {
      privacyPolicyUrl: "/#privacy",
    },

    en: {
      consentModal: {
        title: "Services we would like to use",
        description:
          "Here you can see and customize the information that we collect about you. Here you can see and customize the information that we collect about you.",
      },
      purposes: {
        analytics: "Analytics",
        security: "Security",
        livechat: "Livechat",
        advertising: "Advertising",
        styling: "Styling",
      },
    },
  },

  // This is a list of third-party services that Klaro will manage for you.
  services: [
    {
      name: "google-tag-manager",
      purposes: ["marketing"],
      default: true,
      onAccept: `
          // we notify the tag manager about all services that were accepted. You can define
          // a custom event in GTM to load the service if consent was given.
          for(let k of Object.keys(opts.consents)){
              if (opts.consents[k]){
                  let eventName = 'klaro-'+k+'-accepted'
                  dataLayer.push({'event': eventName})
              }
          }
          // if consent for Google Analytics was granted we enable analytics storage
          if (opts.consents[opts.vars.googleAnalyticsName || 'google-analytics']){
              gtag('consent', 'update', {'analytics_storage': 'granted'})
          }
          // if consent for Google Ads was granted we enable ad storage
          if (opts.consents[opts.vars.adStorageName || 'google-ads']){
              gtag('consent', 'update', {'ad_storage': 'granted'})
          }
      `,
      onInit: `
          // initialization code here (will be executed only once per page-load)
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){dataLayer.push(arguments)}
          gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied'})
          gtag('set', 'ads_data_redaction', true)
      `,
      onDecline: `
          // initialization code here (will be executed only once per page-load)
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){dataLayer.push(arguments)}
          gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied'})
          gtag('set', 'ads_data_redaction', true)
      `,
      vars: {
        googleAnalytics: "google-analytics",
      },
    },
    {
      // In GTM, you should define a custom event trigger named `klaro-google-analytics-accepted` which should trigger the Google Analytics integration.
      name: "google-analytics",
      purposes: ["marketing", "analytics"],
      cookies: [
        /^_ga(_.*)?/, // we delete the Google Analytics cookies if the user declines its use
      ],
      default: true,
    },
    {
      name: "mouseflow",
      title: "Mouseflow",
      purposes: ["analytics"],
      default: true,
    },

    // The services will appear in the modal in the same order as defined here.
    // {
    //   name: 'inlineTracker',
    //   title: 'Inline Tracker',
    //   purposes: ['analytics'],
    //   cookies: ['inline-tracker'],
    //   optOut: false,
    // },
    // {
    //   name: 'externalTracker',
    //   title: 'External Tracker',
    //   purposes: ['analytics', 'security'],
    //   cookies: ['external-tracker'],
    // },
    // {
    //   name: 'intercom',
    //   title: 'Intercom',
    //   default: true,
    //   purposes: ['livechat'],
    // },
    // {
    //   name: 'mouseflow',
    //   title: 'Mouseflow',
    //   purposes: ['analytics'],
    // },
    // {
    //   name: 'adsense',
    //   // if you omit the title here Klaro will try to look it up in the
    //   // translations
    //   //title: 'Google AdSense',
    //   purposes: ['advertising'],
    // },
    // {
    //   name: 'camera',
    //   title: 'Surveillance Camera',
    //   purposes: ['security'],
    // },

    // {
    //   name: 'cloudflare',
    //   title: 'Cloudflare',
    //   purposes: ['security'],
    //   required: true,
    // },
  ],
};
