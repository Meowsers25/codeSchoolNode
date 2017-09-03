/*Let's create an express route that accepts GET requests
on '/tweets' and responds by sending back a static HTML file.*/

var express = require('express');
var app = express();

/*Create a GET route for '/tweets' and give it the proper
callback. The callback function should accept two arguments:
the request and the response.*/
app.get('/tweets', function(request, response){
    
  /*Send back the file tweets.html, which lives under the
  project's root path. Remember to use __dirname to locate
  tweets.html.*/
  response.sendFile(__dirname + "/tweets.html");
});

//Finally, have the express app listen on port 8080.
//app.listen(8080);
app.listen(process.env.PORT);