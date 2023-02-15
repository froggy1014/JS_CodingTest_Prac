function solution(k, m, score) {
  const n = Math.floor(score.length/m);
  const sortingScore = score.sort((a, b) => b - a);
  let unit = 0;
  let start = 0;
  let end = m;

  const func = (s, e) => {
    let answer = [];
    for ( let i = s ; i < e; i++){
      answer.push(sortingScore[i]*1);
    }
    return Math.min(...answer);
  }


  for(let i = 0 ; i < n; i++) {
    unit += (func(start, end) * m);
    start = start + m;
    end = end + m;
  }

  return unit;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));