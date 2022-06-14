const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

solution(input)

function solution(a){
  if ( a%4 === 0){
    if(a%100 !== 0 || a%400 === 0)
      {
        console.log('1');
        return a;
      }
  console.log('0');
  }
  else console.log('0');
}