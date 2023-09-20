import i18n, { InitOptions } from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Import LanguageDetector
import TranslationUz from "./assets/locales/uz/translation.json";
import TranslationRu from "./assets/locales/ru/translation.json";

// Define a TypeScript interface for the i18n configuration
interface CustomI18nConfig extends InitOptions {
  lng?: string | undefined;
  debug: boolean;
  react: {
    useSuspense: boolean;
  };
  detection: {
    order: string[];
    lookupLocalStorage?: string;
    lookupCookie?: string;
    lookupSessionStorage?: string;
  };
  interpolation: {
    escapeValue: boolean;
  };
}

const localStorageLang = localStorage.getItem("lang");
const i18nConfig: CustomI18nConfig = {
  lng: localStorageLang as string | "ru", // Use type assertion to handle null
  fallbackLng: "uz",
  debug: false,
  react: {
    useSuspense: true,
  },
  detection: {
    order: ["localStorage", "cookie", "sessionStorage", "navigator", "htmlTag"],
    lookupLocalStorage: "lang",
    lookupCookie: "i18next",
    lookupSessionStorage: "i18nextLng",
  },
  resources: {
    uz: {
      translation: TranslationUz,
    },
    ru: {
      translation: TranslationRu,
    },
  },
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector as any) // Use type assertion to cast LanguageDetector
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n;
