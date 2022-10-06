const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();

let count = 0;
const n = +input;


for ( let i = 1 ; i <= n ; i++){
  numList = String(i).split('');
  if ( i < 100 ) {
    count++;
    continue;
  }
  let A = Number(numList[0]) - Number(numList[1]);
  let B = Number(numList[1]) - Number(numList[2]);
  if( A === B) count++;
}
console.log(count);