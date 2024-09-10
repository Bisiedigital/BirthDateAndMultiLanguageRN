import {I18nManager} from 'react-native';
import {initReactI18next} from 'react-i18next';

const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'am',
    name: 'Amharic',
  },
  {
    code: 'fr',
    name: 'French',
  },
  {
    code: 'or',
    name: 'Oromifa',
  },
];

const i18n = initReactI18next({
  // the default language
  defaultLanguage: 'en',
  // the supported languages
  languages,
});

export default i18n;
