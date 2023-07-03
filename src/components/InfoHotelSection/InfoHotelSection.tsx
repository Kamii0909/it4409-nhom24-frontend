import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBanSmoking, faCar, faDumbbell, faPersonSwimming, faSnowflake, faWifi } from "@fortawesome/free-solid-svg-icons";
import "./InfoHotelSection.css"

const InfoHotelSection: React.FC = () => {

    const stars = [];
    for (let i = 0; i < 4; i++) {
        stars.push(<span key={i} className="star-icon">&#9733;</span>);
    }

    return (
        <div className="info-hotel">
            <div className="name-rate">
                <h1>The Hanoi Club Hotel & Residences</h1>
                <div className="star-rate">{stars}</div>
                <p style={{fontSize: '15px'}}>Lakefront hotel with spa, near O Quan Chuong Gate</p>
                <h2>8,4/10 Very good</h2>
            </div>
            <div className="service-outstanding">
                <h2>Popular amenities</h2>
                <ul className="list-service">
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faCar} />  <span>Free parking</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faWifi} />  <span>Free WiFi</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faBanSmoking} />  <span>No smoking</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faPersonSwimming} />  <span>Pool</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faDumbbell} />  <span>Gym</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faSnowflake} />  <span>Air Conditioned</span></li>
                </ul>
            </div>
            <div className="address">
                <h2 style={{display: 'inline-block', marginRight: '10px'}}>Address:</h2> <span style={{fontSize: '15px'}}>76 Yen Phu Street,Tay Ho District, Hanoi, 10000</span>
            </div>
        </div>
    );
};

export default InfoHotelSection;