var adminService = require('../services/adminService');
var adminController = {};

//display admin page
adminController.adminPage = (req, res) => {
    res.render('admin', { title: 'West Hartford Cares - Admin Page' });
};

// GET: http://localhost:3000/admin/members
adminController.usersList = (req, res) => {
    adminService.usersList(req, res)
        .then((admin) => {
            if (admin) {
                res.json(admin);
            } else {
                res.end('No members found.');
            }
        })
        .catch((err) => {
            console.log(`Listing members error: ${err}`);
            res.end('Listing members error.');
        });
};

module.exports = adminController;