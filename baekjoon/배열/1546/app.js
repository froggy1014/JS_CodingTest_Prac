const fs=require('fs');
const [n,s] = fs.readFileSync('./input.txt').toString().trim().split('\n');

let score = s.split(' ');
let arr = score.sort((a,b) => a-b);
console.log((arr[arr.length-2]/arr[arr.length-1] *100));

