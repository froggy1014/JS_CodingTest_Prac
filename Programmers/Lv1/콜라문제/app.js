function solution(a,b,t) {
  let total = t;
  let answer = 0;
  while(total > a) {
    let acc = Math.floor(total / a)*b
    total -= Math.floor(total/a)*a;
    total += acc;
    answer += acc;
  }
  return total === a ? answer + 1 : answer;
}

console.log(solution(2,1,20))