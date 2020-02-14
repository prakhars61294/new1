var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number: ', function(x) {
    rl.question('Enter another number: ', function(y) {
        rl.close();
    });
});