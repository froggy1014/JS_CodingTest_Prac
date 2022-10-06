const fs=require('fs');
const [a,b] = fs.readFileSync('./input.txt').toString().trim().split(' ');

let temp1 = Number(a.split('').reverse().join(''))
let temp2 = Number(b.split('').reverse().join(''));

temp1 > temp2 ? console.log(temp1) : console.log(temp2)




