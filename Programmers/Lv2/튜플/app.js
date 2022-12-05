function solution(str){
  const tuple = str.slice(2).slice(0, -2).split('},{').sort(lengthSorting).map(v => v.split(','));
  
  let usedEl = [];
  let answer = [];

  for ( let i = 0; i < tuple.length; i++ ) {
    if( usedEl.length === 0) {
      answer.push(tuple[0]);
    } else {
      const newEl = tuple[i].filter(v => usedEl.at(-1).indexOf(v) === -1)
      answer.push(newEl);
    }
    usedEl.push(tuple[i]);
  }

  function lengthSorting(a, b) {
    if (a.length < b.length) return -1;
    else return 1;
  }

  return answer.flat().map(Number);
}

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))

