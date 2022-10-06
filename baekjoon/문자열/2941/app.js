const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("Q");
  }

  return input.length; // return input일 경우 QeQQak를 반환한다.
}

console.log(solution(input));

// console.log(answer += str.length); 
