var express  = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://vision:vision@ds159497.mlab.com:59497/vision');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',require('./routes/api'));
app.listen(80);
