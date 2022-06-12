function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let t_Line = [];
  for (let x of arr) {
    t_Line.push([x[0], "s"]);
    t_Line.push([x[1], "e"]);
  }
  t_Line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of t_Line) {
    if (x[1] === "s") cnt++;
    else if (x[1] === "e") {
      answer = Math.max(answer, cnt);
      cnt--;
    }
  }
  return answer;
}
let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 15],
];7,
console.log(solution(arr));
