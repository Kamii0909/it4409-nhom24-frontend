import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
    IoChevronBackOutline,
    IoChevronDown,
    IoChevronForwardOutline,
    IoChevronUp,
} from "react-icons/io5";
import hotel1 from "../../assets/images/image_hotel/hotel1.png";
import quan1 from "../../assets/images/quan1.png";
import tthcm from "../../assets/images/tthcm.webp";
import chobenthanh from "../../assets/images/chobenthanh.png";
import phobuivien from "../../assets/images/phobuivien.png";
import thaocamvien from "../../assets/images/thaocamvien.png";
import WebAdvertisement from "../../components/Advertisement/WebAdvertisement.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import { db } from "../../firebase/firebase-config.tsx";
import "./CityHotelsPage.css";
import HotelItem from "./HotelItem/HotelItem";

const CityHotelsPage: React.FC = () => {
    const carousel = document.querySelector("#city-hotel");
    const carousel1 = document.querySelector("#featured-area");
    const carousel2 = document.querySelector("#top-area");
    const arrowIcons = document.querySelectorAll(".navigation-event");
    const arrowIconsFeaturedArea = document.querySelectorAll(
        ".navigation-featured-area"
    );
    const arrowIconsTopArea = document.querySelectorAll(
        ".navigation-top-area"
    );

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const hotelsRef = collection(db, "hotels");
            const q = query(hotelsRef, where("location", "==", "Hồ Chí Minh"));
            const querySnapshot = await getDocs(q);
            const hotelList: any = [];
            querySnapshot.forEach((doc) => {
                hotelList.push(doc.data());
            });
            setHotels(hotelList);
        };

        fetchData();
    }, []);

    arrowIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            const scrollWidth = window.innerWidth / 4 + 8;
            carousel!.scrollLeft +=
                icon.id == "navigation-left" ? -scrollWidth : scrollWidth;
        });
    });
    arrowIconsFeaturedArea.forEach((icon) => {
        icon.addEventListener("click", () => {
            const scrollWidth = window.innerWidth / 4 + 8;
            carousel1!.scrollLeft +=
                icon.id == "featured-area-left" ? -scrollWidth : scrollWidth;
        });
    });
    arrowIconsTopArea.forEach((icon) => {
        icon.addEventListener("click", () => {
            const scrollWidth = window.innerWidth / 4 + 8;
            carousel2!.scrollLeft +=
                icon.id == "top-area-left" ? -scrollWidth : scrollWidth;
        });
    });

    return (
        <>
            <Header />
            <div className="CityHotelsPage">
                <div className="page-content">
                    <WebAdvertisement />
                    <div className="title-page-content">
                        Where to stay in Ho Chi Minh City?
                    </div>
                    <div className="city-hotel-wrapper">
                        {hotels?.length > 3 && (
                            <div
                                className="navigation-event"
                                id="navigation-left"
                            >
                                <IoChevronBackOutline />
                            </div>
                        )}
                        {hotels?.length > 3 && (
                            <div
                                className="navigation-event"
                                id="navigation-right"
                            >
                                <IoChevronForwardOutline />
                            </div>
                        )}
                        <div className="city-hotel" id="city-hotel">
                            {hotels.map((hotel: any) => (
                                <HotelItem
                                    key={hotel.id}
                                    linkTo={`/hotel-detail/${hotel.name}`}
                                    image={hotel1}
                                    title={hotel.name}
                                    star={hotel.stars}
                                    desc={"Cách 1km"}
                                    comment={true}
                                    point={hotel.rating}
                                    numberOfComments={100}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className="title-page-content"
                        style={{ marginTop: "40px" }}
                    >
                        Khu vực nổi bật ở Thành phố Hồ Chí Minh
                    </div>
                    <div className="featured-area-wrapper">
                        <div
                            className="navigation-featured-area"
                            id="featured-area-left"
                        >
                            <IoChevronBackOutline />
                        </div>
                        <div
                            className="navigation-featured-area"
                            id="featured-area-right"
                        >
                            <IoChevronForwardOutline />
                        </div>
                        <div className="city-hotel" id="featured-area">
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={quan1}
                                title="Quận 1"
                                star={0}
                                desc=" Quận 1 giàu bản sắc văn hóa thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như quán cà phê và nhà hàng; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={tthcm}
                                title="Trung tâm Thành phố Hồ Chí Minh"
                                star={0}
                                desc="Trung tâm Thành phố Hồ Chí Minh sôi động thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như lâu đài và nhà hát opera; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={quan1}
                                title="Quận 1"
                                star={0}
                                desc=" Quận 1 giàu bản sắc văn hóa thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như quán cà phê và nhà hàng; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={tthcm}
                                title="Trung tâm Thành phố Hồ Chí Minh"
                                star={0}
                                desc="Trung tâm Thành phố Hồ Chí Minh sôi động thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như lâu đài và nhà hát opera; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={quan1}
                                title="Quận 1"
                                star={0}
                                desc=" Quận 1 giàu bản sắc văn hóa thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như quán cà phê và nhà hàng; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={tthcm}
                                title="Trung tâm Thành phố Hồ Chí Minh"
                                star={0}
                                desc="Trung tâm Thành phố Hồ Chí Minh sôi động thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như lâu đài và nhà hát opera; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={quan1}
                                title="Quận 1"
                                star={0}
                                desc=" Quận 1 giàu bản sắc văn hóa thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như quán cà phê và nhà hàng; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={tthcm}
                                title="Trung tâm Thành phố Hồ Chí Minh"
                                star={0}
                                desc="Trung tâm Thành phố Hồ Chí Minh sôi động thuộc Thành phố Hồ Chí Minh có những điểm đến được nhiều người yêu thích như lâu đài và nhà hát opera; tại đây, du khách có cơ hội thăm thú nhiều danh thắng như Chợ Bến Thành cùng Phố đi bộ Bùi Viện."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                        </div>
                    </div>
                    <div
                        className="title-page-content"
                        style={{ marginTop: "40px" }}
                    >
                        Top landmarks in Ho Chi Minh City
                    </div>
                    <div className="top-area-wrapper">
                        <div
                            className="navigation-top-area"
                            id="top-area-left"
                        >
                            <IoChevronBackOutline />
                        </div>
                        <div
                            className="navigation-top-area"
                            id="top-area-right"
                        >
                            <IoChevronForwardOutline />
                        </div>
                        <div className="city-hotel" id="top-area">
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={chobenthanh}
                                title="Chợ Bến Thành"
                                star={0}
                                desc="Bạn có thể tìm được những món quà lưu niệm độc đáo khi đến Chợ Bến Thành, điểm mua sắm được mọi người yêu thích tại Thành phố Hồ Chí Minh. Hãy dành thời gian khám phá nhiều lựa chọn ẩm thực và những bảo tàng hàng đầu tại điểm đến đô thị này. "
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={phobuivien}
                                title="Phố đi bộ Bùi Viện"
                                star={0}
                                desc="Khi dừng chân ở Phố đi bộ Bùi Viện, nơi mua sắm nổi tiếng tại Thành phố Hồ Chí Minh, bạn sẽ tìm được những món quà địa phương độc đáo. Đừng quên tận hưởng hoạt động giải trí về đêm tuyệt vời hoặc nhiều lựa chọn ẩm thực tại điểm đến phù hợp để dạo bộ này."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={thaocamvien}
                                title="Thảo cầm viên Sài Gòn"
                                star={0}
                                desc="Hãy tham quan, khám phá đời sống động vật hoang dã tại Thảo cầm viên Sài Gòn trong hành trình đến Thành phố Hồ Chí Minh. Tham quan, khám phá nhiều lựa chọn ẩm thực và trải nghiệm những bảo tàng hàng đầu là một trong nhiều hoạt động không thể bỏ qua tại khu vực này."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={chobenthanh}
                                title="Chợ Bến Thành"
                                star={0}
                                desc="Bạn có thể tìm được những món quà lưu niệm độc đáo khi đến Chợ Bến Thành, điểm mua sắm được mọi người yêu thích tại Thành phố Hồ Chí Minh. Hãy dành thời gian khám phá nhiều lựa chọn ẩm thực và những bảo tàng hàng đầu tại điểm đến đô thị này. "
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={phobuivien}
                                title="Phố đi bộ Bùi Viện"
                                star={0}
                                desc="Khi dừng chân ở Phố đi bộ Bùi Viện, nơi mua sắm nổi tiếng tại Thành phố Hồ Chí Minh, bạn sẽ tìm được những món quà địa phương độc đáo. Đừng quên tận hưởng hoạt động giải trí về đêm tuyệt vời hoặc nhiều lựa chọn ẩm thực tại điểm đến phù hợp để dạo bộ này."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={thaocamvien}
                                title="Thảo cầm viên Sài Gòn"
                                star={0}
                                desc="Hãy tham quan, khám phá đời sống động vật hoang dã tại Thảo cầm viên Sài Gòn trong hành trình đến Thành phố Hồ Chí Minh. Tham quan, khám phá nhiều lựa chọn ẩm thực và trải nghiệm những bảo tàng hàng đầu là một trong nhiều hoạt động không thể bỏ qua tại khu vực này."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={chobenthanh}
                                title="Chợ Bến Thành"
                                star={0}
                                desc="Bạn có thể tìm được những món quà lưu niệm độc đáo khi đến Chợ Bến Thành, điểm mua sắm được mọi người yêu thích tại Thành phố Hồ Chí Minh. Hãy dành thời gian khám phá nhiều lựa chọn ẩm thực và những bảo tàng hàng đầu tại điểm đến đô thị này. "
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={phobuivien}
                                title="Phố đi bộ Bùi Viện"
                                star={0}
                                desc="Khi dừng chân ở Phố đi bộ Bùi Viện, nơi mua sắm nổi tiếng tại Thành phố Hồ Chí Minh, bạn sẽ tìm được những món quà địa phương độc đáo. Đừng quên tận hưởng hoạt động giải trí về đêm tuyệt vời hoặc nhiều lựa chọn ẩm thực tại điểm đến phù hợp để dạo bộ này."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                            <HotelItem
                                linkTo="/khach-san-thanh-pho-ho-chi-minh-viet-nam"
                                image={thaocamvien}
                                title="Thảo cầm viên Sài Gòn"
                                star={0}
                                desc="Hãy tham quan, khám phá đời sống động vật hoang dã tại Thảo cầm viên Sài Gòn trong hành trình đến Thành phố Hồ Chí Minh. Tham quan, khám phá nhiều lựa chọn ẩm thực và trải nghiệm những bảo tàng hàng đầu là một trong nhiều hoạt động không thể bỏ qua tại khu vực này."
                                comment={false}
                                point={0}
                                numberOfComments={0}
                            />
                        </div>
                    </div>
                    <div
                        className="title-page-content"
                        style={{ marginTop: "40px", marginBottom: "10px" }}
                    >
                        Find out more about Ho Chi Minh City
                    </div>
                    <div>
                        There's a lot visitors like about Ho Chi Minh City, 
                        especially its cafes and museums. Enjoy the restaurants 
                        and bars or perhaps you'll want to book a local 
                        tour during your stay. Travellers seeking the perfect souvenir 
                        may want to head to Ben Thanh Market and Bui Vien Walking Street. 
                        There's plenty more to see, including sights like Dong Khoi Shopping Street and Opera House.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CityHotelsPage;
