import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegramPlane, FaInstagram, FaTiktok } from 'react-icons/fa';
import "../styles.css";
import profile from "../assets/profile.jpg";
import background from "../assets/background.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img src={profile} alt="User" className="user-image" />
        <nav className="nav">
          {/* <Link to="/dashboard">Chart & More </Link> */}
          {/* <Link to="/tokenomics">Tokenomics</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/products">Products</Link>
          <Link to="/gallery">Gallery</Link> */}
        </nav>
        <div className="social-icons">
        <a href="https://x.com/cunterbiden_sol" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://t.me/cunter_biden/7" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        {/* <a href="https://www.tiktok.com/@wafflesj15?_t=8mRgnzllQIf&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a> */}
      </div>
      </div>
      <div className="header-content">
        <h1 className="site-title">$CUNTER</h1>
        <Link to="/dashboard" className="nav-button">Buy now</Link>
      </div>
      <img src={background} alt="Header" className="header-image" />
     
    </header>
  );
};

export default Header;
