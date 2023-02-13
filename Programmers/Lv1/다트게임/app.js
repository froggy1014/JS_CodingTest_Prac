function solution(dartResult) {
  let turn = Array(3).fill(0);
  let idx = -1;
  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i-1]) && !isNaN(dartResult[i]) && isNaN(dartResult[i+1])) {
      idx++;
      turn[idx] = Number(dartResult[i]);
    }
    else if(!isNaN(dartResult[i]) && !isNaN(dartResult[i+1])) {
      idx++;
      turn[idx] = 10;
    }
    else {
      switch (dartResult[i]) {
        case 'S':
          turn[idx] = Math.pow(turn[idx], 1);
          break;
        case 'D':
          turn[idx] = Math.pow(turn[idx], 2);
          break;
        case 'T':
          turn[idx] = Math.pow(turn[idx], 3);
          break;
        case '*':
          if(idx === 0) turn[idx] *= 2;
          else {
            turn[idx-1] = turn[idx-1] * 2;
            turn[idx] = turn[idx] * 2;
          }
          break;
        case '#':
          turn[idx] = turn[idx] * (-1);
          break;
      }
    }
  }
  return turn.reduce((a, b) => a + b, 0);
}

console.log(solution('1S*2T*3S'));
