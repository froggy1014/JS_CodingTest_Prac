const fs=require('fs');
const [a, b] = fs.readFileSync('./input.txt').toString().trim().split('\n');

const result = b.split('').reduce((a,b) => Number(a)+Number(b), 0);
console.log(result);


