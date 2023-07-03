import { useState } from "react";
import { IoStar } from "react-icons/io5";
import "./StarRatingCheckbox.css";

interface StarRatingProps {
    star: number;
    inputId: string;
    onClickHandler: (star: number) => void;
}

export function StarRatingCheckbox(props: StarRatingProps){
    const [isClicked, setClicked] = useState<boolean>(false);

    return (
        <div className="option-star-box">
            <input type="checkbox" id={props.inputId} />
            <label
                htmlFor={props.inputId}
                className={`option-star-label ${isClicked ? 'is-clicked' : ''}`}
                onClick={() => {
                    setClicked(!isClicked);
                    props.onClickHandler(props.star);
                }}
            >
                <span className={"option-star-number"}>{props.star}</span><IoStar />
            </label>
        </div>
    );
}