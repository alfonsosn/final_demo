var path = require('path');
var express = require('express');
var timeslots = require('./models/timeslots');

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

app.get('/schedules', function (req, res, next) {
    timeslots.distinct("weeklySched", {length: req.query.length}, function (err, finals) {
   		if (err) return next(err);
        res.send(finals);
    })	
});

app.get('/classes', function (req, res, next) {
    timeslots.find({weeklySched: req.query.weeklySched, length: req.query.length},
    				{	length: false, weeklySched: false, finalClass: false,
                        examDay: false, finalDate: false, 
                        __v: false, _id: false},
    				function (err, finals) {
   		if (err) return next(err);
        res.send(finals);
    })	
});











