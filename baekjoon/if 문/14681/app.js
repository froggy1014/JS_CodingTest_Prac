const fs=require('fs');
const [a,b]=fs.readFileSync(0).toString().trim().split('\n');

solution(a,b)

function solution(a,b){
  let x = parseInt(a);
  let y = parseInt(b);

  if( x > 0 && y > 0) console.log('1');
  else if ( x < 0 && y > 0 ) console.log('2'); 
  else if ( x < 0 && y < 0 ) console.log('3'); 
  else if ( x > 0 && y < 0 ) console.log('4'); 
}