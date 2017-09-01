var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  
  //Instead of passing the content to response.write(), pass it to response.end().
  //Now, remove the call to response.write().
  //response.write("Hello, this is dog");
  response.end("Hello, this is dog");
}).listen(8080);