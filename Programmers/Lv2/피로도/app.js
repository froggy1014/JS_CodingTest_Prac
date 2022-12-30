function solution(k, d) {
  const N = d.length
  const visited = new Array(N).fill(0)
  let ans = 0

  function dfs(k, cnt){
      ans = Math.max(cnt, ans)

      for (let j = 0; j < N; j++){
          if (k >= d[j][0] && !visited[j]){
              visited[j] = 1
              dfs(k - d[j][1], cnt + 1)
              visited[j] = 0
          }
      }
  }

  dfs(k, 0)
  return ans;
}


console.log(solution(80, [[80,20],[50,40],[30,10]]))