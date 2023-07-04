
import BedIcon from '@mui/icons-material/Bed';
import "./SelectGuestCount.css";

type SelectGuestCountProps = {
    reactiveGuestCount: number;
    reactiveRoomCount: number;
    onClickHandler: (event: any) => void;
}

export const SelectGuestCount: React.FC<SelectGuestCountProps> = (props) => {

    return (
        <button className="guest-count-button" onClick={props.onClickHandler}>
            <div className="guest-count-icon-wrapper">
                <BedIcon sx={{ color: "black" }} />

            </div>
            <div className="guest-count-text-wrapper">
                <span className="guest-count-text-label">Guests</span>
                <span className="guest-count-text-selected">
                    {props.reactiveGuestCount} Guests, {' '}
                    {props.reactiveRoomCount} {`${props.reactiveRoomCount > 1 ? 'Rooms' : 'Room'}`} </span>
            </div>
        </button>
    )
}