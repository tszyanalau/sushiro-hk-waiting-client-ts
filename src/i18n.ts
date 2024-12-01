import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import _ from 'lodash'
import config from './config'

const resources = {}

_.reduce(
  config.languages,
  (result, lang) => {
    let translation
    try {
      // eslint-disable-next-line
      translation = require(`./assets/translations/${lang}.json`)
    } catch (e) {
      console.error(e)
      throw new Error(`unable to retrieve translation: ${lang}`)
    }
    _.set(result, `${lang}.translation`, translation)
    return result
  },
  resources
)

let defaultLanguage = localStorage.getItem('i18nextLng') || navigator.language

// set default language if the detected language is not handled
if (!config.languages.includes(defaultLanguage)) {
  ;[defaultLanguage] = config.languages
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: config.languages[0],
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
