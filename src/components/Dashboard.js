import React from "react";
import "../styles.css";
import iamhere from "../assets/iamhere.webp";
import giphy from "../assets/giphy.webp";
import meme1 from "../assets/meme1.jpg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1> Most Awaited Hunter Biden Coin is HERE !!!! </h1>
      <h1>
        Buy Some CRACK for me 👉🏻{" "}
        <Link to="https://pump.fun/5Y9Y8J72hDUZvDyBKhvCQkckjXPZXy7YWp5oGGk8pump">
          *Here*
        </Link>
        and support my addiciton
      </h1>
      <h1>Most Awaited Hunter Biden Coin Launching Soon .........</h1>

      {/* </div> */}
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

// export default Dashboard;
// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles.css";
// import iamhere from "../assets/iamhere.webp";
// import giphy from "../assets/giphy.webp";
// import meme1 from "../assets/meme1.jpg";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//          <Link to="/" className="nav-button">
//          Home
//         </Link>
//       <h1> Most Awaited Hunter Biden Coin is HERE !!!! </h1>
//       <h1>Buy Some CRACK for me here 👉🏻 and support my addiciton</h1>
//       <div className="card-container">
//         <div className="card">
//           <img src={iamhere} alt="Loading Screen" className="card-image" />
//         </div>
//         <div className="card">
//           <img src={giphy} alt="Desktop" className="card-image" />
//         </div>
//         <div className="card">
//           <img src={meme1} alt="Desktop" className="card-image" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Dashboard;
