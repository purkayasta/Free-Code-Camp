

var save = 0;

for (var i = 2; i < process.argv.length ; i++) {
    save = save + Number(process.argv[i]);
}

console.log(save);