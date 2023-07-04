import { IoStar } from "react-icons/io5";
import "./HotelItem.css";
import { Link } from "react-router-dom";

type HotelItemProps = {
    linkTo: string;
    image: string;
    title: string;
    star: number;
    desc: string;
    comment: boolean;
    point: number;
    numberOfComments: number;
};
const HotelItem = (props: HotelItemProps) => {
    const arrStar = [];
    for (let i = 0; i < props.star; i++) {
        arrStar.push(
            <div className="star">
                <IoStar />
            </div>
        );
    }
    return (
        <Link to={props.linkTo} className="HotelItem">
            <div className="img-wrapper">
                <img src={props.image} alt="Image Thumbnail" />
            </div>
            <div style={{ padding: "10px", paddingTop: "0" }}>
                <h2 className="title">{props.title}</h2>
                {props.star > 0 && (
                    <div className="star-swrapper">{arrStar}</div>
                )}
                <div className="description">{props.desc}</div>
                {props.comment && (
                    <div className="comment">
                        <strong>{props.point}/10</strong> (
                        {props.numberOfComments} reviews)
                    </div>
                )}
            </div>
        </Link>
    );
};

export default HotelItem;
