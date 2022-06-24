import React from "react";
import BuyerSideBar from "./BuyerSideBar";
import Tablechart from "./Tablechart";
import Feedback from "./Feedback";
const BuyerDashboar = () => {
  return (
    <>
      {" "}
      <div className="wrapper">
        {" "}
        <BuyerSideBar />
        <Feedback />
      </div>
    </>
  );
};

export default BuyerDashboar;
