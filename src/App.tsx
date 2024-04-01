import { useRef } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Navigation from "./components/helpers/Navigation";
import Footer from "./components/helpers/Footer"
import './assets/styles/App.css'

const App = () => {
    const observerRefs = useRef<Array<HTMLElement | null>>([])

    return (
        <>
            <Navigation observerRefs={observerRefs}/>
            <Routes>
                <Route path='*' element={<Navigate to='/'/>}/>
                <Route path="#home"/>
                <Route path="#about"/>
                <Route path="#portfolio"/>
            </Routes>
            <section
                id="home"
                key="0"
                ref={(el) => (observerRefs.current[0] = el)}>
                <Home/>
            </section>
            <section
                id="about"
                key="1"
                ref={(el) => (observerRefs.current[1] = el)}
                className="page-section">
                <About/>
            </section>
            <section
                id="portfolio"
                key="2"
                ref={(el) => (observerRefs.current[2] = el)}
                className="page-section">
                <Portfolio/>
            </section>
            <Footer/>
        </>
    )
}

export default App
