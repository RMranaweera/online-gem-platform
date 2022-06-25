import React from "react";
import { useEffect, useState } from "react";
import SellerSidebar from "./SellerSideBar";
// import { Formik, Form, Field } from "formik";
// import axios from "axios";
import "../../node_modules/antd/dist/antd.css";
// import { AudioOutlined } from "@ant-design/icons";
import "./Css/GbaProfile.css"

function SellerProfile() {
  useEffect(() => {}, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="wrapper">
      {" "}
      <SellerSidebar />
      <div className="form-box">
      <h2>Edit Profile</h2>
        <form>
          <div className="field1">
           <b>Name : </b> <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <b>Mobile No:</b>
            <input placeholder="Phone 000-000-0000" />
            <b> Email :</b> 
            <input placeholder="E-mail" />
            <b>Address</b>
            <input placeholder="Home No" />
            <input placeholder="Street" />
            <input placeholder="District" />
            <input placeholder="Zip code" />
            {/* <textarea placeholder="description" /> */}
           <b>New Password :</b> 
            <input placeholder="New Password" />
            <input placeholder="Confirm Password" />
          </div>
{/* 
          <button type="submit" id="submitBtn" className="submitBtn">
            {" "}
            Submit
          </button> */}
          <p></p>
          <p></p>
          <p></p>
        </form>
        <p></p>
        <button type="submit" id="submitBtn" className="submitBtn">
            {" "}
            Update 
          </button>
      </div>
      ;
    </div>
  );
}

export default SellerProfile;
