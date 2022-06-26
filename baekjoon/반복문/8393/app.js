const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString();

let sum = 0;

for(let i = 1 ; i <= input; i++){
  sum += i;
}
console.log(sum);

