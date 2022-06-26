const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');


solution(input);

function solution(input)
{ 
  for (let i = 1 ; i <= input[0] ; i++){
    let numbers = input[i].split(' ')
    console.log(`Case #${i}: ${Number(numbers[0])} + ${Number(numbers[1])} = ${Number(numbers[0])+Number(numbers[1])}`);
  }
}

