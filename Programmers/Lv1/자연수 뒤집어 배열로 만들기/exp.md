 ### ❓ Question

 <pre>자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>n은 10,000,000,000이하인 자연수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|n|return|
|:-:|:-:|
|12345|[5,4,3,2,1]|


<br>

 ### ‼️ Solution

 ```javascript
function solution(n) {
  const answer = String(n).split('').reverse().map(Number);

  return answer;
}

console.log(solution(12345));
 ```
<br>

 ### Another Solution

 ```javascript
function solution(n) {
    // 숫자풀이
    let arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
 ```


<br>



 <pre>1. 입력값 n을 문자열로 바꾸고, split으로 나누고, reverse로 반대로 배열을 바꿔준다.
 2. 하지만 아까 바꿨던 배열이 문자열로 되어있기때문에 map을 통해서 숫자로 바꿔준다.
 Another Solution에서는 숫자로 풀이하는 답을 가져왔는데, do while로 해당 자연수를 뒤에서부터
 짤라주면서 배열에 삽입한다.</pre>
