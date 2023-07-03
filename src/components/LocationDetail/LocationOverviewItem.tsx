import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import "./LocationDetail.css"

const LocationOverviewItem: React.FC = () => {
    return (
        <div className="location-overview-item">
            <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
            <div>
                <h3>Hotel size</h3>
                <ul>
                    <li>140 rooms</li>
                    <li>Arranged over 7 floors</li>
                </ul>
            </div>
        </div>
    );
};

export default LocationOverviewItem;