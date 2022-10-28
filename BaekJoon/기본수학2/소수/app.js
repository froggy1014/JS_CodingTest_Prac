const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

const [M, N] = input;
const PrimeArray = [];

for ( let i = M ;  i <= N ; i++) if(isPrimeNumber(i)) PrimeArray.push(i)

if(PrimeArray.length === 0) console.log(-1)
else {
  console.log(PrimeArray.reduce((a,b) => a+b, 0));
  console.log(Math.min(...PrimeArray));
}


function isPrimeNumber(number) {
  if ( number < 2 ) return false;

  for( let i = 2; i < number; i++){
    if( number%i === 0) return false;
  }

  return true;
}