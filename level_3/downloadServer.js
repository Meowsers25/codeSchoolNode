var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  
  //Use pipe() to send index.html to the response.
  file.pipe(response);
}).listen(process.env.PORT);