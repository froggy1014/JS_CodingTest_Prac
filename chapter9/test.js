function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from(Array(n + 1), () => 0);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1)
  return answer;
}
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5]
]
console.log(solution(5, arr))