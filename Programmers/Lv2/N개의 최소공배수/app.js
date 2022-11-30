function solution(arr) {
  let max = arr.pop();
  let answer = max;

  while(1) {
    const pass = arr.filter((v) => answer%v === 0);
    if(pass.length === arr.length) return answer; 
    answer += max;
  }
}

const arr = [1,2,3];
console.log(solution(arr));