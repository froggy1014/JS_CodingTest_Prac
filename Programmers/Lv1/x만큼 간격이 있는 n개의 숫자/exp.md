 ### ❓ Question

 <pre>함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>x는 -10000000 이상, 10000000 이하인 정수입니다.</li>
  <li>n은 1000 이하인 자연수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|x|n|answer|
|:-:|:-:|:-:|
2|	5|	[2,4,6,8,10]|
4|	3|	[4,8,12]|
-4|	2|	[-4, -8]|


<br>

 ### ‼️ Solution

 ```javascript
function solution(x, n) {
  const answer = [x];

  while( answer.length < n) answer.push(answer.at(-1) + x);

  return answer;
}
 ```
<br>

 ### Another Solution

 ```javascript
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
 ```


<br>



 <pre>처음 answer라는 배열 변수를 만들고, x를 첫 요소로 넎어준다.
 while문을 통해서 배열 길이가 n개 일때까지 돌리고, 계속해서 배열 마지막 요소 가져와서 
 x값을 더해준다. 그리고 값을 배열을 반환한다.
 
 남들이 정답을 가져와봤는데, Array.fill을 통해서 배열을 먼저 만들어주고 map을 통해 채워준다.</pre>
