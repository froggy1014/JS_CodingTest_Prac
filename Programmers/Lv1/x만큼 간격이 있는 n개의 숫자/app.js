function solution(x, n) {
  const answer = [x];

  while( answer.length < n) answer.push(answer.at(-1) + x);

  return answer;
}

console.log(solution(2, 5))