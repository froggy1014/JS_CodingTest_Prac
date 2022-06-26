const fs=require('fs');
const input  =  fs.readFileSync('./input.txt').toString().trim().split('\n');

let n = input.length;
let max = 0;
let arr = input.map((v) => v*1);

for(let i = 0; i < n ; i++){
  max = Math.max(max, input[i]);
}
console.log(max);
console.log(arr.indexOf(max)+1);