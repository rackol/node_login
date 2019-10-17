//adding Express and Cors
var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors')

//create an instance of Express and allow 
//node to easily grab items send by 
//your view like "req.body.data"
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

require('./routes/routes.js')(app)


//connect to db
mongoose.connect('mongodb://malbinson:malbinson1@ds119503.mlab.com:19503/albinson', { useNewUrlParser: true,useUnifiedTopology: true })



//ok, start the server and be ready!
app.listen(3000);
console.log("Meow...at localhost:3000")

