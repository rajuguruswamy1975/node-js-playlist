var http = require('http');
var fs = require('fs');




var server = http.createServer(function(req, res) {
    console.log('Request was made from  : ' + req.url);
    res.writeHead(200, { 'ContentType': 'application/json' });

    var myObj = {
        name: "Raju",
        Job: "Software Enginner",
        Age: 43
    };

    res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1');
console.log('This is my server listening to port 3000');