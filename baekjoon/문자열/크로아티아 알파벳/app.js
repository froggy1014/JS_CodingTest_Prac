const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

let croatia = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("Q");
  }

  return input.length; 
}

console.log(solution(input));

