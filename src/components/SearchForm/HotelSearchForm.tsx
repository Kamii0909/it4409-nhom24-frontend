import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchForm.css"
import { useState } from "react";

interface SearchFormProps {
    onSubmit: (searchParams: SearchParams) => void;
}

export interface SearchParams {
    location: string;
    checkInDate: string;
    checkOutDate: string;
    numberOfGuests: number;
    numberOfRooms: number;
}

const HotelSearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
    const [location, setLocation] = useState("");
    const [checkInDate, setCheckInDate] = useState(getToday());
    const [checkOutDate, setCheckOutDate] = useState(getTomorrow());
    const [numberOfGuests, setNumberOfGuests] = useState(2);
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [showLocationError, setShowLocationError] = useState(false);
    const [showDateError, setShowDateError] = useState(false);

    function getToday(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function getTomorrow(): string {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const year = tomorrow.getFullYear();
        const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
        const day = String(tomorrow.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const handleCheckInDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = e.target.value;
        setCheckInDate(selectedDate);
    
        if (selectedDate >= checkOutDate) {
          // Nếu ngày checkInDate mới chọn lớn hơn ngày checkOutDate hiện tại,
          // tự động thiết lập ngày checkOutDate thành ngày ngay sau checkInDate
          const nextDay = new Date(selectedDate);
          nextDay.setDate(nextDay.getDate() + 1);
          const nextDayFormatted = nextDay.toISOString().slice(0, 10);
          setCheckOutDate(nextDayFormatted);
        }
    };

    const handleCheckOutDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = e.target.value;
        setCheckOutDate(selectedDate);
    
        if (selectedDate <= checkInDate) {
          // Nếu ngày checkInDate mới chọn lớn hơn ngày checkOutDate hiện tại,
          // tự động thiết lập ngày checkOutDate thành ngày ngay sau checkInDate
          const prevDay = new Date(selectedDate);
          prevDay.setDate(prevDay.getDate() - 1);
          const prevDayFormatted = prevDay.toISOString().slice(0, 10);
          setCheckInDate(prevDayFormatted);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!location) {
            setShowLocationError(true);
            return;
        } else {
            setShowLocationError(false);
        }

        if (!checkInDate || !checkOutDate) {
            setShowDateError(true);
            return;
        } else {
            setShowDateError(false);
        }

        const searchParams: SearchParams = {
            location,
            checkInDate,
            checkOutDate,
            numberOfGuests,
            numberOfRooms,
        };
        onSubmit(searchParams);
    };
    
    const handleGuestIncrement = () => {
        setNumberOfGuests(numberOfGuests + 1);
    };
    
    const handleGuestDecrement = () => {
        if (numberOfGuests > 1) {
          if (numberOfGuests - 1 < numberOfRooms) setNumberOfRooms(numberOfGuests - 1);
          setNumberOfGuests(numberOfGuests - 1);
        }
    };

    const handleRoomIncrement = () => {
        if (numberOfRooms + 1 > numberOfGuests) setNumberOfGuests(numberOfRooms + 1); 
        setNumberOfRooms(numberOfRooms + 1);
    };
    
    const handleRoomDecrement = () => {
        if (numberOfRooms > 1) {
          setNumberOfRooms(numberOfRooms - 1);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="search-box">
                <div className="select-location">
                    <div className="header">
                        <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
                        <h3 style={{display: 'inline'}}>Going to</h3>
                    </div>
                    <div className="input-location">
                        <input 
                            type="text" 
                            placeholder="Nhập điểm đến" 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>
                <div className="select-date">
                    <div className="select-date-box">
                        Check-in date:
                        <input 
                            type="date" 
                            placeholder="Ngày Check-in"
                            value={checkInDate}
                            min={getToday()}
                            onChange={handleCheckInDateChange}
                        />
                    </div>
                    <div className="select-date-box">
                        Check-out date:
                        <input 
                            type="date" 
                            placeholder="Ngày Check-out"
                            value={checkOutDate}
                            min={getTomorrow()}
                            onChange={handleCheckOutDateChange} 
                        />
                    </div>
                </div>
                <div className="select-num-room-cus">
                    <div className="input-number">
                        Number of guests: 
                        <div className="btn-quantity">
                            <button type="button" onClick={handleGuestDecrement}>-</button>
                            <span>{numberOfGuests}</span>
                            <button type="button" onClick={handleGuestIncrement}>+</button>
                        </div>
                    </div>
                    <div className="input-number">
                        Number of rooms: 
                        <div className="btn-quantity">
                            <button type="button" onClick={handleRoomDecrement}>-</button>
                            <span>{numberOfRooms}</span>
                            <button type="button" onClick={handleRoomIncrement}>+</button>
                        </div>
                    </div>
                </div>
                <button className="btn-submit" type="submit">Tìm</button>
            </div>
            {showLocationError && <div className="error-message"><p>Please select a destination</p></div>}
            {showDateError && <div className="error-message"><p>Please select check-in date & check-out date</p></div>}
        </form>
        </>
    );
};

export default HotelSearchForm;
