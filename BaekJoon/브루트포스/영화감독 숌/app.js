const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

const std = '666'
let cnt = 0;
let number = 0;
while(cnt < Number(input)) {
  number++;
  if(String(number).includes(std)) cnt++; 
}
console.log(number);