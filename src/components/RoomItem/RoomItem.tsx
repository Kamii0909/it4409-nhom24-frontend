import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBorderTopLeft, faCar, faCheck, faCity, faUserGroup, faWifi } from "@fortawesome/free-solid-svg-icons";
import "./RoomItem.css";
import { useNavigate } from "react-router-dom";

const RoomItem: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="room-items">
            <img src="/src/assets/images/room1.png" alt="roomImg" />
            <div className="info-room">
                <h3>Superior Double Room, 1 King Bed (City View)</h3>
                <ul className="conv-room">
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faWifi} />  <span>Free WiFi</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCar} />  <span>Free self parking</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBorderTopLeft} />  <span>23 sq m</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faUserGroup} />  <span>Sleeps 3</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCheck} />  <span>Reserve now, pay later</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBed} />  <span>1 King Bed</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCity} />  <span>City view</span></li>
                    <li className="service-room-item"><svg className="service-room-icon moon-icon" width="22" height="22"><image width="22" height="22" href="/src/assets/images/loyalty.svg" /></svg>  <span>Collect</span></li>
                </ul>
                <div className="refund">
                    <p>Fully refundable</p>
                    <p>Before Wed, 5 Jul</p>
                </div>
                <div className="cost-book">
                    <div className="price-room">
                        <span className="discount">31% off</span>
                        <div className="price"><span className="discounted-price">1.547.164 ₫</span> <span className="origin-price">2.242.267 ₫</span></div>
                        <p>1.786.975 ₫ total includes taxes & fees</p>
                    </div>
                    <div className="number-left-rooms">
                        <p>We have 2 left</p>
                        <button onClick={() => navigate('/booking')} className="book-btn">Reserve</button>
                    </div>
                </div>
            </div>
        </div>                     
    );
};

export default RoomItem;