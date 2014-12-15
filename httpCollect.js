//httpClient.js

var http = require('http');

var url = process.argv[2];

var req = http.get(url, function(res){
  var resData = '';
  res.setEncoding("utf8");
  res.on("data", function(chunk){
    resData += chunk;
  });
  res.on('end', function(){
    console.log(resData.length)
    console.log(resData);
  });
}).on('error', function(e){
  console.log('Got error:' + e.message)
})
