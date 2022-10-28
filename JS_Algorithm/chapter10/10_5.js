function solution(n, arr, m){
  let dy = Array.from({length: m+1}, () => 0);
  let answer = 0;

  for(let i = 0; i < n; i++){
     let ps = arr[i][0];
     let pt = arr[i][1];
    for(let j = m ; j >= pt ; j--){
      dy[j] = Math.max(dy[j], dy[j-pt]+ps)
    }
  }
  answer= dy[m]
  return answer
}
const arr = [
  [10,5],
  [25,12],
  [15,8],
  [6,3],
  [7,4],
]
console.log(solution(5, arr, 20))

