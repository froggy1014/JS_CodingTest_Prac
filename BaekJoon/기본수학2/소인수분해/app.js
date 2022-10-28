const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

let Num = Number(input);
let PrimeFactor = 2;

while(Num !== 1){
  if(Num % PrimeFactor === 0) {
    Num = Num/PrimeFactor;
    console.log(PrimeFactor);
  }
  else PrimeFactor++;
}

