import "./LocationDetail.css"
import LocationOverviewItem from "./LocationOverviewItem";

const LocationOverview: React.FC = () => {
    return (
        <div className="location-overview">
            <div className="title-info">
                <h2>Tổng quan</h2>
            </div>
            <div className="content-info grid-location-service">
                <LocationOverviewItem />
                <LocationOverviewItem />
                <LocationOverviewItem />
                <LocationOverviewItem />
                <LocationOverviewItem />
                <LocationOverviewItem />
                <LocationOverviewItem />
                <LocationOverviewItem />
            </div>
        </div>
    );
};

export default LocationOverview;