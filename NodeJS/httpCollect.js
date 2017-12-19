var blModule = require('bl');
var http = require('http');

http.get(process.argv[2], (res)=>{
    res.pipe(blModule((err, data)=> {
        if (err){
            return console.error(err);
        } else{
            console.log(data.length);
            console.log(data.toString());
        }
        
    }));
});