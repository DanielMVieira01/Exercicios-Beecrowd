var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

var n = 0;

lines.map(i => {
    if (parseInt(i) % 2 === 0) {
      n++;
    }
  });

console.log(`${n} valores pares`);
