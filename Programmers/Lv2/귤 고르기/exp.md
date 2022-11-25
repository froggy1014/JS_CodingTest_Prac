 ### ❓ Question

 <pre>경화는 과수원에서 귤을 수확했습니다. 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다. 그런데 수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.

예를 들어, 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 이라고 합시다. 경화가 귤 6개를 판매하고 싶다면, 크기가 1, 4인 귤을 제외한 여섯 개의 귤을 상자에 담으면, 귤의 크기의 종류가 2, 3, 5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때입니다.

경화가 한 상자에 담으려는 귤의 개수 `k`와 귤의 크기를 담은 배열 `tangerine이` 매개변수로 주어집니다. 경화가 귤 `k`개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>1 ≤ k ≤ tangerine의 길이 ≤ 100,000</li>
  <li>1 ≤ tangerine의 원소 ≤ 10,000,000</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|k|tangerine|result|
|:-:|:-:|:-:|
|6|[1, 3, 2, 5, 4, 5, 2, 3]|3|
|4|[1, 3, 2, 5, 4, 5, 2, 3]|2|
|2|[1, 1, 1, 1, 2, 2, 2, 3]|1|

<br>

### 🗣 입출력 예 설명

<pre>입출력 예 #1

본문에서 설명한 예시입니다.

입출력 예 #2

경화는 크기가 2인 귤 2개와 3인 귤 2개 또는 2인 귤 2개와 5인 귤 2개 또는 3인 귤 2개와 5인 귤 2개로 귤을 판매할 수 있습니다. 이때의 크기 종류는 2가지로 이 값이 최소가 됩니다.

입출력 예 #3

경화는 크기가 1인 귤 2개를 판매하거나 2인 귤 2개를 판매할 수 있습니다. 이때의 크기 종류는 1가지로, 이 값이 최소가 됩니다.</pre>
                                                                                                                           

 <br>

 ### ‼️ Solution

 ```javascript
function solution(k, tangerine) {
  let map = new Map();
  let n = tangerine.length ;
  let acc = n - k;
  let cnt = 0;

  for(let i = 0; i < n ; i++) {
    if(map.has(tangerine[i]))  map.set(tangerine[i], map.get(tangerine[i])+1)
    else map.set(tangerine[i], 1);
  }

  const sortedMap = [...map].sort(sorting);

  function sorting(a, b) {
    if( a[1] !== b[1] ) return a[1] < b[1] ? -1 : 1;
    return a[0] < b[0] ? -1 : 1;
  }
  
  sortedMap.forEach((size) => {
    if (acc <= 0) return ;
    else {
      cnt += 1;
      acc -= size[1];
    }
  })
  return acc < 0 ? sortedMap.length - cnt + 1 : sortedMap.length - cnt ;
}

const k = 5;
const tangerined = [2,2,3,3,4,4,5,5,7,7]	
console.log(solution(k, tangerined));
 ```
<br>



 <pre>1. 겹치는 것을 숫자를 카운트하면서 모아놓을 수 있는 Map 객체를  사용했다.
 2. 그리고 해당 Map 객체를 sort하여 갯수기준으로 오름차 순으로 정렬했다.
 3. 배열의 갯수 - 필요한 갯수를 뽑아서 작은 갯수를 forEach로 순회하면서 빼기 시작한다.
 4. acc 변수가 0 혹은 음수가 나오면 return하면서 순회문을 그만둔다.
 5. 0으로 딱 떨어지는 경우는 Map 객체 길이에서 count를 빼주면 된다.
 6. 음수로 나온경우는 sortedMap 객체 길이에서 count를 빼주고 1을 더해줘야한다.</pre>
