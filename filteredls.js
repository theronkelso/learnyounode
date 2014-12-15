
var fls = require('./filteredls_module');


fls (process.argv[2], process.argv[3], function(err, data){
  if (err) {
    console.log(err);
  }
  else {
    data.forEach(function(entry){
      console.log(entry);
    });
  }
});
