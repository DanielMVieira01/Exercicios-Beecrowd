var input = '7 14 106';
var lines = input.split(" ");

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]);


var mab = (a + b + Math.abs(a - b)) /2;
var mxc = (c + mab + Math.abs(c - mab)) / 2;

console.log(mxc + " eh o maior");
