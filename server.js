// server.js
// where your node app starts

// init project
var express = require('express');

var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var ipaddress = request.headers['x-forwarded-for'].split(',')[0]
  var language = request.headers['accept-language'].split(',')[0]
  var software = request.headers['user-agent'].split('(')[1].split(')')[0]
  var obj = {
    ipaddress: ipaddress,
    language: language,
    software: software
  }
  response.send(obj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
