var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

require('./routes/routes.js')(app)

mongoose.connect('mongodb://malbinson:malbinson1@ds119503.mlab.com:19503/albinson', { useNewUrlParser: true,useUnifiedTopology: true })

app.listen(3000);
console.log("Meow...at localhost:3000")