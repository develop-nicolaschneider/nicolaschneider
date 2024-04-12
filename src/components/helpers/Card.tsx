import '../../assets/styles/Career.css'

type CardProps = {
    cardImgPath: string,
    hasLink: string,
    cardTitle: string,
    cardText: string
}

function Card({cardImgPath, hasLink, cardTitle, cardText}: CardProps) {
    const imgDiv2 =
        <div className="card-image-div">
            <img id={cardTitle.toLowerCase()+"-img"} src={cardImgPath} alt="card" className="card-image"/>
        </div>
    let imgDiv
    if (hasLink !== "") {
        imgDiv =
            <a href={hasLink} target="_blank" rel="noopener noreferrer">
                {imgDiv2}
            </a>
    } else {
        imgDiv = imgDiv2
    }

    return (
        <div className="card">
            {imgDiv}
            <div className="card-description">
                <div className="card-title">
                    {cardTitle}
                </div>
                <div className="card-text">
                    {cardText}
                </div>
            </div>
        </div>
    )
}

export default Card
