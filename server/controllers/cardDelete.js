/**
 * Data comes from ../models/allCards.js
 * Sends data via ./controllers/index.js
 * Sends result from mongoose query
 */

var express = require('express');
var app = express();
var router = express.Router();

var Cards = require('../models/allCards');

//id of first test : 5a214b139bfb412b2c489e44

module.exports = function index(req, res) {
	Cards.findByIdAndRemove(req.body.id, function (err,offer){
    if(err) { throw err; }
    // ...
	})
}