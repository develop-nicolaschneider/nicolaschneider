import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Navigation from "./components/helpers/Navigation"
import Footer from "./components/helpers/Footer"
import './assets/styles/App.css'
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"

const App = () => {
    const [visibleKey, setVisibleKey] = useState("home")
    const sectionsRef:MutableRefObject<HTMLSelectElement[]> = useRef<HTMLSelectElement[]>([])
    const refCallback = useCallback((element: HTMLSelectElement) => {
        if (element) {
            sectionsRef.current.push(element)
        }
    },[sectionsRef])
    useEffect(() => {
        const observerConfig = { root: null, rootMargin: '0%', threshold: 0.1 }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, "", "#"+entry.target.id)
                    setVisibleKey(entry.target.id)
                }
            })
        }, observerConfig)
        sectionsRef.current.forEach((section: HTMLSelectElement) => {
            observer.observe(section)
        })
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Navigation visibleKey={visibleKey}/>
            <Routes>
                <Route path='*' element={<Navigate to='/#home'/>}/>
                <Route path="#home"/>
                <Route path="#about"/>
                <Route path="#portfolio"/>
            </Routes>
            <section
                id="home"
                ref={refCallback}
                key={0}
            >
                <Home/>
            </section>
            <section
                id="about"
                ref={refCallback}
                key={1}
                className="page-section">
                <About/>
            </section>
            <section
                id="portfolio"
                ref={refCallback}
                key={2}
                className="page-section">
                <Portfolio/>
            </section>
            <Footer/>
        </>
    )
}

export default App
