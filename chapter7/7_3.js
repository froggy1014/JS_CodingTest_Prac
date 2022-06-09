// function solution(arr){
//   let answer = [];
//   for ( let t of arr) if(t<0) answer.push(t)
//   for ( let x of arr)if(x>0) answer.push(x)
//   return answer;
// }
// let arr = [-8,4,7,-4,-9,2,3];
// console.log(solution(arr))

function solution(arr){
  let answer = arr;

  for (let i=0; i < arr.length-1; i++){
    for(let j=0; j < arr.length-i-1; j++){
      if (arr[j] > 0 && arr[j+1] < 0) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }

  return answer;
}
let arr = [1,2,3,-3,-2,5,6,-6];
console.log(solution(arr))