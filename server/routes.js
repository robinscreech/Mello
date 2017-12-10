/**
 * All routes available through app
 * Exports router 
 */
		
var express = require ('express')
var router = express.Router();

module.exports ={
	'/api/allcards': require('./controllers/allCards'),
	'/api/card/update/:id': require('./controllers/card'),
	'/api/card/delete/:id': require('./controllers/cardDelete')
}