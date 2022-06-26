const fs=require('fs');
const [a,b]=fs.readFileSync('./input.txt').toString().trim().split(' ');

solution(a,b)

function solution(a,b){
  let hour = parseInt(a);
  let min = parseInt(b);
  
  if( min < 45 ){
    min = 60 - (45 - min)
    if( hour === 0)console.log(23, min);
    else console.log(hour-1, min);
  }
  else {
    console.log(hour, min-45);
  }
}