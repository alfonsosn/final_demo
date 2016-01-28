// Grabbing our server from our server/index.js file.
var server = require('./server');

var PORT = Number(process.env.PORT || 8080);


server.listen(PORT, function () {
    console.log('Server started on port ' + PORT.toString());
});
