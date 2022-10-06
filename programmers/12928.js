// 내 풀이
function solution(n) {
  let answer = 0 ;
  let i = 1
  while(i <= n)
  {
    if(n%i === 0) answer += i;
    i++;
  }
  return answer;
}
console.log(solution(3000))

// 모범 답안

function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) sum += i
  }
  return sum
}