var fs = require('fs');

// 1.Create directory

//fs.mkdirSync('stuff');

//2. Remove directory
//fs.rmdirSync('stuff');

//3. Create directory and create file.

/*
fs.mkdir('stuff', function() {
    console.log('stuff directory has been created');
    fs.readFile('readme.txt', 'utf8', function(err, data) {
        fs.writeFile('./stuff/writeme.txt', data, function() {
            console.log('readme.txt file has been created under stuff directory');
        });
    });
});
*/

fs.unlink('./stuff/writeme.txt', function() {
    console.log('writeme file  has been deleted from staff directory');
    fs.readdir('stuff', function() {
        console.log('stuff directory has been deleted');
    });
});




// 4.Delete file
//fs.unlink('writeMe.txt');