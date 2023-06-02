import "./HotelImages.css";

const HotelImages: React.FC = () => {
    return (
        <div className="images-hotel">
            <div className="big-img"><img src="/src/assets/images/image1.jpg" /></div>
            <div className="small-img">
                <div  className="small-img-col">
                    <img src="/src/assets/images/image2.jpg"  alt="hotelImg" />
                    <img src="/src/assets/images/image3.jpg"  alt="hotelImg" />
                </div>
                <div className="small-img-col">
                    <img src="/src/assets/images/image4.jpg"  alt="hotelImg" />
                    <img src="/src/assets/images/image5.jpg"  alt="hotelImg" />
                </div>
            </div>    
        </div>
    );
};

export default HotelImages;