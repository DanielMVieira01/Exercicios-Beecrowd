var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

let qtdSegundos = parseInt(lines);

let qtdHoras = parseInt(qtdSegundos / 3600);
qtdSegundos = qtdSegundos % 3600;

let qtdMinutos = parseInt(qtdSegundos / 60);
qtdSegundos = qtdSegundos % 60;

console.log(`${qtdHoras}:${qtdMinutos}:${qtdSegundos}:`);
