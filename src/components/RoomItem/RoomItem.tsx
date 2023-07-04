import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBorderTopLeft, faCar, faCheck, faCity, faWifi } from "@fortawesome/free-solid-svg-icons";
import "./RoomItem.css";
import { useNavigate } from "react-router-dom";
import { HotelRoom } from "../../http/types/HotelRoom";

interface RoomProps {
    room: HotelRoom;
}

const RoomItem: React.FC<RoomProps> = ({ room }) => {

    const navigate = useNavigate();

    function formatCurrency(cost: number) {
        return cost.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 }).replaceAll(',', '.');
    }

    const discountPrice = Math.floor(room.costPerNight.amount * 0.69);
    const priceIncludeTax = discountPrice + 200000;

    return (
        <div className="room-items">
            <img src="/src/assets/images/room1.png" alt="roomImg" />
            <div className="info-room">
                <h3>{room.roomName}</h3>
                <ul className="conv-room">
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faWifi} />  <span>Free WiFi</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCar} />  <span>Free self parking</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBorderTopLeft} />  <span>23 sq m</span></li>
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
                        <div className="price"><span className="discounted-price">{formatCurrency(discountPrice)} ₫</span> <span className="origin-price">{formatCurrency(room.costPerNight.amount)} ₫</span></div>
                        <p>{formatCurrency(priceIncludeTax)} ₫ total includes taxes & fees</p>
                    </div>
                    <div className="number-left-rooms">
                        <p>We have 2 left</p>
                        <button onClick={() => navigate('/booking')} className="book-btn"><span>Reserve</span></button>
                    </div>
                </div>
            </div>
        </div>                     
    );
};

export default RoomItem;