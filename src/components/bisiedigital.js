import React from 'react';
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {I18nextProvider} from 'react-i18next';
import MyComponent from './MyComponent';

// Import your language translation files
import enTranslation from './../locals/EN/en.json';
import amTranslation from './../locals/AM/am.json';
import frTranslation from './../locals/FR/fr.json';
import orTranslation from './../locals/OR/or.json';

// Set up the language resources
const resources = {
  en: {translation: enTranslation},
  am: {translation: amTranslation},
  fr: {translation: frTranslation},
  or: {translation: orTranslation},
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language
});

const Bisiedigital = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MyComponent />
    </I18nextProvider>
  );
};

export default Bisiedigital;
