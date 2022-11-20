const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('').map(Number);

console.log(input.sort((a, b) => b - a).join(''));