import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import background from "../assets/background.jpg";
import profile from "../assets/profile.jpg";
const Header = () => {
  return (
    <header className="header">
      <div className="enter-section">
        <img src={profile} alt="User" className="user-image" />
      </div>
      <nav>
        <Link to="/dashboard">
          <button>Buy</button>
        </Link>
      </nav>
      <img src={background} alt="Header" className="header-image" />
    </header>
  );
};

export default Header;
