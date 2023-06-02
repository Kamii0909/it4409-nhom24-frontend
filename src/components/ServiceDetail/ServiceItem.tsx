import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./ServiceDetail.css"

const ServiceItem: React.FC = () => {
    return (
        <div className="service-info-item">
            <div><FontAwesomeIcon className="service-info-icon" icon={faUtensils} /></div>
            <div>
                <h3>Ăn uống</h3>
                <ul>
                    <li>Bữa sáng buffet (áp dụng phụ phí) vào mỗi buổi sáng từ 6:00 - 10:00</li>
                    <li>Nhà hàng</li>
                    <li>Quán cà phê</li>
                    <li>Phục vụ cà phê/trà tại khu vực chung</li>
                    <li>Dịch vụ phòng (có giới hạn thời gian)</li>
                </ul>
            </div>
        </div>
    );
};

export default ServiceItem;