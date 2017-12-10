/**
 * Gather all controlers
 */

var express = require('express');
var router = express.Router();

router.use('/api/allcards', require('./allCards'))
router.use('/api/card/update/:id', require('./card'))
router.use('/api/card/delete/:id', require('./cardDelete'))

module.exports = router