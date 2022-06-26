const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const arr = [];

input.forEach(x => {
  const num = x % 42;

  if(arr.indexOf(num) === -1){
    arr.push(num);
  }
});
console.log(arr.length);