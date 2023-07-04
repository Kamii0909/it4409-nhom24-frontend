import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./ServiceDetail.css"

const ServiceItem: React.FC = () => {
    return (
        <div className="service-info-item">
            <div><FontAwesomeIcon className="service-info-icon" icon={faUtensils} /></div>
            <div>
                <h3>Food and drink</h3>
                <ul>
                    <li>Buffet breakfast (surcharge) each morning 6:30 AM-10:00 AM</li>
                    <li>Restaurant</li>
                    <li>Coffee shop</li>
                    <li>Coffee/tea in a common area</li>
                    <li>Room service (limited hours)</li>
                </ul>
            </div>
        </div>
    );
};

export default ServiceItem;