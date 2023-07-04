import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faComputer, faJugDetergent, faPersonSwimming, faRing, faScissors, faUtensils, faWifi } from "@fortawesome/free-solid-svg-icons";
import "./InfoHotelSection.css";
import { ParsedHotel } from "../../http/types/Hotel";
import { AmenityKey } from "../../http/types/Hotel";

export interface InfoHotelSectionProps {
    hotel: ParsedHotel | undefined;
}

const InfoHotelSection: React.FC<InfoHotelSectionProps> = ({ hotel }) => {
    if (!hotel) {
        return null;
    }

    const stars = [];
    for (let i = 0; i < hotel.starRating; i++) {
        stars.push(<span key={i} className="star-icon">&#9733;</span>);
    }

    const ratingScore = parseFloat((Math.random() * 3 + 7).toFixed(1));
    const breakfastAmenities = hotel.amenities.get(AmenityKey.BREAKFAST);
    const freeWifiAmenities = hotel.amenities.get(AmenityKey.INTERNET);
    const parkingAmenities = hotel.amenities.get(AmenityKey.PARKING);
    const poolAmenities = hotel.amenities.get(AmenityKey.POOL);
    const guestAmenities = hotel.amenities.get(AmenityKey.GUEST_SERVICE);

    const hasWeddingService = guestAmenities && guestAmenities.includes('Wedding service');
    const hasComputerStation = guestAmenities && guestAmenities.includes('Computer station');
    const hasHairSalon = guestAmenities && guestAmenities.includes('Hair salon');
    const hasLaundry = guestAmenities && guestAmenities.includes('Laundry service');

    return (
        <div className="info-hotel">
            <div className="name-rate">
                <h1>{hotel.name}</h1>
                <div className="star-rate">{stars}</div>
                <p style={{fontSize: '15px'}}>{hotel.description}</p>
                <h2>
                    {ratingScore}/10 
                    {
                        ratingScore > 9 ? <span> Wonderful!</span> : ratingScore > 8 ? <span> Very good</span> : ratingScore > 7 ? <span> Good</span> : <span> Quite good</span>
                    }
                </h2>
            </div>
            <div className="service-outstanding">
                <h2>Popular amenities</h2>
                <ul className="list-service">
                    {parkingAmenities && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faCar} />  <span>Free parking</span></li>}
                    {freeWifiAmenities && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faWifi} />  <span>Free WiFi</span></li>}
                    {breakfastAmenities && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faUtensils} />  <span>No smoking</span></li>}
                    {poolAmenities && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faPersonSwimming} />  <span>Pool</span></li>}
                    {hasWeddingService && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faRing} />  <span>Wedding</span></li>}
                    {hasComputerStation && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faComputer} />  <span>Computer Station</span></li>}
                    {hasHairSalon && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faScissors} />  <span>Hair salon</span></li>}
                    {hasLaundry && <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faJugDetergent} />  <span>Laundry Service</span></li>}
                </ul>
            </div>
            <div className="address">
                <h2 style={{display: 'inline-block', marginRight: '10px'}}>Address:</h2> <span style={{fontSize: '15px'}}>{hotel.location}</span>
            </div>
        </div>
    );
};

export default InfoHotelSection;