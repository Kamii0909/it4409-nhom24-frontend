import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBorderTopLeft, faCar, faCheck, faCity, faUserGroup, faWifi } from "@fortawesome/free-solid-svg-icons";
import "./RoomItem.css"

const RoomItem: React.FC = () => {
    return (
        <div className="room-items">
            <img src="/src/assets/images/room1.png" alt="roomImg" />
            <div className="info-room">
                <h3>Phòng đôi Superior, 1 giường cỡ king (City View)</h3>
                <ul className="conv-room">
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faWifi} />  <span>Wifi miễn phí</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCar} />  <span>Bãi đậu xe tự phục vụ miễn phí</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBorderTopLeft} />  <span>23 mét vuông</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faUserGroup} />  <span>3 khách</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCheck} />  <span>Đặt ngay, thanh toán sau</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBed} />  <span>1 giường cỡ king</span></li>
                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCity} />  <span>Quang cảnh thành phố</span></li>
                    <li className="service-room-item"><svg className="service-room-icon moon-icon" width="22" height="22"><image width="22" height="22" href="/src/assets/images/loyalty.svg" /></svg>  <span>Tích lũy tem</span></li>
                </ul>
                <div className="refund">
                    <p>Hoàn tiền toàn bộ</p>
                    <p>Trước Chủ nhật, 21 tháng 5, 2023</p>
                </div>
                <div className="cost-book">
                    <div className="price-room">
                        <span className="discount">Giảm 31%</span>
                        <div className="price"><span className="discounted-price">1.547.164 ₫</span> <span className="origin-price">2.242.267 ₫</span></div>
                        <p>Tổng 1.786.974 ₫ bao gồm thuế & phí</p>
                    </div>
                    <div className="number-left-rooms">
                        <p>Còn 5 phòng</p>
                        <button className="book-btn">Đặt</button>
                    </div>
                </div>
            </div>
        </div>                     
    );
};

export default RoomItem;