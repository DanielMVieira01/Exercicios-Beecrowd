var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

var minutos = (60 * parseInt(lines.shift())) / 30;

console.log(minutos + " minutos");
