import Footer from "../../components/Footer";
import Header from "../../components/Header";
import loyalty_hotels from "../../assets/images/loyalty_hotels.svg";
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

const CityHotelsPage: React.FC = () => {
    const carousel = document.querySelector("#city-hotel");
    const carousel1 = document.querySelector("#featured-area");
    const arrowIcons = document.querySelectorAll(".navigation-event");
    const arrowIconsFeaturedArea = document.querySelectorAll(
        ".navigation-featured-area"
    );

    arrowIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            let scrollWidth = window.innerWidth / 4 + 8;
            carousel!.scrollLeft +=
                icon.id == "navigation-left" ? -scrollWidth : scrollWidth;
        });
    });
    arrowIconsFeaturedArea.forEach((icon) => {
        icon.addEventListener("click", () => {
            let scrollWidth = window.innerWidth / 4 + 8;
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