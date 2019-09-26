var express = require('express');
const api = require('../controllers/adminController')
var router = express.Router();

// get the users details.
router.get('/members', api.usersList);

module.exports = router;