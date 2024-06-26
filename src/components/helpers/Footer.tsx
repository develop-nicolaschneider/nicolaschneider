import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined'
import EmailIconOutlined from '@mui/icons-material/EmailOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import './Footer.css'

const languages = [
    { code: "en", native: "en" },
    { code: "de", native: "de" },
]
const themes = [ "light", "dark", "colored", "system"]

const Footer = () => {
    const [ colorTheme, setColorTheme ] = useState(localStorage.getItem("theme"))
    const [ language , setLanguage ] = useState(localStorage.getItem("language") || "de")
    const { t, i18n } = useTranslation()

    /*
    * onSystemThemeChanged changes also the page theme if there is no theme set manually for this site.
    * if there is a change in the system theme, the site theme will adapt to this theme
    */
    const onSystemThemeChanged = useCallback((theme: string) => {
        let storageTheme = localStorage.getItem("theme")
        if (storageTheme == null) storageTheme = ""
        const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
        if (theme === "") {
            if (!themes.includes(storageTheme) || storageTheme === "system") {
                localStorage.setItem("theme", "system")
                setColorTheme("system")
                document.documentElement.setAttribute("color-theme", systemTheme)
            } else {
                localStorage.setItem("theme", storageTheme)
                setColorTheme(storageTheme)
                document.documentElement.setAttribute("color-theme", storageTheme)
            }
        } else {
            if (!themes.includes(theme) || theme === "system") {
                localStorage.setItem("theme", "system")
                setColorTheme("system")
                document.documentElement.setAttribute("color-theme", systemTheme)
            } else {
                localStorage.setItem("theme", theme)
                setColorTheme(theme)
                document.documentElement.setAttribute("color-theme", theme)
            }
        }
    }, [  ])

    /*
     * If there is a theme change by selecting another radio button, this message is called.
     */
    const onThemeChange = (e: { target: { value: string } }) => {
        onSystemThemeChanged(e.target.value)
    }

    const changeCurrentLanguage = useCallback((lang: string) => {
        localStorage.setItem("language", lang)
        setLanguage(lang)
        i18n.changeLanguage(lang).then(() => null)
    }, [ i18n ])
    const onLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.children[e.target.selectedIndex]
        const lang = selected.id
        if (lang) changeCurrentLanguage(lang)
    }

    const setDefaultLanguage = useCallback(()  => {
        let language = localStorage.getItem("language") || ""
        if (language === "") {
            // Browser language
            const navigatorLanguage = navigator.language
            language = languages.find(obj => obj.code === navigatorLanguage.substring(0,2))?.code || languages[0].code
        } else {
            // Check language in localstorage, else set default language
            language = languages.find(obj => obj.code === language)?.code || languages[0].code
        }
        changeCurrentLanguage(language)
    }, [ changeCurrentLanguage ])

    /*
    * Check if system theme (light / dark theme) or language changed
    */
    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: light)").addEventListener('change', () => onSystemThemeChanged(""))
        onSystemThemeChanged("")
        setDefaultLanguage()
        return () => {
            window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', () => {
            })
        }
    },[ onSystemThemeChanged, setDefaultLanguage ])

    return (
        <footer>
            <div className="copyright-div">
                <a href="./">
                    © {new Date(Date.now()).getUTCFullYear()} nicolaschneider
                </a>
            </div>
            <div className="social-div">
                <a href="mailto:contact@nicolaschneider.ch" target="_blank" rel="noopener noreferrer">
                    <EmailIconOutlined/>
                </a>
                <a href="https://linkedin.com/in/nicola-schneider-406966222" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon/>
                </a>
                <a href="https://github.com/develop-nicolaschneider" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon/>
                </a>
                <a href="https://www.instagram.com/schneider.n/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon/>
                </a>
            </div>
            <div className="location-div">
                <a href="https://maps.app.goo.gl/5Ygypqd769UU5ngE8" target="_blank" rel="noopener noreferrer">
                    <LocationOnOutlined/>
                    {t("locationText")}
                </a>
            </div>
            <div className="language-div">
                <label htmlFor="language-select" className="">{t("selectLngLbl")}</label>
                <select
                    value={language}
                    id="language-select"
                    name="language"
                    onChange={onLanguageChange}
                >
                    {languages.map((lang) => {
                        const {code, native} = lang
                        return <option
                            id={code}
                            key={code}
                            value={code}
                        >
                            {t(native)}
                        </option>
                    })}
                </select>
            </div>
            <div className="theme-div">
                <form className="theme-picker" action="">
                    <fieldset key="theme">
                        <legend className="theme-picker-legend">{t("labelTheme")}</legend>
                        <label htmlFor="light" className="theme-picker-label">
                            <input
                                type="radio"
                                name="theme"
                                id="light"
                                value="light"
                                className="theme-picker-input"
                                checked={colorTheme === "light"}
                                onChange={onThemeChange}
                            />
                            {t("lightTheme")}</label>
                        <label htmlFor="dark" className="theme-picker-label">
                            <input
                                type="radio"
                                id="dark"
                                name="theme"
                                value="dark"
                                className="theme-picker-input"
                                checked={colorTheme === "dark"}
                                onChange={onThemeChange}
                            />
                            {t("darkTheme")}</label>
                        <label htmlFor="colored" className="theme-picker-label">
                            <input
                                type="radio"
                                id="colored"
                                name="theme"
                                value="colored"
                                className="theme-picker-input"
                                checked={colorTheme === "colored"}
                                onChange={onThemeChange}
                            />
                            {t("coloredTheme")}</label>
                        <label htmlFor="system" className="theme-picker-label">
                            <input
                                type="radio"
                                id="system"
                                name="theme"
                                value="system"
                                className="theme-picker-input"
                                checked={colorTheme === "system"}
                                onChange={onThemeChange}
                            />
                            {t("systemTheme")}</label>
                    </fieldset>
                </form>
            </div>
        </footer>
    )
}
export default Footer
