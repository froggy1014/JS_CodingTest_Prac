function solution(lottos, win_nums) {
  const rank = [99, 6, 5, 4, 3, 2];

  let zero = 6 - lottos.filter(v=> v !== 0).length
  const check = total => rank.includes(total) ? rank.indexOf(total) : 6
  
  let correct = 0;
  for( let x of lottos) {
    if(win_nums.includes(x)) correct++;
  }

  return [check(correct+zero), check(correct)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));