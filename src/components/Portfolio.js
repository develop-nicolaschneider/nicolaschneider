import HtmlIcon from '@mui/icons-material/Html';
import path2 from '../assets/images/about/hockey_nicola-schneider.jpeg'
import path3 from '../assets/images/about/ehck_logo.png'
import path4 from '../assets/images/about/ehck_logo.png'
import leftImage from '../assets/images/portfolio/nicola-schneider.jpeg'
import '../assets/styles/Portfolio.css'
import Card from "./helpers/Card"

const aboutCards = [
    {
        cardImgPath: <HtmlIcon/>,
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

const Portfolio = () => {

    return (
        <div className="section-title-div">
            <h1>Portfolio</h1>
            <div className="cards-container">
                <img src={leftImage} alt="portfolio" className="about-image"/>
                <div className="cards">
                    {aboutCards.map((card, key) => {
                        return (
                            <Card key={key} /*cardImgPath={card.cardImgPath}*/ hasLink={card.hasLink} cardTitle={card.cardTitle}
                                  cardText={card.cardText}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
