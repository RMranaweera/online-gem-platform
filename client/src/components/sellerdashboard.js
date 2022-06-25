import React from "react";
import SellerSideBar from "./SellerSideBar";
import Feedback from "./Feedback";
const sellerdashboard = () => {
  return (
    <>
      {" "}
      <div className="wrapper">
        {" "}
        <SellerSideBar />
        <Feedback />
      </div>
    </>
  );
};

export default sellerdashboard;