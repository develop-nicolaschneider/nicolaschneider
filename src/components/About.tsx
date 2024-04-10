import { useRef } from "react"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import '../assets/styles/About.css'
import { useTranslation } from "react-i18next"

const aboutSlides = [
    {
        slideId: "slider-1",
        slideTitle: "aboutMotorcycleTitle",
        slideText: "aboutMotorcycleContent",
    },
    {
        slideId: "slider-2",
        slideTitle: "aboutMeTitle",
        slideText: "aboutMeContent",
    },
    {
        slideId: "slider-3",
        slideTitle: "aboutTravelTitle",
        slideText: "aboutTravelContent",
    },
    {
        slideId: "slider-4",
        slideTitle: "aboutPhotographyTitle",
        slideText: "aboutPhotographyContent",
    },
    {
        slideId: "slider-5",
        slideTitle: "aboutHockeyTitle",
        slideText: "aboutHockeyContent",
    },
    {
        slideId: "slider-6",
        slideTitle: "aboutEhcKoppigenTitle",
        slideText: "aboutEhcKoppigenContent",
    }
]

const About = () => {
    const { t} = useTranslation()
    const my_age = new Date(2000, 10, 5)
    const age = Math.abs(new Date(Date.now() - my_age.getTime()).getUTCFullYear() - 1970)
    const sliderRef = useRef<HTMLDivElement>(null)

    const onPrevBtnClicked = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current
            const slides = document.querySelectorAll('.slides')
            slider.prepend(slides[slides.length - 1])
        }
    }
    const onNextBtnClicked = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current
            const slides = document.querySelectorAll('.slides')
            slider.appendChild(slides[0])
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
                                    <h2>{t(slide.slideTitle)}</h2>
                                    <p>{t(slide.slideText)}</p>
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
