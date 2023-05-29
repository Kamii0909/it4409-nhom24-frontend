import { NavLink } from "react-router-dom";
import expedia from "../../assets/images/expedia.svg";
import "./TopDestinationList.css"

const TopDestinationList: React.FC = () => {
    return (
        <div className="top-destination">
            <NavLink to="https://www.expediagroup.com/home/default.aspx" target="blank"><img src={expedia} alt="Expedia Group Logo" /></NavLink>
            <h3>Điểm đến hàng đầu</h3>
            <div className="top-destination-list">
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Thành phố Hồ Chí Minh</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Hà Nội</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Đà Nẵng</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Đà Lạt</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Phú Quốc</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Singapore</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Bangkok</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Hạ Long</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Sa Pa</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Xuyên Mộc</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Seoul</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Sầm Sơn</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Cần Thơ</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Hải Phòng</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Tam Đảo</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Côn sơn</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Khách sạn tại Kuala Lumpur</NavLink></div>
            </div>
        </div>
    );
};

export default TopDestinationList;