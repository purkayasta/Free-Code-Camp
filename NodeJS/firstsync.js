var fsModule = require('fs');

var data = process.argv[2];

// fsModule.readFile(data, 'utf8', function(err, contents){
//     console.log(contents.split('\n').length);
// });

var file = fsModule.readFileSync(data);

var contents = file.toString();

console.log(contents.split('\n').length -1);