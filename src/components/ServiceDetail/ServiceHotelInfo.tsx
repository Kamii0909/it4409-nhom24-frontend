import { faBellConcierge, faBriefcase, faCheck, faChild, faUtensils, faWheelchair } from "@fortawesome/free-solid-svg-icons";
import "./ServiceDetail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceHotelInfo: React.FC = () => {
    return (
        <div className="service-info">
            <div className="title-info">
                <h2>Property amenities</h2>
            </div>
            <div className="content-info grid-location-service">
                <div className="service-info-item">
                    <div><FontAwesomeIcon className="service-info-icon" icon={faBriefcase} /></div>
                    <div>
                        <h3>Working away</h3>
                        <ul>
                            <li>Business centre</li>
                            <li>Meeting rooms</li>
                            <li>Conference centre</li>
                        </ul>
                    </div>
                </div>
                <div className="service-info-item">
                    <div><FontAwesomeIcon className="service-info-icon" icon={faUtensils} /></div>
                    <div>
                        <h3>Food and drink</h3>
                        <ul>
                            <li>Free buffet breakfast each morning 7:00 AM-9:30 AM</li>
                            <li>Restaurant</li>
                            <li>24-hour room service</li>
                            <li>Coffee shop</li>
                        </ul>
                    </div>
                </div>
                <div className="service-info-item">
                    <div><FontAwesomeIcon className="service-info-icon" icon={faBellConcierge} /></div>
                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li>24-hour front desk</li>
                            <li>Concierge services</li>
                            <li>Tour/ticket assistance</li>
                            <li>Free newspapers in reception</li>
                            <li>Luggage storage</li>
                            <li>Dry cleaning/laundry services</li>
                            <li>Multilingual staff</li>
                        </ul>
                    </div>
                </div>
                <div className="service-info-item">
                    <div><FontAwesomeIcon className="service-info-icon" icon={faChild} /></div>
                    <div>
                        <h3>Travelling with children</h3>
                        <ul>
                            <li>Children stay for free (see details)</li>
                            <li>Children's pool</li>
                        </ul>
                    </div>
                </div>
                <div className="service-info-item">
                    <div><FontAwesomeIcon className="service-info-icon" icon={faWheelchair} /></div>
                    <div>
                        <h3>Accesibility</h3>
                        <ul>
                            <li>Lift</li>
                            <li>Accessible bathroom (selected rooms)</li>
                            <li>In-room accessibility (selected rooms)</li>
                            <li>Wheelchair-accessible</li>
                        </ul>
                    </div>
                </div>
                <div className="service-info-item">
                    <div><FontAwesomeIcon className="service-info-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Facilities</h3>
                        <ul>
                            <li>ATM/banking</li>
                            <li>Safe-deposit box at front desk</li>
                            <li>Garden</li>
                            <li>Terrace</li>
                            <li>Television in common areas</li>
                            <li>24-hour health club</li>
                            <li>Full-service spa</li>
                            <li>Sauna</li>
                            <li>Steam room</li>
                            <li>Banquet hall</li>
                            <li>Fitness Centre</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHotelInfo;