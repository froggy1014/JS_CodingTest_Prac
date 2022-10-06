// 내 풀이 
function solution(s) {
  const arr = s.split(' ')
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  for(let x of arr){
    let v = Number(x)
    min = Math.min(min, v);
    max = Math.max(max, v);
  }
  console.log([min, max].join(' '));
}
console.log(solution("-1 -2 -3 -4"))

// 모범답안
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}