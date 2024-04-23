import "./Card.css"

function Card({ cityData }) {
    return (
        <div className="card">
            <div className="parent"><span className="cityName Title">City Name </span><span className="cityName colon">: </span><span className="cityName Value">{cityData.name}</span></div>
            <div className="parent"><span className="Title">City Temperature </span><span className="colon">: </span><span className="Value">{cityData.temperature}</span></div>
            <div className="parent"><span className="Title">City Humidity </span><span className="colon">: </span><span className="Value">{cityData.humidity}</span></div>
            <div className="parent"><span className="Title">City Wind Speed </span><span className="colon">: </span><span className="Value">{cityData.windSpeed}</span></div>
        </div>
    )
}
export default Card;