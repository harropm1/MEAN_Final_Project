var userService = require('../services/userService');
var userController = {};

//this is the post for the login page (/users/login)
userController.login = (req, res) => {
    userService.login( {
        USERNAME: req.body.USERNAME,
        PASSWORD: req.body.PASSWORD
    })
        .then((users) => {
            if (users == null)
            {
                res.statusCode = 403;
                res.end('Invalid credentials.');
            }
            req.session.ID = users.ID;
            req.session.ISADMIN = users.ISADMIN;
            res.json(users);
        })
        .catch((err) => {
            console.log(`Log in error: ${err}`);
            res.end('Log in error.');
        });
};

//this is the post for the register page (/users/register)
userController.register = (req, res) => {
    userService.register({
        USERNAME: req.body.username,
        PASSWORD: req.body.password,
        EMAIL: req.body.email,
        ISADMIN: req.body.isadmin
    })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(`Creating Users error: ${err}`);
            res.end('Creating Users error.');
        });
};

//this is the get for the single user edit/delete page so the information can be added
userController.getUser = (req, res) => {
    userService.getUser({ ID: req.params.ID })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(`Get user error: ${err}`);
            res.end('Get user error.');
        })
};

//this is the put (update) request for the edit page(/users/edit/{ID})
userController.update = (req, res) => {
    userService.update({
            ID: req.params.ID,
            USERNAME: req.body.USERNAME,
            EMAIL: req.body.EMAIL                       
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};


//this is the delete request for the edit page (users/delete/{ID}) 
userController.delete = (req, res) => {
    userService.delete(req.params.ID)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

//this is the get request for the logout
userController.logout = (req, res) => {
    req.session.USERNAME = null;
	res.redirect('/');
}

module.exports = userController;