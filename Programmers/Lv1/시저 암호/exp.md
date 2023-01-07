 ### ❓ Question

 <pre>어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>공백은 아무리 밀어도 공백입니다.</li>
  <li>s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.</li>
  <li>s의 길이는 8000이하입니다.</li>
  <li>n은 1 이상, 25이하인 자연수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|s|n|result|
|:-:|:-:|:-:|
|"AB"|1|"BC"|
|"z"|1|"a"|
|"a B z"|4|"e F d"|

<br>

 ### ‼️ Solution

 ```javascript
function solution(s, n) {
  // 일단 아스키 코드를 받을 배열을 만들어줍니다.
  let answer = [];

  // 문자열의 길이만큼 순회를 돕니다. 
  for ( let i = 0 ; i < s.length ; i++ ) {

    // 대문자인지에 대한 확인을 위한 플래그
    let Upper = false;

    // 만약 a-z 범위에서 벗어나는지 확인을 위한 조건 
    if(s.toUpperCase().charCodeAt(i) + n > 90 ) {
      // 대문자인지 확인한다. 그리하여 플래그를 세운다
      if(s[i].toUpperCase() === s[i]) Upper = true;

      // a-z범위에서 벗어난 만큼을 계산합니다.
      let min = s.toUpperCase().charCodeAt(i) + n - 90;

      // 소문자, 대문자에 따른 다른 기준값을 넣어서 answer에 넣어준다.
      Upper ? answer.push(65 + min - 1) : answer.push(97 + min - 1)
    } else {
      // 공백이라면 그대로 answer에 넣고 공백이 아니고, a-z범위에서 안 벗어난다면 n만큼 알파벳을 움직인다.
      answer.push(s.charCodeAt(i) === 32 ? s.charCodeAt(i) : s.charCodeAt(i) + n);
    }
  } 

  // answer 배열에 담긴 아스키코드를 문자열로 바꿔 반환합니다.
  return String.fromCharCode(...answer);
}

console.log(solution("a B z", 4))
 ```
<br>

