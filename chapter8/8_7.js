function solution(limit, arr)
{
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L,score,time)
  {
    if( L === n ){
      if ( time <= 20) answer = Math.max(answer, score);
    }
    else
    {
      DFS(L+1,score+arr[L][0],time+arr[L][1]);
      DFS(L+1,score,time);
    }
  }
  DFS(0,0,0)
  return answer;
}
let arr = [
  [10,5],
  [25,12],
  [15,8],
  [6,3],
  [7,4]
];
console.log(solution(20,arr));