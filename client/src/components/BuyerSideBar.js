import React from "react";
import { NavLink } from "react-router-dom";

import "./Css/BuyerSideBar.css";

const BuyerSideBar = (props) => {
  return (
    <div>
      {/* <!-- BuyerSidebar  -->/ */}

      <nav id="BuyerSideBar">
        <div className="BuyerSideBar-header"></div>

        <ul className="list-unstyled components">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/BuyerProfile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/Payement">Payment Details</NavLink>
          </li>
          <li>
            <NavLink to="/Feedback">Feedback</NavLink>
          </li>
          <li>
            <NavLink to="/Tablechart">Gems for the wiiners</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default BuyerSideBar;
