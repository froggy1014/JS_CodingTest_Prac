// function solution(sum,arr1){
//   let answer = 0;
//   for(let i = 0; i<arr1.length; i++)
//   {
//     let cnt = 0;
//     let temp_list = [];
//     for(let j = i; j < arr1.length+1; j++){
//       if( cnt < sum )
//         {
//         temp_list.push(arr1[j]);
//         cnt += arr1[j];
//         }
//       else if (cnt === sum)
//       {
//         console.log(temp_list);
//         answer++;
//         break;
//       }
//       else break;
//     }
//   }
//   return answer
// }
// let sum = 6;
// let arr1 = [1,2,1,3,1,1,1,2]
// console.log(solution(sum,arr1))

function solution (sum, arr1){
  let answer = 0, lt=0, total=0;
  for(let rt=0; rt<arr1.length; rt++)
  {
    total += arr1[rt];
    if(total===sum) answer++;
    while(total >= sum)
    {
      total -= arr1[lt++];
      if(total === sum) answer++;
    }
  }
  return answer;
}
let sum = 6;
let arr1 = [1,2,1,3,1,1,1,2]
console.log(solution(sum,arr1))