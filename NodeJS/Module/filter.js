var fs = require('fs'),
path = require('path');

module.exports = function(dirtory, extFilter, callback){

    fs.readdir(dirtory, function(err, list){
        if(err){
            return callback(err);
        }
        else{
            list = list.filter(function(file){
                return path.extname(file) === '.'+extFilter;
            });
            return callback(null, list);
        }
    });
}