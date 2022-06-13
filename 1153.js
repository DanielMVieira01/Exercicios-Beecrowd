var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

function calculoFatorial(n) {

  let fatorial =1;

  while (n >0)
  fatorial *= n --;

  return fatorial;
}

let n = parseInt(lines.shift());

let result = calculoFatorial(n);

console.log(result);