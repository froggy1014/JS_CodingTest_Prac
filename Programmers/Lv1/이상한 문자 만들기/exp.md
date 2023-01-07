 ### ❓ Question

 <pre>문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.</li>
  <li>첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|s|return|
|:-:|:-:|
|"try hello world"|"TrY HeLlO WoRlD"|

<br>

### 입출력 예 설명

<pre>"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.</pre>

<br>

 ### ‼️ Solution

 ```javascript
function solution(s) {
  let idx = 0;
  let answer = [];
  const dictionary = s.toLowerCase().split('')
  
  dictionary.forEach((v) => {
    if ( v !== ' ' && idx % 2 === 0 ) answer.push(v.toUpperCase())
    else  answer.push(v)
    v === ' ' ? idx = 0 : idx += 1
  })
  return answer.join('');
}

console.log(solution("try hello world"));
 ```
<br>

 <pre>index를 위한 변수를 0으로 초기화 해줍니다.
 그리고 answer 배열을 하나 만들어주고, 입력 문자열을 다 소문자로 변경하고
 해당 문자열을 모두 split('')을 통해 배열로 만들어준다. 
 그리고 배열을 forEach를 통해 짝수 인덱스가 되면 배열에 대문자를 넣어준다. 
 그 외 공백이나 홀수 인덱스면 요소 그대로를 넣어준다. 그리고 해당 요소가 
 ' '이면 인덱스를 초기화해준다.</pre>
