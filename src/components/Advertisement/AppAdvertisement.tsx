

const AppAdvertisement: React.FC = () => {
    return (
    <>
        <div className="app-advertisement">
            <div className="app-adv-image"><img src="/src/assets/images/advImage.jpg" alt="Advertisement Image" /></div>
            <div className="app-adv-container">
                <div className="app-adv-content">
                    <h3>With the Hotels.com app, you can:</h3>
                    <ul>
                        <li>Save even more—up to 20% on select hotels</li>
                        <li>Earn one reward night* for every 10 nights you stay</li>
                        <li>Search, book, and save on the go</li>
                    </ul>
                    <h4>Scan the QR code with your device camera and download our app</h4>
                </div>
                <div className="qr-code"><img style={{width: "160px"}} src="/src/assets/images/QRapp.webp" alt="QR Code" /></div>
            </div>
        </div>
    </>
    );
};

export default AppAdvertisement;