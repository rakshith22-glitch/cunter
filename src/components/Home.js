import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import profile from "../assets/profile.jpg"
import id from "../assets/id.png"
const Home = () => {
  return (
    <div className="home">
      <img src={id} alt="Home Screen" className="home-image" />
    </div>
  );
};

export default Home;
