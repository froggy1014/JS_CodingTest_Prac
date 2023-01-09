 ### ❓ Question

 <pre>네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

|숫자|영단어|
|:-:|:-:|
|0|zero|
|1|one|
|2|two|
|3|three|
|4|four|
|5|five|
|6|six|
|7|seven|
|8|eight|
|9|nine|
</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>1 ≤ s의 길이 ≤ 50</li>
  <li>s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.</>
  <li>return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|s|result|
|:-:|:-:|
|"one4seveneight"|1478|
|"23four5six7"|234567|
|"2three45sixseven"|234567|
|"123"|123|

<br>

 ### ‼️ Solution

 ```javascript
function solution(s) {
  // 정답 변수 
  let answer = "";
  // 임시 변수
  let number = ""

  // 알파벳에 대한 객체 생성 
  const Alphabet = {
    "zero" : '0',
    "one" : '1',
    "two" : '2',
    "three" : '3',
    "four" : '4',
    "five" : '5',
    "six" : '6',
    "seven" : '7',
    "eight" : '8',
    "nine" : '9',
  }

  // 모든 문자열을 순회합니다.
  for( let x of s) {
    // 타입 변환
    let c = +x;
    
    // 숫자라면 answer에 바로 넣어주고
    if(!isNaN(c)) answer += x;
    // 아니라면 임시변수에 x를 넣어줘서 숫자 글자 완성을 위한 초석
    else  number += x;

    // number가 숫자 단어로 완성이 된다면 
    // alphabet 키값으로 값을 answer에 넣는다.
    // 그리고 임시 변수 초기화
    if(Alphabet[number] !== undefined){
      answer += Alphabet[number];
      number = ""
    } 
  }
  return Number(answer);
}
 ```

  ### Another Solution
  ```js
  function solution(s) {
      let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      var answer = s;

      // 인덱스와 단어를 매치시켜서 순회하면서 s안에 문자열중에
      // 단어로 된 애들을 split()시키고 난후 join하여 한번에 답을 도출
      for(let i=0; i< numbers.length; i++) {
          let arr = answer.split(numbers[i]);
          answer = arr.join(i);
      }

      return Number(answer);
  }
  ```
<br>

