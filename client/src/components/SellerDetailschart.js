import React from "react";
import { useEffect, useState } from "react";
import GbaSideBar from "./GbaSideBar";
import "./Css/SellerDetailschart.css";

function SellerDetailschart() {
  useEffect(() => {}, []);

  return (
    <>
      {" "}
      <div className="wrapper">
        {" "}
        <GbaSideBar />
        <div className="table-container">
          <h1 style={{ color: "blue" }}>
            <center>
              Approved Listing Count : 
            </center>
            <p>
          </p>
          <p>
          </p>
            <h2 style={{ color: "red" }}>
              <center>Details of the Sellers</center>
            </h2>
          </h1>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Seller ID</th>
                  <th scope="col">Gem ID</th>
                  <th scope="col">Gem Name</th>
                  <th scope="col">Other Details</th>
                  <th scope="col">Pictures of Gems</th>
                  <th scope="col">Gem Bureau Certicicate</th>
                  <th scope="col">Approve Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/o6/2022</td>
                  <td>50453</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Red, Round, 10g</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Approved</td>
                </tr>
                <tr>
                 
                  <td>12/o6/2022</td>
                  <td>50453</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Red, Round, 10g</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Approved</td>
                </tr>
                <tr>
                
                  <td>12/o6/2022</td>
                  <td>50453</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Red, Round, 10g</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  
                  <td>12/o6/2022</td>
                  <td>50453</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Red, Round, 10g</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Approved</td>
                </tr>
                <tr>
                
                  <td>12/o6/2022</td>
                  <td>50453</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Red, Round, 10g</td>
                  <td>121</td>
                  <td>Ruby</td>
                  <td>Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerDetailschart;
