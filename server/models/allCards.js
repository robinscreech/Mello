/**
 * Data goes to ../Controllers/allCards.js
 * Exports all Cards Schema
 */

var mongoose = require('mongoose');

 //-----------CODE TO ADD CARDS TO MONGO
 // var card1 = new Card ({title: "Test", content: 'This is a cardmongo and mongoose schema'})
 // card1.save(function (err, card1){
 //         if (err) return console.err(err);
 //         console.log('Card Saved')
 //     })

var CardSchema = mongoose.Schema({
    title: String, 
    content: String
});

var Card = mongoose.model('Card', CardSchema);

module.exports = Card


