function solution(n) {
  let mul = 0;
  let answer = 0;
  let number = n.toString(3).split('');

  number.map((v,i) => {
    let a = mul === 0 ? 1 : mul;
    answer += v * a;
    mul = a * 3;
  })

  return answer
}

console.log(solution(125));