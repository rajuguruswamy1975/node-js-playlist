var http = require('http');
var fs = require('fs');






var server = http.createServer(function(req, res) {
    console.log('Request was made from  : ' + req.url);

    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/ninjas') {
        res.writeHead(200, { 'ContentType': 'application/json' });
        var myObj = {
            name: "Raju",
            Job: "Software Enginner",
            Age: 43
        };
        res.end(JSON.stringify(myObj));
    } else {
        res.writeHead(404, { 'ContentType': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }


});

server.listen(3000, '127.0.0.1');
console.log('This is my server listening to port 3000');