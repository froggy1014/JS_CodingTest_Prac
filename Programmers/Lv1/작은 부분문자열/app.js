function solution(t, p) {
  let n = p.length;
  let answer = 0;
  for(let i = 0 ; i < t.length - (n-1); i++) {
    let val = Number(t.slice(i, n+i));
    if(val <= Number(p)) answer++;
  }
  return answer;
}

const t = "500220839878";
const p = "7";
console.log(solution(t, p))