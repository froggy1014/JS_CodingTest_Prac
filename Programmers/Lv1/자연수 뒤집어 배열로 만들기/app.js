function solution(n) {
  const answer = String(n).split('').reverse().map(Number);

  return answer;
}

console.log(solution(12345));