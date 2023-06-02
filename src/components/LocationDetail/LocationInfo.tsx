import "./LocationDetail.css"

const LocationInfo: React.FC = () => {
    return (
        <div className="location-info">
            <div className="title-info">
                <h2>Thông tin về nơi lưu trú này</h2>
            </div>
            <div className="content-info">
                <div className="description-hotel">
                    <h3>The Hanoi Club Hotel & Residences</h3>
                    <p>The Hanoi Club Hotel & Residences có sòng bạc và bạn chỉ cần lái xe 5 phút là đến được Hồ Hoàn Kiếm. Sau khi vui chơi thỏa thích ở hồ bơi ngoài trời, bạn có thể lấp đầy chiếc bụng đói tại quán cà phê. Các tiện nghi nổi bật khác tại khách sạn cao cấp này bao gồm 2 sân quần vợt ngoài trời, trung tâm thể dục và hồ bơi dành cho trẻ em. Du khách đánh giá cao nhân viên nhiệt tình và địa điểm.</p>
                </div>
                <div className="language">
                    <h3>Ngôn ngữ</h3>
                    <p>Tiếng Trung Phổ thông, Tiếng Anh, Tiếng Việt</p>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;