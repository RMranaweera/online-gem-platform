
const User = require("../models/User");

const mongoose = require("mongoose");


module.exports = {
  addUser: async (req, res) => {
    console.log("hai")
    try {
        console.log("hai")
        console.log(req.body)
      var userData = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
     
      });

          
            userData.save((err, doc) => {
              if (!err) {
            
             
                res.json({
                  success: true,
                  message: "User registered successfully",
                });
              } else {
                res.json({
                  success: false,
                  message: "*** User register failed ***",
                });
              }
            });
          
      
        }catch(err) {
       console.log(err)
        }
   
  },

  
  

 
    
 

};
