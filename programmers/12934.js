function solution(n) {

  let sqrt = Math.sqrt(n)

  if(sqrt%1 !== 0) return -1;
  
  return (sqrt+1) ** 2

}
console.log(solution(121))