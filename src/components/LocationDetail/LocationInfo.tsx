import "./LocationDetail.css"
import { InfoHotelSectionProps } from "../InfoHotelSection/InfoHotelSection";

const LocationInfo: React.FC<InfoHotelSectionProps> = ({ hotel }) => {
    return (
        <div className="location-info">
            <div className="title-info">
                <h2>About this property</h2>
            </div>
            <div className="content-info">
                <div className="description-hotel">
                    <h3>{hotel?.name}</h3>
                    <p>
                        This hotel is an absolute oasis of luxury and tranquility. 
                        From the moment you step foot into its elegant lobby, 
                        you are greeted by a harmonious blend of sophistication and warmth. 
                        The meticulously designed rooms provide a haven of comfort, 
                        with plush furnishings and breathtaking views that leave you in awe. 
                        The attentive staff goes above and beyond to cater to your every need, 
                        ensuring a seamless and unforgettable stay. 
                        Indulge in the culinary delights at the renowned restaurant 
                        and immerse yourself in the serenity of the spa. 
                        This hotel truly offers a sublime experience that will leave you longing to return.
                    </p>
                </div>
                <div className="language">
                    <h3>Languages</h3>
                    <p>Chinese (Mandarin), English, Vietnamese</p>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;