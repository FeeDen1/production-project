import i18next from "i18next";
import {BackendModule} from "i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18next
    .use(Backend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "ru",
        debug: __IS_DEV__,
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        }

    });


export default i18next