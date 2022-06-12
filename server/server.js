var express = require("express");
require("dotenv").config();
var cors = require("cors");
const path = require("path");
// var bodyParser= require("body-parser")
const mongoose = require("mongoose");
// var jwt= require("jsonwebtoken");
const randomString = require("randomstring");

var port = process.env.PORT || 3000;

//const config = require("./database/db");
mongoose.connect(
  "mongodb+srv://Lihini:Lihini99@cluster0.gzxof.mongodb.net/Project?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("Database connected");
  }
);
module.exports = mongoose;
var app = express();

app.use(cors());

app.use("/gems", express.static(path.join("gems")));
app.use("/documents", express.static(path.join("documents")));
//Body-Parser Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Routes

//routes for controllers
const router = require("./routes/routes");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});
app.use(router);

// Start Server
app.listen(port, function () {
  console.log("Server is running on port " + port);
});
