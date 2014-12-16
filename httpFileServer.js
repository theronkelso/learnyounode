//httpFileServer.js

var http = require('http');
var fs = require('fs');
var PORT = process.argv[2];
var FILE = process.argv[3];

var server = http.createServer(function(req, res){
  //request handling logic...
  var readStream = fs.createReadStream(FILE);
  readStream.on('open', function (){
    readStream.pipe(res);
  });
});

server.listen(PORT);
console.log('Server running at localhost:'+ PORT + " serving: " + FILE);
