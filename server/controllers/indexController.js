var indexController = {};

//display home page
indexController.home = (req, res) => {
    res.render('index', { title: 'West Hartford Cares' });
};

module.exports = indexController;