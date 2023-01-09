function solution(numbers) {
  let n = numbers.length;
  let answer = 0;

  for(let a = 0; a < n -2; a++) {
    for( let b = a + 1; b < n -1; b++){
      for ( let c = b + 1; c < n; c++) {
        if ( numbers[a] + numbers[b] + numbers[c] === 0) answer++;
      }
    }
  }

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));