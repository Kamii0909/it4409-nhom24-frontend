import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImgHotel1 from "../../assets/images/image_hotel/hotel1.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BackendQueryFilter, FilterableAmenity, HotelSummary, filterHotels } from "../../http/BackendHotelApi";
import "./HotelSearchPage.css";
import { StarRating } from "./StarRating";


type HotelAmenityCheckboxes = {
    pool: boolean,
    breakfast: boolean,
    internet: boolean,
    checkbox4: boolean,
    checkbox5: boolean,
    parking: boolean,
    checkbox7: boolean,
    checkbox8: boolean,
}

type PriceRange = [number, number];
type StarRatings = number[];

type HotelSearchPageProps = {
    city?: string;
    checkInDate?: Date,
    checkOutDate?: Date
}


const HotelSearchPage: React.FC<HotelSearchPageProps> = () => {
    const allPossibleStarRatings = [1, 2, 3, 4, 5];
    const [price, setPriceRange] = useState<PriceRange>([0, 20_000_000]);
    const [rating, setRatingValue] = useState(1);
    const [clickedStars, setClickedStars] = useState<StarRatings>([]);
    const [amenities, setAmenitiesCheckboxes] = useState<HotelAmenityCheckboxes>({
        pool: false,
        breakfast: false,
        internet: false,
        checkbox4: false,
        checkbox5: false,
        parking: false,
        checkbox7: false,
        checkbox8: false,
    });
    const [filteredHotels, setFilteredHotels] = useState<HotelSummary[]>([]);
    const onPriceChange = (_event: any, newValue: any) => {
        setPriceRange(newValue);
    };

    const navigate = useNavigate();
    const locations = useLocation();

    const handleCheckboxChange = (event: any) => {
        const { name, checked } = event.target;
        setAmenitiesCheckboxes((prevValues) => ({
            ...prevValues,
            [name]: checked,
        }));
    };

    const handleLinktoHotelDetailPage = (hotelName: string) => {
        const searchParams = new URLSearchParams(locations.search);
        const checkInDate = searchParams.get('checkInDate') || '';
        const checkOutDate = searchParams.get('checkOutDate') || '';
        const numGuest = parseInt(searchParams.get('guestCount') || '2');
        const numRoom = parseInt(searchParams.get('roomCount') || '1');

        const url = `/hotel-detail/${hotelName}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&guestCount=${numGuest}&roomCount=${numRoom}`;
        navigate(url);
    }

    const filterHotels0 = async (checkboxValues: HotelAmenityCheckboxes, price: PriceRange) => {
        const filter: BackendQueryFilter = { amenities: [], minPrice: price[0], maxPrice: price[1] };

        // Check the checkbox values and add the appropriate filter
        /**
         * TODO:
         * 1. Dich vu dua don san bay
         * 2. Dieu hoa
         * 3. Bon tam nuoc nong
         * 4. Gym
         * 5. Spa
         */
        if (checkboxValues.pool) {
            filter.amenities?.push(FilterableAmenity.POOL);
        }
        if (checkboxValues.breakfast) {
            filter.amenities?.push(FilterableAmenity.BREAKFAST);
        }
        if (checkboxValues.internet) {
            filter.amenities?.push(FilterableAmenity.INTERNET);
        }
        if (checkboxValues.checkbox4) {
            // TODO Bon tam nuoc nong
        }
        if (checkboxValues.checkbox8) {
            // TODO Gym
        }
        if (checkboxValues.checkbox5) {
            // TODO Spa
        }
        if (checkboxValues.parking) {
            filter.amenities?.push(FilterableAmenity.PARKING);
        }
        if (checkboxValues.checkbox7) {
            // TODO Ocean view
        }

        // Add the price range filter
        // TODO Backend does not support rating yet, random if you like
        if (rating === 1) {
            // No rating requirement
        } else if (rating === 2) {
            // Rating >= 9
        } else if (rating === 3) {
            // Rating >= 8.5
        } else if (rating === 4) {
            // Rating >= 7
        }

        // TODO support discount price

        if (clickedStars.length != 0) {
            filter.stars = clickedStars;
        }

        console.log(filter);

        // Return the filtered hotels
        return filterHotels(filter);
    };
    const handleFilterHotels = async () => {
        // Call the filterHotels function with the current checkbox and value states
        const filteredHotels = await filterHotels0(amenities, price);

        // Log the filtered hotels to the console
        console.log(filteredHotels);

        return filteredHotels;
    };

    const starClicked = (star: number) => {
        const pos = clickedStars.indexOf(star);
        if (pos == -1) {
            setClickedStars([...clickedStars, star]);
        } else {
            clickedStars.splice(pos, 1);
            setClickedStars(clickedStars);
        }
    }

    useEffect(() => {
        const fetchFilteredHotels = async () => {
            const filteredHotels = await filterHotels({});
            setFilteredHotels(filteredHotels);
        };

        fetchFilteredHotels();
    }, [amenities, price]);



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
                            value={price}
                            min={0}
                            max={30000000}
                            step={1000}
                            onChange={onPriceChange}
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
                                checked={rating === 1}
                                onChange={() => setRatingValue(1)}
                            />
                            Bất kỳ
                        </label>
                        <label htmlFor="radio2">
                            <input
                                type="radio"
                                name="radio2"
                                id="radio2"
                                checked={rating === 2}
                                onChange={() => setRatingValue(2)}
                            />
                            Tuyệt vời 9+
                        </label>
                        <label htmlFor="radio3">
                            <input
                                type="radio"
                                name="radio3"
                                id="radio3"
                                checked={rating === 3}
                                onChange={() => setRatingValue(3)}
                            />
                            Rất tốt 8+
                        </label>
                        <label htmlFor="radio4">
                            <input
                                type="radio"
                                name="radio4"
                                id="radio4"
                                checked={rating === 4}
                                onChange={() => setRatingValue(4)}
                            />
                            Tốt 7+
                        </label>
                    </div>
                    <div className="star-filter">
                        <h3>Xếp hạng sao</h3>
                        <div style={
                            {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "6px 6px"
                            }
                        }>
                            {allPossibleStarRatings.map(star =>
                                <StarRating
                                    inputId={star + '-star'}
                                    star={star}
                                    onClickHandler={(star: number) => starClicked(star)} />)}
                        </div>
                    </div>
                    <div className="service-filter">
                        <h3>Tiện nghi dịch vụ</h3>
                        <label htmlFor="checkbox1">
                            <input
                                type="checkbox"
                                name="checkbox1"
                                id="checkbox1"
                                checked={amenities.pool}
                                onChange={handleCheckboxChange}
                            />
                            Hồ bơi
                        </label>
                        <label htmlFor="checkbox2">
                            <input
                                type="checkbox"
                                name="checkbox2"
                                id="checkbox2"
                                checked={amenities.breakfast}
                                onChange={handleCheckboxChange}
                            />
                            Cung cấp bữa sáng
                        </label>
                        <label htmlFor="checkbox3">
                            <input
                                type="checkbox"
                                name="checkbox3"
                                id="checkbox3"
                                checked={amenities.internet}
                                onChange={handleCheckboxChange}
                            />
                            Internet miễn phí
                        </label>
                        <label htmlFor="checkbox4">
                            <input
                                type="checkbox"
                                name="checkbox4"
                                id="checkbox4"
                                checked={amenities.checkbox4}
                                onChange={handleCheckboxChange}
                            />
                            Bồn tắm nước nóng
                        </label>
                        <label htmlFor="checkbox5">
                            <input
                                type="checkbox"
                                name="checkbox5"
                                id="checkbox5"
                                checked={amenities.checkbox5}
                                onChange={handleCheckboxChange}
                            />
                            Spa
                        </label>
                        <label htmlFor="checkbox6">
                            <input
                                type="checkbox"
                                name="checkbox6"
                                id="checkbox6"
                                checked={amenities.parking}
                                onChange={handleCheckboxChange}
                            />
                            Đậu xe
                        </label>
                        <label htmlFor="checkbox7">
                            <input
                                type="checkbox"
                                name="checkbox7"
                                id="checkbox7"
                                checked={amenities.checkbox7}
                                onChange={handleCheckboxChange}
                            />
                            Quang cảnh biển
                        </label>
                        <label htmlFor="checkbox8">
                            <input
                                type="checkbox"
                                name="checkbox8"
                                id="checkbox8"
                                checked={amenities.checkbox8}
                                onChange={handleCheckboxChange}
                            />
                            Gym
                        </label>
                        <button onClick={handleFilterHotels}>Filter Hotels</button>
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
                    {filteredHotels.map((hotel: HotelSummary, index: any) => (
                        <div className="item-hotel" key={index}>
                            <div className="img-hotel">
                                <img src={ImgHotel1} alt="Ảnh khách sạn" />
                            </div>
                            <div onClick={() => handleLinktoHotelDetailPage(hotel.name)} className="hotel-info">
                                <div className="hotel-name">{hotel.name}</div>
                                <div className="hotel-address">{hotel.description}</div>
                                <div className="hotel-price">
                                    <div className="sale-percent">Giảm 50%</div>
                                    <div className="price-hotel">
                                        <div className="price-bricks">{hotel.minimalCost.amount} đ</div>
                                        <div className="price">{hotel.minimalCost.amount} đ</div>
                                    </div>
                                    <div className="price-total">Tổng {hotel.minimalCost.amount} đ</div>
                                </div>
                                <div className="hotel-evaluate">
                                    <strong>{(Math.random() * 5 + 5).toFixed(1)}</strong>/10 Tốt
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

export default HotelSearchPage;