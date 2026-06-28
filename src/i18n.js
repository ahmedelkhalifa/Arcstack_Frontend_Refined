import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import aboutPageEn from "./locales/en/about.json";
import contactPageEn from "./locales/en/contact.json";
import workPageEn from "./locales/en/work.json";
import tr from "./locales/tr/translation.json";
import aboutPageTr from "./locales/tr/about.json";
import contactPageTr from "./locales/tr/contact.json";
import workPageTr from "./locales/tr/work.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
      aboutPage: aboutPageEn,
      contactPage: contactPageEn,
      workPage: workPageEn,
    },
    tr: {
      translation: tr,
      aboutPage: aboutPageTr,
      contactPage: contactPageTr,
      workPage: workPageTr,
    },
  },

  lng: localStorage.getItem("language") || "tr",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
