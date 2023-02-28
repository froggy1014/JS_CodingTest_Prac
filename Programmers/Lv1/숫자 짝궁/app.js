function solution(X, Y) {
  const checkArrayX = Array(10).fill(0);
  const checkArrayY = Array(10).fill(0);
  let answer = [];

  X.split('').forEach((v, i) => checkArrayX[v] = checkArrayX[v] + 1)
  Y.split('').forEach((v, i) => checkArrayY[v] = checkArrayY[v] + 1)

  checkArrayX.forEach((v, i) => {
    if(v !== 0 && checkArrayY[i] !== 0) {
      const min = Math.min(v, checkArrayY[i])
      if(min !== 0) Array(min).fill(0).forEach((v) => {answer.push(i)})
    }
  })
  
  answer = answer.sort((a,b) => b-a);

  if(answer.length === 0) return String(-1);
  if(answer[0] === 0) return String(0);
  return answer.join('');
}

console.log(solution("5525", "1255"))