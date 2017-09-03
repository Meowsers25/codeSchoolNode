/*Next, we'll use the request module to make a simple web
request and log the response to the console. You can use
this example in the README.*/

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);

//To start, require the request module and assign the return function to a variable.
var request = require('request');

/*Next, issue a request to searchURL. Remember, the callback function for the
request function takes three arguments: error, response and body.*/
request(searchURL, function(error, response, body){
  
  //Finally, log the response body to the console using console.log().    
  console.log(body);
});