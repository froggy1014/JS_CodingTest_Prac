function solution(capa,arr){
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L,sum){
    if(sum < capa) return;
    if(L === n){
        answer = Math.max(answer,sum);
    }
    else
    {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  } 
  DFS(0,0);
  return answer;
}
let capa = 259;
let arr = [81,58,42,33,61]
console.log(solution(capa,arr));