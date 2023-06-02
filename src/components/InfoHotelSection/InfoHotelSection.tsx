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
                <p style={{fontSize: '15px'}}>Khách sạn bên hồ tại khu vực Tây Hồ với sòng bạc và hồ bơi ngoài trời</p>
                <h2>8,4/10 - Rất tốt</h2>
            </div>
            <div className="service-outstanding">
                <h2>Tiện nghi, dịch vụ nổi bật</h2>
                <ul className="list-service">
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faCar} />  <span>Đậu xe miễn phí</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faWifi} />  <span>Wifi miễn phí</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faBanSmoking} />  <span>Không hút thuốc</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faPersonSwimming} />  <span>Hồ bơi</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faDumbbell} />  <span>Gym</span></li>
                    <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faSnowflake} />  <span>Máy điều hòa nhiệt độ</span></li>
                </ul>
            </div>
            <div className="address">
                <h2 style={{display: 'inline-block', marginRight: '10px'}}>Địa chỉ:</h2> <span style={{fontSize: '15px'}}>76 Yên Phụ, Tây Hồ, Hà Nội, 10000</span>
            </div>
        </div>
    );
};

export default InfoHotelSection;