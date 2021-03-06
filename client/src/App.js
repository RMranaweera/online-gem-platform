import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SideNavBar from "./components/SideBar/SideNavbar";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import AddBid from "./components/AddBid";
import Content from "./components/Content";
import AddGem from "./components/AddGem";
import AdminBoard from "./components/AdminBoard";
import Tablechart from "./components/Tablechart";
import BuyerDashboar from "./components/BuyerDashboar";
import BuyerProfile from "./components/BuyerProfile";
import SellerDetailschart from "./components/SellerDetailschart";
import GbaDashboard from "./components/GbaDashboard";
import GbaProfile from "./components/GbaProfile";
import Feedback from "./components/Feedback";
import LandingPage from "./components/LandingPage";

//Seller
import Sellerdashboard from "./components/sellerdashboard";
import SellerProfile from "./components/SellerProfile";

// admin pages
import Buyer from "./components/Admin/Buyer"
import Driver from "./components/Admin/Driver"
import GBAgent from "./components/Admin/GBAgent"
import Seller from "./components/Admin/Seller"

const App = () => {
  return (
    <>
      <div>

        <Routes>
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/addBid/:id" element={<AddBid />} />
          <Route path="/home" element={<Content />} />
          <Route path="/addGem" element={<AddGem />} />

          <Route path="/adminBoard" element={<AdminBoard/>}/>
          <Route path="/buyer" element = {<Buyer/>}/>
          <Route path="/seller" element = {<Seller/>}/>
          <Route path="/driver" element = {<Driver/>}/>
          <Route path="/gbAgent" element = {<GBAgent/>}/>
          {/* <Route path="/dash" element={<dash/>} /> */}
          <Route path="/buyerDashboard" element={<BuyerDashboar />} />
          <Route path="/tablechart" element={<Tablechart />} />
          <Route path="/BuyerProfile" element={<BuyerProfile />} />
          <Route path="/GbaDashboard" element={<GbaDashboard />} />
          <Route path="/SellerDetailschart" element={<SellerDetailschart />} />
          <Route path="/GbaProfile" element={<GbaProfile />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/SideNavBar" element={<SideNavBar />} />

          <Route path="/sellerdashboard" element={<Sellerdashboard />} />
          <Route path="/sellerProfile" element={<SellerProfile />} />
        </Routes>
      </div>
    </>

  );
};

export default App;
