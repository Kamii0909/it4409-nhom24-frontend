import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.css"

const Header: React.FC = () => {
    return (
        <div className="page-header">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Logo hotels"></img></Link>
            </div>
            <div className="support-account">
                <Link to="/" className="link">Support</Link>
                <Link to="/login" className="link">Sign in</Link>
            </div>
        </div>
    );
};

export default Header;