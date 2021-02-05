const { Category, Meme } = require('../models');

const showNew = (req, res) => {
    // console.log(req.user); //shows logged user info
    console.log('hit show new category page');
    res.render('category/newCat', {
        user: req.user,
        exist: false
    });
}

const create = (req, res) => {
    // console.log(req.user); //shows logged user info
    // console.log(req.body)

    req.body.name = req.body.name.toLowerCase();

    Category.findOne({ 'name': req.body.name }, (err, category) => {
        if (err) return console.log(err);
        if (category) {
            return res.render('category/newCat', {
                user: req.user,
                exist: true
            });
        } else {
            const category = new Category(req.body);

            //using mongoose save function to save to DB
            category.save(err => {
                // exit if err happens in DB storing the object
                if (err) {
                    console.log(err);
                    return res.render('category/newCat', {
                        user: req.user,
                        exist: false
                    });
                }
                res.redirect('/'); //redirect to main page for now

            });
        }
    });

}

const showCategory = (req, res) => {
    // console.log(req.user);
    // console.log(req.params.id) //category id

    Category.findById({ _id: req.params.id }, (err, category) => {
        if (err) return console.log(err);
        Meme.find({ category: category._id }, (err, images) => {
            res.render('category/showCat', {
                user: req.user,
                category,
                images
            });

        });
    });

}

module.exports = {
    showNew,
    create,
    showCategory
}
