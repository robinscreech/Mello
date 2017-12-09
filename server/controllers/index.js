/**
 * Gather all controlers
 */

var express = require('express');
var router = express.Router();

router.use('/', require('./allCards'))

module.exports = router