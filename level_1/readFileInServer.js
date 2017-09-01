var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  
  /*After response.writeHead(200), add a call to fs.readFile()
  that reads index.html asynchronously. Remember to pass a
  callback function, that accepts an error parameter, and a
  contents parameter.*/
  fs.readFile('index.html', function(error, contents){
    //Now that you have the file contents, write it to the response.
    response.write(contents);
    //To finish up, end the response after the file contents have been written.
    response.end();
  });
  //response.end();
}).listen(8080);