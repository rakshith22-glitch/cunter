import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import iamhere from "../assets/iamhere.webp";
import giphy from "../assets/giphy.webp";
import meme1 from "../assets/meme1.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Link to="/" className="nav-button">Home</Link>
      <h1>Most Awaited Hunter Biden Coin is HERE !!!!</h1>
      <h1>
        Buy Some CRACK for me 👉🏻{" "}
        <a href="https://pump.fun/5Y9Y8J72hDUZvDyBKhvCQkckjXPZXy7YWp5oGGk8pump">
          *Here*
        </a>{" "}
        and support my addiction
      </h1>
      <h1>Most Awaited Hunter Biden Coin Launching Soon .........</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">BTW - The real crimes are still on the Hunter Biden laptop 💻<br><br>Warning ⚠️ <br>⚠️ Graphic materials not shown in ( any ) court 💻 👈 <a href="https://t.co/NYDdKO0qQk">pic.twitter.com/NYDdKO0qQk</a></p>&mdash; Epstein&#39;s Sheet. 🧻 (@meantweeting1) <a href="https://twitter.com/meantweeting1/status/1800624727276539924?ref_src=twsrc%5Etfw">June 11, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
        }}
      ></div>

      <div className="card-container">
        <div className="card">
          <img src={iamhere} alt="Loading Screen" className="card-image" />
        </div>
        <div className="card">
          <img src={giphy} alt="Desktop" className="card-image" />
        </div>
        <div className="card">
          <img src={meme1} alt="Desktop" className="card-image" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
