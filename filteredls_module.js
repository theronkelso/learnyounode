var fs = require('fs');
var data = [];

module.exports = function (dir, ext, callback){
  fs.readdir(dir, function (err, files) {
    if (err) {
      callback(err, null);
    } else {
      for (var i = 0; i < files.length; i ++){
         if (files[i].split('.')[1] === ext) {
           data.push(files[i]);
         }
      }
      callback(null, data);
    }
  });

};
