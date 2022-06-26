const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

console.log(solution(input));

function solution(input)
{ 
  let answer = '';
  let n = input[0]
  for (let i = 1 ; i <= n ; i++){
    let numbers = input[i].split(' ');
    answer += Number(numbers[0])+Number(numbers[1])+"\n";
  }
  return answer;
}

