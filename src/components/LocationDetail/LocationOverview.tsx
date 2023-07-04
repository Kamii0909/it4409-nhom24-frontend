import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LocationDetail.css"
import { faCar, faCheck, faWifi } from "@fortawesome/free-solid-svg-icons";

const LocationOverview: React.FC = () => {
    return (
        <div className="location-overview">
            <div className="title-info">
                <h2>At a glance</h2>
            </div>
            <div className="content-info grid-location-service">
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
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Required at check-in</h3>
                        <ul>
                            <li>Credit card, debit card or cash deposit required for incidental charges</li>
                            <li>Government-issued photo ID may be required</li>
                            <li>Minimum check-in age is 18</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Arriving/Leaving</h3>
                        <ul>
                            <li>Check-in time from 2 PM until noon</li>
                            <li>Express check-in/out available</li>
                            <li>Early check-in subject to availability</li>
                            <li>Check-out time is noon</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Children</h3>
                        <ul>
                            <li>One child (11 years old and younger) stays free when occupying the parent or guardian's room using existing bedding</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Restrictions related to your trip</h3>
                        <ul>
                            <li>Check COVID-19 restrictions</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Pets</h3>
                        <ul>
                            <li>Pets not allowed</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Special check-in instructions</h3>
                        <ul>
                            <li>This property offers transfers from the train station (surcharges may apply); to arrange pick-up, guests must contact the property 24 hours prior to arrival, using the contact information on the booking confirmation</li>
                            <li>Front desk staff will greet guests on arrival</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faWifi} /></div>
                    <div>
                        <h3>Internet</h3>
                        <ul>
                            <li>Free WiFi and wired Internet access in public areas</li>
                            <li>Free WiFi in rooms</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCar} /></div>
                    <div>
                        <h3>Parking</h3>
                        <ul>
                            <li>Free on-site self-parking</li>
                            <li>Free covered on-site valet parking</li>
                        </ul>
                    </div>
                </div>
                <div className="location-overview-item">
                    <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                    <div>
                        <h3>Other information</h3>
                        <ul>
                            <li>Designated smoking areas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationOverview;