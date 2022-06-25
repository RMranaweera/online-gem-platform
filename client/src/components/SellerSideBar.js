import React from "react";
import { NavLink } from "react-router-dom";

import "./Css/SellerSideBar.css";

const SellerSideBar = (props) => {
  return (
    <div>
      {/* <!-- SellerSidebar  -->/ */}

      <nav id="SellerSideBar">
        <div className="SellerSideBar-header"></div>

        <ul className="list-unstyled components">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/SellerProfile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/newlisting">Add A Listing</NavLink>
          </li>
          <li>
            <NavLink to="/SellerFeedback">Feedback</NavLink>
          </li>
          <li>
            <NavLink to="/Chat">Chat</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SellerSideBar;
