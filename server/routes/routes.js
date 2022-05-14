const router = require("express").Router();

const UserController=require("../controllers/UserController")
router.post("/add/user",UserController.addUser)

module.exports = router;
