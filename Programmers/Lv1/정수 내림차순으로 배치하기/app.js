function solution(n) {
  return Number(String(n).split('').map(Number).sort().reverse().join(''));
}

console.log(solution(118372));