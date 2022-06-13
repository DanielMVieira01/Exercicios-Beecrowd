var input ='500 35.0';
var lines = input.split('\n');

var distaciaPercorrida = parseInt(lines.shift());
var combustivelGasto = parseFloat(lines.shift());

var consumoMedio = distaciaPercorrida / combustivelGasto;

console.log(consumoMedio.toFixed(3) + " km/l");
