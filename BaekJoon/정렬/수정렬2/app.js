const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

const [ M, ...N ] = input;

let Array = N;

for(let i = 0 ; i < M; i++){
  for(let j = 0; j < M - i; j++ ) {
    if(Array[j] > Array[j+1])[Array[j],Array[j+1]] = [Array[j+1],Array[j]]
  }
}
 
for( let i = 0; i < M ; i++){
  console.log(Array[i]);
}