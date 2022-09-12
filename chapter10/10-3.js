// function solution(nums){
//   let n = nums.length;
//   let answer = 0;
//   let arr = nums;
//   let dy = Array.from({length:n}, () => 0)
//   dy[0] = 1;

//   for(let i = 1 ; i < n ; i++){
//     let max = 0;
//     for( let j = i-1; j >= 0 ; j--){
//       if( arr[j] < arr[i] ){
//         max = Math.max(dy[j], max);
//       } 
//     }
//     dy[i] = max+1;
//     answer = Math.max(...dy);
//   }
//   return answer;
// }
// const nums = [5, 3, 7, 8, 6, 2, 9, 4];
// console.log(solution(nums))


function solution(nums){
  let answer = 0;
  let n = nums.length;
  let dy = Array.from({length:n}, () => 0);
  dy[0] = 1;

  for(let i = 1; i < n; i++){
    let max = 0;
    for(let j = i-1; j >= 0; j--){
      if(nums[j] < nums[i] && dy[j]>max){
        max = dy[j];
      } 
    }
    dy[i] = max+1;
    answer = Math.max(answer, dy[i]);
  }
  
  return answer;
}
const nums = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(nums))