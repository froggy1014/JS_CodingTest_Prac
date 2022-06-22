function solution(arr){
  let answer = "NO", flag = 0;
  let total = arr.reduce((a,b) => a+b,0);
  let n = arr.length;
  function DFS(L,sum){
    if(flag) return;
    // 다른 언어는 파이썬이나 C++ 언어는 exit 같은 함수가 있지만, 있어도 안쓰는게 좋고 이런식으로 답이 나오면 탈출해주는게 좋다. 
    if(L === n)
    {
        if((total - sum)===sum) 
        {
          answer = "YES"
          flag=1;
        }
    }
    else
    {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0,0)
  return answer;
}
let arr = [1,3,5,6,7,10]
console.log(solution(arr));