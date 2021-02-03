const router = require('express').Router();
const { categoryCtrl } = require('../controllers');

// GET app.com/category/new 
router.get('/new', categoryCtrl.showNew);

module.exports = router; 