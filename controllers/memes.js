const { Category } = require('../models');

const showHome = (req, res) => {
    Category.find({})
        .sort('name')            //sorts ascending order for the dates
        .exec((err, categories) => {
            console.log(categories);
            res.render('index', {
                user: req.user,
                categories
            });
        });
}

module.exports = {
    index: showHome
}