var leaguesService = require('../services/leaguesService');
var leaguesController = {};

// GET: http://localhost:3000/leagues/data
leaguesController.leagues = (req, res) => {
    leaguesService.leagues(req, res)
        .then((leagues) => {
            if (leagues) {
                res.json(leagues);
            } else {
                res.end('No leagues found.');
            }
        })
        .catch((err) => {
            console.log(`Listing leagues error: ${err}`);
            res.end('Listing leagues error.');
        });
};

module.exports = leaguesController;