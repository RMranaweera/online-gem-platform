import React from "react";
import { useEffect, useState } from "react";
import BuyerSidebar from "./BuyerSideBar";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "../../node_modules/antd/dist/antd.css";
import { AudioOutlined } from "@ant-design/icons";
import "./Css/BuyerProfile.css";
import ReactDOM from "react-dom";
const validEmailRegex = RegExp();
//function BuyerProfile() {
//useEffect(() => {}, []);
//const [firstName, setFirstName] = useState("");
//const [lastName, setlastName] = useState("");

//const [password, setpassword] = useState("");
//const emailState = {
// email: "",
// error: "",
//};/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const BuyerProfile = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (BuyerProfile(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        {" "}
        <BuyerSidebar />
        <div className="form-box">
          {" "}
          <h1 style={{ color: "brown" }}>
            <center>
              <u>You Can Edit Your Profile</u>
            </center>
          </h1>{" "}
          <div className="field1">
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="fullName">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.fullName.length > 0 && (
                  <span className="error">{errors.fullName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <div className="submit">
                <button>Create & Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

//export default BuyerProfile;
