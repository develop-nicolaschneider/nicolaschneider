import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Navigation from "./components/helpers/Navigation";
import Footer from "./components/helpers/Footer"
import './assets/styles/App.css'
import { useEffect, useRef, useState } from "react";

const App = () => {
    const [visibleKey, setVisibleKey] = useState("home")
    const sectionsRef = useRef([]);
    const observerConfig = { root: null, rootMargin: '-40%' }
    const refCallback = (element: never) => {
        if (element) {
            sectionsRef.current.push(element);
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, "", "#"+entry.target.id)
                    setVisibleKey(entry.target.id)                }
            })
        }, observerConfig)
        sectionsRef.current.forEach((section) => {
            observer.observe(section)
        })
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Navigation visibleKey={visibleKey} setVisibleKey={setVisibleKey}/>
            <Routes>
                <Route path='*' element={<Navigate to='/'/>}/>
                <Route path="#home"/>
                <Route path="#about"/>
                <Route path="#portfolio"/>
            </Routes>
            <section
                id="home"
                key="home"
                ref={refCallback}
            >
                <Home/>
            </section>
            <section
                id="about"
                key="about"
                ref={refCallback}
                className="page-section">
                <About/>
            </section>
            <section
                id="portfolio"
                key="portfolio"
                ref={refCallback}
                className="page-section">
                <Portfolio/>
            </section>
            <Footer/>
        </>
    )
}

export default App
