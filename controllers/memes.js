
const showHome = (req, res) => {
    res.render('index', {
        user: req.user
    });
}

module.exports = {
    index: showHome
}