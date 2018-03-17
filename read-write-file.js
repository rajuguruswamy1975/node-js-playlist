var fs = require('fs');

var readmeText = fs.readFileSync('readMe.txt', 'utf8');
var writeText = fs.writeFileSync('WriteMe1.txt', readmeText);

var readme = fs.readFile('readme.txt', 'utf8', function(err, data) {
    console.log(data);
    fs.writeFile('writeMe.txt', data, function() {
        console.log('Data has been written in to the file')
    });
});



console.log('test');