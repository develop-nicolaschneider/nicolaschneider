import React, { useRef } from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import SiteLoader from "./components/helpers/SiteLoader"
import Portfolio from "./components/Portfolio"
import About from "./components/About";
import Navigation from "./components/helpers/Navigation";
import Footer from "./components/helpers/Footer"
import './assets/styles/App.css'

function App() {
    const observerRefs = useRef([]);

    return (
        <>
            <Navigation observerRefs={observerRefs}/>
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
                <Route path="#home"/>
                <Route path="#about"/>
                <Route path="#portfolio"/>
            </Routes>
            <section
                name="home"
                id="home"
                key="0"
                ref={(el) => (observerRefs.current[0] = el)}>            >
                <SiteLoader/>
            </section>
            <section
                name="about"
                id="about"
                key="1"
                ref={(el) => (observerRefs.current[1] = el)}                className="page-section">
                <About/>
            </section>
            <section
                name="portfolio"
                id="portfolio"
                key="2"
                ref={(el) => (observerRefs.current[2] = el)}                className="page-section">
                <Portfolio/>
            </section>
            <Footer/>
        </>
    )
}

export default App
