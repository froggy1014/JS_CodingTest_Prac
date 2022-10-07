const fs=require('fs');
const [a,b] = fs.readFileSync('./input.txt').toString().trim().split(' ');

let num1 = Number(a.split('').reverse().join(''))
let num2 = Number(b.split('').reverse().join(''));

console.log(Math.max(num1, num2));




