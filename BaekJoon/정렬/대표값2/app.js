const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

const N = input.length;

function getAvg(input) {
  const sum = input.reduce((a, b) => a + b);
  const sort = input.sort();
  console.log(sum/N);
  console.log(sort[Math.floor(N/2)]);
}

getAvg(input);