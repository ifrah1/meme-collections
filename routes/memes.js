const router = require('express').Router();
const { memesCtrl } = require('../controllers');

router.get('/', memesCtrl.index);

module.exports = router; 