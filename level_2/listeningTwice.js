var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

  //Add a second 'request' handler to the HTTP server.
  server.on('request', function(request, response){
      
    /*From inside of the new handler, log the message "New request coming in..." using console.log().*/
    console.log("New request coming in...");
  });
server.listen(8080);