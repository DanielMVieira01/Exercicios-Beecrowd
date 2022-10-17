var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var comissao = C * 0.15;
var salario = B + comissao;

console.log("TOTAL = R$ " + salario.toFixed(2));