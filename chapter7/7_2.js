function solution(arr){
  let answer = arr;
  for (let i=0; i < arr.length-1; i++){
    for(let j=0; j < arr.length-i-1; j++){
      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
  return answer;
}
arr = [35,23,11,4,36,1];
console.log(solution(arr))