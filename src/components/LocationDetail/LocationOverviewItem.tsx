import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import "./LocationDetail.css"

const LocationOverviewItem: React.FC = () => {
    return (
        <div className="location-overview-item">
            <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
            <div>
                <h3>Quy mô khách sạn</h3>
                <ul>
                    <li>140 phòng</li>
                    <li>Gồm 7 tầng</li>
                </ul>
            </div>
        </div>
    );
};

export default LocationOverviewItem;