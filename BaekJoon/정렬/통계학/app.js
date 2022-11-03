let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);
let [M, ...N] = input;
const sortedArr = N.sort((a,b) => a - b)

console.log(getAvg(sortedArr, M));
console.log(getCen(sortedArr, M));
console.log(getFreq(sortedArr, M))
console.log(getRange(sortedArr, M)); 

function getAvg(sortedArr, M) {
  return parseInt(Math.round(sortedArr.reduce((a,b) => a + b, 0)/M));
} 

function getCen(sortedArr, M) {
  return sortedArr[Math.floor(M/2)]
}

function getFreq(sortedArr) {
  const frequentMap = new Map();
  
  for( let i = 0; i < M; i++ ) {
    if(frequentMap.has(sortedArr[i])) frequentMap.set(sortedArr[i], frequentMap.get(sortedArr[i])+1)
    else frequentMap.set(sortedArr[i], 1);
  }

  let max = 0;
  let answer;
  frequentMap.forEach((v, i) => {
    if( max < v ){
      max = v;
      answer = [];
      answer.push(i);
    } else if ( max === v ) answer.push(i);
  }) 
  return answer.length === 1 ? answer[0] : answer[1];
}

function getRange(sortedArr, M){
  return sortedArr[M-1] - sortedArr[0];
}