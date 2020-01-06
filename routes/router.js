var express = require('express');
var router = express.Router();
const cors = require("cors");

const filmController = require('../controllers/filmController.js');
const userController = require("../controllers/userController.js")


router.get('/', filmController.get);
router.post('/search/', filmController.search);

router.get("/users", userController.getusers)
router.post("/users", userController.createUser)

router.get('/user/:_id', userController.getUser)

router.post('/user/update/:_id', userController.updateFilmography)

module.exports = router;