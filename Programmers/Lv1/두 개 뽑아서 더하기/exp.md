 ### ❓ Question

 <pre>정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>numbers의 길이는 2 이상 100 이하입니다.</li>
  <li>numbers의 모든 수는 0 이상 100 이하입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|numbers|result|
|:-:|:-:|
|[2,1,3,4,1]|[2,3,4,5,6,7]|
|[5,0,2,7]|[2,5,7,9,12]|

<br>

 ### ‼️ Solution

 ```javascript
 function solution(numbers) {
  // 정답 배열 변수
  var answer = [];

  // 단순히 2중 for문으로 전부 더해주고 배열에 담아준다.
  for(let i = 0 ; i  < numbers.length - 1 ; i++) {
    for ( let j = i + 1 ; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // Set 데이터 객체를 통해 중복을 제거해주고, 정렬 한 후 반환해준다.
  let set = new Set(answer);
  return [...set].sort((a,b) => a - b);
}
  ```
<br>

