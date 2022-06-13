var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

let v = lines.filter((valor => valor > 0));

console.log(`${v.length} valores positivos`);
