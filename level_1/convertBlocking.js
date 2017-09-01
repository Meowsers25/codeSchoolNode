var fs = require('fs');

//Start by changing the call from readFileSync() to readFile().
//Next, add a callback method to the readFile() call. This method should accept error and contents parameters.
//To finish it up, remove the contents var declaration, and move the call to console.log() inside your callback.
fs.readFile('index.html', function(error, contents) {
  console.log(contents);
});
