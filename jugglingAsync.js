var http = require('http');
var urls = [ process.argv[2], process.argv[3], process.argv[4] ]
var results = [];
var resultCount = 1;
var remaining = urls.length;

function getUrl (url, i, callback){
  var req = http.get(url, function(res){
    //console.log(i + ": " + url);
    var resData = '';
    res.setEncoding("utf8");
    res.on("data", function(chunk){
      resData += chunk;
    });
    res.on('end', function(){
      results[i] = resData;
      //console.log('results returned for: ' + url);
      callback(null, results);
    });
  }).on('error', function(e){
    console.log('Got error:' + e.message)
  })
}

function done(err, resutls) {
  //console.log('resultCount = ' + resultCount + ' and urls.length = ' + urls.length );
  if (resultCount === urls.length) {
    results.forEach(function(entry){
      console.log(entry);
    });
  } else {
    resultCount += 1;
    //console.log(resultCount);
    // data.forEach(function(entry){
    //   console.log(entry);
    //});
  }
}

for (var i = 0; i < urls.length; i++) {
  //console.log('in for loop: ' + i + '. ' + urls[i]);
  getUrl(urls[i], i, done);
}
