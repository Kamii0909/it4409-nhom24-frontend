import { Slider } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImgHotel1 from "../../assets/images/image_hotel/hotel1.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BackendQueryFilter, FilterableAmenity, HotelSummary, filterHotels } from "../../http/BackendHotelApi";
import { AmenityCheckbox } from "./nested/AmenityCheckbox";
import "./HotelSearchPage.css";
import { GuestReviewToggle } from "./nested/GuestReviewToggle";
import { StarRatingCheckbox } from "./nested/StarRatingCheckbox";
import { SortHotelSelectbox } from "./nested/SortHotelSelectbox";


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
    const [price, setPriceRange] = useState<PriceRange>([0, 20_000_000]);
    const ratingKeys: { [id: string]: number } = {
        'Any': 0.0,
        'Wonderful (9.0)': 9.0,
        'Very good (8.0)': 8.0,
        'Good (7.0)': 7.0
    }
    const [selectedMinRating, setMinRating] = useState<number>(0);
    const [clickedStars, setClickedStars] = useState<StarRatings>([]);
    const amenityKeys: { [id: string]: string } = {
        pool: 'Pool',
        breakfast: 'Breakfast provided',
        internet: 'Free internet',
        checkbox4: 'Spa',
        checkbox5: 'Gym',
        parking: 'Parking available',
        checkbox7: 'Concierge service',
    }
    const [amenities, setAmenitiesCheckboxes] = useState<HotelAmenityCheckboxes>({
        pool: false, breakfast: false, internet: false, checkbox4: false,
        checkbox5: false, parking: false, checkbox7: false, checkbox8: false
    });
    const [filteredHotels, setFilteredHotels] = useState<HotelSummary[]>([]);
    const onPriceChange = (_event: any, newValue: any) => {
        setPriceRange(newValue);
    };

    const navigate = useNavigate();
    const locations = useLocation();

    const handleLinktoHotelDetailPage = (hotelid: number) => {
        const searchParams = new URLSearchParams(locations.search);
        const checkInDate = searchParams.get('checkInDate') || '';
        const checkOutDate = searchParams.get('checkOutDate') || '';
        const numGuest = parseInt(searchParams.get('guestCount') || '2');
        const numRoom = parseInt(searchParams.get('roomCount') || '1');

        const url = `/hotel-detail/${hotelid}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&guestCount=${numGuest}&roomCount=${numRoom}`;
        navigate(url);
    }

    const fetchFromDatasource = async (checkboxValues: HotelAmenityCheckboxes, price: PriceRange, clickedStars: StarRatings) => {
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
        if (selectedMinRating === 1) {
            // No rating requirement
        } else if (selectedMinRating === 2) {
            // Rating >= 9
        } else if (selectedMinRating === 3) {
            // Rating >= 8.5
        } else if (selectedMinRating === 4) {
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

    const starClicked = (star: number) => {
        const pos = clickedStars.indexOf(star);
        if (pos == -1) {
            setClickedStars([...clickedStars, star]);
        } else {
            clickedStars.splice(pos, 1);
            setClickedStars(clickedStars);
        }
    }

    const amenityClicked = (event: ChangeEvent<HTMLInputElement>, amenityName: string) => {
        setAmenitiesCheckboxes(prev => ({
            ...prev,
            [amenityName]: event.target.checked
        }))
    };

    const updateUIBasedOnFilter = async () => {
        const filteredHotels = await fetchFromDatasource(amenities, price, clickedStars);
        setFilteredHotels(filteredHotels);
    };

    useEffect(() => {
        updateUIBasedOnFilter();
    }, [amenities, price, clickedStars]);


    const priceSliderLabel = (value: number) => {
        if (value === 20_000_000) {
            return '20.000.000+';
        }
        return value.toLocaleString('vi-VN');
    }


    return (
        <>
            <Header />
            <div className="hotel-search-content">
                <div className="sidebar-filter-wrapper">
                    <input type="text"
                        name="search-anything"
                        defaultValue=""
                        placeholder="Where do you want to go?"
                        className="search-anything-text" />
                    <div className="price-filter">
                        <h3>Price per night</h3>
                        <Slider
                            value={price}
                            min={0}
                            max={20_000_000}
                            step={1000}
                            onChange={onPriceChange}
                            valueLabelDisplay="auto"
                            valueLabelFormat={priceSliderLabel}

                        />
                    </div>
                    <div className="rank-filter">
                        <h3>Users' rating</h3>
                        {Object.keys(ratingKeys)
                            .map((description) =>
                                <GuestReviewToggle
                                    isChecked={() => selectedMinRating === ratingKeys[description]}
                                    setCurrentRatingCallback={setMinRating}
                                    componentRating={ratingKeys[description]}
                                    description={description} />

                            )}
                    </div>
                    <div className="star-filter">
                        <h3>Star rating</h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 6px" }}>
                            {[1, 2, 3, 4, 5].map(star =>
                                <StarRatingCheckbox
                                    inputId={star + '-star'}
                                    star={star}
                                    onClickHandler={(star: number) => starClicked(star)} />)}
                        </div>
                    </div>
                    <div className="service-filter">
                        <h3>Amenities</h3>
                        {Object.keys(amenityKeys).map(identity =>
                            <AmenityCheckbox identity={identity}
                                onChangeHandler={amenityClicked}
                                description={amenityKeys[identity]} />
                        )}
                        <button onClick={() => updateUIBasedOnFilter()}>Filter Hotels</button>
                    </div>
                </div>
                <div className="list-hotel-wrapper">
                    {<SortHotelSelectbox onChangeHandler={(event) => console.log(`Selectbox changed to ${event.target.value}`)} />}
                    {filteredHotels.map((hotel: HotelSummary, index: any) => (
                        <div className="item-hotel" key={index}>
                            <div className="img-hotel">
                                <img src={ImgHotel1} alt="hotel image" />
                            </div>
                            <div onClick={() => handleLinktoHotelDetailPage(hotel.hotelId)} className="hotel-info">
                                <div className="hotel-name">{hotel.name}</div>
                                <div className="hotel-address">{hotel.description}</div>
                                <div className="hotel-price">
                                    <div className="sale-percent">
                                        {(hotel.minimalCost.amount / hotel.minimalCost.amount - 1) * 100 + '% off'}
                                    </div>
                                    <div className="price-hotel">
                                        <div className="price-bricks">{hotel.minimalCost.amount.toLocaleString('vi-VN')} đ</div>
                                        <div className="price">{hotel.minimalCost.amount.toLocaleString('vi-VN')} đ</div>
                                    </div>
                                    <div className="price-total">Tổng {hotel.minimalCost.amount.toLocaleString('vi-VN')} đ</div>
                                </div>
                                <div className="hotel-evaluate">
                                    <strong>{(Math.random() * 3 + 7).toFixed(1)}</strong>/10
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