const router = require('express').Router();
const { categoryCtrl } = require('../controllers');

// GET app.com/category/new 
router.get('/new', isLoggedIn, categoryCtrl.showNew);

// POST app.com/category/new 
router.post('/new', isLoggedIn, categoryCtrl.create);



// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');  //redirects user to login
}

module.exports = router; 