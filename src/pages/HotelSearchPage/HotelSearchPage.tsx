import { Slider } from "@mui/material";
import React from "react";
import { IoStar } from "react-icons/io5";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./HotelSearchPage.css";
import ImgHotel1 from "../../assets/images/image_hotel/hotel1.png";
import ImgHotel2 from "../../assets/images/image_hotel/hotel2.png";
import ImgHotel3 from "../../assets/images/image_hotel/hotel3.png";

const HotelSearchPage: React.FC = () => {
    const [value, setValue] = React.useState([0, 20000000]);
    const [rankValue, setRankValue] = React.useState(1);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    function valuetext(value: any) {
        return `${value}đ`;
    }

    return (
        <>
            <Header />
            <div className="hotel-search-content">
                <div className="sidebar-filter-wrapper">
                    <div className="price-filter">
                        <h3>Giá mỗi đêm</h3>
                        <Slider
                            getAriaLabel={() => "price range"}
                            value={value}
                            min={0}
                            max={30000000}
                            step={1000}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </div>
                    <div className="rank-filter">
                        <h3>Xếp hạng của khách</h3>
                        <label htmlFor="radio1">
                            <input
                                type="radio"
                                name="radio1"
                                id="radio1"
                                checked={rankValue === 1}
                                onChange={() => setRankValue(1)}
                            />
                            Bất kỳ
                        </label>
                        <label htmlFor="radio2">
                            <input
                                type="radio"
                                name="radio2"
                                id="radio2"
                                checked={rankValue === 2}
                                onChange={() => setRankValue(2)}
                            />
                            Tuyệt vời 9+
                        </label>
                        <label htmlFor="radio3">
                            <input
                                type="radio"
                                name="radio3"
                                id="radio3"
                                checked={rankValue === 3}
                                onChange={() => setRankValue(3)}
                            />
                            Rất tốt 8+
                        </label>
                        <label htmlFor="radio4">
                            <input
                                type="radio"
                                name="radio4"
                                id="radio4"
                                checked={rankValue === 4}
                                onChange={() => setRankValue(4)}
                            />
                            Tốt 7+
                        </label>
                    </div>
                    <div className="star-filter">
                        <h3>Xếp hạng sao</h3>
                        <input type="checkbox" id="one-star" />
                        <input type="checkbox" id="two-stars" />
                        <input type="checkbox" id="three-stars" />
                        <input type="checkbox" id="four-stars" />
                        <input type="checkbox" id="five-stars" />
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <label
                                htmlFor="one-star"
                                className="option-one-star"
                            >
                                1<IoStar />
                            </label>
                            <label
                                htmlFor="two-stars"
                                className="option-two-stars"
                            >
                                2<IoStar />
                            </label>
                            <label
                                htmlFor="three-stars"
                                className="option-three-stars"
                            >
                                3<IoStar />
                            </label>
                            <label
                                htmlFor="four-stars"
                                className="option-four-stars"
                            >
                                4<IoStar />
                            </label>
                            <label
                                htmlFor="five-stars"
                                className="option-five-stars"
                                style={{ marginTop: "10px" }}
                            >
                                5<IoStar />
                            </label>
                        </div>
                    </div>
                    <div className="service-filter">
                        <h3>Tiện nghi dịch vụ</h3>
                        <label htmlFor="checkbox1">
                            <input
                                type="checkbox"
                                name="checkbox1"
                                id="checkbox1"
                            />
                            Hồ bơi
                        </label>
                        <label htmlFor="checkbox2">
                            <input
                                type="checkbox"
                                name="checkbox2"
                                id="checkbox2"
                            />
                            Bao gồm dịch vụ đưa đón sân bay
                        </label>
                        <label htmlFor="checkbox3">
                            <input
                                type="checkbox"
                                name="checkbox3"
                                id="checkbox3"
                            />
                            Máy điều hòa
                        </label>
                        <label htmlFor="checkbox4">
                            <input
                                type="checkbox"
                                name="checkbox4"
                                id="checkbox4"
                            />
                            Bồn tắm nước nóng
                        </label>
                        <label htmlFor="checkbox5">
                            <input
                                type="checkbox"
                                name="checkbox5"
                                id="checkbox5"
                            />
                            Spa
                        </label>
                        <label htmlFor="checkbox6">
                            <input
                                type="checkbox"
                                name="checkbox6"
                                id="checkbox6"
                            />
                            Đậu xe
                        </label>
                        <label htmlFor="checkbox7">
                            <input
                                type="checkbox"
                                name="checkbox7"
                                id="checkbox7"
                            />
                            Quang cảnh biển
                        </label>
                        <label htmlFor="checkbox8">
                            <input
                                type="checkbox"
                                name="checkbox8"
                                id="checkbox8"
                            />
                            Gym
                        </label>
                    </div>
                </div>
                <div className="list-hotel-wrapper">
                    <div className="sort-hotel">
                        <span>Sắp xếp theo</span>
                        <select name="sort-hotel" id="sort-hotel">
                            <option value="none" selected disabled hidden>
                                Đề xuất
                            </option>
                            <option value="price:low-to-high">
                                Giá: Thấp đến cao
                            </option>
                            <option value="price:high-to-low">
                                Giá: Cao đến thấp
                            </option>
                            <option value="star-rank">Xếp hạng sao</option>
                        </select>
                    </div>
                    <div className="item-hotel">
                        <div className="img-hotel">
                            <img src={ImgHotel1} alt="Ảnh khách sạn" />
                        </div>
                        <div className="hotel-info">
                            <div className="hotel-name">Khách sạn Hà Nội</div>
                            <div className="hotel-address">Quận Ba Đình</div>
                            <div className="hotel-price">
                                <div className="sale-percent">Giảm 50%</div>
                                <div className="price-hotel">
                                    <div className="price-bricks">3.376.623đ</div>
                                    <div className="price">1,688,311 đ</div>
                                </div>
                                <div className="price-total">
                                    Tổng 1,950,000 đ
                                </div>
                            </div>
                            <div className="hotel-evaluate">
                                <strong>7,8</strong>/10 Tốt
                            </div>
                        </div>
                    </div>

                    <div className="item-hotel">
                        <div className="img-hotel">
                            <img src={ImgHotel2} alt="Ảnh khách sạn" />
                        </div>
                        <div className="hotel-info">
                            <div className="hotel-name">Lotte Hotel Hanoi</div>
                            <div className="hotel-address">Hà Nội</div>
                            <div className="hotel-price">
                                <div className="sale-percent">Giảm 50%</div>
                                <div className="price-hotel">
                                    <div className="price-bricks">3.376.623đ</div>
                                    <div className="price">1,688,311 đ</div>
                                </div>
                                <div className="price-total">
                                    Tổng 1,950,000 đ
                                </div>
                            </div>
                            <div className="hotel-evaluate">
                                <strong>9,4</strong>/10 Tốt
                            </div>
                        </div>
                    </div>

                    <div className="item-hotel">
                        <div className="img-hotel">
                            <img src={ImgHotel3} alt="Ảnh khách sạn" />
                        </div>
                        <div className="hotel-info">
                            <div className="hotel-name">My Way Hotel & Residence</div>
                            <div className="hotel-address">Hà Nội</div>
                            <div className="hotel-price">
                                <div className="sale-percent">Giảm 50%</div>
                                <div className="price-hotel">
                                    <div className="price-bricks">3.376.623đ</div>
                                    <div className="price">1,688,311 đ</div>
                                </div>
                                <div className="price-total">
                                    Tổng 1,950,000 đ
                                </div>
                            </div>
                            <div className="hotel-evaluate">
                                <strong>7,8</strong>/10 Tốt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HotelSearchPage;
