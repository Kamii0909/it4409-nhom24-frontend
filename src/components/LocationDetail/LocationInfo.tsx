import "./LocationDetail.css"

const LocationInfo: React.FC = () => {
    return (
        <div className="location-info">
            <div className="title-info">
                <h2>About this property</h2>
            </div>
            <div className="content-info">
                <div className="description-hotel">
                    <h3>The Hanoi Club Hotel & Residences</h3>
                    <p>Putting you within a 10-minute drive of Hoan Kiem Lake, The Hanoi Club Hotel & Residences features a casino, and offers an airport shuttle (available on request) for VND 660000 per vehicle. Guests can relax at the steam room, work out at the fitness centre or grab a bite to eat at the coffee shop/cafe. This upmarket hotel also features an outdoor pool, a children's pool and a terrace. The helpful staff and size get good marks from fellow travellers.</p>
                </div>
                <div className="language">
                    <h3>Languages</h3>
                    <p>Chinese (Mandarin), English, Vietnamese</p>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;