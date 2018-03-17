var http = require('http');

var server = http.createServer(function(req, res) {

    console.log("Request was made :  " + req.url);

    res.writeHead(200, { 'ContentType': 'text/plain' });
    res.end('hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log("your server is listerning to port 3000");