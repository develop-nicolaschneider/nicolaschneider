import path2 from '../assets/images/about/hockey_nicola-schneider.jpeg'
import path3 from '../assets/images/about/ehck_logo.png'
import path4 from '../assets/images/about/ehck_logo.png'
import leftImage from '../assets/images/career/nicola-schneider.jpeg'
import '../assets/styles/Career.css'
import Card from "./helpers/Card"
import {useTranslation} from "react-i18next";

const aboutCards = [
    {
        cardImgPath: path2,
        hasLink: "https://www.ehcburgdorf.ch",
        cardTitle: "Test1",
        cardText: "adflj"
    },
    {
        cardImgPath: path2,
        hasLink: "",
        cardTitle: "Test3",
        cardText: "asdlfj asdlfja sfadsljf asfalj falsdjf adlf asfj asfaslk fasljf aslfjasdfasflkajwe fasjf awer alsdkjf adsfafasd fasdf adsfjaslfj asfaw efas dfads"
    },
    {
        cardImgPath: path3,
        hasLink: "",
        cardTitle: "Test3",
        cardText: "asdlfj asdlfja sfadsljf asfalj falsdjf adlf asfj asfaslk fasljf aslfjasdfasflkajwe fasjf awer alsdkjf adsfafasd fasdf adsfjaslfj asfaw efas dfads"
    },
    {
        cardImgPath: path4,
        hasLink: "",
        cardTitle: "Test3",
        cardText: "dfasflkajwe fasjf awer alsdkjf adsfafasd fasdf adsfjaslfj asfaw efas dfads"
    }
]

const Career = () => {
    const { t} = useTranslation()

    return (
        <div className="section-title-div">
            <h1>{t("careerTitle")}</h1>
            <div className="cards-container">
                <img src={leftImage} alt="career" className="about-image"/>
                <div className="cards">
                    {aboutCards.map((card, key) => {
                        return (
                            <Card key={key} cardImgPath={card.cardImgPath} hasLink={card.hasLink} cardTitle={card.cardTitle}
                                  cardText={card.cardText}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Career
