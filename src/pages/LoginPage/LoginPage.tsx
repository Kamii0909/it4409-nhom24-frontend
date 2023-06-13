import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { auth, signInWithEmailAndPassword } from './firebase-config';
import logo from '../../assets/images/logo.svg';
import appleLogo from '../../assets/images/apple_logo.png';
import facebookLogo from '../../assets/images/facebook_logo.png';
import googleLogo from '../../assets/images/google_logo.png';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        // Handle successful login
        const user = userCredential.user;
        console.log('User logged in:', user);
      })
      .catch((error: any) => {
        // Handle login error
        console.log('Login error:', error);
      });
  };

  return (
    <div>
      <div className="page-header">
        <div className="btn-back">
          <FiArrowLeft />
        </div>
        <div className="logo-login">
          <Link to="/">
            <img src={logo} alt="Logo hotels" />
          </Link>
        </div>
      </div>
      <div className="content-login-page">
        <h2>Đăng nhập hoặc tạo tài khoản</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-login" onClick={handleLogin}>
          Tiếp tục
        </button>
        <span style={{ textAlign: 'center' }}>hoặc tiếp tục bằng</span>
        <div className="icon-list">
          <img src={appleLogo} alt="" />
          <img src={facebookLogo} alt="" />
          <img src={googleLogo} alt="" />
        </div>
        <span>
          Bằng việc tiếp tục, bạn đã đọc và đồng ý với{' '}
          <a href="#">Điều khoản & Điều kiện</a> và{' '}
          <a href="#">Tuyên bố bảo mật</a> của chúng tôi.
        </span>
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
