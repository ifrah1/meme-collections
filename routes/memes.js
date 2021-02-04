const router = require('express').Router();
const { memesCtrl } = require('../controllers');

router.get('/', memesCtrl.index);

// GET app.com/memes/601b1d63c01af01495fbc7df/new
router.get('/:id/addmeme', isLoggedIn, memesCtrl.newMeme);

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');  //redirects user to login
}

module.exports = router; 