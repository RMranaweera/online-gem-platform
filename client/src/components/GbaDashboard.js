import React from "react";
import GbaSideBar from "./GbaSideBar";
import SellerDetailschart from "./SellerDetailschart";
import Feedback from "./Feedback";
const GbaDashboard = () => {
  return (
    <>
      {" "}
      <div className="wrapper">
        {" "}
        <GbaSideBar />
        <Feedback />
      </div>
    </>
  );
};

export default GbaDashboard;