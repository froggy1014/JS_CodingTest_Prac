function solution(num) {
  let answer = 0;
  let number = num;
  if(num === 1) return 0

  while ( answer != 500 && number !== 1 ) {
    if(number % 2 === 0) number = number/2
    else number = (number*3)+1
    answer += 1;
  }

  return answer >= 500 ? -1 : answer;
}

console.log(solution(1))