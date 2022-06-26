const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

solution(Number(input));

function solution(n){
  for( let i = 1 ; i < 10 ; i++){
    console.log(`${n} * ${i} = ${n*i}`);
  }
}