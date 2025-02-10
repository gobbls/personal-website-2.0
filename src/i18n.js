import { createI18n } from "vue-i18n";
import en from './lang/en/en.json';
import no from './lang/no/no.json';

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        no,
    },
});

export default i18n;