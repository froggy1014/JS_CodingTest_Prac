const fs=require('fs');
const input  = fs.readFileSync('./input.txt').toString().trim().split('\n');

let n = input[0];
let arr = input[1].split(' ');
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for(let i = 0 ; i < arr.length; i++){
  min = Math.min(min, arr[i]);
  max = Math.max(max, arr[i]);
}
console.log(min, max);