 ### ❓ Question

 <pre>과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

한 상자에 사과를 m개씩 담아 포장합니다.
상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.</pre>
 
<br>

### ⚠️ 입력형식

<ul>
  <li>3 ≤ k ≤ 9</li>
  <li>3 ≤ m ≤ 10</li>
  <li>7 ≤ score의 길이 ≤ 1,000,000</li>
  <li>1 ≤ score[i] ≤ k</li>
  <li>이익이 발생하지 않는 경우에는 0을 return 해주세요.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|k|m|score|result|
|:-:|:-:|:-:|:-:|
|3|4|[1, 2, 3, 1, 2, 3, 1]|8|
|4|3|[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]|33|

<br>

 ### ‼️ Solution

 ```javascript
 function solution(k, m, score) {

  // 과일을 총 몇 박스까지 가져갈 수 있는지 미리 계산합니다.
  const n = Math.floor(score.length/m);

  // score를 점수별로 정렬시켜줍니다.
  const sortingScore = score.sort((a, b) => b - a);


  // 인덱스와 정답 변수 선언 
  let answer = 0;
  let start = 0;
  let end = m;

  // 한 박스안에서 제일 작은 정수를 반환합니다. 
  const func = (s, e) => {
    let min = [];
    for ( let i = s ; i < e; i++){
      min.push(sortingScore[i]*1);
    }
    return Math.min(...min);
  }


  // 아까 먼저 계산한 n번만큼 for문을 돌면서 
  // 반환받은 최저 점수에 m을 곱해서 정답에 누적합을 해줍니다.
  for(let i = 0 ; i < n; i++) {
    answer += (func(start, end) * m);

    // 인덱스를 계속해서 증가시킵니다.
    start = start + m;
    end = end + m;
  }

  return answer;
}
```
<br>

