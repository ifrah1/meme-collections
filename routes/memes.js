const router = require('express').Router();
const { memesCtrl } = require('../controllers');

router.get('/', memesCtrl.index);

// GET app.com/memes/601b1d63c01af01495fbc7df/new
router.get('/:id/new', memesCtrl.newMeme);

module.exports = router; 