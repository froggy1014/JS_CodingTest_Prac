 ### ❓ Question

 <pre>함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>n은 1이상 8000000000 이하인 자연수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|n|return|
|:-:|:-:|
|118372|873211|


<br>

 ### ‼️ Solution

 ```javascript
function solution(n) {
  return Number(String(n).split('').map(Number).sort().reverse().join(''));
}

console.log(solution(118372));
 ```
<br>

 <pre>일단 정수를 문자열로 바꾸고 split을 통해 배열로 바꾸고,
map을 통해 배열 내 요소들을 정수로 바꾸고 정렬해주고 다시 정수로 바꿔주었다.\
메소드 범벅이였던 문제 하하..</pre>
