 ### ❓ Question

 <pre>정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>n은 0 이상 3000이하인 정수입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|u|return|
|:-:|:-:|
|12|28|
|5|[6|


<br>

### 🗣 입출력 예 설명

<pre>입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.</pre>

 <br>

 ### ‼️ Solution

 ```javascript
function solution(n) {
    let answer = 0 ;
    let i = 1
    while(i <= n)
    {
        if(n%i === 0) answer += i;
        i++;
    }
  return answer;
}
 ```
<br>



 <pre>1. 일단 해당 자연수를 i로 나눴을때 0이 된다면 그 수는 약수다.
 2. 그 약수를 나올때마다, answer에 더한다.</pre>
