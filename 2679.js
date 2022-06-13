var input = require("fs").readFileSync("stdin","utf8");
let valor = input.split("\n");

let n= parseInt(valor);

if (n % 2 === 0) {
  console.log(n+ 2);
} else {
  console.log(n+ 1);
}