var http = require('http');
var server = http.createServer(function(req, res) {
    res.write("Server are worked!!!!!")
    res.writeHead(200, { "content-type": "plain/text" });
    res.end();
}).listen(3000, 'localhost', () => {
    console.log("Server are run in port number 8080")
});