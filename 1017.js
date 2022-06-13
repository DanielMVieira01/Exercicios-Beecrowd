var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

var gastoViagem = parseInt (lines.shift());
var velocidadeMedia = parseInt (lines.shift());

var percorrido = gastoViagem * velocidadeMedia;

var qtdLitros = percorrido / 12;

console.log(qtdLitros.toFixed(3));
