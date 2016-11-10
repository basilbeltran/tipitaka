var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan')('dev');
var Routes = require('./routes.js');


var app = express();
app.use(logger);
// app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
Routes(app);

mongoose.connect('mongodb://localhost/buddha', (err) =>{
  if(err){ console.log("mongo error " + err); }
  else{console.log("Got mongo server ");  }
});

var PORT = process.env.PORT || 40000;
app.listen(PORT, (error) => {
    if(error) {console.log("Server error: ", error)}
    else {console.log("Server started on port: ", PORT)}
});
