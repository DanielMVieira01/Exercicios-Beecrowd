var input = `3.0
4.0
5.2`;
var lines = input.split('\n');
var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);
var PI = 3.14159;

var Triangulo = (A * C ) / 2.0;
var Circulo = PI * Math.pow(C, 2);
var Trapesio = ((A + B) * C) / 2.0;
var Quadrado = B * B;
var Retangulo = A * B;

console.log("TRIANGULO: " + Triangulo.toFixed(3));
console.log("CIRCULO: " + Circulo.toFixed(3));
console.log("TRAPEZIO: " + Trapesio.toFixed(3));
console.log("QUADRADO: " + Quadrado.toFixed(3));
console.log("RETANGULO: " + Retangulo.toFixed(3));
