var http = require('http');

http.createServer(function(request, response) {
  
  /*First, tell the response which status it should have (a successful status is 200).*/
  response.writeHead(200);
  //Next, write a message to the response body in the form of "Hello, this is <your name here>".
  response.write("Hello, this is Chris");
  //To finish it up, tell the response to end so the client on the other side knows it has received all the data.
  response.end();
}).listen(8080);