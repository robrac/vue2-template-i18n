module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2-template-i18n/' : '/',
  pluginOptions: {
    i18n: {
      // locale: 'zh-CN',
      // fallbackLocale: 'en-US',
      localeDir: 'i18n',
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
