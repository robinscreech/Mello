/**
 * Data comes from ../models/allCards.js
 * Sends data via ./controllers/index.js
 * Sends result from mongoose query
 */

var express = require('express');
var app = express();
var router = express.Router();

var Cards = require('../models/allCards');

module.exports = function index(req, res) {
	Cards.find({}, function(err, result) {
		if (!err) {
			//console.log('Response from controller', result);
			return res.send(result);
		}
	});
}