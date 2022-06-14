const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

solution(input)

function solution(a){
  if( a >= 90 && 100 >= a) console.log('A');
  else if( a >= 80 && 90 > a) console.log('B');
  else if( a >= 70 && 80 > a) console.log('C');
  else if( a >= 60 && 70 > a) console.log('D');
  else console.log('F');
}