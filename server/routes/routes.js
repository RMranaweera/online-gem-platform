const router = require("express").Router();

const UserController = require("../controllers/UserController");
const GemController = require("../controllers/GemController");

const imageStroge = require("../helpers/imageStroge");
const documentStroge = require("../helpers/documentStorage");

router.post("/add/user", UserController.addUser);
router.post("/gems", imageStroge, GemController.saveGem);
router.post("/documents", documentStroge, GemController.editGem);
router.get("/gems", GemController.getgems);
router.post("/addBid", GemController.AddBid);
module.exports = router;
