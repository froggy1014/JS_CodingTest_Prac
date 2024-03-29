 ### ❓ Question

 <pre>문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.</pre>

 
<br>

### ⚠️ 제한사항

<ul>
  <li>1 ≤ s의 길이 ≤ 10,000</li>
  <li>s은 영어 소문자로만 이루어져 있습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|s|result|
|:-:|:-:|
|"banana"|[-1, -1, -1, 2, 2, 2]|
|"foobar"|[-1, -1, 1, -1, -1, -1]|

<br>

 ### ‼️ Solution

 ```javascript
function solution(s) {
  // 맵객체를 생성해줍니다. 
  const map = new Map();
  // 정답을 담을 배열입니다. 
  let answer = [];

  // for in으로 인덱스값을 뽑습니다.
  for ( let idx in s ) {

    // 만약 map 객체안에 지금 글자의 해당 키값을 가지고 있다면 
    // 현재 인덱스 - 기존 인덱스를 정답에 push해준다.
    if(map.has(s[idx])) answer.push(idx - map.get(s[idx]));

    // 만약 map객체에 존재하지 않다면, -1을 정답에 push해준다.
    else answer.push(-1);

    // 해당 키값에 해당되는 인덱스값을 업데이트해줍니다.
    map.set(s[idx], idx);
  }
  return answer;
}
 ```
<br>
