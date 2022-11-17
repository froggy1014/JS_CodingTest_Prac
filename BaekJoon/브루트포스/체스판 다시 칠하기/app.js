const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

const [L, R] = input.shift().split(' ');

const HALF = 32;
let MIN = Number.MAX_SAFE_INTEGER;
console.log(L,R)
if( L + R === 16) {
  let acc = 0;
  input.forEach((v) => {
    acc += v.split('').filter((v) => v !== 'W').length
  })
  if ( acc > HALF ) MIN = Math.min(MIN, acc - HALF)
  if ( acc < HALF ) MIN = Math.min(MIN, HALF - acc)
  return console.log(MIN);
}

for(let h = 0 ; h <= L - 8 ; h++){
  for( let w = 0 ; w <= R - 8 ; w++){
    let white = 0;
    let black = 0;
    for( let j = w ; j < 8 ; j++) {
      black += input[j].split('').filter((v) => v !== 'W').length
      white += input[j].split('').filter((v) => v !== 'B').length
    }

    if( black < white) {
      if ( black > HALF ) MIN = Math.min(MIN, black - HALF)
      if ( black < HALF ) MIN = Math.min(MIN, HALF - black)
    }

    if ( white < black ) {
      if ( white > HALF ) MIN = Math.min(MIN, white - HALF)
      if ( white < HALF ) MIN = Math.min(MIN, HALF - white)
    }
    
    // if( black === white ) return console.log(0);
  }
}
console.log(MIN);


