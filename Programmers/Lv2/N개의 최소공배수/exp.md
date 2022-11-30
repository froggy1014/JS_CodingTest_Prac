 ### ❓ Question

 <pre>두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>arr은 길이 1이상, 15이하인 배열입니다.</li>
  <li>arr의 원소는 100 이하인 자연수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|arr|result|
|:-:|:-:|
|[2,6,8,14]|168|
|[1,2,3]|6|

<br>

 ### ‼️ Solution

 ```javascript
function solution(arr) {
  let max = arr.pop();
  let answer = max;

  while(1) {
    const pass = arr.filter((v) => answer%v === 0);
    if(pass.length === arr.length) return answer; 
    answer += max;
  }
}

const arr = [1,2,3];
console.log(solution(arr));
 ```
<br>



 <pre>최송공배수 어쨋든 간에 제일 큰 값을 기준으로 정하는 것을 알았다.
먼저 최댓값을 따로 빼놓고, 계속 최댓값을 더해가면서 나머지 배열요소를 다 나눠서 0이 나오는지 검사했다.</pre>
