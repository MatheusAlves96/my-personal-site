import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import homeEN from './locales/en/home.json';
import homeES from './locales/es/home.json';
import homePT from './locales/pt/home.json';
import commonEN from './locales/en/common.json';
import commonES from './locales/es/common.json';
import commonPT from './locales/pt/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { home: homeEN, common: commonEN },
      es: { home: homeES, common: commonES },
      pt: { home: homePT, common: commonPT },
    },
    lng: 'pt',
    fallbackLng: 'pt',
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
