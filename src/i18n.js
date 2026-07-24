import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { slugLangMap } from "./data/slugLangMap";

import en from "./locales/en/translation.json";
import aboutPageEn from "./locales/en/about.json";
import contactPageEn from "./locales/en/contact.json";
import workPageEn from "./locales/en/work.json";
import tr from "./locales/tr/translation.json";
import aboutPageTr from "./locales/tr/about.json";
import contactPageTr from "./locales/tr/contact.json";
import workPageTr from "./locales/tr/work.json";

export const DEFAULT_LANGUAGE = "en";
export const LANGUAGE_STORAGE_KEY = "language";

const resources = {
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
};

/**
 * The language a given URL must render in.
 *
 * Pure and free of browser APIs on purpose: the prerender (Node) and the
 * hydrating client both call this and must agree, otherwise React throws
 * away the prerendered HTML. Only the service detail pages carry language
 * in the URL; everything else is English by default.
 *
 * @param {string} pathname
 * @returns {"en" | "tr"}
 */
export function resolveInitialLanguage(pathname = "/") {
  const match = /^\/services\/([^/]+)/.exec(pathname);
  const slug = match ? match[1] : undefined;
  const slugLang = slug ? slugLangMap[slug] : undefined;
  return slugLang === "tr" ? "tr" : DEFAULT_LANGUAGE;
}

/** The visitor's remembered language, or null. Safe to call during SSR. */
export function getStoredLanguage() {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === "en" || stored === "tr" ? stored : null;
  } catch {
    // localStorage can throw in private mode / when cookies are blocked
    return null;
  }
}

/**
 * Initialise (or re-target) the shared i18n instance.
 * Resources are bundled, so the initial `init` applies `lng` synchronously.
 *
 * @param {string} lng
 */
export function initI18n(lng = DEFAULT_LANGUAGE) {
  if (!i18n.isInitialized) {
    return i18n.use(initReactI18next).init({
      resources,
      lng,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: { escapeValue: false },
    });
  }
  if (i18n.language !== lng) {
    return i18n.changeLanguage(lng);
  }
  return Promise.resolve(i18n.t.bind(i18n));
}

export default i18n;
