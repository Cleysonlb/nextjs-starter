module.exports = {
  defaultLocale: 'pt',
  locales: ['pt', 'en'],
  pages: {
    '*': ['translation']
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/public/static/locales/${lang}/${ns}.json`).then(
      m => m.default
    )
};
