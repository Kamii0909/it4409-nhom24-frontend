import { NavLink, useLocation } from "react-router-dom";
import { FiArrowLeft} from "react-icons/fi";
import "./DetailHotelPage.css"
import AppAdvertisement from "../../components/Advertisement/AppAdvertisement";
import RoomCheckForm from "../../components/SearchForm/RoomCheckForm";
import HotelImages from "../../components/HotelImages/HotelImage";
import TabContainer from "../../components/TabContainer/TabContainer";
import InfoHotelSection from "../../components/InfoHotelSection/InfoHotelSection";
import RoomItem from "../../components/RoomItem/RoomItem";
import LocationInfo from "../../components/LocationDetail/LocationInfo";
import LocationOverview from "../../components/LocationDetail/LocationOverview";
import ServiceHotelInfo from "../../components/ServiceDetail/ServiceHotelInfo";

const DetailHotelPage: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const defaultCheckInDate = searchParams.get('checkInDate') || '';
    const defaultCheckOutDate = searchParams.get('checkOutDate') || '';
    const defaultNumGuest = parseInt(searchParams.get('guestCount') || '2');
    const defaultNumRoom = parseInt(searchParams.get('roomCount') || '1')

    return (
      <>  
        <main>
            <div className="detail-hotel-page">
                <section id="overview" className="overview">
                    <div className="back-list-page">
                        <NavLink className="link-back-list-page" to="/hotel-search">
                            <FiArrowLeft /><span>Xem tất cả nơi lưu trú</span>
                        </NavLink>
                    </div>
                    <HotelImages />
                </section>
                <TabContainer />
                <InfoHotelSection />
                <section id="select-room" className="select-room">
                    <h1>Chọn phòng</h1>
                    <RoomCheckForm 
                        defaultCheckInDate={defaultCheckInDate}
                        defaultCheckOutDate={defaultCheckOutDate}
                        defaultNumGuest={defaultNumGuest}
                        defaultNumRoom={defaultNumRoom}
                    />
                    <div className="list-room">
                        <RoomItem />
                        <RoomItem />
                        <RoomItem />
                    </div>
                </section>
                <section id="location" className="location">
                    <LocationInfo />
                    <LocationOverview />
                </section>
                <section id="service" className="service">
                    <ServiceHotelInfo />
                </section>
                <AppAdvertisement />
            </div>
        </main>
      </>  
    );
};

export default DetailHotelPage;