function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let array = Array(3).fill(0);
  answers.forEach((v, i) => {
    if(v === one[i%5])array[0] += 1;
    if(v === two[i%8])array[1] += 1;
    if(v === three[i%10])array[2] += 1;
  })

  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  array.forEach((v, i) => {
     if(max < v) {
      answer = [i + 1];
      max = v;
     }
     else if( max === v) answer.push(i+1);
  })

  return answer.sort();
}

console.log(solution([1,2,3,4,5]))