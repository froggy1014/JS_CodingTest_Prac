const fs=require('fs');
const numbers = fs.readFileSync('./input.txt').toString().trim().split('\n');

let answer = 0;
const numberList = numbers[1].split('');

if ( numbers[1].length === Number(numbers[0]) ){
  for(let i = 0 ; i < Number(numbers[0]) ; i++){
    answer += Number(numberList[i]);
  }
}else{

}

console.log(answer);



