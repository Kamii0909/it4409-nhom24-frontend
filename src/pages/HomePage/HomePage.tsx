import { useNavigate } from "react-router-dom";
import AppAdvertisement from "../../components/Advertisement/AppAdvertisement";
import WebAdvertisement from "../../components/Advertisement/WebAdvertisement";
import "./HomePage.css";
import HotelSearchForm, { SearchParams } from "../../components/SearchForm/HotelSearchForm";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleSearch = (searchParams: SearchParams) => {
        const queryParams = new URLSearchParams();
        queryParams.set('location', searchParams.location);
        queryParams.set('checkInDate', searchParams.checkInDate);
        queryParams.set('checkOutDate', searchParams.checkOutDate);
        queryParams.set('guestCount', searchParams.numberOfGuests.toString());
        queryParams.set('roomCount', searchParams.numberOfRooms.toString());
        const url = `/hotel-search?${queryParams.toString()}`;
        navigate(url);
      };

    return (
        <>
            <div className="content-homepage">
                <h1>Bạn muốn đi đâu?</h1>
                <HotelSearchForm onSubmit={handleSearch}/>
                <WebAdvertisement />
                <AppAdvertisement />
            </div>
        </>
    );
};

export default HomePage;