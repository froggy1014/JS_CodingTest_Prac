function solution(a, b) {
  let answer = 0;

  if( a === b) return a;

  for(let i = Math.min(a,b); i <= Math.max(a,b); i++) answer+=i;
  return answer;
}

console.log(solution(3, 5));