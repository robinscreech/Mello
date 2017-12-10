/**
 * Data goes to ../Controllers/allCards.js
 * Exports all Cards Schema
 */

var mongoose = require('mongoose');

var CardSchema = mongoose.Schema({
    title: String, 
    content: String
});

var Card = mongoose.model('Card', CardSchema);

module.exports = Card


