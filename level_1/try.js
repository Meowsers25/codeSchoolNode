var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});
    var contents = fs.readFileSync('index.html');
    console.log(contents);
    response.write('Hello, this is dog!');
    response.end();
}).listen(process.env.PORT, function(){
  console.log('Listning on port ' + process.env.PORT + '\n');
})