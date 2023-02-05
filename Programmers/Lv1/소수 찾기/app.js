function solution(n) {
  
  function isPrime(n) {
      if( n < 2 ) return false;
      for (let i = 2 ; i*i <= n ; i++) {
        if(n % i === 0) return false;
      } 
      return true;
  }

  let answer = 0;
  for(let i = 0; i <= n; i++) {
    if(isPrime(i)) answer += 1;
  }
  return answer;
}

console.log(solution(5));