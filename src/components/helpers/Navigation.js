import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Logo } from '../../assets/logo/nicolaschneider_logo.svg'
import './Navigation.css'

function Navigation({ observerRefs }) {
    const [visibleKey, setVisibleKey] = useState(0)
    const observers = useRef([])

    const onItemClicked = (key) => {
        setVisibleKey(key)
    }

    const observerCallback = async (e, key) => {
        if (e.length && e[0].isIntersecting) {
            window.location.hash = e[0].target.id;
            setVisibleKey(key)
        }
    }

    useEffect(() => {
        const observerRefsCurrent = observerRefs.current
        const observersCurrent = observers.current
        const observerConfig = {
            rootMargin: '-40%'
        };
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
        return () =>
            observersCurrent?.forEach((observer) => observer?.current?.disconnect())
    }, [observerRefs, observers])

    return (
        <header>
            <nav id="navigation">
                <ul>
                    <li
                        name="home"
                        id="0"
                        key="0"
                        onClick={() => onItemClicked(0)}
                        className={`${0 === visibleKey ? "active" : ""}`}
                    >
                        <a href="/#home"><Logo id="nav-logo"/></a>
                    </li>
                    <li
                        name="about"
                        id="1"
                        key="1"
                        onClick={() => onItemClicked(1)}
                        className={`${1 === visibleKey ? "active" : ""}`}
                        >
                        <a href="/#about">About</a>
                    </li>
                    <li
                        name="portfolio"
                        id="2"
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
