import React from "react";
import { NavLink } from "react-router-dom";

import "./Css/GbaSideBar.css";

const GbaSideBar = (props) => {
  return (
    <div>
      {/* <!-- GbaSidebar  -->/ */}

      <nav id="GbaSideBar">
        <div className="GbaSideBar-header"></div>

        <ul className="list-unstyled components">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/GbaProfile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/SellerDetailschart">Sellers Details</NavLink>
          </li>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <button type="submit" id="submitBtn" className="submitBtn">
            {" "}
            Chat
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default GbaSideBar;