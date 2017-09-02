var http = require('http');

//Remove the original request callback.
var server = http.createServer();

/*Add an event listener on the server variable that 
listens to the request event. The event listener 
should take a callback function with two arguments,
request and response.*/
server.on('request', function(request, response){
    
  /*Move the logic for handling the request from 
  the http.createServer() callback to your new 'request'
  event listener. Remember to remove the http.createServer()
  callback once the code has been moved.*/    
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);
