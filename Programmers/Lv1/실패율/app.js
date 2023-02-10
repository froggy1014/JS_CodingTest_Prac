function solution(N, stages) {
  let arr = [];
  let answer = [];

  for(let i = 1 ; i <= N; i++) {
    let a = 0;
    let b = 0;
    stages.forEach((v, idx) => {
      if(v === i) a++;
      if(v >= i) b++;
    })
    if(a * b === 0) arr.push(0);
    else arr.push((a/b)*100);
  }
  for (let i = 0; i < N; i++) {
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    answer.push(index+1);
    arr[index] = Number.MIN_SAFE_INTEGER;
  }
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));