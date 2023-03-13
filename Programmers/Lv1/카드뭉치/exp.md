 ### ❓ Question

 <pre>코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
한 번 사용한 카드는 다시 사용할 수 없습니다.
카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.</pre>

<br>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>1 ≤ cards1의 길이, cards2의 길이 ≤ 10</li>
  <li>1 ≤ cards1[i]의 길이, cards2[i]의 길이 ≤ 10</li>
  <li>cards1과 cards2에는 서로 다른 단어만 존재합니다.</li>
  <li>2 ≤ goal의 길이 ≤ cards1의 길이 + cards2의 길이</li>
  <li>1 ≤ goal[i]의 길이 ≤ 10</li>
  <li>goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.</li>
  <li>cards1, cards2, goal의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|cards1|	cards2	|goal|	result|
|:-:|:-:|:-:|:-:|
|["i", "drink", "water"]|	["want", "to"]|	["i", "want", "to", "drink", "water"]|	"Yes"|
|["i", "water", "drink"]	|["want", "to"]	|["i", "want", "to", "drink", "water"]	|"No"|



<br>

 ### ‼️ Solution

 ```javascript
function solution(cards1, cards2, goal) {
  // goal 배열을 순회한다.
  for ( let x of goal) {
    // 카드 뭉치 맨앞에 순서에 맞는 단어가 있는지 확인하고 있다면 없애주는 것을 반복합니다.
    if(cards1.at(0) === x ) cards1.shift();
    else if(cards2.at(0) === x) cards2.shift();
    else return "No"
  }

  // 만약 순서가 다 맞았다면 "Yes"를 반환합니다.
  return "Yes";
}
 ```
<br>

