function solution(d, budget) {
  const numArr = d.sort((a, b) => a - b);
  let acc = 0;
  if(numArr[0] > budget) return 0;
  
  for( let i = 0 ; i < numArr.length ; i++ ) {
    if (acc === budget) return i;
    if (acc > budget) return i - 1;
    acc += numArr[i];
  }

  return numArr.length;
}

console.log(solution([1,1,1], 2))