//httpJsonApiServer.js

var http = require('http');
var url = require('url');
var qs = require('querystring')

var PORT = process.argv[2];

var server = http.createServer(function(req, res){
  //parse URL
  parsedUrl = url.parse(req.url, true);

  //create date
  var d = new Date(parsedUrl.query.iso);

  if (parsedUrl.pathname === "/api/parsetime") {
    results = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  } else if (parsedUrl.pathname === "/api/unixtime") {
    results = { unixtime: d.getTime()};
  } else {
    results = {date: d.getYear()};
  }
  
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(results));
});

server.listen(PORT);
console.log('Server running at localhost:'+ PORT);
