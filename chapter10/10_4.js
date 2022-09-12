function solution(n,coins,m){
  let answer = 0;
  let dy = Array.from({length:m+1}, ()=>1000)
  dy[0] = 0;

  for(let i = 0; i < n; i++) {
    for(let j = coins[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j-coins[i]]+1)
    }
  }
  answer= dy[m];
  return answer;
}
console.log(solution(3,[1,2,5],15))