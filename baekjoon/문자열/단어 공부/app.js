const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().toLowerCase()

function solution(str){
const map = new Map();
let max = Number.MIN_SAFE_INTEGER;
let answer;
for ( let x of str ){
  if(map.has(x)) map.set(x, map.get(x)+1)
  else map.set(x, 1);
}

for ( let y of map){
  const [ a, b ] = y;
  if ( max === b ) answer = '?';
  if ( max < b ){
    max = b; 
    answer = a.toUpperCase();
    }
  }
  return answer;
}
console.log(solution(str));