
const showHome = (req, res) => {
    res.render('index');
}

module.exports = {
    index: showHome
}