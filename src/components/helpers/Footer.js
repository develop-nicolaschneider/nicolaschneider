import React, {useCallback, useEffect, useState} from 'react'
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
    const [ language , setLanguage ] = useState(localStorage.getItem("language"))
    const { t, i18n } = useTranslation()

    /*
    * onSystemThemeChanged changes also the page theme if there is no theme set manually for this site.
    * if there is a change in the system theme, the site theme will adapt to this theme
    */
    const onSystemThemeChanged = useCallback((theme) => {
        console.log("onSystemThemeChanged: "+ theme)
        const storageTheme = localStorage.getItem("theme")
        const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches === true ? "light" : "dark"
        if (theme === null) {
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
    }, [  ]);

    /*
     * If there is a theme change by selecting another radio button, this message is called.
     */
    const onThemeChange = e => {
        onSystemThemeChanged(e.target.value)
    }

    const changeCurrentLanguage = useCallback(lang => {
        localStorage.setItem("language", lang)
        setLanguage(lang)
        i18n.changeLanguage(lang).then(() => null)
    }, [ i18n ])
    const onLanguageChange = (e) => {
        const selected = e.target.childNodes[e.target.selectedIndex]
        const lang = selected.getAttribute('id')
        changeCurrentLanguage(lang)
    }

    const setDefaultLanguage = useCallback(()  => {
        const storageLanguage = localStorage.getItem("language")
        if (storageLanguage === null) {
            const defaultLanguage = languages[0].code
            changeCurrentLanguage(defaultLanguage)
        } else {
            const currentLanguage = languages.find(obj => obj.code === storageLanguage).code
            changeCurrentLanguage(currentLanguage)
        }
    }, [ changeCurrentLanguage ])

    /*
    * Check if system theme (light / dark theme) or language changed
    */
    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: light)").addEventListener('change', () => onSystemThemeChanged(null))
        onSystemThemeChanged(null)
        setDefaultLanguage()
        return () => {
            window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', () => {
            })
        }
    },[ onSystemThemeChanged, setDefaultLanguage ])

    return (
        <footer>
            <div className="location-div">
                <LocationOnOutlined/>
                {t("locationText")}
            </div>
            <div className="contact-div">
                <EmailIconOutlined/>
                {t("email")}
            </div>
            <div className="copyright-div">
                {t("copyrights")}
            </div>
            <div className="social-div">
                <InstagramIcon/>
                <LinkedInIcon/>
                <GitHubIcon/>
            </div>
            <div className="theme-div"
            ></div>
            <form className="theme-picker" action="">
                <fieldset key="theme">
                    <legend className="visually-hidden">{t("labelTheme")}</legend>
                    <input
                        type="radio"
                        name="theme"
                        id="light"
                        value="light"
                        checked={colorTheme === "light"}
                        onChange={onThemeChange}
                    />
                    <label htmlFor="light" className="visually-hidden">{t("lightTheme")}</label>

                    <input
                        type="radio"
                        id="dark"
                        name="theme"
                        value="dark"
                        checked={colorTheme === "dark"}
                        onChange={onThemeChange}
                    />
                    <label htmlFor="dark" className="visually-hidden">{t("darkTheme")}</label>

                    <input
                        type="radio"
                        id="colored"
                        name="theme"
                        value="colored"
                        checked={colorTheme === "colored"}
                        onChange={onThemeChange}
                    />
                    <label htmlFor="colored" className="theme-label">{t("coloredTheme")}</label>
                    <input
                        type="radio"
                        id="system"
                        name="theme"
                        value="system"
                        checked={colorTheme === "system"}
                        onChange={onThemeChange}
                    />
                    <label htmlFor="system" className="theme-label">{t("systemTheme")}</label>
                </fieldset>
            </form>
            <div className="language-div">
                <label htmlFor="langugage" className="">{t("selectLngLbl")}</label>
                <select
                    id="language-select"
                    name="language"
                    onChange={onLanguageChange}
                    defaultValue={language}
                >
                    {languages.map((lang) => {
                        const {code, native} = lang;
                        return <option
                            id={code}
                            key={code}
                            name={code}
                            value={code}
                        >
                            {t(native)}
                        </option>
                    })}
                </select>
            </div>
        </footer>
    )
}
export default Footer
