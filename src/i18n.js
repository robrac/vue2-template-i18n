import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

// 自动根据浏览器系统语言设置语言
// const localLang = false;
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
const lang = localLang || localStorage.getItem('local') || 'zh-CN';

Vue.config.lang = lang;

function loadLocaleMessages() {
  const locales = require.context("./", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || lang,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "zh-CN",
  messages: loadLocaleMessages(),
});
