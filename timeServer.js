var net = require('net');

function zeroFill(i){
  return (i <10 ? "0" : "") + i;
}

function getTimestamp(){
  var now = new Date();
  return now.getFullYear() + '-'
  + zeroFill(now.getMonth() + 1) +'-'
  + zeroFill(now.getDate()) + ' '
  + zeroFill(now.getHours()) + ':'
  + zeroFill(now.getMinutes());
}

var server = net.createServer(function(c){
  //socket logic
  console.log('Server connected.')
  c.on('end', function(){
    console.log('Server disconnected.')
  });
  c.write(getTimestamp() + '\n');
  c.end()
});

server.listen(process.argv[2], function(){
  //ports lower than 1024 require runing node as sudo
  console.log('server bound');
});
