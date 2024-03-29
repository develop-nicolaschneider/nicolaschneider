import i18n from 'i18next'
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
        en: {
            translation: {
                en: "English",
                de: "German",
                logoText: "nicola schneider",
                pageTitle: "Explore more...",

                // footer
                locationText: "Solothurn, Switzerland",
                email: "contact@nicolaschneider.ch",
                copyrights: "© nicolaschneider",
                labelTheme: "Theme",
                coloredTheme: "colored",
                darkTheme: "dark",
                lightTheme: "light",
                systemTheme: "automatic",
                selectLngLbl: "language"
            }
        },
        de: {
            translation: {
                en: "Englisch",
                de: "Deutsch",
                logoText: "nicola schneider",
                pageTitle: "Explore more...",

                // footer
                locationText: "Solothurn, Schweiz",
                email: "contact@nicolaschneider.ch",
                copyrights: "© nicolaschneider",
                labelTheme: "Farbschema",
                coloredTheme: "bunt",
                darkTheme: "dunkel",
                lightTheme: "hell",
                systemTheme: "Automatisch",
                selectLngLbl: "Sprache"
            }
        }
    }
})
