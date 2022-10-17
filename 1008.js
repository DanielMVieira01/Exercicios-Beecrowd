var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseFloat(lines.shift());

var nFuncionarios = A;
var salario = B*C;

console.log("NUMBER = " +nFuncionarios);
console.log("SALARY = U$ " +salario.toFixed(2));