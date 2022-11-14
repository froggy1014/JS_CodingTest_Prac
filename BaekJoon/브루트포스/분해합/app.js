const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim()*1;


function solution(input) {
  let cnt = 0;
  if( input > input.toString().length * 9) {
    cnt = input - input.toString().length * 9
  }
  while(cnt++ <= input) {
    let acc = cnt.toString().split('').reduce((a,b) => Number(a) + Number(b), 0);
    const sum = cnt + acc;
    if(sum === input) return cnt
  }
  return 0;
}

console.log(solution(input));




