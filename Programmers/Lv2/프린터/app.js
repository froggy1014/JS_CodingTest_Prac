function solution(priorities, location) {
  let count = 0;
  const maxIndex = priorities.indexOf(Math.max(...priorities));
  const priorArr = priorities.map((v, i) => [v, i])
  const slicedArr = priorArr.splice(0, maxIndex);
  priorArr.push(...slicedArr);

  while(1) {
    const elF = priorArr.shift();
    
    if(checkPriorty(elF)) {
      if(elF[1] === location) return count+1;
      count += 1;
    }
    else priorArr.push(elF);
  }

  function checkPriorty(arr) {
    const result = priorArr.filter((prior) => prior[0] > arr[0])
    return !result.length;
  }
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));