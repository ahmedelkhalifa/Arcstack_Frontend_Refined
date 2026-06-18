import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import tr from "./locales/tr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "tr",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;