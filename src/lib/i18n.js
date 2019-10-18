const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr', 'ar'],
  localeSubpaths: {
    en: 'en',
    fr: 'fr',
    ar: 'ar',
  },
  fallbackLng: 'en',
  ignoreRoutes: ['/service-worker.js'],
});
