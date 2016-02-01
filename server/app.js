var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
// var fs = require

//Creating an express app
var app = express();
module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//let's see if changes anything
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

app.post('/schedule', function (req, res, next) {
   	console.log(req.body.params)
   	res.send("fuck you")
});
