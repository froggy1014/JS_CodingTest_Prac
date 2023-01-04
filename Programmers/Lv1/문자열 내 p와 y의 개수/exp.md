 ### ❓ Question

 <pre>대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>문자열 s의 길이 : 50 이하의 자연수</li>
  <li>문자열 s는 알파벳으로만 이루어져 있습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|s|answer|
|:-:|:-:|
|"pPoooyY"|true|
|"Pyy"|false|


<br>

 ### ‼️ Solution

 ```javascript
function solution(s){
  let answer = false;

  const string = s.toLowerCase();

  const p = string.split('p');
  const y = string.split('y');

  if(p.length === y.length) answer = true;

  return answer;
}

console.log(solution('pPoooyY'))
 ```
<br>

 ### Another Solution

 ```javascript
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
 ```


<br>



 <pre>문자열에 원하는 알파벳을 통해 split을 하면 배열 길이가 해당 알파벳 갯수 + 1이 되는 걸 이용해서 비교했다.
 그리고 다른 분 풀이중에 한줄로 아름답게 끝내는 코드를 가져와봤는다. 간결한거 같다.</pre>
