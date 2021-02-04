const router = require('express').Router();
const { memesCtrl } = require('../controllers');
const multer = require('multer');

/* Setup multer for storing uploaded files */
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/imgs-uploaded')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
let upload = multer({ storage: storage });


router.get('/', memesCtrl.index);

// GET app.com/memes/601b1d63c01af01495fbc7df/new
router.get('/:id/addmeme', isLoggedIn, memesCtrl.newMeme);

// GET app.com/memes/601b1d63c01af01495fbc7df/new
router.post('/:id/addmeme', upload.single('image'), isLoggedIn, memesCtrl.addMeme);

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');  //redirects user to login
}

module.exports = router; 