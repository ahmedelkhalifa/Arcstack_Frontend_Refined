import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import aboutPageEn from "./locales/en/about.json";
import tr from "./locales/tr/translation.json";
import aboutPageTr from "./locales/tr/about.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
      aboutPage: aboutPageEn,
    },
    tr: {
      translation: tr,
      aboutPage: aboutPageTr,
    },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "tr",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;