const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

for ( let x of input ){
  let cnt = 0;
  for( let i = Number(x)+1 ; i <= Number(x)*2; i++)  {
    if(isPrimeNumber(Number(i))) cnt++;
  }
  if(cnt !== 0) console.log(cnt);
}

function isPrimeNumber(num){
  if(num === 1) return false;
  for( let i = 2; i <= Math.sqrt(num); i++){
    if ( num%i === 0 ) return false;
  }
  return true;
}

