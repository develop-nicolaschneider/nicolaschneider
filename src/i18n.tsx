import i18n from 'i18next'
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    debug: false,
    fallbackLng: 'de',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
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
        },
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
                selectLngLbl: "language",

                // About
                aboutTitle: "About",
                aboutSubtitle: "Hi. I am Nicola.",
                aboutSubtitle2: "years old.",
                // First Slide
                aboutMe: "About me",
                aboutMeAge: "years old",
                aboutMeDeveloper: ""
            }
        }
    }
}).then(null)
