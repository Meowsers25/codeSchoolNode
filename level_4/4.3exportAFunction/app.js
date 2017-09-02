/*Notice the app.js file with the myRequest function below.
Let's refactor myRequest out to its own my_request.js module.*/

//Move the myRequest function and the http require into my_request.js

// 

//Require the my_request.js module in app.js.(exportAFunction.js)
var myRequest = require('my_request');

myRequest('Hello, this is dog.');
