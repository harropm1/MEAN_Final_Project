var express = require('express');
const api = require('../controllers/leaguesController')
var router = express.Router();

//this is the get for the data on the page that loads the dropdown
router.get('/data', api.leagues);

module.exports = router;