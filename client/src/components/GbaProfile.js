import React from "react";
import { useEffect, useState } from "react";
import GbaSidebar from "./GbaSideBar";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "../../node_modules/antd/dist/antd.css";
import { AudioOutlined } from "@ant-design/icons";
import "./Css/GbaProfile.css";
function GbaProfile() {
  useEffect(() => {}, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [file, setFile] = useState("");
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="wrapper">
      {" "}
      <GbaSidebar />
      <div className="form-box">
        <form>
          <div className="field1">
          <label>
              {" "}
              <h2>Edit the Gem Bureau Agent's Profile</h2>{" "}
            </label>
            <div className="input_container">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Phone 000-000-0000" />
            <input placeholder="Address" />
            <input placeholder="District" />
            <input placeholder="Postal code" />
            <input placeholder="E-mail" />
            <input placeholder="NIC/Passport No" />
            <input placeholder="Gem Bureau Agent ID No" />
            <input placeholder="New Password" />

            <input placeholder="Confirm Password" />
            <input
                    type="file"
                    placeholder="Gem Bureau Agent ID scanned copy"
                    filename="file"
                    onChange={onChangeFile}
                  />
            </div>
          </div>

          <button type="submit" id="submitBtn" className="submitBtn">
            {" "}
            Update
          </button>
        </form>
      </div>
      ;
    </div>
  );
}

export default GbaProfile;