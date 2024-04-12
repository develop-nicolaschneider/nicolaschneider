import i18n from 'i18next'
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {},
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
                pageTitle: "Nicola Schneider",
                pageSubTitle: "Explore more...",
                pageContactMe: "contact me",

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
                // Gibb
                hasLinkGibb: "https://gibb.ch",
                cardTitleGibb: "Education",
                cardContentGibb: "4 year apprenticeship as an IT-Specialist in application development starting in summer 2017.\n" +
                    "Parallel vocational and technical high school diploma.",
                // SIX
                hasLinkSix: "https://www.six-group.com/en/home.html",
                cardTitleSix: "Working@SIX",
                cardContentSix: "Started 2017 my apprenticeship at SIX and since my successful graduation I am working as a Software Engineer.\n" +
                    "Short break due to the military recruitment school in summer 2022.",
                // BFH
                hasLinkBfh: "https://www.bfh.ch/en/studies/bachelor/computer-science/",
                cardTitleBfh: "Bachelor of Science in Computer Science",
                cardContentBfh: "Started my study in autumn 2023.\n" +
                    "Part time study over 4 years at Berns University of Applied Sciences.",
                // Skillset
                hasLinkSkills: "",
                cardTitleSkills: "Skills",
                cardContentSkills: "JavaScript / TypeScripts / Java / Kotlin \n" +
                    "Testing: Unit, Jest, QF-Test\n" +
                    "Frontend: ReactsJS / Java Swing",
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
                pageTitle: "Nicola Schneider",
                pageSubTitle: "Explore more...",
                pageContactMe: "contact me",

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
                // Gibb
                hasLinkGibb: "https://gibb.ch",
                cardTitleGibb: "Ausbildung",
                cardContentGibb: "4 jährige Berufslehre als Informatiker Applikationsentwicklung im Sommer 2017.\n" +
                    "Parallel wurde die technische Berufsmaturität besucht.",
                // SIX
                hasLinkSix: "https://www.six-group.com/de/home.html",
                cardTitleSix: "Working@SIX",
                cardContentSix: "2017 habe ich meine Berufslehre bei SIX gestartet. Seit dem erfolgreichem Abschluss arbeite ich als Softwareentwickler.\n" +
                    "Kurzer Unterbruch durch die Rekrutenschule im Sommer 2022",
                // BFH
                hasLinkBfh: "https://www.bfh.ch/de/studium/bachelor/informatik/",
                cardTitleBfh: "Bachelor of Science in Computer Science",
                cardContentBfh: "Im Herbst 2023 habe ich das Teilzeit-Bachelorstudium in Informatik an der Berner Fachhochschule gestartet.",
                // Skillset
                hasLinkSkills: "",
                cardTitleSkills: "Skills",
                cardContentSkills: "JavaScript / TypeScripts / Java / Kotlin \n" +
                    "Testing: Unit, Jest, QF-Test\n" +
                    "Frontend: ReactsJS / Java Swing",
            }
        }
    }
}).then(null)
