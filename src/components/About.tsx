import { useRef } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../assets/styles/About.css'
import {useTranslation} from "react-i18next";

const aboutSlides = [
    {
        slideId: "slider-1",
        slideTitle: "Motorrad",
        slideText: "",
    },
    {
        slideId: "slider-2",
        slideTitle: "About me",
        slideText: "",
    },
    {
        slideId: "slider-3",
        slideTitle: "Travel",
        slideText: "",
    },
    {
        slideId: "slider-4",
        slideTitle: "Photography",
        slideText: "",
    },
    {
        slideId: "slider-5",
        slideTitle: "Hockey",
        slideText: "",
    },
    {
        slideId: "slider-6",
        slideTitle: "EHC Koppigen",
        slideText: "",
    }
]

const About = () => {
    const { t} = useTranslation()
    const my_age = new Date(2000, 10, 5)
    const age = Math.abs(new Date(Date.now() - my_age.getDate()).getUTCFullYear() - 1970)
    const sliderRef = useRef(null)

    const onPrevBtnClicked = () => {
        if (sliderRef.current) {
            const slider: NodeListOf<Element> = sliderRef.current
            let slides = document.querySelectorAll('.slides')
            slider[0].prepend(slides[slides.length - 1])
        }
    }
    const onNextBtnClicked = () => {
        if (sliderRef.current) {
            const slider: NodeListOf<Element> = sliderRef.current
            let slides = document.querySelectorAll('.slides')
            slider[0].appendChild(slides[0])
        }
    }

    return (
        <div className="about-div">
            <h1>{t("aboutTitle")}</h1>
            <h2>{t("aboutSubtitle")} {age} {t("aboutSubtitle2")}</h2>
            <div className="slides-container">
                <div className="slider" ref={sliderRef}>
                    {aboutSlides.map((slide, key) => {
                        return (
                            <div id={slide.slideId} className="slides" key={key}>
                                <div className="slide-content">
                                    <h2>{slide.slideTitle}</h2>
                                    <p>{slide.slideText}</p>
                                </div>
                            </div>
                        )
                    })}
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
