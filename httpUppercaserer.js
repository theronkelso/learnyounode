//httpUpperCaserer.js

var http = require('http');
var map = require('through2-map');

var PORT = process.argv[2];

var server = http.createServer(function(req, res){
  //request handling logic...
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(PORT);
console.log('Server running at localhost:'+ PORT);
