var express = require('express');
const api = require('../controllers/adminController')
var router = express.Router();

// GET (load) the admin page.
router.get('/', api.adminPage);

// get the users details.
router.get('/members', api.usersList);

module.exports = router;