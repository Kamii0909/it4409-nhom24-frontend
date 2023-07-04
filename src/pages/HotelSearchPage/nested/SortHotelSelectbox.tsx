import { ChangeEvent, useState } from "react";
import "./SortHotelSelectbox.css"
import { SelectGuestCount } from "../../../components/HotelSearch/SelectGuestCount";

type SortHotelSelectboxProps = {
    onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SortHotelSelectbox: React.FC<SortHotelSelectboxProps> = (props) => {

    const [guestNumber, setGuestNumber] = useState<number>(2);
    const [roomNumber, setRoomCount] = useState<number>(1);
    const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

    return <div className="sort-hotel">
        <div className="sort-hotel-children-wrapper">
            <label htmlFor="sort-hotel">Sort by</label>
            <select title="Sort hotel"
                name="sort-hotel"
                id="sort-hotel"
                defaultValue="recommended"
                onChange={props.onChangeHandler}
                className="sort-hotel-select">

                <option value="recommended">Recommended</option>
                <option value="price:low-to-high">Price: low to high</option>
                <option value="price:high-to-low">Price: high to low</option>
                <option value="star-rank">Property class</option>
            </select>
        </div>

        <div className="sort-hotel-children-wrapper">
            {<SelectGuestCount
                reactiveGuestCount={guestNumber}
                reactiveRoomCount={roomNumber}
                onClickHandler={(_) => setPopupVisible(!isPopupVisible)}
            />}
        </div>

        <div className="select-guest-count-popup" style={{ visibility: isPopupVisible ? "visible" : "hidden" }}>
            <div className="select-guest-count-popup-adult">
                <span style={{ fontWeight: "500" }}>Number of adults: </span>
                <button onClick={() => setGuestNumber(guestNumber - 1)}>
                    <span className="select-guest-count-popup-button-text">-</span>
                </button>
                {'   ' + guestNumber + '   '}
                <button onClick={() => setGuestNumber(guestNumber + 1)}>
                    <span className="select-guest-count-popup-button-text">+</span>
                </button>
            </div>

            <div className="select-guest-count-popup-adult" >
                <span style={{ fontWeight: "500" }}>Number of rooms: </span>
                <button onClick={() => {
                    if (roomNumber > 0) {
                        setRoomCount(roomNumber - 1);
                    }
                }}>
                    <span className="select-guest-count-popup-button-text">-</span>
                </button>
                {'   ' + roomNumber + '   '}
                <button onClick={() => setRoomCount(roomNumber + 1)}>
                    <span className="select-guest-count-popup-button-text">+</span>
                </button>
            </div>

        </div>



    </div >
}