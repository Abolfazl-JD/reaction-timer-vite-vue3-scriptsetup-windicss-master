import { createI18n } from 'vue-i18n'
import en from './src/locales/en.json'
import fa from './src/locales/fa.json'

const I18n = createI18n({
    legacy: false,
    locale: 'fa',
    fallbackLocale : 'en',
    messages: {
        en,
        fa
    }
})

export default I18n