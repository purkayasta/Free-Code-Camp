const net = require('net');

let date = new Date();

let portNumber = process.argv[2];

let formattedDate = date.getFullYear() + "-" + date.getMonth()+1  + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() ;


const server = net.createServer((socket) => {
    socket.write(formattedDate);
    socket.end("\n");
  
  }).on('error', (err) => {
    // handle errors here
    throw err;
  });

  server.listen(portNumber);



// Official Solution


//   var net = require('net')

//   function zeroFill (i) {
//     return (i < 10 ? '0' : '') + i
//   }

//   function now () {
//     var d = new Date()
//     return d.getFullYear() + '-' +
//       zeroFill(d.getMonth() + 1) + '-' +
//       zeroFill(d.getDate()) + ' ' +
//       zeroFill(d.getHours()) + ':' +
//       zeroFill(d.getMinutes())
//   }

//   var server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
//   })

//   server.listen(Number(process.argv[2]))