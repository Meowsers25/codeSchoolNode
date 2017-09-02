var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

/*Listen for the 'close' event on the server. The event
listener should take a callback function that accepts no arguments.*/
server.on('close', function(){
    
  //Inside the 'close' callback, log the message "Closing down the server...".    
  console.log('Closing down the server...');
});

server.listen(8080);
