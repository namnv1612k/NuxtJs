import Vue from 'vue'
import VueI18n from 'vue-i18n'
// eslint-disable-next-line camelcase
import i18n_data from './vue-i18n-locales.generated'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: 'vi',
    fallbackLocale: 'vi',
    messages: i18n_data
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
