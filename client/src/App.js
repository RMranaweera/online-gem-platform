import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



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
import Dashboard from "./components/Admin/Dashboard"
import Buyer from "./components/Admin/Buyer";
import Seller from "./components/Admin/Seller";
import Driver from "./components/Admin/Driver";
import GBAgent from "./components/Admin/GBAgent";
import LandingPage from "./components/LandingPage";

const App = () => {


  return (
    <div>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/home" element={<Home />} />
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
          <Route path="/buyer" element={<Buyer/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/driver" element={<Driver/>}/>
          <Route path="/gbagent" element={<GBAgent/>}/>
          <Route path="/seller" element={<Seller/>}/>
        </Routes>
    </div>
  );
};

export default App;
