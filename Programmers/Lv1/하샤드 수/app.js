function solution(x) {
  const number = String(x).split('').reduce((a,b) => Number(a)+Number(b), 0);
  const answer = x % number;

  return answer === 0 ? true : false;
}

console.log(solution(10))