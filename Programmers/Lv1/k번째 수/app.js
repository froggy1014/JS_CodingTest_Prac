function solution(array, commands) {
  let answer = [];

  for (let [i, j, k] of commands) {
    answer.push(Number(
      array
        .slice(i - 1, j)
        .sort((a, b) => a - b)[k - 1]
    ));
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 60, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
