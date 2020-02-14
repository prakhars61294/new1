const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    const ur = req.url;
    const met = req.method;
    const readData = fs.readFileSync('./system.json');
    var body = readData.toString();
    if (met == 'GET' && ur == "/users") {
        if (body.length > 0) {
            res.statusCode = 200;
            res.setHeader("Content-type", "application/json");
            console.log(body);
            res.end();
        } else {
            res.statusCode = 404;
            res.setHeader("Content-type", "application/json");
            console.log("Data not found!");
            res.end();
        }
    }
    if (met == 'GET' && ur.slice(0, ur.length - 1) == "/users/id=") {
        if (body.length > 0) {
            body = JSON.parse(body);
            const ids = Number(ur[ur.length - 1]);
            var index = [];
            for (var i = 0; i < body.length; i++) {
                index.push(body[i].id)
            }

            if (index.indexOf(ids) !== -1) {
                console.log(body[index.indexOf(ids)]);
                res.writeHead(200, "Content-type", "application/json");
                res.end(JSON.stringify(body[index.indexOf(ids)]));
            } else {
                res.writeHead(400, "Content-type", "application/json");
                console.log("Data not found!");
                res.end();
            }
        }
    }
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});