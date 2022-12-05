   ### ❓ Question

 <pre>다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>s의 길이는 1 이상 1,000 이하입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|s|result|
|:-:|:-:|
|'[](){}'|3|
|'}]()[{'|2|
|'[)(]'|0|
|'}}}'|0|

<br>

### 🗣 입출력 예 설명

<pre>입출력 예 #1

다음 표는 "[](){}" 를 회전시킨 모습을 나타낸 것입니다.
올바른 괄호 문자열이 되는 x가 3개이므로, 3을 return 해야 합니다.</pre>

|x	|s를 왼쪽으로 x칸만큼 회전	|올바른 괄호 문자열?|
|:-:|:-:|:-:|
0|"[](){}"|	O
1|"](){}["|	X
2|"(){}[]"|	O
3|"){}[]("|	X
4|"{}[]()"|	O
5|"}[](){"|	X

<pre>입출력 예 #2

다음 표는 "}]()[{" 를 회전시킨 모습을 나타낸 것입니다.
올바른 괄호 문자열이 되는 x가 2개이므로, 2를 return 해야 합니다.</pre>

|x	|s를 왼쪽으로 x칸만큼 회전	|올바른 괄호 문자열?|
|:-:|:-:|:-:|
0|"}]()[{"|X|
1|"]()[{}"|X|
2|"()[{}]"|O|
3|")[{}]("|X|
4|"[{}]()"|O|
5|"{}]()["|X|

<pre>입출력 예 #3

s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.

입출력 예 #4

s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.</pre>

 <br>

 ### ‼️ Solution

 ```javascript
function solution(str) {

  const brasketArray = str.split('');

  let answer = 0;

  for( let i = 0 ; i < brasketArray.length; i++){
    if(validation(brasketArray)) answer += 1;
    spinning();
  }

  function spinning(){
    const front = brasketArray.shift();
    brasketArray.push(front);
  }

  function validation(arr){
    let string = '';
    const brasketList = ['()','[]','{}'];
    arr.forEach((v) => {
      string += v
      brasketList.forEach((v) => string.includes(v) ? string = string.slice(0, -2) : null);
    })
    return string.length === 0 ? true : false
  }
  return answer;
}
console.log(solution("[](){}"));
 ```
<br>

### Another Solution 

```javascript
function solution(s) {
    var answer = 0;

    for (let i = 0; i < s.length; i++) {
        s = s.slice(1, s.length)+s[0];

        let string = s;

        for (let j = 0; j < Math.floor(s.length/2); j++) {
            string = string.replace(/([\[][\]]|[\{][\}]|[\(][\)])+/g, "");

            if (!string) break;
        }
        answer += !string ? 1 : 0;
    }
    return answer;
}
```



<p>먼저 조건을 생각해봤다.<br/>
첫번째로는 일단 문자열의 길이만큼 돌면서 한바퀴를 돌려야했다.<br/> 
두번째로는 괄호들은 어쩔수 없이 하드코딩을 해야겠다고 생각했다.<br/>
세번째로는 짝이 맞으면 지워나가는 식으로 해야겠다고 생각했다.<br/>

<br/>

그래서 `spinning`이라는 함수를 만들어서 순회해주는 역할을 하게하였다.<br/> 
`validation`이라는 함수를 통해 유효성을 검증 뒤 answer에 1을 더하도록 했다.<br/>
유효성 검사의 원리는 간단하다. 매번 재정렬된 배열을 string 변수에 더해주면서 그때마다 <br/>
하드코딩해놓은 괄호들을 비교해주면서 계속 지워주도록했다.<br/>

<br/>

그런데 다른 사람 풀이중에 정규식을 통해서 해결하신분 코드가 인상깊어 가져와봤다.<br/>
정규식을 잘할 그날을 위해...<br/>
</p>
