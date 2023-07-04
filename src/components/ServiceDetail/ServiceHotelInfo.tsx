import "./ServiceDetail.css"
import ServiceItem from "./ServiceItem";

const ServiceHotelInfo: React.FC = () => {
    return (
        <div className="service-info">
            <div className="title-info">
                <h2>Property amenities</h2>
            </div>
            <div className="content-info grid-location-service">
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
            </div>
        </div>
    );
};

export default ServiceHotelInfo;