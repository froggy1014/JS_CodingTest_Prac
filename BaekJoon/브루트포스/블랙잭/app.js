const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

const max = Number(input[0].split(' ')[1]);
const array = input[1].split(' ').map(Number);
function solution() {
  let tempMax = 0;
  for(let i = 0; i < array.length - 2; i++) {
    for( let j = i+1; j < array.length - 1; j++) {
      for( let k = j+1; k < array.length; k++ ) {
        const sum = array[i] + array[j] + array[k]
        if ( tempMax < sum && sum < max ) {
          tempMax = sum;
        }
        if ( max === sum ) return sum;
      }
    }
  }
  return tempMax;
}

console.log(solution(max, array));
