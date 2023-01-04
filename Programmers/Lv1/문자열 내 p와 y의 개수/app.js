function solution(s){
  let answer = false;

  const string = s.toLowerCase();

  const p = string.split('p');
  const y = string.split('y');

  if(p.length === y.length) answer = true;

  return answer;
}

console.log(solution('pPoooyY'))