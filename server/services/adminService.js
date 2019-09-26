const userModel = require("../db/connection").Users;
var adminService = {};

// get the users details
adminService.usersList = () => {
    return userModel.findAll({ where: { ISADMIN: 0 } })
        .then(user =>
        {
            return user;
        })
        .catch(error =>
        {
            throw error;
        })
};

module.exports = adminService;