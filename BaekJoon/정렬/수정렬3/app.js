let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const N = Number(input.shift());

const countingSorting = Array(N).fill(0);
let answer = '';

for(let i = 0; i < input.length ; i++){
  countingSorting[input[i]]++;
}

countingSorting.map((v, i) => {
  if(v !== 0) answer += String(i).repeat(v)
})

console.log(answer.split('').join('\n'));