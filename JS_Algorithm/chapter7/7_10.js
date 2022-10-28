// function solution(arr, val){
//   let answer;
//   arr.sort((a,b) => a-b);
//   answer= arr.indexOf(val)+1
//   return answer
// }
// let arr = [23,87,65,12,57,32,99,81];
// let val = 32
// console.log(solution(arr,val))

function solution(arr, val){
  let answer;
  let lt = 0, rt = arr.length-1;
  arr.sort((a,b) => a-b);
  while(lt<=rt){
    let mid = parseInt((lt+rt)/2)
    if(arr[mid] === val){
      answer = mid+1
      break;
    }
    else if(arr[mid] > val) rt = mid-1;
    else lt = mid+1;
  }
  return answer
}
let arr = [23,87,65,12,57,32,99,81];
let val = 32
console.log(solution(arr,val))

