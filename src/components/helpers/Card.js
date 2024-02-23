import '../../assets/styles/Portfolio.css'

function Card(props) {
    const imgDiv2 =
        <div className="card-image">
            {/*<img src={props.cardImgPath} alt="card" className="card-image"/>*/}
            {props.cardImgPath}
        </div>
    let imgDiv
    if (props.hasLink !== "") {
        imgDiv =
            <a href={props.hasLink} target="_blank" rel="noopener noreferrer">
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
                    {props.cardTitle}
                </div>
                <div className="card-text">
                    {props.cardText}
                </div>
            </div>
        </div>
    )
}

export default Card
