const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

let answer = 0;
const char = input.split('');

const dial = ['', '', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', ''];

for ( let c of char){
  dial.map((v,i) => {
    if(v.indexOf(c) !== -1 ) answer += i;
  })
}

console.log(answer);