var leaguesService = require('../services/leaguesService');
var leaguesController = {};

// GET: http://localhost:3000/leagues/data
leaguesController.leagues = (req, res) => {
    leaguesService.leagues(req, res);
};

module.exports = leaguesController;