 ### ❓ Question

 <pre>문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>s의 길이는 1 이상 5이하입니다.</li>
  <li>s의 맨앞에는 부호(+, -)가 올 수 있습니다.</>
  <li>s는 부호와 숫자로만 이루어져있습니다.</li>
  <li>s는 "0"으로 시작하지 않습니다.</li>
</ul>

<br>

### 🔢 입출력 예

<pre>예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.</pre>


<br>

 ### ‼️ Solution

 ```javascript
function solution(s) {
  let prefix;
  let number = s;

  if( s.includes('-') || s.includes('+')) {
    let strArray = s.split('')
    prefix = strArray.shift();
    number = strArray.join('');
  }

  if(prefix === '-') return 0 - number;
  else return +number;
}
 ```
<br>

 ### Another Solution

 ```javascript
function strToInt(str){
  return str/1
  }
 ```


<br>



 <pre>나는 부호가 있는지 확인하고 그걸 빼내고 조건문을 걸어서 
 더하고 빼서 정수로 변환했다. 그런데 다른사람의 풀이를 보니까 그냥 1로 나누거나
 앞에 +를 해서 정수로 바꿔주면 쉽게 해결하는 문제였다.. 아직 멀었네.

 </pre>
