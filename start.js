var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fsg-app');

// Grabbing our server from our server/index.js file.
var server = require('./server');

var PORT = 8080;

mongoose.connection.once('open', function () {
    server.listen(PORT, function () {
	    console.log('Server started on port ' + PORT.toString());
	});
});