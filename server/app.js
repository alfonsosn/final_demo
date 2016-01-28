var path = require('path');
var express = require('express');

//Creating an express app
var app = express(); 
module.exports = app; 

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









