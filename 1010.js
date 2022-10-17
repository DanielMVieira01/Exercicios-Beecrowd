var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codValor1, qtdValor1, valorUnitValor1] = lines.shift().split(" ");
let [codValor2, qtdValor2, valorUnitValor2] = lines.shift().split(" ");

let TotalValor1 = qtdValor1 * valorUnitValor1;
let TotalValor2 = qtdValor2 * valorUnitValor2;

let valorTotalCompra = TotalValor1 + TotalValor2;

console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));