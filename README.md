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

 <details>
<summary>1_7 10부제</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>  서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 
 <br>   날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금 지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일,
 <br>   17일, 27일에 운행하 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한 다.
 <br>
   여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고 
<br>   7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(day, arr) {
    let answer = 0;
    for (let x of arr) {
        if (x % 10 == day) 
            answer++;
        }
    
    return answer;
}
arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
 ```
 
 <br>
 
 <pre>
 💬  십의 자리의 숫자들을 일단 10으로 나머지 연산을 하면 1의 자리만 남겠고 그것을 날짜의 일의 자리와 
     if문으로 비교해서 걸리면 하나씩 카운트하게끔 하면 된다. 
 </pre>

</div>
</details>

 <details>
<summary>1_8 일곱 난쟁이</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre> 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 
 <br> 일곱 명이 아닌 아홉 명이었던 것이다. 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 
 <br> 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
<br> 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(arr){
  let answer=arr;
  let sum=answer.reduce((a, b)=>a+b, 0);
  for(let i=0; i<8; i++){
      for(let j=i+1; j<9; j++){
          if((sum-(answer[i]+answer[j]))==100){
              answer.splice(j, 1);
              answer.splice(i, 1);
          }
      }
  }
  return answer;
}
let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
 ```
 
 <br>

 <pre>
 💬  일단 모든 파라미터를 더해서 누적합을 구한다. 그리고 이중 for문으로 인덱스 i, j 번째 파라미터 둘을 더하고,
     누적합에서 빼서 100이 나오면 해당 인덱스에 파라미터를 splice()메소드로 제외시키는데 여기서, 뒤에 있는 인덱스
     j를 먼저 제외시켜주는데 이유는 인덱스를 삭제하면, 뒤에 있던 인덱스가 앞으로 당겨지기 때문이다. 
 </pre>

</div>
</details>
 
 <details>
<summary>1_9 A를 #으로</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s) {
    let answer = "";
    for (let x of s) {
        if (x == 'A') 
            answer += '#';
        else 
            answer += x;
        }
    return answer;
}
let str="BANANA";
console.log(solution(str));
 ```
 
 <br>

  ### ⁉️ Alternative Solution
 
  ```javascript
function solution(s) {
    let answer = s;
    answer = answer.replace(/A/g, "#");
    return answer;
}
=let str="BANANA";
console.log(solution(str));
```

 <br>
 
 <pre>
 💬  일단 솔루션은 간단하다, for of 로 문자열을 하나씩 가져오고 'A'와 대조해 같으면 #으로 넣어주는거다.
     대안 솔루션은 replace() 라는 메소드를 사용하게 되는데, 여기서는 global을 붙여줌으로써 모든 문자열에 
     영향을 끼치게 한다. 
 </pre>
 
  참조 링크: [replace()-MDN][ref-mdn]
 
[ref-mdn]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace "ref-replace()"
 
</div>
</details>
 
<details>
<summary>1_10 문자 찾기</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s, t){
  let answer=0;
  for(let x of s){
      if(x===t) answer++;
  }
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
 ```
 
 <br>

  ### ⁉️ Alternative Solution
 
  ```javascript
function solution(s, t) {
    let answer = s.split(t).length;
    return answer - 1;
}
let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
```

<br> 
 
 <pre>
 💬  솔루션은 for of로 문자열의 문자를 하나씩 가져오고 비교하여 카운트를 하는 것이고 
     다른 방법으로는 문자열을 내가 찾아야하는 문자로 split()하여 바로 length()로
     파라미터를 카운트해주고 마지막에 -1를 한다.
 </pre>

</div>
</details>
 
<details>
<summary>1_11 대문자 찾기</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s) {
    let answer = 0;
    for (let x of s) {
        if (x === x.toUpperCase()) 
            answer++;
        }    
    return answer;
}
let str="KoreaTimeGood";
console.log(solution(str));
 ```
 
 <br>

  ### ⁉️ Alternative Solution
 
  ```javascript
function solution(s) {
    let answer = 0;
    for (let x of s) 
    {
      let num=x.charCodeAt(); 
      if(num>=65 && num<=90) answer++;
    }
    
    return answer;
}
let str="KoreaTimeGood";
console.log(solution(str));
```

 <br>

 <pre>
 💬  첫번쨰 솔루션은 toUpperCase()메소드로 문자열을 대문자로 전부 바꿔주고, 기존 문자열과
     비교하여 카운트를하는 방법과, 다른 방법으로는 charCodeAt() 메소드로 for of로 돌려
     해당 문자열 인덱스에 해당되는 문자를 유니코드로 바꿔서 대문자 유니코드의 범주안에 들어가있으면
     카운트하는건데, 기억해둘건 대문자(65~90) / 소문자(97~122)     
 </pre>

</div>
</details>
 
<details>
<summary>1_12 대문자로 통일</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s){         
let answer = "";
for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) 
        answer += String.fromCharCode(num - 32);
    else 
        answer += x;       
    }
return answer;
}
let str="ItisTimeToStudy";
console.log(solution(str));
 ```
 
 <br>

  ### ⁉️ Alternative Solution
 
  ```javascript
function solution(s){         
  let answer="";
  for(let x of s){
      if(x===x.toLowerCase()) answer+=x.toUpperCase();
      else answer+=x;
  }
  return answer;
}
let str="ItisTimeToStudy";
console.log(solution(str));
```

 <br>

 <pre>
 💬  첫번째 솔루션은 for of 돌리면서, 문자열 인덱스마다 문자를 유니코드를 바꾸어서 소문자 범주안에 들어있다면,
     대문자 유니코드로 바꿔준다, 알파벳마다 32씩 차이나서 fromCharCode(num-32) 이렇게 넣어준다. 
     다른 방법으로는 if에 toLowerCase()메소드를 사용해서 비교하고 소문자면 toUpperCase()로 바꿔준다. 
 </pre>

