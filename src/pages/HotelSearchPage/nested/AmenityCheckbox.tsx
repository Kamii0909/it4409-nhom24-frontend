import { ChangeEvent, useState } from "react";
import "./AmenityCheckbox.css"
import CheckIcon from '@mui/icons-material/Check';

type AmenityCheckboxProps = {
    // Help parent knows what component state changed
    identity: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>, identity: string) => void;
    description: string;
}

export const AmenityCheckbox: React.FC<AmenityCheckboxProps> = (props) => {
    const [isChecked, setIsCheked] = useState<boolean>(false);
    return (
        <label htmlFor={`${props.identity}-checkbox`} className="amenity-checkbox-label">
            <CheckIcon
                sx={{ color: "white" }}
                style={{
                    position: "relative", width: "14px", height: "14px", marginRight: "-19px",
                    visibility: isChecked ? "visible" : "hidden"
                }} />

            <input
                type="checkbox"
                id={`${props.identity}-checkbox`}
                checked={isChecked}
                className="amenity-checkbox"
                onChange={event => {
                    setIsCheked(!isChecked);
                    props.onChangeHandler(event, props.identity)
                }}
            />



            <span>{props.description}</span>
        </label>);
}