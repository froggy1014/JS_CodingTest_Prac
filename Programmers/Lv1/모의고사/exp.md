 ### ❓ Question

 <pre>수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>시험은 최대 10,000 문제로 구성되어있습니다.</li>
  <li>문제의 정답은 1, 2, 3, 4, 5중 하나입니다.</li>
  <li>가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|answers|return|
|:-:|:-:|
|[1,2,3,4,5]|[1]|
|[1,3,2,4,2]|[1, 2, 3]|


<br>

 ### ‼️ Solution

 ```javascript
function solution(answers) {
  // 일단 3가지의 패턴을 하드코딩해놓았다.
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let array = Array(3).fill(0);
  
  // 나머지 연산을 통해 해당 인덱스에 해당되면
  // 맞는 index에 증감을 해준다.
  answers.forEach((v, i) => {
    if(v === one[i%5])array[0] += 1;
    if(v === two[i%8])array[1] += 1;
    if(v === three[i%10])array[2] += 1;
  })

  let max = Math.max(...array);
  // 정답을 담을 배열 
  let answer = [];

  // 맥스값과 같으면 answer 배열에 담아준다. 
  array.forEach((v, i) => {
     if( max === v) answer.push(i+1);
  })

  // 정렬을 해준다. 
  return answer.sort();
}

console.log(solution([1,2,3,4,5]))
 ```
<br>
