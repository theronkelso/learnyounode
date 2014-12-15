//console.log(process.argv);
//console.log(process.argv.length);
var i = 2;
var total = 0;
while (i < process.argv.length) {
	//console.log(process.argv[i]);
	total += Number(process.argv[i]);
	//console.log(i + '. ' + total);
	i++;
};
console.log(total);
