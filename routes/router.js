var express = require('express');
var router = express.Router();

const filmController = require('../controllers/filmController.js');
const userController = require("../controllers/userController.js")


router.get('/', filmController.get);
router.get("/users", userController.getUser)
router.post("/users", userController.createUser)


module.exports = router;