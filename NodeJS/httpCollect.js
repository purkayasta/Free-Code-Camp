var blModule = require('bl');
var http = require('http');

// Using Module 


// http.get(process.argv[2], (res)=>{
//     res.pipe(blModule((err, data)=> {
//         if (err){
//             return console.error(err);
//         } else{
//             console.log(data.length);
//             console.log(data.toString());
//         }
        
//     }));
// });

var all = '';

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
        all += data;
    });
    response.on('end', function(){
        console.log(all.length);
        console.log(all);
    })
});