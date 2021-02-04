const { Category } = require('../models');

const showHome = (req, res) => {
    Category.find({})
        .sort('name')            //sorts ascending order 
        .exec((err, categories) => {
            console.log(categories);
            res.render('index', {
                user: req.user,
                categories
            });
        });
}

const newMeme = (req, res) => {
    console.log(req.user);
    Category.findById({ _id: req.params.id }, (err, category) => {
        if (err) return console.log(err);

        res.render('meme/upload', {
            user: req.user,
            category
        });
    });

}

module.exports = {
    index: showHome,
    newMeme
}