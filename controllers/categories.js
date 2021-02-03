const { Category } = require('../models');

const showNew = (req, res) => {
    // console.log(req.user); //shows logged user info
    res.render('category/newCat', {
        user: req.user
    });
}

const create = (req, res) => {
    // console.log(req.user); //shows logged user info
    console.log(req.body)

    const category = new Category(req.body);

    //using mongoose save function to save to DB
    category.save(err => {
        // exit if err happens in DB storing the object
        if (err) {
            console.log(err);
            return res.render('category/newCat', {
                user: req.user
            });
        }

        res.redirect('/'); //redirect to main page for now

    });

}



module.exports = {
    showNew,
    create
}
