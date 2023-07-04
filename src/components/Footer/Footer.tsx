import TopDestinationList from "../TopDestinationList/TopDestinationList";
import "./Footer.css"

const Footer: React.FC = () => {
    return (
    <>
    <div className="footer">
        <TopDestinationList />
        <ul className="page-footer">
            <li>*Some hotels require you to cancel more than 24 hours before check-in. Details on site.</li>
            <li>© 2023 Hotels.com is an Expedia Group company. All rights reserved.</li>
            <li>Hotels.com and the Hotels.com logo are trademarks or registered trademarks of Hotels.com, LP in the United States and/or other countries. All other trademarks are the property of their respective owners.</li>
        </ul>
    </div>
    </>
    );
};

export default Footer;