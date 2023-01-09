 ### ❓ Question

 <pre>문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>strings는 길이 1 이상, 50이하인 배열입니다.</li>
  <li>strings의 원소는 소문자 알파벳으로 이루어져 있습니다.</li>
  <li>strings의 원소는 길이 1 이상, 100이하인 문자열입니다.</li>
  <li>모든 strings의 원소의 길이는 n보다 큽니다.</li>
  <li>인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|strings|n|return|
|:-:|:-:|:-:|
|["sun", "bed", "car"]|1|["car", "bed", "sun"]|
|["abce", "abcd", "cdx"]|2|["abcd", "abce", "cdx"]|

<br>

 ### ‼️ Solution

 ```javascript
function solution(strings, n) {
  // 문자열 배열을 myFilt라는 함수를 통해 정렬합니다.
  let answer = strings.sort(myFilt);

  function myFilt(a,b) {
    // 만약 n번째 문자가 같다면 
    if ( a.at(n) ===  b.at(n) ) {
      // 전체 각 단어에 대한 정렬을 해버립니다.
      if(a > b) return 1
      else return -1
    }

    // 각 단어를 n번째 인덱스 문자를 가져와서 비교해줍니다.
    if ( a.at(n) >  b.at(n)) return 1 ;
    else return -1;
  }
  
  return answer;
}
```
<br>

