function solution(a, b) {
  const days = [0,31,29,31,30,31,30,31,31,30,31,30,31];
  const Yoil = [0,"SUN","MON","TUE","WED","THU","FRI","SAT"];
  
  let answer = "";
  let cnt = 6;

  for (let m = 1 ; m <= 12; m++) {
    for ( let d = 1 ; d <= days[m] ; d++) {
      answer = Yoil[cnt];
      if(m === a && d === b)  return answer;
      cnt === 7 ? cnt = 1 : cnt++;
    }
  }
}
console.log(solution(5, 24))
