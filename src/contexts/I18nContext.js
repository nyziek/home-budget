import React, { useState } from 'react';
import en from '../locales/en.json';

export const I18nContext = React.createContext();

const I18nContextProvider = ({ children }) => {
  const [translations, setTranslations] = useState(en);

  const changeLocale = locale => {
    switch (locale) {
      case 'en':
        setTranslations(en);
        break;
      default:
        setTranslations(en);
    }
  }

  const t = (text, textCase) => {
    const translation = translations[text]
      ? translations[text]
      : text;

    switch (textCase) {
      case 'lower':
        return translation.toLowerCase();
      case 'upper':
        return translation.toUpperCase();
      case 'title':
        return toTitleCase(translation);
      case 'asIs':
        return translation;
      default:
        return toProperCase(translation);
    }
  };

  const toProperCase = str =>
    str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

  const toTitleCase = str => str.replace(/\w\S*/g, toProperCase);

  return (
    <I18nContext.Provider
      value={{ t, changeLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export default I18nContextProvider;
