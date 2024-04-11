import navLogo from '../../assets/logo/nicolaschneider_logo.svg'
import './Navigation.css'
import { useTranslation } from "react-i18next"

type NavigationProps = {
    visibleKey: string,
}

const Navigation = ({visibleKey}: NavigationProps) => {
    const { t} = useTranslation()


    return (
        <header>
            <nav id="navigation">
                <ul>
                    <li
                        id="nav-home"
                        key={0}
                        className={`${"home" === visibleKey ? "active" : ""}`}
                    >
                        <a id="nav-logo" href="/#home">
                            <img id="nav-svg-logo" src={navLogo} alt={"logo"}/>
                        </a>
                    </li>
                    <li
                        id="nav-about"
                        key={1}
                        className={`${"about" === visibleKey ? "active" : ""}`}
                    >
                        <a href="/#about">{t("navAbout")}</a>
                    </li>
                    <li
                        id="nav-career"
                        key={2}
                        className={`${"career" === visibleKey ? "active" : ""}`}
                    >
                        <a href="/#Career">{t("navCareer")}</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
