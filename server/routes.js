/**
 * All routes available through app
 * Exports router 
 */
		
var express = require ('express')
var router = express.Router();

module.exports ={
	'/': require('./controllers/allCards')
}