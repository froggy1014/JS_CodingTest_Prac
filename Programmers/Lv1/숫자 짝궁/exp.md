 ### ❓ Question

 <pre>두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.</li>
  <li>X, Y는 0으로 시작하지 않습니다.</li>
  <li>X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|X|	Y|	result|
|:-:|:-:|:-:|
|"100"	|"2345"	  |"-1"|
|"100"	|"203045"	|"0"|
|"100"	|"123450"	|"10"|
|"12321"|	"42531"	|"321"|
|"5525"	|"1255"	  |"552"|

<br>

 ### ‼️ Solution

 ```javascript
function solution(X, Y) {
  // 숫자마다 갯수를 체크해줄 배열을 각각 만들어주었습니다.
  const checkArrayX = Array(10).fill(0);
  const checkArrayY = Array(10).fill(0);
  let answer = [];

  // 문자열을 split()을 통해 배열로 바꾸고 순회하여, 체크배열에 쌓아줍니다.
  X.split('').forEach((v, i) => checkArrayX[v] = checkArrayX[v] + 1)
  Y.split('').forEach((v, i) => checkArrayY[v] = checkArrayY[v] + 1)

  // 체크배열 하나를 잡고 순회하면서, 둘다 0이 아닐시에 
  // 두 후보군중에 더 작은 값이 짝궁이 될 수 있으니까 Math.min을 통해 뽑아줍니다.
  // min이 0만 아니라면 해당 숫자만큼 answer에 숫자를 min번 만큼 푸시해줍니다.
  checkArrayX.forEach((v, i) => {
    if(v !== 0 && checkArrayY[i] !== 0) {
      const min = Math.min(v, checkArrayY[i])
      if(min !== 0) Array(min).fill(0).forEach((v) => {answer.push(i)})
    }
  })
  
  // 정답 배열을 내림차순 정렬을 해줍니다. 
  answer = answer.sort((a,b) => b-a);

  // 조건에 맞게 예외처리를 해줍니다. 
  if(answer.length === 0) return String(-1);
  if(answer[0] === 0) return String(0);
  return answer.join('');
}
```
<br>

