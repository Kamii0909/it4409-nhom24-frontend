import "./Advertisement.css"
import loyalty from "../../assets/images/loyalty.svg"
import mod from "../../assets/images/mod.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const WebAdvertisement: React.FC = () => {
    return (
    <>
        <div className="web-advertisement">
            <h2>Hotels.com cung cấp trải nghiệm dễ dàng và nhiều lợi ích, mọi lúc, mọi nơi</h2>
            <div className="web-adv-container">
                <div className="adv-item">
                    <div className="adv-icon"><img src={loyalty} style={{width: '48px'}} alt="Loyalty Icon" /></div>
                    <div className="adv-info">
                        <h4>Nhận thưởng theo cách của bạn</h4>
                        <p>Lưu trú bất cứ nơi đâu, bất cứ khi nào bạn muốn và nhận thưởng</p>
                    </div>
                </div>
                <div className="adv-item">
                    <div className="adv-icon"><img src={mod} style={{width: '48px'}} alt="Tag Icon" /></div>
                    <div className="adv-info">
                        <h4>Nhận ưu đãi ngay</h4>
                        <p>Tiết kiệm trung bình % tại hàng ngàn khách sạn với Giá thành viên</p>
                    </div>
                </div>
                <div className="adv-item">
                    <div className="adv-icon"><FontAwesomeIcon className="adv-fontawesome-icon" icon={faCalendarDay} /></div>
                    <div className="adv-info">
                        <h4>Hủy miễn phí</h4>
                        <p>Đặt phòng linh động ở hầu hết khách sạn*</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default WebAdvertisement;