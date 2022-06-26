const fs=require('fs');
const [a,b,c] = fs.readFileSync('./input.txt').toString().trim().split(' ');

console.log(solution(a,b,c));



function solution(a,b,c){
  if( a===b && b===c ) return 10000+(a*1000);
  else if ( a===b || a===c ) return 1000+(a*100);
  else if ( b===c ) return 1000+(b*100);
  else return ((Math.max(a,b,c))*100);
}