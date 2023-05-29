

const AppAdvertisement: React.FC = () => {
    return (
    <>
        <div className="app-advertisement">
            <div className="app-adv-image"><img src="/src/assets/images/advImage.jpg" alt="Advertisement Image" /></div>
            <div className="app-adv-container">
                <div className="app-adv-content">
                    <h3>Với app Hotels.com, bạn có thể:</h3>
                    <ul>
                        <li>Tiết kiệm nhiều hơn nữa, đến 20% tại một số khách sạn</li>
                        <li>Nhận một đêm thưởng* với mỗi 10 đêm lưu trú</li>
                        <li> Tìm, đặt phòng và tiết kiệm, mọi lúc, mọi nơi</li>
                    </ul>
                    <h4>Quét mã QR bằng camera trên thiết bị của bạn để tải app của chúng tôi</h4>
                </div>
                <div className="qr-code"><img style={{width: "160px"}} src="/src/assets/images/QRapp.webp" alt="QR Code" /></div>
            </div>
        </div>
    </>
    );
};

export default AppAdvertisement;