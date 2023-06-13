import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import "./HotelSearchPage.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config"
import ImgHotel1 from "../../assets/images/image_hotel/hotel1.png";
import ImgHotel2 from "../../assets/images/image_hotel/hotel2.png";
import ImgHotel3 from "../../assets/images/image_hotel/hotel3.png";

const HotelSearchPage: React.FC = () => {
  const [value, setValue] = useState([0, 20000000]);
  const [rankValue, setRankValue] = useState(1);
  const [selectedStar, setSelectedStar] = useState(5);
  const [amenities, setAmenities] = useState({
  ho_boi: false,
  dich_vu_dua_don_san_bay: false,
  may_dieu_hoa: false,
  bon_tam_nuoc_nong: false,
  spa: false,
  dau_xe: false,
  quang_canh_bien: false,
  gym: false
});

  const [hotels, setHotels] = useState<any[]>([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const q = query(collection(db, "hotel"));
    const querySnapshot = await getDocs(q);
    const hotelsData = querySnapshot.docs.map((doc) => doc.data());
    setHotels(hotelsData);
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  function valuetext(value: any) {
    return `${value}đ`;
  }
  const handleAmenitiesChange = (event: any) => {
  setAmenities((prevAmenities) => ({
    ...prevAmenities,
    [event.target.name]: event.target.checked
  }));
};

  const filterHotels = (hotel: any) => {
  const meetsPriceFilter =
    hotel.price >= value[0] && hotel.price <= value[1];
  const meetsRankFilter =
    rankValue === 1 ||
    (rankValue === 2 && hotel.rating >= 9) ||
    (rankValue === 3 && hotel.rating >= 8) ||
    (rankValue === 4 && hotel.rating >= 7);
const meetsStarFilter =
    (selectedStar === 1 && hotel.star === 1) ||
    (selectedStar === 2 && hotel.star === 2) ||
    (selectedStar === 3 && hotel.star === 3) ||
    (selectedStar === 4 && hotel.star === 4) ||
    (selectedStar === 5 && hotel.star === 5);
  const meetsAmenitiesFilter = Object.entries(amenities).every(
    ([key, value]) => !value || (value && hotel[key])
  );

  return meetsPriceFilter && meetsRankFilter && meetsStarFilter && meetsAmenitiesFilter;
};


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
        <input
          type="checkbox"
          id="one-star"
          checked={selectedStar === 1}
          onChange={() => setSelectedStar(1)}
        />
        <input
          type="checkbox"
          id="two-stars"
          checked={selectedStar === 2}
          onChange={() => setSelectedStar(2)}
        />
        <input
          type="checkbox"
          id="three-stars"
          checked={selectedStar === 3}
          onChange={() => setSelectedStar(3)}
        />
        <input
          type="checkbox"
          id="four-stars"
          checked={selectedStar === 4}
          onChange={() => setSelectedStar(4)}
        />
        <input
          type="checkbox"
          id="five-stars"
          checked={selectedStar === 5}
          onChange={() => setSelectedStar(5)}
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <label htmlFor="one-star" className="option-one-star">
            1
            <IoStar />
          </label>
          <label htmlFor="two-stars" className="option-two-stars">
            2
            <IoStar />
          </label>
          <label htmlFor="three-stars" className="option-three-stars">
            3
            <IoStar />
          </label>
          <label htmlFor="four-stars" className="option-four-stars">
            4
            <IoStar />
          </label>
          <label htmlFor="five-stars" className="option-five-stars" style={{ marginTop: "10px" }}>
            5
            <IoStar />
          </label>
        </div>
      </div>
                    <div className="service-filter">
                        <h3>Tiện nghi dịch vụ</h3>
                        <label htmlFor="ho_boi">
                            <input
                                type="checkbox"
                                name="ho_boi"
                                id="ho_boi"
                                checked={amenities.ho_boi}
                                onChange={handleAmenitiesChange}
                            />
                            Hồ bơi
                        </label>
                        <label htmlFor="dich_vu_dua_don_san_bay">
                            <input
                                type="checkbox"
                                name="dich_vu_dua_don_san_bay"
                                id="dich_vu_dua_don_san_bay"
                                checked={amenities.dich_vu_dua_don_san_bay}
                                onChange={handleAmenitiesChange}
                            />
                            Bao gồm dịch vụ đưa đón sân bay
                        </label>
                        <label htmlFor="may_dieu_hoa">
                            <input
                                type="checkbox"
                                name="may_dieu_hoa"
                                id="may_dieu_hoa"
                                checked={amenities.may_dieu_hoa}
                                onChange={handleAmenitiesChange}
                            />
                            Máy điều hòa
                        </label>
                        <label htmlFor="bon_tam_nuoc_nong">
                            <input
                                type="checkbox"
                                name="bon_tam_nuoc_nong"
                                id="bon_tam_nuoc_nong"
                                checked={amenities.bon_tam_nuoc_nong}
                                onChange={handleAmenitiesChange}
                            />
                            Bồn tắm nước nóng
                        </label>
                        <label htmlFor="spa">
                            <input
                                type="checkbox"
                                name="spa"
                                id="spa"
                                checked={amenities.spa}
                                onChange={handleAmenitiesChange}
                            />
                            Spa
                        </label>
                        <label htmlFor="dau_xe">
                            <input
                                type="checkbox"
                                name="dau_xe"
                                id="dau_xe"
                                checked={amenities.dau_xe}
                                onChange={handleAmenitiesChange}
                            />
                            Đậu xe
                        </label>
                        <label htmlFor="quang_canh_bien">
                            <input
                                type="checkbox"
                                name="quang_canh_bien"
                                id="quang_canh_bien"
                                checked={amenities.quang_canh_bien}
                                onChange={handleAmenitiesChange}
                            />
                            Quang cảnh biển
                        </label>
                        <label htmlFor="gym">
                            <input
                                type="checkbox"
                                name="gym"
                                id="gym"
                                checked={amenities.gym}
                                onChange={handleAmenitiesChange}
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