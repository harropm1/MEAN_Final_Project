var express = require('express');
const api = require('../controllers/indexController')
var router = express.Router();

//this is the get request for the home page
router.get('/', api.home);

module.exports = router;