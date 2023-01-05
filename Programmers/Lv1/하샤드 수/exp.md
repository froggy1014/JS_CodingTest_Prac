 ### ❓ Question

 <pre>양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>x는 1 이상, 10000 이하인 정수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|arr|return|
|:-:|:-:|
|10|true|
|12|true|
|11|false|
|13|false|


<br>

 ### ‼️ Solution

 ```javascript
function solution(x) {
  const number = String(x).split('').reduce((a,b) => Number(a)+Number(b), 0);
  const answer = x % number;

  return answer === 0 ? true : false;
}

console.log(solution(10))
 ```
<br>



 <pre>문자열로 만들고, split을 통해서 합을 더해서 나눌 숫자를 계산해놓는다.
 나머지가 0이면 하샤드 값이라고 생각한다. 그래서 answer 삼중 연산자를 통해서
 불린 값을 반환한다.</pre>
