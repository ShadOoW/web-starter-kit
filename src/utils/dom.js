export const setDirection = (language) =>
  document
    .getElementsByTagName('html')[0]
    .setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
