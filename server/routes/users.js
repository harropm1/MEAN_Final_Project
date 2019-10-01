var express = require('express');
const api = require('../controllers/userController')
var router = express.Router();

//this is the post request for the login page (/users/login)
router.post('/login', api.login);

//this is the post request for the register page (/users/register)
router.post('/register', api.register);

//this is the get request for the single user so you can update/delete (users/getUser/{ID})
router.get('/getUser/:ID', api.getUser)

//this is the put (update) request for the single user edit page (/users/update/{ID})
router.put('/edit/:ID', api.update);

//this is the delete request for the single user edit page (users/delete/{ID})
router.delete('/delete/:ID', api.delete);

//this is the get request for the logout
router.get('/logout', api.logout);

module.exports = router;