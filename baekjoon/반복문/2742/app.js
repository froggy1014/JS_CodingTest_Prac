const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString();

console.log(solution(input));

function solution(input)
{ 
  let answer = '';
  for (let i = input ; i >= 1 ; i--){
    answer += i+"\n";
  }
  return answer;
}

