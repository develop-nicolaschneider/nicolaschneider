import leftImage from '../assets/images/career/nicola-schneider.jpeg'
import bfhLogo from '../assets/images/career/bfh_logo.png'
import gibbLogo from '../assets/images/career/gibb_logo.png'
import sixLogo from '../assets/images/career/six_logo.png'
import code from '../assets/images/career/code.svg'

import '../assets/styles/Career.css'
import Card from "./helpers/Card"
import {useTranslation} from "react-i18next";

const aboutCards = [
    {
        cardImgPath: gibbLogo,
        hasLink: "hasLinkGibb",
        cardTitle: "cardTitleGibb",
        cardContent: "cardContentGibb"
    },
    {
        cardImgPath: sixLogo,
        hasLink: "hasLinkSix",
        cardTitle: "cardTitleSix",
        cardContent: "cardContentSix"
    },
    {
        cardImgPath: bfhLogo,
        hasLink: "hasLinkBfh",
        cardTitle: "cardTitleBfh",
        cardContent: "cardContentBfh"
    },
    {
        cardImgPath: code,
        hasLink: "hasLinkSkills",
        cardTitle: "cardTitleSkills",
        cardContent: "cardContentSkills"
    }
]

const Career = () => {
    const { t} = useTranslation()

    return (
        <div className="section-title-div">
            <h1>{t("careerTitle")}</h1>
            <div className="cards-container">
                <img src={leftImage} alt="career" className="career-image"/>
                <div className="cards">
                    {aboutCards.map((card, key) => {
                        return (
                            <Card key={key} cardImgPath={card.cardImgPath} hasLink={t(card.hasLink)} cardTitle={t(card.cardTitle)}
                                  cardText={t(card.cardContent)}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Career
