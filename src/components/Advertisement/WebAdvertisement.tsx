import "./Advertisement.css"
import loyalty from "../../assets/images/loyalty.svg"
import mod from "../../assets/images/mod.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const WebAdvertisement: React.FC = () => {
    return (
    <>
        <div className="web-advertisement">
            <h2>Hotels.com makes it easy and rewarding. Always</h2>
            <div className="web-adv-container">
                <div className="adv-item">
                    <div className="adv-icon"><img src={loyalty} style={{width: '48px'}} alt="Loyalty Icon" /></div>
                    <div className="adv-info">
                        <h4>Reward yourself your way</h4>
                        <p>Stay where you want, when you want, and get rewarded</p>
                    </div>
                </div>
                <div className="adv-item">
                    <div className="adv-icon"><img src={mod} style={{width: '48px'}} alt="Tag Icon" /></div>
                    <div className="adv-info">
                        <h4>Unlock instant savings</h4>
                        <p>Save an average of % on thousands of hotels with Member Prices</p>
                    </div>
                </div>
                <div className="adv-item">
                    <div className="adv-icon"><FontAwesomeIcon className="adv-fontawesome-icon" icon={faCalendarDay} /></div>
                    <div className="adv-info">
                        <h4>Free cancellation</h4>
                        <p>Flexible bookings on most hotels*</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default WebAdvertisement;