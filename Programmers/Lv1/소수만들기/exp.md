 ### ❓ Question

 <pre>주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.</pre>

 
<br>

### ⚠️ 제한사항

<ul>
  <li>nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.</li>
  <li>nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|nums|result|
|:-:|:-:|
|[1,2,3,4]|1|
|[1,2,7,6,4]|4|

<br>

 ### ‼️ Solution

 ```javascript
function solution(nums) {
  let answer = 0;
  
  // 소수인지 체크해주는 함수입니다. 
  // 제곱근을 이용해서 빠르게 검사가 가능합니다. 
  const isPrime = (num)  => {
    if( num < 2) return false;
    for (let i = 2 ; i*i <= num ; i++) {
      if(num % i === 0) return false;
    } 
    return true;
  }

  // 3개라고 적혀있었기 때문에 3개의 인덱스를 픽하 삼중 for문을 사용했습니다.
  for(let i = 0; i < nums.length - 2; i++ ){
    for(let j = i+1; j < nums.length - 1; j++ ){
      for(let k = j+1; k < nums.length; k++ ) {
        let sum = nums[i] + nums[j] + nums[k];
        if(isPrime(sum)) answer++
      }
    }
  }
  return answer;
}
 ```
<br>
