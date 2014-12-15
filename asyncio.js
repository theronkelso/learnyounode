var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, buf){
	if (err) throw err;
	console.log(buf.split('\n').length - 1);
});
