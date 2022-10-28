// function solution(k, arr)
// {
//   let answer = 0;
//   for( let rt = k-1; rt < arr.length; rt++)
//   {
//     let temp_total = 0;
//     temp_total = arr[rt-2]+arr[rt-1]+arr[rt]
//     if(answer < temp_total) answer = temp_total ;
//   }
//   return answer;
// }
// k = 3;
// arr = [12,15,11,20,25,10,20,19,13,15]
// console.log(solution(k,arr))

function solution(k, arr)
{
  let answer = 0, temp_total = 0;
  for(let i = 0; i < k; i++) temp_total += arr[i];
  answer = temp_total;
  for (let i = k ; i < arr.length; i++)
  {
    temp_total += arr[i]-arr[i-k]
    answer = Math.max(answer, temp_total);
  }
  return answer;
}
k=3;
arr = [12,15,11,20,25,10,20,19,13,15];
console.log(solution(k,arr))