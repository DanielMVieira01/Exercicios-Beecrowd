var input = require("fs").readFileSync("stdin","utf8");
var numeros = input.split("\n");

var n = parseInt(numeros.shift());
var i = 0;

while (n > i) {
    if (parseInt (numeros[i]) !== 0) {
      if (numeros[i] % 2 === 0 && numeros[i] > 0) {
        console.log("EVEN POSITIVE");
      }
        if (parseInt(numeros[i]) % 2 === 0 && numeros[i] < 0) {
            console.log("EVEN NEGATIVE");
        }
        if (parseInt(numeros[i]) % 2 !== 0 && numeros[i] > 0) {
            console.log("ODD POSITIVE");
        }
        if (parseInt(numeros[i]) % 2 !== 0 && numeros[i] < 0) {
            console.log("ODD NEGATIVE");
        }
    }
        else {
            console.log("NULL");
        }
    i ++;
}
