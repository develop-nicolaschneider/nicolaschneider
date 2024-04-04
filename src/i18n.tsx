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
                // navigation
                navAbout: "Über",
                navPortfolio: "Portfolio",

                en: "Englisch",
                de: "Deutsch",
                logoText: "nicola schneider",
                pageTitle: "Explore more...",

                // footer
                locationText: "Solothurn, Schweiz",
                email: "contact@nicolaschneider.ch",
                labelTheme: "Farbschema",
                coloredTheme: "bunt",
                darkTheme: "dunkel",
                lightTheme: "hell",
                systemTheme: "Automatisch",
                selectLngLbl: "Sprache",

                // About
                aboutTitle: "Über",
                aboutSubtitle: "Hi. Ich bin Nicola.",
                aboutSubtitle2: "Jahre alt.",
                // First Slide
                aboutMe: "Über mich",
                aboutMeAge: "years old",
                aboutMeDeveloper: ""
            }
        },
        en: {
            translation: {
                // navigation
                navAbout: "About",
                navPortfolio: "Portfolio",

                en: "English",
                de: "German",
                logoText: "nicola schneider",
                pageTitle: "Explore more...",

                // footer
                locationText: "Solothurn, Switzerland",
                email: "contact@nicolaschneider.ch",
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
