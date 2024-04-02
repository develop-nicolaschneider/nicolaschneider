import navLogo from '/src/assets/logo/nicolaschneider_logo.svg'
import './Navigation.css'

type NavigationProps = {
    visibleKey: string,
    setVisibleKey: any
}

const Navigation = ({visibleKey, setVisibleKey}: NavigationProps) => {
    // const [visibleKey, setVisibleKey] = useState(0)
    // const observers = useRef<IntersectionObserver | null>(null)
    //
    const onItemClicked = (key: string) => {
        setVisibleKey(key)
    }

    return (
        <header>
            <nav id="navigation">
                <ul>
                    <li
                        id="home-0"
                        key="0"
                        onClick={() => onItemClicked("home")}
                        className={`${"home" === visibleKey ? "active" : ""}`}
                    >
                        <a id="nav-logo" href="/#home"><img id="nav-logo" src={navLogo} alt="logo"/></a>
                    </li>
                    <li
                        id="about-1"
                        key="1"
                        onClick={() => onItemClicked("about")}
                        className={`${"about" === visibleKey ? "active" : ""}`}
                    >
                        <a href="/#about">About</a>
                    </li>
                    <li
                        id="portfolio-2"
                        key="2"
                        onClick={() => onItemClicked("portfolio")}
                        className={`${"portfolio" === visibleKey ? "active" : ""}`}
                    >
                        <a href="/#portfolio">Portfolio</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
