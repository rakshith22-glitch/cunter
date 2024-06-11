import React from "react";
import "../styles.css";
import iamhere from "../assets/iamhere.webp";
import giphy from "../assets/giphy.webp";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div id="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/solana/Ee5DkuPTMtwfiG25RCiib4kW7geSYS7Q3mnGNQTPY3CY?embed=1&trades=0"
          title="Dexscreener Chart"
          frameBorder="0"
        ></iframe>
      </div>
      <img src={iamhere} alt="Loading Screen" className="loading-image funny-image" />
      <div className="desktop">
        <img src={giphy} alt="Desktop" className="desktop-image funny-image" />
      </div>
    </div>
  );
};

export default Dashboard;
