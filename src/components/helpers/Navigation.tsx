import React, { SetStateAction, useEffect, useRef, useState} from 'react'
import navLogo from '/src/assets/logo/nicolaschneider_logo.svg'
import './Navigation.css'

type NavigationProps = {
    observerRefs: React.MutableRefObject<(HTMLElement | null)[]>
}

const Navigation = ({observerRefs}: NavigationProps) => {
    const [visibleKey, setVisibleKey] = useState(0)
    const observers = useRef<IntersectionObserver | null>(null)

    const onItemClicked = (key: SetStateAction<number>) => {
        setVisibleKey(key)
    }

    const observerCallback = async (e: string | any[], key: SetStateAction<number>) => {
        if (e.length && e[0].isIntersecting) {
            window.history.replaceState(null, "", "#"+e[0].target.id)
            setVisibleKey(key)
        }
    }

    useEffect(() => {
        const observerRefsCurrent = observerRefs.current
        const observersCurrent: IntersectionObserver = observers.current
        const observerConfig = {
            rootMargin: '-40%'
        }
        if (observerRefsCurrent?.length && observersCurrent) {
            Array.from(Array(3).keys()).forEach((_u, key) => {
                observersCurrent[key] = new IntersectionObserver((e) =>
                    observerCallback(e, key),
                    observerConfig
                )
                if (observerRefsCurrent[key]) {
                    observersCurrent[key].observe(observerRefsCurrent[key])
                }
            })
        }
        if (observersCurrent)
        return () => observersCurrent.forEach((observer) => observer?.current?.disconnect())
    }, [observerRefs, observers])

    return (
        <header>
            <nav id="navigation">
                <ul>
                    <li
                        id="home-0"
                        key="0"
                        onClick={() => onItemClicked(0)}
                        className={`${0 === visibleKey ? "active" : ""}`}
                    >
                        <a id="nav-logo" href="/#home"><img id="nav-logo" src={navLogo} alt="logo"/></a>
                    </li>
                    <li
                        id="about-1"
                        key="1"
                        onClick={() => onItemClicked(1)}
                        className={`${1 === visibleKey ? "active" : ""}`}
                        >
                        <a href="/#about">About</a>
                    </li>
                    <li
                        id="portfolio-2"
                        key="2"
                        onClick={() => onItemClicked(2)}
                        className={`${2 === visibleKey ? "active" : ""}`}
                        >
                        <a href="/#portfolio">Portfolio</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
