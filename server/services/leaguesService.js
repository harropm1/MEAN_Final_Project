var leaguesService = {};
var fs = require('fs');

//this is the get for the data on the page that loads the dropdown
leaguesService.leagues = (req, res) => {
    try
    {
        res.end(fs.readFileSync('./data/leagues.json'));
    }
    catch (err)
    {
        res.end('[]');
    }
}

module.exports = leaguesService;