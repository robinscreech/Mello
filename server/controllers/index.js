/**
 * Gather all controlers
 */

var express = require('express');
var router = express.Router();

router.use('/api/allcards', require('./allCards'))

module.exports = router