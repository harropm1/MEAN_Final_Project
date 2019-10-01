const userModel =  require("../db/connection").Users;

var userService = {};

//this is the post for the login page (/users/login)
userService.login = (userObj) => {
    return userModel.findOne(
    {
        where: userObj
    })
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

//this is the post for the register page (/users/register)
userService.register = (userObj) => {
    return userModel
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

//this is the get for the single user edit/delete page so the information can be added
userService.getUser = (userObj) => {
    console.log(userObj);
    return userModel.findOne(
    {
        where: userObj
    })
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

//this is the put (update) request for the edit page(/users/edit)
userService.update = (userObj) => {
    return userModel.update({ USERNAME: userObj.USERNAME, EMAIL: userObj.EMAIL }, { where: { ID: userObj.ID } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

//this is the delete request for the edit page (users/update/{user_id}) 
userService.delete = (userId) => {
    return userModel.destroy({ where: { ID: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

module.exports = userService;