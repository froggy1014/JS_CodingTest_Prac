// function solution(arr) {
//   let answer = [];

//   for( let i = 0 ; i < arr.length; i++){
//     for (let j = 0; j < arr.length-i-1; j++){
//       if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//     }
//     answer.unshift(arr[arr.length-i-1]);
//   }
//   return answer;
// }
// let arr = [11, 7, 5, 6,10,9];
// console.log(solution(arr));

function solution(arr) {
  let answer = arr;
  for( let i = 0 ; i < arr.length; i++){
    let temp = arr[i], j;
    for(j=i -1; j >= 0; j--){
      if(arr[j]>temp) arr[j+1] = arr[j]
      else break;
    }
    arr[j+1]=temp;
  }
  return answer;
}
let arr = [11, 7, 5, 6,10,9];
console.log(solution(arr));
