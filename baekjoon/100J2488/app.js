const fs=require('fs');
const [num1,num2]=fs.readFileSync('./input.txt').toString().trim().split('\n');

solution(num1,num2);

function solution(num1,num2){
  let answer = 0;
  let rev_num = num2.toString().split('').reverse()
  for (let x of rev_num) console.log(num1*x);
  answer = num1*num2;
  console.log(answer);
}





