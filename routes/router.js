var express = require('express');
var router = express.Router();

const filmController = require('../controllers/filmController.js');


router.get('/', filmController.get);


module.exports = router;