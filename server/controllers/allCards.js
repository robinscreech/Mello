/**
 * Data comes from ../models/allCards.js
 * Sends data via ./controllers/index.js
 * Sends result from mongoose query
 */

var express = require('express');
var app = express();
var router = express.Router();

var Cards = require('../models/allCards');


// -----------CODE TO ADD CARDS TO MONGO
// var card1 = new Cards ({title: "Test", content: 'This is a cardmongo and mongoose schema'})
//  card1.save(function (err, card1){
//          if (err) return console.err(err);
//          console.log('Card Saved')
//      })

module.exports = function index(req, res) {
	Cards.find({}, function(err, result) {
		if (!err) {
			//console.log('Response from controller', result);
			return res.send(result);
		}
	});
}