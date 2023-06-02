import { useState } from "react";
import "./SearchForm.css";

interface RoomCheckFormProps {
    defaultCheckInDate: string;
    defaultCheckOutDate: string;
    defaultNumGuest: number;
    defaultNumRoom: number;
}

const RoomCheckForm: React.FC<RoomCheckFormProps> = ({ defaultCheckInDate, defaultCheckOutDate, defaultNumGuest, defaultNumRoom }) => {
    const [checkInDate, setCheckInDate] = useState(defaultCheckInDate);
    const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate);
    const [numberOfGuests, setNumberOfGuests] = useState(defaultNumGuest);
    const [numberOfRooms, setNumberOfRooms] = useState(defaultNumRoom);

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
    <form>
        <div className="check-room">
            <div className="select-date select-date-check-room">
                <div className="select-date-box">
                    Ngày Check-in:
                    <input 
                        type="date" 
                        placeholder="Ngày Check-in"
                        value={checkInDate}
                        min={getToday()}
                        onChange={handleCheckInDateChange}
                    />
                </div>
                <div className="select-date-box">
                    Ngày Check-out:
                    <input 
                        type="date" 
                        placeholder="Ngày Check-out"
                        value={checkOutDate}
                        min={getTomorrow()}
                        onChange={handleCheckOutDateChange} 
                    />
                </div>
            </div>
            <div className="select-num-room-cus-check-room">
                <div className="input-number">
                    Số khách: 
                    <div className="btn-quantity btn-quantity-check-room">
                        <button type="button" onClick={handleGuestDecrement}>-</button>
                        <span>{numberOfGuests}</span>
                        <button type="button" onClick={handleGuestIncrement}>+</button>
                    </div>
                </div>
                <div className="input-number">
                    Số phòng: 
                    <div className="btn-quantity btn-quantity-check-room">
                        <button type="button" onClick={handleRoomDecrement}>-</button>
                        <span>{numberOfRooms}</span>
                        <button type="button" onClick={handleRoomIncrement}>+</button>
                    </div>
                </div>
            </div>
            <div><button className="btn-submit-check-room" type="submit">Kiểm tra phòng trống</button></div>
        </div>
    </form>
    </>
    );
};

export default RoomCheckForm;