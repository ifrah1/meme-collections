const { Category } = require('../models');

const showNew = (req, res) => {
    // console.log(req.user); //shows logged user info
    res.render('category/newCat', {
        user: req.user,
        exist: false
    });
}

const create = (req, res) => {
    // console.log(req.user); //shows logged user info
    console.log(req.body)

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


module.exports = {
    showNew,
    create
}
