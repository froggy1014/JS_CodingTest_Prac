 ### ❓ Question

 <pre>두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요. 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.</li>
  <li>a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.</li>
  <li>a와 b의 대소관계는 정해져있지 않습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|a|b|return|
|:-:|:-:|:-:|
|3|5|12|
|3|3|3|
|5|3|12|


<br>

 ### ‼️ Solution

 ```javascript
function solution(a, b) {
  let answer = 0;

  if( a === b) return a;

  for(let i = Math.min(a,b); i <= Math.max(a,b); i++) answer+=i;
  return answer;
}

console.log(solution(3, 5));
 ```
<br>

 <pre>일단 예외 처리를 제일 먼저 처리해준다. 두 정수가 같으면 아무거나 반환
 그리고 for문을 통해서 두 정수 사이의 값을 더해주는데, 작은 값에서 큰 값으로 해줘야하는데,
 이를 위해 for문안에서 Math.min, max를 통해 해결했다.</pre>
