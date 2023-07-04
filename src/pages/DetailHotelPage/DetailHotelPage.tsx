import { NavLink } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
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
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ParsedHotel } from "../../http/types/Hotel";
import { getHotelById } from "../../http/BackendHotelApi";

const DetailHotelPage: React.FC = () => {

    const [thisHotel, setThisHotel] = useState<ParsedHotel>();

    const { id } = useParams();
    console.log(id)

    const getHotel = async () => {
        const hotel = await getHotelById(Number(id));
        setThisHotel(hotel);
    };

    useEffect(() => {
        getHotel();
    }, [])

    return (
      <>
        <Header />
        <main>
            <div className="detail-hotel-page">
                <section id="overview" className="overview">
                    <div className="back-list-page">
                        <NavLink className="link-back-list-page" to="hotel-search">
                            <FiArrowLeft /><span>See all properties</span>
                        </NavLink>
                    </div>
                    <HotelImages />
                </section>
                <TabContainer />
                <InfoHotelSection hotel={thisHotel} />
                <section id="select-room" className="select-room">
                    <h1>Chọn phòng</h1>
                    <RoomCheckForm />
                    <div className="list-room">
                        {thisHotel?.rooms.map((room, index) => (
                            <div key={index}>
                                <RoomItem room={room} />
                            </div>
                        ))}
                    </div>
                </section>
                <section id="location" className="location">
                    <LocationInfo hotel={thisHotel} />
                    <LocationOverview />
                </section>
                <section id="service" className="service">
                    <ServiceHotelInfo />
                </section>
                <AppAdvertisement />
            </div>
        </main>
        <Footer />
      </>  
    );
};

export default DetailHotelPage;