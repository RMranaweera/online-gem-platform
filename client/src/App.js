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

const App = () => {


  return (
    <div>
        <Routes>
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/addBid/:id" element={<AddBid />} />
          <Route path="/home" element={<Content />} />
          <Route path="/addGem" element={<AddGem />} />
<<<<<<< HEAD
          <Route path="/dash" element={<dash/>} />
=======
          <Route path="/adminBoard" element={<AdminBoard/>}/>
>>>>>>> 8c120fbe1b213220bee1d6776035fc1a78f6466b
        </Routes>
    </div>
  );
};

export default App;
