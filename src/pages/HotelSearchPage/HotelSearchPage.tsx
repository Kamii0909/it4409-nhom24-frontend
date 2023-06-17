import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import "./HotelSearchPage.css";
import { collection, query, where, CollectionReference, Query, DocumentData } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase-config"

const HotelSearchPage: React.FC = () => {
  const [minPrice, setminPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(30000000);
  const [minStar, setminStar] = useState(1);
  const [maxStar, setmaxStar] = useState(5);
  const [minRank, setminRank] = useState(0);
  const [maxRank, setmaxRank] = useState(10);
  const [ho_boi, setHoBoi] = useState(true);
  const [dich_vu_dua_don_san_bay, setDichVuDuaDon] = useState(true);
  const [may_dieu_hoa, setMayDieuHoa] = useState(true);
  const [bon_tam_nuoc_nong, setBonTamNuocNong] = useState(true);
  const [spa, setSpa] = useState(true);
  const [gym, setGym] = useState(true);
  const [dau_xe, setDauxe] = useState(true);
  const [quang_canh_bien, setQuangCanhBien] = useState(true);
  const [hotels, setHotels] = useState<any[]>([]);

  useEffect(() => {
    getUsers();
  }, []); // Thực hiện getUsers khi component được mount

  const handleMinPriceChange = (event: any) => {
    setminPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event: any) => {
    setmaxPrice(Number(event.target.value));
  };

  const handleMinStarChange = (event: any) => {
    setminStar(Number(event.target.value));
  };

  const handleMaxStarChange = (event: any) => {
    setmaxStar(Number(event.target.value));
  };

  const handleMinRankChange = (event: any) => {
    setminRank(Number(event.target.value));
  };

  const handleMaxRankChange = (event: any) => {
    setmaxRank(Number(event.target.value));
  };

  const handleHoBoiChange = (event: any) => {
    setHoBoi(event.target.checked);
  };

  const handleDichVuDuaDonChange = (event: any) => {
    setDichVuDuaDon(event.target.checked);
  };

  const handleGymChange = (event: any) => {
    setGym(event.target.checked);
  };
  
  const handleSpaChange = (event: any) => {
    setSpa(event.target.checked);
  };

  const handleMayDieuHoaChange = (event: any) => {
    setMayDieuHoa(event.target.checked);
  };

  const handleDauxeChange = (event: any) => {
    setDauxe(event.target.checked);
  };

  const handleBomTamNuocNongChange = (event: any) => {
    setBonTamNuocNong(event.target.checked);
  };

  const handleQuangCanhBienChange = (event: any) => {
    setQuangCanhBien(event.target.checked);
  };

const usersCollectionRef: CollectionReference<DocumentData> = collection(db, "users");
const getUsers = async () => {
  let usersQuery: Query<DocumentData> = usersCollectionRef;

    if (minPrice !== 0 && maxPrice !== 30000000) {
      usersQuery = query(
        usersQuery,
        where("discountPrice", ">=", minPrice),
        where("discountPrice", "<=", maxPrice)
      );
    }

    if (minRank !== 0 && maxRank !== 10) {
      usersQuery = query(
        usersQuery,
        where("rating", ">=", minRank),
        where("rating", "<=", maxRank)
      );
    }

    if (minStar !== 1 && maxPrice !== 5) {
      usersQuery = query(
        usersQuery,
        where("stars", ">=", minStar),
        where("stars", "<=", maxStar)
      );
    }
    
    if (may_dieu_hoa) {
      usersQuery = query(usersQuery, where("hotel.may_dieu_hoa", "==", true));
    } else {
      usersQuery = query(usersQuery, where("hotel.may_dieu_hoa", "==", false));
    }

    return (
        <>
            <Header />
                <div className="hotel-search-content">
                  <div className="sidebar-filter-wrapper">
                  <div className="price-filter">
                    <h3>Giá mỗi đêm</h3>
                    <div>
                      <label htmlFor="minPrice">Giá tối thiểu:</label>
                      <input
                        type="number"
                        id="minPrice"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPrice">Giá tối đa:</label>
                      <input
                        type="number"
                        id="maxPrice"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                      />
                    </div>
                    <h3>Danh gia khach san:</h3>
                    <div>
                      <label htmlFor="minRank">Đánh giá tối thiểu:</label>
                      <input
                        type="number"
                        id="minRank"
                        value={minRank}
                        onChange={handleMinRankChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPrice">Đánh giá tối đa:</label>
                      <input
                        type="number"
                        id="maxRank"
                        value={maxRank}
                        onChange={handleMaxRankChange}
                      />
                    </div>
                    <h3>Tìm khách sạn theo sao:</h3>
                    <div>
                      <label htmlFor="minStar">Từ:</label>
                      <input
                        type="number"
                        id="minStar"
                        value={minStar}
                        onChange={handleMinStarChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPrice">Đến:</label>
                      <input
                        type="number"
                        id="maxStar"
                        value={maxStar}
                        onChange={handleMaxStarChange}
                      />
                    </div>
                  </div>
                    <div className="service-filter">
                        <h3>Tiện nghi dịch vụ</h3>
                        <label htmlFor="ho_boi">
                            <input
                                type="checkbox"
                                name="ho_boi"
                                id="ho_boi"
                                checked={ho_boi}
                                onChange={handleHoBoiChange}
                            />
                            Hồ bơi
                        </label>
                        <label htmlFor="dich_vu_dua_don_san_bay">
                            <input
                                type="checkbox"
                                name="dich_vu_dua_don_san_bay"
                                id="dich_vu_dua_don_san_bay"
                                checked={dich_vu_dua_don_san_bay}
                                onChange={handleDichVuDuaDonChange}
                            />
                            Bao gồm dịch vụ đưa đón sân bay
                        </label>
                        <label htmlFor="may_dieu_hoa">
                            <input
                                type="checkbox"
                                name="may_dieu_hoa"
                                id="may_dieu_hoa"
                                checked={may_dieu_hoa}
                                onChange={handleMayDieuHoaChange}
                            />
                            Máy điều hòa
                        </label>
                        <label htmlFor="bon_tam_nuoc_nong">
                            <input
                                type="checkbox"
                                name="bon_tam_nuoc_nong"
                                id="bon_tam_nuoc_nong"
                                checked={bon_tam_nuoc_nong}
                                onChange={handleBomTamNuocNongChange}
                            />
                            Bồn tắm nước nóng
                        </label>
                        <label htmlFor="spa">
                            <input
                                type="checkbox"
                                name="spa"
                                id="spa"
                                checked={spa}
                                onChange={handleSpaChange}
                            />
                            Spa
                        </label>
                        <label htmlFor="dau_xe">
                            <input
                                type="checkbox"
                                name="dau_xe"
                                id="dau_xe"
                                checked={dau_xe}
                                onChange={handleDauxeChange}
                            />
                            Đậu xe
                        </label>
                        <label htmlFor="quang_canh_bien">
                            <input
                                type="checkbox"
                                name="quang_canh_bien"
                                id="quang_canh_bien"
                                checked={quang_canh_bien}
                                onChange={handleQuangCanhBienChange}
                            />
                            Quang cảnh biển
                        </label>
                        <label htmlFor="gym">
                            <input
                                type="checkbox"
                                name="gym"
                                id="gym"
                                checked={gym}
                                onChange={handleGymChange}
                            />
                            Gym
                        </label>
                    </div>
                </div>
                <div className="list-hotel-wrapper">
                        {hotels.map((hotel) => (
                          <div className="item-hotel" key={hotel.id}>
                            <div className="hotel-info">
                              <div className="hotel-name">{hotel.name}</div>
                              <div className="hotel-address">{hotel.address}</div>
                              <div className="hotel-price">
                                <div className="sale-percent">Giảm 50%</div>
                                <div className="price-hotel">
                                  <div className="price-bricks">{hotel.originalPrice}đ</div>
                                  <div className="price">{hotel.discountedPrice}đ</div>
                                </div>
                                <div className="price-total">Tổng {hotel.totalPrice}đ</div>
                              </div>
                              <div className="hotel-evaluate">
                                <strong>{hotel.rating}</strong>/10 Tốt
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                
              </div>
            <Footer />
        </>
    );
  };
};

export default HotelSearchPage;