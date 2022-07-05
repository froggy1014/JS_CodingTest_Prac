const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');


const n = input.shift()*1;

let score = [];
let subject = [];
let cnt = 0;
for(let i = 0 ; i < input.length; i++){
  score.push(input[i].split(' ').map(Number));
  subject.push(score[i].shift());
}

for ( let k = 0 ; k < score.length ; k++){
  let cnt = 0;
  let avg = (score[k].reduce((a,c) => a+c))/subject[k]
  for( x of score[k]){
    if( x > avg) cnt++
  }
  console.log((cnt/subject[k]*100).toFixed(3)+'%');
}
