var lines = input.split('\n');

var raio = parseFloat(lines);
var PI = 3.14159;

var VolumeEsfera = (4/3.0) * PI * Math.pow(raio, 3);

console.log("VOLUME = " + VolumeEsfera.toFixed(3));
