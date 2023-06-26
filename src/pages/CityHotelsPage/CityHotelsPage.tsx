import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import loyalty_hotels from "../../assets/images/loyalty.svg";
import mod from "../../assets/images/mod.svg";
import cancel from "../../assets/images/cancel.png";
import "./CityHotelsPage.css";
import { Link } from "react-router-dom";
import HotelItem from "./HotelItem/HotelItem";
import {
    IoChevronBackOutline,
    IoChevronDown,
    IoChevronForwardOutline,
    IoChevronUp,
} from "react-icons/io5";
import hotel1 from "../../assets/images/image_hotel/hotel1.png";
import quan1 from "../../assets/images/quan1.png";
import tthcm from "../../assets/images/tthcm.webp";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config.tsx";

const CityHotelsPage: React.FC = () => {
    const carousel = document.querySelector("#city-hotel");
    const carousel1 = document.querySelector("#featured-area");
    const arrowIcons = document.querySelectorAll(".navigation-event");
    const arrowIconsFeaturedArea = document.querySelectorAll(
        ".navigation-featured-area"
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

    
    return (
        <>
            <Header />
            <div className="CityHotelsPage">
                <div className="page-content">
                    <div className="title-page-content">
                        Hotels.com cung cấp trải nghiệm dễ dàng và nhiều lợi
                        ích, mọi lúc, mọi nơi
                    </div>
                    <ul className="info-item-list">
                        <li className="info-item">
                            <img src={loyalty_hotels} alt="loyalty_hotels" />
                            <div className="info-wrapper">
                                <h4>Nhận thưởng theo cách của bạn</h4>
                                <div style={{ marginBottom: "10px" }}>
                                    Lưu trú bất cứ nơi đâu, bất cứ khi nào bạn
                                    muốn và nhận thưởng
                                </div>
                                <Link className="text-hover" to="/">
                                    Tìm hiểu về Hotels.com Rewards
                                </Link>
                            </div>
                        </li>
                        <li className="info-item">
                            <img src={mod} alt="loyalty_hotels" />
                            <div className="info-wrapper">
                                <h4>Nhận ưu đãi ngay</h4>
                                <div style={{ marginBottom: "10px" }}>
                                    Tiết kiệm trung bình % tại hàng ngàn khách
                                    sạn với Giá thành viên
                                </div>
                                <div>
                                    <Link
                                        className="text-hover"
                                        to="/"
                                        style={{ marginRight: "25px" }}
                                    >
                                        Đăng ký miễn phí
                                    </Link>
                                    <Link className="text-hover" to="/">
                                        Đăng nhập{" "}
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="info-item">
                            <img src={cancel} alt="cancel" />
                            <div className="info-wrapper">
                                <h4>Hủy miễn phí</h4>
                                <div style={{ marginBottom: "10px" }}>
                                    Đặt phòng linh động ở hầu hết khách sạn
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="title-page-content">
                        Nơi bạn sẽ ở tại Thành phố Hồ Chí Minh?
                    </div>
                    <div className="city-hotel-wrapper">
                        <div className="navigation-event" id="navigation-left">
                            <IoChevronBackOutline />
                        </div>
                        <div className="navigation-event" id="navigation-right">
                            <IoChevronForwardOutline />
                        </div>
                        <div className="city-hotel" id="city-hotel">
                            {hotels.map((hotel: any) => (
                                <HotelItem
                                key={hotel.id}
                                linkTo={`/khach-san-thanh-pho-ho-chi-minh-viet-nam/${hotel.id}`}
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
                        style={{ marginTop: "40px", marginBottom: "10px" }}
                    >
                        Khu vực nổi bật ở Thành phố Hồ Chí Minh
                    </div>
                    <div>
                        Những quán cà phê độc đáo và bảo tàng hấp dẫn là những
                        điều luôn thu hút du khách ở Thành phố Hồ Chí Minh. Bạn
                        có thể tận hưởng những món ăn địa phương thú vị như ẩm
                        thực và bar hoặc đặt hoạt động giải trí như tham gia các
                        tour tham quan trong suốt thời gian lưu trú tại đây. Du
                        khách có thể tìm thấy món quà lưu niệm độc đáo cho người
                        thân của mình ở Chợ Bến Thành và Phố đi bộ Bùi Viện. Có
                        nhiều danh thắng chờ bạn khám phá quanh vùng, như Đồng
                        Khởi và Nhà hát Lớn.
                    </div>
                    <div
                        className="title-page-content"
                        style={{ marginTop: "40px", marginBottom: "10px" }}
                    >
                        Câu hỏi thường gặp
                    </div>
                    <div>
                        <div style={{ marginBottom: "5px" }}>
                            <input type="checkbox" id="touch1" />
                            <label id="LabelDrop1" htmlFor="touch1">
                                <div className="ArrowUp1">
                                    <IoChevronUp />
                                </div>
                                <div className="ArrowDown1">
                                    <IoChevronDown />
                                </div>
                                <span>
                                    Du khách yêu thích những nơi lưu trú nào ở
                                    Thành phố Hồ Chí Minh?
                                </span>
                            </label>
                            <div className="SlideText1">
                                YaYa Hotel, Nhà nghỉ Vy Khanh và The Reverie
                                Saigon là những nơi lưu trú được du khách đánh
                                giá cao.
                            </div>
                        </div>
                        <div style={{ marginBottom: "5px" }}>
                            <input type="checkbox" id="touch2" />
                            <label id="LabelDrop2" htmlFor="touch2">
                                <div className="ArrowUp2">
                                    <IoChevronUp />
                                </div>
                                <div className="ArrowDown2">
                                    <IoChevronDown />
                                </div>
                                <span>
                                    Tại Thành phố Hồ Chí Minh có khách sạn nào
                                    có chỗ đậu xe miễn phí?
                                </span>
                            </label>
                            <div className="SlideText2">
                                Những khách sạn sau có chỗ đậu xe miễn phí:
                                Khách sạn Huy Hoàng 2, Khách sạn Hòa Thịnh và
                                Khách sạn An Bình 2. Bạn cũng có thể tìm hiểu
                                thông tin tất cả 276 lựa chọn trên trang web của
                                chúng tôi.
                            </div>
                        </div>
                        <div style={{ marginBottom: "5px" }}>
                            <input type="checkbox" id="touch3" />
                            <label id="LabelDrop3" htmlFor="touch3">
                                <div className="ArrowUp3">
                                    <IoChevronUp />
                                </div>
                                <div className="ArrowDown3">
                                    <IoChevronDown />
                                </div>
                                <span>
                                    Du khách yêu thích những nơi lưu trú nào ở
                                    Thành phố Hồ Chí Minh?
                                </span>
                            </label>
                            <div className="SlideText3">
                                YaYa Hotel, Nhà nghỉ Vy Khanh và The Reverie
                                Saigon là những nơi lưu trú được du khách đánh
                                giá cao.
                            </div>
                        </div>
                        <div style={{ marginBottom: "5px" }}>
                            <input type="checkbox" id="touch4" />
                            <label id="LabelDrop4" htmlFor="touch4">
                                <div className="ArrowUp4">
                                    <IoChevronUp />
                                </div>
                                <div className="ArrowDown4">
                                    <IoChevronDown />
                                </div>
                                <span>
                                    Tôi có thể đặt phòng khách sạn với giá có
                                    thể hoàn tiền ở Thành phố Hồ Chí Minh hay
                                    không?
                                </span>
                            </label>
                            <div className="SlideText4">
                                Nếu bạn muốn linh động thay đổi kế hoạch kỳ nghỉ
                                tại Thành phố Hồ Chí Minh, hầu hết khách sạn đều
                                cung cấp giá có thể hoàn tiền*. Bạn có thể tìm
                                các nơi lưu trú này trên trang web bằng cách áp
                                dụng tiêu chí “hoàn tiền đầy đủ” để thu hẹp phạm
                                vi tìm kiếm.
                            </div>
                        </div>
                        <div style={{ marginBottom: "5px" }}>
                            <input type="checkbox" id="touch5" />
                            <label id="LabelDrop5" htmlFor="touch5">
                                <div className="ArrowUp5">
                                    <IoChevronUp />
                                </div>
                                <div className="ArrowDown5">
                                    <IoChevronDown />
                                </div>
                                <span>
                                    Tôi có thể nghỉ ở đâu tại Thành phố Hồ Chí
                                    Minh nếu mang theo vật nuôi?
                                </span>
                            </label>
                            <div className="SlideText5">
                                Khách của chúng tôi đánh giá cao vị trí của Au
                                Lac Charner Hotel, Caravelle Saigon và Khách sạn
                                Lotte Sài Gòn.
                            </div>
                        </div>
                        <div style={{ marginBottom: "5px" }}>
                            <input type="checkbox" id="touch6" />
                            <label id="LabelDrop6" htmlFor="touch6">
                                <div className="ArrowUp6">
                                    <IoChevronUp />
                                </div>
                                <div className="ArrowDown6">
                                    <IoChevronDown />
                                </div>
                                <span>
                                    Tại Thành phố Hồ Chí Minh có những lựa chọn
                                    nào nếu tôi muốn nghỉ tại nhà riêng hoặc căn
                                    hộ thay vì khách sạn?
                                </span>
                            </label>
                            <div className="SlideText6">
                                Nếu đang tìm nơi lưu trú thay thế cho một khách
                                sạn truyền thống, hãy tham khảo 180 ngôi nhà và
                                căn hộ của chúng tôi. Ngoài ra còn có 1119 căn
                                hộ và 54 condo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CityHotelsPage;
