const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString();

console.log(solution(input));

function solution(input)
{ 
  let answer = '';
  let n = input;
  for (let i = 1 ; i <= n ; i++){
    answer += i+"\n";
  }
  return answer;
}

