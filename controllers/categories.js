const showNew = (req, res) => {
    // console.log(req.user); //shows logged user info
    res.render('category/newCat', {
        user: req.user
    });
}


module.exports = {
    showNew,
}
