import React from "react";
import { useEffect, useState } from "react";
import BuyerSidebar from "./BuyerSideBar";
import "./Css/Tablechart.css";

function Tablechart() {
  useEffect(() => {}, []);

  return (
    <>
      {" "}
      <div className="wrapper">
        {" "}
        <BuyerSidebar />
        <div className="table-container">
          <h1 style={{ color: "blue" }}>
            <center>
              Hi... You can now buy the gem you bid on ...! Congratulations ...!
            </center>
            <h1 style={{ color: "red" }}>
              <center>Winners for the Gems...</center>
            </h1>
          </h1>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Gem Name</th>
                  <th scope="col">Buyer Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Blue Gem</td>
                  <td>Nimal</td>
                  <td>20,000</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Red Gem</td>
                  <td>Kamal</td>
                  <td>30,000</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Purple Gem</td>
                  <td>Sunil</td>
                  <td>88,000</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Green Gem</td>
                  <td>saman</td>
                  <td>99,000</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Black Gem</td>
                  <td>lalitha</td>
                  <td>80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tablechart;
