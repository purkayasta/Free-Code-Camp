var filterMod = require('./Module/filter');
var filter = process.argv[3];
var dir = process.argv[2];
//var dir = path.dirname(require.main.filename);

filterMod(dir, filter, function(err, data){
    if(err){
        return console.log('Something Bad Happended', err);
    }
    else{
        data.forEach(function(file){
            console.log(file);
        })
    }
});