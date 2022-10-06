// 내 풀이
function solution(n) {
  let answer = 0;
  for( let x of n.toString()) answer += Number(x);
  return answer
}
console.log(solution(123))

// 모범 답안 
function solution(n) {
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
console.log(solution(123))
