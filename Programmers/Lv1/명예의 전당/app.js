function solution(k, score) {
  let answer = [];
  let stack = [];

  for ( let x of score ) {
    if(stack.length === k) {
      if ( x > stack[0]) stack[0] = x
    } else {
      stack.push(x);
    }
    stack.sort((a,b) => a - b);
    answer.push(stack[0]);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))