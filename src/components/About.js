import { useRef } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../assets/styles/About.css'

const About = () => {
    const my_age = new Date(2000, 10, 5)
    const age = Math.abs(new Date(Date.now() - my_age).getUTCFullYear() - 1970)

    const sliderRef = useRef(null)

    const onPrevBtnClicked = () => {
        const slider = sliderRef.current
        let slides = document.querySelectorAll('.slides')
        slider.prepend(slides[slides.length - 1])
    }
    const onNextBtnClicked = () => {
        const slider = sliderRef.current
        let slides = document.querySelectorAll('.slides')
        slider.appendChild(slides[0])
    }

    return (
        <div className="about-div">
            <h1>About</h1>
            <h2>{age} years old</h2>
            <div className="slides-container">
                <div className="slider" ref={sliderRef}>
                    <div
                        id="slider-1"
                        className="slides">
                        <div className="slide-content">
                            <h2>Motorrad</h2>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div
                        id="slider-2"
                        className="slides">
                        <div className="slide-content">
                            <h2>About me</h2>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div
                        id="slider-3"
                        className="slides">
                        <div className="slide-content">
                            <h2>Travel</h2>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div
                        id="slider-4"
                        className="slides">
                        <div className="slide-content">
                            <h2>Photography</h2>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div
                        id="slider-5"
                        className="slides">
                        <div className="slide-content">
                            <h2>Hockey</h2>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div
                        id="slider-6"
                        className="slides">
                        <div className="slide-content">
                            <h2>EHC Burgdorf</h2>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="slider-buttons-div">
                    <button onClick={() => onPrevBtnClicked()} type="button" id="prevSlide" className="slide-button">
                        <NavigateBeforeIcon/>
                    </button>
                    <button onClick={() => onNextBtnClicked()} type="button" id="nextSlide" className="slide-button">
                        <NavigateNextIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
