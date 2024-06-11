import React from "react";
import "../styles.css";
import iamhere from "../assets/iamhere.webp";
import giphy from "../assets/giphy.webp";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div id="dexscreener-embed">
        <iframe 
          src="https://dexscreener.com/solana/FJ6MdHqFwmnzx2g19s6X8NDbF7gZCnU2yE1rKd9vbnwf?embed=1&theme=dark&trades=0&info=0" 
          title="Dexscreener Chart"
        ></iframe>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={iamhere} alt="Loading Screen" className="card-image" />
        </div>
        <div className="card">
          <img src={giphy} alt="Desktop" className="card-image" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
