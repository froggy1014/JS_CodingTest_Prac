const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

input.shift();
const coor = input.map((v) => v.split(' '));

let results = '';

coor.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
}).forEach((coor) => {
  results += `${coor[0]} ${coor[1]}\n`;
});

console.log(results.trim());

