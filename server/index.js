/**
 * Initalisation of App and MongoDB connection
 */

var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
var routes = require ('./routes')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.listen(3000, () => console.log('App listening on port 3000'))

var db = mongoose.connection;
mongoose.connect('mongodb://localhost/mello');

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function (){
   
    console.log('Its now connected')
    
    app.use(require('./controllers'));

})

