function solution(n, k) {
  
  function isPrime(n) {
      if( n < 2 ) return false;
      for (let i = 3 ; i*i <= n ; i++) {
        if(n % i === 0) return false;
      } 
      return true;
  }

  const numbers = n.toString(k).split('0');
  let answer = 0;
  numbers.forEach((v) => {
    if(isPrime(v)) answer += 1;
  })

  return answer;
}

console.log(solution(110011, 10))