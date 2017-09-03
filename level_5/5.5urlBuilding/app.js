/*Let's create a page which calls the Twitter search API and
displays the last few results for Code School. The first step
is to construct the proper URL, which is all you need to do in
this challenge.

Complete the URL options which will be sent into the the url
module's format method. The URL you'll want to construct is the
following: http://search.twitter.com/search.json?q=codeschool*/

var url = require('url');

options = {
  // add URL options here
  //Add the protocol attribute to options.
   protocol: "http",
   //Add the host attribute to options.
   host: "search.twitter.com",
   //Add the pathname attribute to options.
   pathname: "search.json",
   //Add an attribute which takes an object of query parameters, in this case we only need q to search Twitter.
   query: {q: "codeschool"}
};

var searchURL = url.format(options);
console.log(searchURL);
