function solution(s) {
  let hex = 0;
  let cnt = 0;


  const before = s.split('').filter(v =>  v !== '0').join('')
  cnt += before.length;
  console.log(before)
  hex = Number(before).toString(2)
  console.log(hex);
}
console.log(solution('110010101001'))