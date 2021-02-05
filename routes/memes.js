const router = require('express').Router();
const { memesCtrl } = require('../controllers');
const upload = require('../config/multer');

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');  //redirects user to login
}

router.get('/', memesCtrl.index);

// GET app.com/memes/601b1d63c01af01495fbc7df/new
router.get('/:id/addmeme', isLoggedIn, memesCtrl.newMeme);

// GET app.com/memes/601b1d63c01af01495fbc7df/new
router.post('/:id/addmeme', upload.single('image'), isLoggedIn, memesCtrl.addMeme);

// DELETE /memes/:id
router.delete('/memes/:id/del', isLoggedIn, memesCtrl.delImg);

module.exports = router; 