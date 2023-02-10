function solution(s) {
  const map = new Map();
  let answer = [];

  for ( let idx in s ) {
    if(map.has(s[idx])) answer.push(idx - map.get(s[idx]));
    else answer.push(-1);
    map.set(s[idx], idx);
  }
  return answer;
}

console.log(solution("banana"))