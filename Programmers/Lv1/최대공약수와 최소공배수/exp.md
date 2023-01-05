 ### ❓ Question

 <pre>두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>두 수는 1이상 1000000이하의 자연수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|n|m|return|
|:-:|:-:|:-:|
|3|12|[3, 12]|
|2|5|[1, 10]|


<br>

 ### ‼️ Solution

 ```javascript
function solution(n, m) {
  let answer = [];
  let minNum = Math.min(n,m)
  let maxNum = Math.max(n,m)
  answer[0] = gcd(minNum, maxNum);
  answer[1] = lcm(minNum, maxNum);
  return answer;
}

function gcd(minNum, maxNum) {
  return (minNum % maxNum) === 0? maxNum : gcd(maxNum, minNum%maxNum);
}

function lcm(minNum, maxNum) {
  return minNum * maxNum / gcd(minNum, maxNum);
}

console.log(solution(3, 12))
 ```
<br>

 <pre>일단 최대공약수와 최소 공배수를 구하기 위해서는 입력오는 두 정수를
 큰 것과 작은것을 구분하기 위해서 변수 minNum, maxNum를 각각 만들어주고, 
 공약수와 공배수를 배열 형태로 뱉어주기때문에 gcd, lcm이라는 함수를 구현해서 각자 반환받았다.
 gcd는 min % max가 0이 나올때까지 재귀를 돌려준다. 
 lcm은 두 자연수를 곱하고나서 gcd로 나온 값으로 나눠주면 그 몫값이다.</pre>
