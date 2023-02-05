 ### ❓ Question

 <pre>숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>1 ≤ p의 길이 ≤ 18</li>
  <li>p의 길이 ≤ t의 길이 ≤ 10,000</li>
  <li>t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|t|p|return|
|:-:|:-:|:-:|
|"3141592"|"271"|2|
|"500220839878"|"7"|8|
|"10203"|"15"|3|


<br>

 ### ‼️ Solution

 ```javascript
function solution(t, p) {
  // p문자열의 길이를 변수에 할당
  let n = p.length;

  let answer = 0;

  // t문자열을 for문을 도는데 마지막 포인트를 계산해서 넣어준다.
  for(let i = 0 ; i < t.length - (n-1); i++) {

    // i ~ n+1 인덱스 사이의 문자열을 가져와서 val변수에 할당
    let val = Number(t.slice(i, n+i));
    // 그리고 p보다 작거나 같으면 바로 카운트 해버린다. 
    if(val <= Number(p)) answer++;
  }
  return answer;
}

const t = "500220839878";
const p = "7";
console.log(solution(t, p))
 ```


<br>