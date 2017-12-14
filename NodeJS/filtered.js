
// My Solution


var fs = require('fs'), path = require('path');

var directoryName = path.dirname(require.main.filename);



var extentionName = '.' + process.argv[2];


fs.readdir(directoryName, function(err, data) {
  
    for (var i = 0; i < data.length; i++) {

        var newExt = path.extname(data[i]);

        if (newExt === extentionName) {
            console.log(data[i]);
        }
    }
});



// Official Solution

// var fs = require('fs')
// var path = require('path')
 
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
 
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function(file) {
//       if (path.extname(file) === ext) {
//           console.log(file)
//       }
//   })
// })