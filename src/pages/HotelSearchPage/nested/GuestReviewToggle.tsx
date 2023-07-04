import { } from "./GuestReviewToggle.css";

type RatingValueToggleProps = {
    isChecked: () => boolean;
    setCurrentRatingCallback: (newRating: number) => void;
    componentRating: number;
    description: string;
}

export const GuestReviewToggle: React.FC<RatingValueToggleProps> = (props) => {
    return (
        <label
            key={props.description}
            htmlFor={`${props.description}-radio`}
            className="rating-radio-button-label">
            <input
                className="rating-radio-button"
                type="radio"
                id={`${props.description}-rating-radio`}
                checked={props.isChecked()}
                onChange={() => props.setCurrentRatingCallback(props.componentRating)}
            />
            <span>{props.description}</span>
        </label>
    );
}