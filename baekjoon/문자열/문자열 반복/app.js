const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().split('\n');


for ( let x of str) {
  let string = ''
  const [ a, b ] = x.split(' ');
  if(b){
    for ( let y of b ){
      string += y.repeat(a);
    }
  console.log(string);
  }
} 