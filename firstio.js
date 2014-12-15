var fs = require('fs');

var filename = process.argv[2];
//console.log(filename);

var buffer = fs.readFileSync(filename);
var strContents = buffer.toString();
//console.log(strContents);

var subStrings = strContents.split('\n');
//console.log(subStrings);

var lineCount = subStrings.length - 1;
console.log(lineCount);
