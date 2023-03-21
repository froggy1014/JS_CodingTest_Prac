 ### ❓ Question

 <pre>머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.</pre>

<br>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>1 ≤ babbling의 길이 ≤ 100</li>
  <li>1 ≤ babbling[i]의 길이 ≤ 30</li>
  <li>문자열은 알파벳 소문자로만 이루어져 있습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|babbling|result|
|:-:|:-:|
|["aya", "yee", "u", "maa"]|1|
|["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]|2|



<br>

 ### ‼️ Solution

 ```javascript
function solution(babbling) {
  // 발음이 가능한 것을 배열로 나열해놨습니다. 
  const Pronunciation = ["aya", "ye", "woo", "ma"];

  // 정답 변수 
  let answer = 0;
  
  // 들어오는 babbling에 대해서 순회를 돕니다.
  for( let x of babbling) {
    // x를 수정해주기 위해 변수에 담아줍니다.
    let str = x;

    // 조건에 맞는다면 해당 단어를 replace할 번호를 일단 만들어줍니다. 
    let num = 1;

    // 발음 가능한 것을 순회합니다.
    for ( let y of Pronunciation) {
      // 만약 발음 가능한 단어가 문자열 중에 존재한다면
      if(str.includes(y)){
        // 그 안에 모든 해당 단어를 먼저 앞서서 num으로 대체해줍니다.
        str = str.replaceAll(y, String(num))
        // 그리고 다음 발음과 중첩되지 않게 증감시켜줍니다. 
        num++;
      } 
    }

    // 이전과 같은 발음 단어가 아닌지 확인을 하기 위한 이전 값을 담을 변수
    let prev = 0;

    // 조건에 따라 false로 바꾸어줄 flag입니다.
    let flag = true;

    // 아까 str을 숫자와 문자열로 구성 된 문자열들은 전부 배열로 만들어주고 순회합니다.
    for( let x of str.split('')) {
      // 만약에 이전 단어와 현재와 같은 단어거나, 숫자가 아니라면 flag를 false로
      if( prev === Number(x) || isNaN(Number(x))) flag = false;
      // prev에 현재값으로 바꿔줍니다.
      prev = Number(x);
    }

    // 위 for문을 종료해서 한번이라도 조건에 안맞으면 answer는 증감을 하지 않습니다.
    if(flag) answer++;
  }

  return answer;
}
 ```
<br>

