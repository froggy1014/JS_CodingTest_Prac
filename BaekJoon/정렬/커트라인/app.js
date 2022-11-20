const fs=require('fs');
const [A, B]=fs.readFileSync('./input.txt').toString().trim().split('\n');

const N = A.split(' ').map(Number)[1];
const score = B.split(' ').map(Number).sort((a,b) => a-b);

console.log(score.at(`-${N}`));
