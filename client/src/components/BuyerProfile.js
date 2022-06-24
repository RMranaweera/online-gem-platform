import React from "react";
import { useEffect, useState } from "react";
import BuyerSidebar from "./BuyerSideBar";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "../../node_modules/antd/dist/antd.css";
import { AudioOutlined } from "@ant-design/icons";
import "./Css/BuyerProfile.css";
function BuyerProfile() {
  useEffect(() => {}, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="wrapper">
      {" "}
      <BuyerSidebar />
      <div className="form-box">
        <form>
          <div className="field1">
            <label>
              {" "}
              <h1>Edit Your Profile</h1>{" "}
            </label>
            <input placeholder="Name" />
            <input placeholder="Phone 000-000-0000" />
            <input placeholder="E-mail" />

            <textarea placeholder="description" />
            <input placeholder="New Password" />

            <input placeholder="Confirm Password" />
          </div>

          <button type="submit" id="submitBtn" className="submitBtn">
            {" "}
            Save/Sumbit
          </button>
        </form>
      </div>
      ;
    </div>
  );
}

export default BuyerProfile;
