// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./Auth";
import "./Navbar.css";

function Navbar() {
  const { user, signInWithGoogle, signOutUser } = useAuth();

  return (
    <header>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/crud">Management hotel</Link>
          </li>
          <li>
            <Link to="/threestars">3-star</Link>
          </li>
          <li>
            <Link to="/fourstars">4-star</Link>
          </li>
          <li>
            <Link to="/fivestars">5-star</Link>
          </li>
          <li>
            <Link to="/hanoi">Hà Nội</Link>
          </li>
          <li>
            <Link to="/halong">Hạ Long</Link>
          </li>
          <li>
            <Link to="/danang">Đà Nẵng</Link>
          </li>
          <li>
            <Link to="/nhatrang">Nha Trang</Link>
          </li>
          <li>
            <Link to="/hochiminh">Hồ Chí Minh</Link>
          </li>
          <li>
            {user ? (
              <>
                <span>Welcome, {user.displayName}</span>
                <button onClick={signOutUser}>Logout</button>
              </>
            ) : (
              <button onClick={signInWithGoogle}>Login</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

