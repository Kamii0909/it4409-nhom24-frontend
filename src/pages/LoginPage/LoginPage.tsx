import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import './LoginPage.css'
import { FiArrowLeft } from "react-icons/fi";
import appleLogo from "../../assets/images/apple_logo.png"
import facebookLogo from "../../assets/images/facebook_logo.png"
import googleLogo from "../../assets/images/google_logo.png"
import { auth } from "../../firebase/firebase-config";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from 'firebase/auth';


const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Xử lý đăng nhập thành công
            console.log(result.user);
        })
        .catch((error) => {
            // Xử lý lỗi đăng nhập
            console.error(error);
        });
};

const handleSignInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Xử lý đăng nhập thành công
            console.log(result.user);
        })
        .catch((error) => {
            // Xử lý lỗi đăng nhập
            console.error(error);
        });
};

const handleSignInWithApple = () => {
    const provider = new OAuthProvider('apple.com');
    signInWithPopup(auth, provider)
        .then((result) => {
            // Xử lý đăng nhập thành công
            console.log(result.user);
        })
        .catch((error) => {
            // Xử lý lỗi đăng nhập
            console.error(error);
        });
};


const LoginPage: React.FC = () => {
    return (
        <div>
            <div className="page-header">
                <div className="btn-back">
                    <FiArrowLeft />
                </div>
                <div className="logo-login">
                    <Link to="/"><img src={logo} alt="Logo hotels"></img></Link>
                </div>
            </div>
            <div className="content-login-page">
                <h2>Đăng nhập hoặc tạo tài khoản</h2>
                <input type="text" placeholder="Email"/>
                <button className="btn-login">Tiếp tục</button>
                <span style={{textAlign: "center"}}>hoặc tiếp tục bằng</span>
                <div className="icon-list">
                    <img src={appleLogo} alt="" onClick={handleSignInWithApple} />
                    <img src={facebookLogo} alt="" onClick={handleSignInWithFacebook} />
                    <img src={googleLogo} alt="" onClick={handleSignInWithGoogle} />
                </div>
                <span>Bằng việc tiếp tục, bạn đã đọc và đồng ý với {" "} 
                    <a href="#">Điều khoản & Điều kiện</a> và {" "} 
                    <a href="#">Tuyên bố bảo mật</a> của chúng tôi.</span>
                <div className="bottom-content-login-page">    
                    <a href="#">Liên hệ với chúng tôi</a>
                    <a href="#">Hotels.com</a>
                    <a href="#">Xóa dữ liệu</a>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
