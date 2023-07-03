import { NavLink } from "react-router-dom";
import expedia from "../../assets/images/expedia.svg";
import "./TopDestinationList.css"

const TopDestinationList: React.FC = () => {
    return (
        <div className="top-destination">
            <NavLink to="https://www.expediagroup.com/home/default.aspx" target="blank"><img src={expedia} alt="Expedia Group Logo" /></NavLink>
            <h3>Top destinations</h3>
            <div className="top-destination-list">
                <div><NavLink className="top-destination-item" to="/city-page" target="blank">Hotels in Ho Chi Minh City</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Hanoi</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Da Nang</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Da Lat</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Phu Quoc</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Singapore</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Bangkok</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Ha Long</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Sa Pa</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Xuyen Moc</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Seoul</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Sam Son</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Can Tho</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Hai Phong</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Tam Dao</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Con Son</NavLink></div>
                <div><NavLink className="top-destination-item" to="/" target="blank">Hotels in Kuala Lumpur</NavLink></div>
            </div>
        </div>
    );
};

export default TopDestinationList;