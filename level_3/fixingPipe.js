//The following code will throw an error because pipe automatically closed our writable stream.

// var fs = require('fs');

// var file = fs.createReadStream('origin.txt');
// var destFile = fs.createWriteStream('destination.txt');

// file.pipe(destFile);

// file.on('end', function(){
//   destFile.end('Finished!');
// });


var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

/*You'll need to consult the pipe documentation to figure
out the option which keeps the Write stream open and
dispatches the end event.*/
file.pipe(destFile, {end: false});


file.on('end', function(){
  destFile.end('Finished!');
});