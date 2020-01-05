var express = require('express');
var router = express.Router();
const cors = require("cors");

const filmController = require('../controllers/filmController.js');
router.get('/', filmController.get);


module.exports = router;