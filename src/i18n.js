// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationSL from './locales/sl.json';

const resources = {
    en: {
        translation: translationEN
    },
    sl: {
        translation: translationSL
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
