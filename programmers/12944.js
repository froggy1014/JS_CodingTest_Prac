function solution(arr) {
  return arr.reduce((prev, cur) => prev+cur)/arr.length;
}
console.log(solution([1,2,3,4]))