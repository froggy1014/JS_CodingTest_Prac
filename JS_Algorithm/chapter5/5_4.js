function solution(n,arr){
  let answer=0, lt=0, sum=0;

  for ( let rt =0; rt < arr.length; rt++)
  {
    sum += arr[rt];
    while(sum > 5){
      sum -=arr[lt++];
    }
    answer += (rt-lt+1);
  }
  return answer;
}
const n = 5;
const arr = [1,1,3,2]
console.log(solution(n,arr))