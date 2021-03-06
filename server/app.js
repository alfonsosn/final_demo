var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
var writeConstructor = require('./writeStream')
var fs = require('fs')

//Creating an express app
var app = express();
module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//  Path of our public and index.html directory.
//  [ROOT]/public | [ROOT]/index.html
var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res, next) {
    res.sendFile(indexHtmlPath);
});

app.post('/', function (req, res, next) {
   	if (req.body.params.length == 0) 
      res.send("nothing to send")
   	fs.writeFile(publicPath + '/uploads/finals.ics', writeConstructor(req.body.params))
});


