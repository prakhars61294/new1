var http = require('http');
var server = http.createServer(function(req, res) {
    res.end('Server Works!!!');
});
server.listen(3000, 'localhost', function() {
    console.log('server created on port:3000');
});