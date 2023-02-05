 ### ❓ Question

 <pre>1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)</pre>

 
<br>

### ⚠️ 제한사항

<ul>
  <li>n은 2이상 1000000이하의 자연수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|n|result|
|:-:|:-:|
|10|4|
|5|3|

<br>

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif" width="300px" />
</div>

<br>

 ### ‼️ Solution

 ```javascript
function solution(n) {
  
  // 소수인지 판별하는 함수입니다. 
  function isPrime(n) {

    // 1은 소수가 아니니까 예외처리를 해준다.
    if( n < 2 ) return false;

    // 에라토스테네스의 체를 사용해서 판별했습니다. 
    // 위에 움짤을 보시면 쉽게 이해가 가능하실 겁니다. 
    // 2부터 소수를 구하고자 하는 구간의 모든수를 나열해서 제외시키는 알고리즘이다. 
    for (let i = 2 ; i*i <= n ; i++) {
      if(n % i === 0) return false;
    } 
    return true;
  }

  let answer = 0;
  
  // 자연수 n까지 순회하면서 소수인지 판별합니다. 
  for(let i = 0; i <= n; i++) {
    if(isPrime(i)) answer += 1;
  }
  return answer;
}

console.log(solution(5));
 ```
<br>