</div>
</details>

 <details>
<summary>1_13 대소문자 변환</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s){  
  let answer="";
  for(let x of s){
      if(x===x.toUpperCase()) answer+=x.toLowerCase();
      else answer+=x.toUpperCase();
  }
  return answer;
}
console.log(solution("StuDY"));
 ```
 
 <br>

 <br>

 <pre>
 💬  간단하다, if문 toUpperCase()로 바꿔주고 비교해서 맞다면 소문자로 아니면 대문자로 바꿔준다. 
 </pre>

</div>
</details>

<details>
<summary>1_14 가장 긴 문자열</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s) {
    let answer = "",
        max = Number.MIN_SAFE_INTEGER;
    for (let x of s) {
        if (x.length > max) {
            max = x.length;
            answer = x;
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
 ```
 
 <br>

 <br>

 <pre>
 💬  최대값 변수에 Number.MIN_SAFE_INTEGER 상수를 넣어주고, for of로 인덱스마다 문자열가져와서 
     length()로 길이를 비교를 해서 제일 큰걸 answer 변수에 넣어서 출력
 </pre>

</div>
</details>

<details>
<summary>1_15 가운데 문자 출력</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s) {
    let answer;
    let mid = Math.floor(s.length / 2)
    if (s.length % 2 === 1) 
        answer = s.substring(mid, mid + 1);
    else 
        answer = s.substring(mid - 1, mid + 1);
    return answer;
}
console.log(solution("study"));
 ```
 
 <br>


 ### ⁉️ Alternative Solution
 
  ```javascript
function solution(s){  
  let answer;
  let mid=Math.floor(s.length/2)
  if(s.length%2===1) answer=s.substr(mid, 1);
  else answer=s.substr(mid-1, 2);
  return answer;
}
console.log(solution("abcef"));
```

 <br>

 <pre>
 💬  첫 번째 솔루션은 mid라는 변수를 하나 만들고, 문자열 가운데 인덱스를 잡을 수 있게 값을 넣어줍니다. 
     그래서 홀수, 짝수에 따라, substring() 메소드를 이용해서 해당 인덱스에 해당되는 문자를 answer에 넣어준다.
     다른 방법은 substr() 메소드인데, 차이점이라고 한다면 두번째 파라미터에 들어간 값의 인덱스까지 출력한다. 
     substring()은 두번째 파라미터값의 전 인덱스까지 반환한다. 
 </pre>

 참조 - [substring()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring), [substr()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

</div>
</details>
 
 <details>
<summary>1_16 중복문자제거</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.<br>
      제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s){  
let answer = "";
//console.log(s.indexOf("K"));
for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) 
        answer += s[i];
    }
return answer;
}
console.log(solution("ksekkset"));
 ```
 
 <br>

 <br>

 <pre>
 💬  솔루션은 indexOf()라는 메소드로,  문자열 s[i]번째 인덱스에 해당되는 문자의 인덱스 번호랑 for문으로 돌리는 i랑 비교해서
     그 값이 같은 문자만 answer에 넣는다. 왜냐하면 indexOf에서 같은 문자라도 문자열에서 첫번째로 나오는 인덱스 번호만 나오기때문에
     중복값이라면 두 값이 같을 수 없다.    
 </pre>

 참조 - [indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
</div>
</details>

 <details>
<summary>1_17 중복단어제거</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. <br>
      출력하는 문자열은 원래의 입력순서를 유지합니다.

 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s){  
  let answer;
  answer=s.filter((v, i)=>{
      if(s.indexOf(v)===i) return v;
  });
  return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
 ```
 
 <br>

 <br>

 <pre>
 💬  filter() 메소드를 이용해서 콜백함수가 통과하는 모든 요소를 모아 새로운 배열로 반환하는데, 
     v 즉 indexOf(v)로 해당 단어의 인덱스를 뽑아서 i와 비교해서 같다면 넣고 틀리다면 그냥 넘어가는 
     식으로 중복 문자를 제거한다. 
 </pre>

 참조 - [indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
</div>
</details>

<br>

## 챕터2 - 2차원 배열 탐색
 
<br> 
 
 <details>
<summary>2_1 큰 수 출력하기</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.<br>
      (첫 번째 수는 무조건 출력한다)
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(arr){         
  let answer=[];
  answer.push(arr[0]);
  for(let i=1; i<arr.length; i++){
      if(arr[i]>arr[i-1]) answer.push(arr[i]);
  }
  return answer;
} 
let arr=[7, 3, 9, 5, 6, 12]
console.log(solution(arr))
 ```
 
 <br>

 <br>

 <pre>
 💬  일단 answer를 데이터 타입을 리스트로 초기화해주고, 배열의 0번 인덱스를 push해서 넣습니다.
     그리고 for문을 돌려 현재 i 번째가 앞 인덱스보다 크다면 하나씩 push할 수 있도록 하였습니다. 
 </pre>

 참조 - [push()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
</div>
</details>


 
