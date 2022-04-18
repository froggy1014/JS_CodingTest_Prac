# 🟨 자바스크립트 알고리즘 문제풀이 

<br>

## 📀 인프런 - 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) by 김태원 

[인프런 주소](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4)

<br>

## 챕터1 - 기본풀이 문제. 

<br>

<details>
<summary>1_1 세 수 중 최솟값</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>  100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다) </pre>
 
 <br>
 
 ### ‼️ Solution 
 
 ```javascript
 function solution(a, b, c) {
    let answer;
    if (a < b) 
        answer = a;
    else 
        answer = b;
    if (c < answer) 
        answer = c;
    return answer;
}

console.log(solution(2, 5, 1));
 ```
 
 <br>
 
 ### ⁉️ Alternative Solution
 
  ```javascript
 function solution(a, b, c) {
    let temp = [a,b,c]
    let answer = Math.max.apply(null, temp)
    let answer2 = Math.max(...temp)

    console.log(answer)
    console.log(answer2)
}

solution(2, 5, 1)
```

 <pre>
 1. 선생님은 일단 if 문으로 간단하게 끝내셨다.
 2. 나는 Math.max를 사용하여서 값을 뽑고싶었고, 하지만 해당 메소드는 배열로 출력하면 
    NaN(Not a Number)가 출력되기 때문에 알아보니 전개연산자<Spread Operator>나 apply 메소드
    를 통해서 배열 파라미터를 전할 수 있었다.
 </pre>

</div>
</details>
 
 <details>
<summary>1_2 삼각형 판별하기</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>  1길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 
 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다. </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
 function solution(a, b, c) {
    let answer = "YES",
        max;
    let tot = a + b + c;
    if (a > b) 
        max = a;
    else 
        max = b;
    if (c > max) 
        max = c;
    if (tot - max <= max) 
        answer = "NO";
    return answer;
}

console.log(solution(13, 33, 17));
 ```
 
 <br>
 
 <pre>
 💬 일단 짚고 넘어가야 할 것은, 제일 긴변은 나머지 두 선의 합보다 작아서는 
    안되는 것입니다. 그렇기 때문에 if문으로 입력값 3개 중 최댓값을 구한 후, 
    sum값에서 max를 빼고, 그 값이 max 값보다 작으면 삼각형이 될 수 없다.
 </pre>

</div>
</details>
 
 <details>
<summary>1_3 연필 개수</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>  연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 
 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요. </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(n) 
{
    let answer;
    answer = Math.ceil(n / 12);
    return answer;
}

console.log(solution(178));
 ```
 
 <br>
 
 <pre>
 💬 Math.ceil() 메소드만 알면 굉장히 간단한 문제였다. 한 다스에 12개,
    즉 입력을 12로 나누고, 나머지 값을 무조건 반올림해주면 되는 문제다.

    여기서 추가로 Math.float()는 반대로 무조건 내림값을 출력 
               Math.round()는 0.5이상은 반올림해주는 메소드. 
 </pre>

</div>
</details>
 
 <details>
<summary>1_4 1부터 N까지 합 출력하기</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>  자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer = answer + i;
    }

    return answer;
}

console.log(solution(10));
 ```
 
 <br>
 
 ### ⁉️ Alternative Solution
 
  ```javascript
 function solution(arr){
  let answer = 0;
  let answer2 = 0;
  answer = arr.reduce((accumulator, curr) => accumulator + curr)
  arr.forEach(function(el){answer2+=el});
  
  console.log(answer2)
  return answer, 
}
arr = [1,2,3,4,5,6]
console.log(solution(arr));
```

 <pre>
 💬 배열이아닌 파라미터가 숫자하나인 입력값을 받을때 제일 단순한 방법은 
    for문으로 누적합을 구하는 것 같고 배열일때 누적합을 구하는 것도 for문
    사용을 할 수 있지만 reduce() 메소드나 forEach() 메소드로 구할 수 있다.
 </pre>

</div>
</details>

<details>
<summary>1_5 최솟값 구하기</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>  7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(arr) {
    let answer,
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) 
            min = arr[i];
        }
    answer = min;
    return answer;

}
let arr = [5,7,1,3,2,9,11];
console.log(solution(arr));
 ```
 
 <br>
 
 ### ⁉️ Alternative Solution
 
  ```javascript
 function solution(arr){
  answer = Math.min(...arr);
  return answer;
}
let arr=[5,7,1,3,2,9,11]
console.log(solution(arr));
```

 <pre>
 💬 선생님의 첫번 째 솔루션은 최솟값을 넣을 변수에 MAX_SAFE_INTEGER로 초기화
    하고, for문으로 돌리면서 그 변수와 if문으로 비교하며, 더 작으면 그 변수값에 
    최솟값을 넣는 방식이고, 대체 솔루션은 Math.min()메소드를 사용하는 건데, 
    해당 메소드는 배열을 넣으면 NaN이 나오게된다. 그래서 전개 연산자를 사용해주면
    인식하여, 정상작동하는 것을 볼 수 있다. 
 </pre>

</div>
</details>
 
 <details>
<summary>1_6 홀 수</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>  7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(nat_num){
  let answer = [], sum =0, min = Number.MAX_SAFE_INTEGER;
  for (let i =0;i<nat_num.length;i++)
  {
      if((nat_num[i]%2)!==0){
          sum += nat_num[i];
          if (nat_num[i] < min) min = nat_num[i];
      }
  }   
  answer.push(sum);
  answer.push(min);
  return answer;
}
nat_num = [12,77,38,41,53,92,85]
console.log(solution(nat_num));
 ```
 
 <br>
 
 
 <pre>
 💬 7개의 자연수중에 홀수만 골라 출력하는거니, 일단 변수 answer를 리스트로
    초기화해주고 if문으로 홀수를 골라준다음에 또 다른 if문으로 최솟값이 나올때마다
    최소 변수에 그 값을 넣어주고, push() 메소드로 answer에 넣어준다. 
 </pre>

</div>
</details>

