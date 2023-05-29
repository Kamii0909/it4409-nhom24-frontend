import TopDestinationList from "../TopDestinationList/TopDestinationList";
import "./Footer.css"

const Footer: React.FC = () => {
    return (
    <>
    <div className="footer">
        <TopDestinationList />
        <ul className="page-footer">
            <li>*Một số khách sạn yêu cầu hủy hơn 24 giờ trước ngày nhận phòng. Xem thêm chi tiết trên trang.</li>
            <li>© 2023 Hotels.com là công ty thuộc Expedia Group. Mọi quyền được bảo lưu.</li>
            <li>Hotels.com và logo Hotels.com là thương hiệu hoặc thương hiệu đã đăng ký bảo hộ của Hotels.com, LP tại Mỹ và/hoặc các quốc gia khác. Mọi thương hiệu khác thuộc quyền sở hữu của các chủ sở hữu tương ứng.</li>
        </ul>
    </div>
    </>
    );
};

export default Footer;