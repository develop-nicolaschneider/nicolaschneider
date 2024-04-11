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
                // navigation
                navAbout: "About",
                navCareer: "Career",

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
                // about me
                aboutMeTitle: "About me",
                aboutMeContent: "Software Engineer. Ice Hockey lover.\n" +
                    "Exploring the world.",
                // travel
                aboutTravelTitle: "Travel",
                aboutTravelContent: "Exploring new places. Enjoying the nature.\n" +
                    "Scandinavia is my favorite region for travelling.",
                // photography
                aboutPhotographyTitle: "Photography",
                aboutPhotographyContent: "iPhone, Drone or Action shots.\n" +
                    "Shot videos, cut with Final Cut Pro.",
                // hockey
                aboutHockeyTitle: "Hockey",
                aboutHockeyContent: "In a club since the age of 10.\n" +
                    "5 years with EHC Burgdorf in the 1st league.\n",
                // ehc koppigen
                aboutEhcKoppigenTitle: "EHC Koppigen",
                aboutEhcKoppigenContent: "Since 2023/24 a member of the club.",
                // motorcycle
                aboutMotorcycleTitle: "Motorcycle",
                aboutMotorcycleContent: "When winter is over, I am back on the streets.\n" +
                    "Love to ride my KTM motorcycle.",

                // Career
                careerTitle: "Career",
            }
        },
        de: {
            translation: {
                // navigation
                navAbout: "Über",
                navCareer: "Karriere",

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
                // about me
                aboutMeTitle: "Über mich",
                aboutMeContent: "Softwareentwickler. Eishockey begeistert. \nDie Welt erkunden.",
                // travel
                aboutTravelTitle: "Reisen",
                aboutTravelContent: "Neue Orte erkunden. Die Natur geniessen.\n" +
                    "Skandinavien ist meine Lieblingsregion.",
                // photography
                aboutPhotographyTitle: "Photographie",
                aboutPhotographyContent: "iPhone-, Drohnen- oder Actionaufnahmen.\n" +
                    "Kurzvideos geschnitten mit Final Cut Pro.",
                // hockey
                aboutHockeyTitle: "Hockey",
                aboutHockeyContent: "Seit dem 10. Lebensjahr im Verein vom EHC Burgdorf.\n" +
                    "5 Jahre lang in der 1. Liga beim EHC Burgdorf.\n",
                // ehc koppigen
                aboutEhcKoppigenTitle: "EHC Koppigen",
                aboutEhcKoppigenContent: "Seit 2023/24 ein Mitglied des Clubs.",
                // motorcycle
                aboutMotorcycleTitle: "Motorrad",
                aboutMotorcycleContent: "Ist der Winter vorbei, bin ich zurück auf der Strasse.\n" +
                    "Ich liebe es mein KTM Motorrad zu fahren.",

                // Career
                careerTitle: "Karriere",
            }
        }
    }
}).then(null)
