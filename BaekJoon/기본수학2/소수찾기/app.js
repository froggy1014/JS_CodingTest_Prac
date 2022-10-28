const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split(/\s+/);

const [n, ...arr] = input;
let cnt = 0;

for ( let x of arr ) {
  if(isPrimeNumber(Number(x))) cnt++;
}
console.log(cnt);


function isPrimeNumber(number) {
  if ( number < 2 ) return false;

  for( let i = 2; i < number; ++i){
    if( number%i === 0) return false;
  }

  return true;
}
