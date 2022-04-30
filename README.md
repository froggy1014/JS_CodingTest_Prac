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
  
  <details>
<summary>2_2 보이는 학생</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
  <pre>선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때,<br>맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고,<br>작거나 같으면 보이지 않습니다.)
 </pre>
 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(arr){         
  let answer=1, max=arr[0];
  for(let i=1; i<arr.length; i++){
      if(arr[i]>max){
          answer++;
          max=arr[i];
      }
  }
  return answer;
}
let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
 ```
 
 <br>

 <br>

 <pre>
 💬  너무 쉬운 문제였는데, 일단 맨앞에 있는 학생은 무조건 보이므로 answer 변수는 1로 초기화하고, 
    최댓값 max 변수를 [0]번 인덱스로 초기화 후 for문으로 돌리면서 [i]번째 인덱스가 최댓값보다 크면,
    answer++, 그리고 해당 인덱스를 max변수에 치환시킨다. 
 </pre>

</div>
</details>

<details>
<summary>2_3 가위 바위 보</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다.<br>
 비길 경우에는 D를 출력합니다. 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.<br>
 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
 </pre>

 <bt>

 |회수|A|B|승자|
|:---:|:---:|:---:|:---:|
|1|2|1|A|
|2|3|1|B|
|3|3|2|A|
|4|1|2|B|
|5|3|3|D|

 
 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(a, b) {
    let answer = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) 
            answer += "D ";
        else if (a[i] === 1 && b[i] === 3) 
            answer += "A ";
        else if (a[i] === 2 && b[i] === 1) 
            answer += "A ";
        else if (a[i] === 3 && b[i] === 2) 
            answer += "A ";
        else 
            answer += "B ";
        }
    return answer;
}
let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
 ```
 
 <br>

 <br>

 <pre>
 💬  가위바위보인 건데, if문으로 A가 이기는 경우를 다 else if로 적어놓고, 처음 if에는 무승부인 경우
     else는 다 B를 반환하게한다. 
 </pre>


</div>
</details>
 
 <details>
<summary>2_4 점수계산</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
 </pre>

<br>

|채점|점수|
|---|---|
|1|1|
|0|0|
|1|1|
|1|2|
|1|3|
|0|0|
|0|0|
|1|1|
|1|2|
|0|0|

 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s){
  let answer = 0;
  let score = 1;
  for (let i=0;i<s.length;i++){
    if (s[i] == 1)
    {
      answer+=score;
      score++;
    }else{
      score = 1;
    }
  }
  return answer;
}
let str = [1,0,1,1,1,0,0,1,1,0];
console.log(solution(str));
 ```


 <br>

 <pre>
 💬  for문으로 인덱스가져오고, if로 비교해서 채점이 1이면 score변수로 더하고 score++,
    그 다음 인덱스에서도 채점이 1이면 더해진 score로 다시 더하고 아니라면 score, 1로 초기화한다. 
 </pre>


</div>
</details>
 
<details>
<summary>2_5 등수구하기</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 </pre>

<br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(s){
    let answer = [];
    let rank = s.length;
    for(let i = 0; i<s.length; i++){
      for(let j = 0;j<s.length; j++ ){
        if ( s[i] > s[j]){
          rank--;
        }
      }
      answer.push(rank);
      rank = 5;
    }
  return answer;
}
let str = [65,90,38,99,53];
console.log(solution(str));
 ```


 <br>

 ### ⁉️ Alternative Solution
 
  ```javascript
function solution(arr) {
    let n = arr.length;
    let answer = Array.from({length: n}, () => 1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) 
                answer[i]++;
            }
        }
    return answer;
}
let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));
```

<br>

 <pre>
 💬  내가 생각한 솔루션은 rank라는 변수로 일단 length로 최하 숫자로 맞춰놓고 
    for문을 두개 돌려서, 부모 for문보다  자식 for문이 더 높으면 rank에서 1씩빼게
    하여서 구현했다. 

    그리고 모범 솔루션에서는 Array.from 메소드를 사용하였는데, 이걸 사용해지니 더 깔끔하게
    코드가 개선되었는데, 이중 for문을 통해 풀어내는건 같았으나 이 메소드는 
    Array.from({length: n}, () => 1) 이런식으로 하면 새로운 배열을 만들어내는데, 
    n만큼의 length를 다 요소 1로 재 생성한다.
    </pre>


</div>
</details>
 <details>
<summary>2_6 격자판 최대합</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
 </pre>

 |10|13|10|12|15|
|--|--|--|--|--|
|12|39|30|23|15|
|11|25|50|53|15|
|19|27|29|37|27|
|19|13|30|13|19|

<br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(arr){
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  for(let i=0;i<n;i++){
    sum1=sum2=0;
    for(let j=0;j<n;j++){
      sum1 += arr[i][j] 
      sum2 += arr[j][i]
    }
    answer = Math.max(answer,sum1,sum2);
  }

  sum1=sum2=0;
  for(let i=0;i<n;i++)
    {
      sum1 += arr[i][i] 
      sum2 += arr[i][n-1-i]
    }
    answer = Math.max(answer,sum1,sum2);
  
  return answer;
}
let arr = [[10,13,10,12,15],
           [12,39,30,23,11],
           [11,25,50,53,15],
           [19,27,29,37,27],
           [19,13,30,13,19]];
console.log(solution(arr));
 ```
 

<br>

 <pre>
 💬  이거는 내가 잘 몰라서 모범답안을 보는 수 밖에 없었다. 
    일단 이중 for문으로 한번 Math.max()로 통해 제일 높은 값을 뽑아 answer에 넣고,
    그리고 문제는 대각선이였는데, [i][i], [i][n-1-i] 이렇게 넣으면 대각선 인덱스가
    잡혔는데, 다음에 한번더 풀어보면서 익숙해져야겠다. 
    </pre>


</div>
</details>
 <details>
<summary>2_7 봉우리</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.<br> 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.<br>봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.<br>
격자의 가장자리는 0으로 초기화 되었다고 가정한다.<br>
만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
 </pre>

 |0|0|0|0|0|0|0|
|--|--|--|--|--|--|--|
|0|5|3|7|2|3|0|
|0|3|7|1|6|1|0|
|0|7|2|5|3|4|0|
|0|4|3|6|4|1|0|
|0|8|7|3|5|2|0|
 |0|0|0|0|0|0|0|

<br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
                    flag = 0;
                    break;
                }
            }
            if (flag) 
                answer++;
            }
        }
    return answer;
}
 let arr=[[5, 3, 7, 2, 3], 
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));
 ```
 

<br>

 <pre>
 💬  이것도 너무 어려워서 내가 모범답안을 볼 수 밖에 없었다 ㅠㅠ
    이중문을 일단 만들어서 좌표를 만들고, flag 변수를 하나 만들어서, 4 방향이 다 
    [i][j]좌표보다 크면 flag는 0으로 바뀌고 break; 로 넘어가고 반대면 flag는 그대로
    살아있을것이고 이게 그대로 count++가 되어서 세게되는것인데, if에 좌표 outofrange
    구간은 거르기 위해 nx,ny가 0보다 같거나 크게, 그리고 arr.length보다는 무조건 작게
    하게끔 필터링을 만들어서 방지한다. 
    </pre>


</div>
</details>

<br>


 ## 챕터3 - 문자열 탐색
 
  <br>
 
 <details>
<summary>3_1 회문 문자열(Palindrome)</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다. 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 <br>
 “NO"를 출력 하는 프로그램을 작성하세요.
 </pre>


 <br>
 
 ### ‼️ Solution
 
 ```javascript
function palindrome(str)
{
  const sentence = str.toLowerCase();
  let rev_sen = '';
  for (let i=sentence.length-1; i >= 0; i--){
     rev_sen += sentence[i];
  }
  if (sentence == rev_sen)
    return "YES";
  else return "NO";
}
const str = "goog"
console.log(palindrome(str))
 ```
 
 <br>

 ### ⁉️ Alternative Solution
 
  ```javascript
// 각자 반대편에 해당되는 인덱스와 비교 

 function solution(s){
  let answer = "Yes";
  s=s.toLowerCase();
  let len=s.length;
  for (let i =0; i<Math.floor(len/2);i++){
    if (s[i]!==s[(len-1)-i]) return "No"
  }
  return  answer;
}
let str = "good";
console.log(solution(str))

// split().reverse().join() 메소드를 이용한 방법

function solution(s){
  let answer = "Yes";
  s=s.toLowerCase();
  if( s !== s.split('').reverse().join(''))
    return "No";

  return answer;
}
let str = "goog";
console.log(solution(str))
```

 <br>

 <pre>
 💬  첫번째로 내가 직접 생각한 솔루션은 일단 문자열을 전부 소문자로
     바꿔주는 건 공통적이고, 문자열 인덱스를 반대로 for문을 돌리며
     다른 문자열 변수에 더해준다음, 최종 기존 문자열과 반대로 넣은 
     문자열과 비교하여 정답 반환했다.
    
    내가 보는 강의에서 총 2가지의 다른 솔루션을 알려주셨는데, 하나는
    문자열을 반으로 나누어, 서로 마주보는 인덱스끼리 for문을 돌려 하
    나라도 틀린게 나오면 바로 정답을 반환하는 거였고, 

    다른 하나는 split('')으로 문자열을 원소로 만든다음, reverse()
    메소드로 리스트를 뒤집어 준다음 join('')으로 합쳐주어 다시 문자열로
    만들어주었다. 그다음 비교문을 돌려 정답 반환을 하였다. 
 </pre>


</div>
</details>

 <details>
<summary>3_2 유효한 팰린드롬(Palindrome)</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", <br>
 아니면 “NO"를 출력하는 프로그램을 작성하세요. 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
 </pre>


 <br>
 
 ### ‼️ Solution
 
 ```javascript
function palindrome(str)
{
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  const t = str.toLowerCase().replace(regExp, "")
  for (let i = 0; i < Math.floor(t.length/2); i++)
    if (t[i] !== t[t.length-i-1]) return "NO"
  return "YES"
}
const str = "found7, time: study; Yduts; emit, 7Dnuof"
console.log(palindrome(str))
 ```
 
 <br>

 ### ⁉️ Alternative Solution
 
  ```javascript
function palindrome(str)
{
  let answer = "yes"
  const t = str.toLowerCase().replace(/[^a-z]/g, '')
  if(t !== t.split('').reverse().join('')) return "No";

  return answer;
}
const str = "found7, time: study; Yduts; emit, 7Dnuof"
console.log(palindrome(str))
```

 <br>

 <pre>
 💬  내가 직접풀어본 솔루션으로는 특수문자 체크 정규식을 가져와서
     특수문자를 제거 및 소문자로 통일하고, for문으로 각자 
     대응하는 index를 비교하면서 정답을 반환하는 식으로 하였고,

    강의에서 나온 모범답안은 일단 나처럼 특수문자 체크 정규식을 인터넷
    에서 가져오지 않고 replace(/[^a-z]/g,'') 이렇게하면 a-z를
    제외한 모든 요소가 제외시킨다는걸 알게되었다. 그리고 이걸 여느 회문
    문자열 문제와 같이 매소드를 통해 반대로 돌리고, 통째로 문자열을
    두개 비교해서 정답을 반환하셨다.   
 </pre>


</div>
</details>

<details>
<summary>3_3 숫자만 추출</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>앞문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.<br>만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.<br>추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
 </pre>


 <br>
 
 ### ‼️ Solution
 
 ```javascript
function palindrome(str)
{
  let t = str.toLowerCase().replace(/[a-z]/g,'').split('')
    while(true){
      if (t[0] <= 0)
        t.shift();
      else return t.join('');
    } 
}
const str = "00030501020000g0en2T0145s8eSoft"
console.log(palindrome(str))
 ```
 
 <br>

 ### ⁉️ Alternative Solution
 
  ```javascript

//isNaN(), parseInt() 메소드를 통한 추출

function solution(str)
{
  let answer ="";
  for (let x of str){
    if (!isNaN(x)) answer+=x;
  }
  return parseInt(answer);
}
const str = "g0en2T0s8eSoft"
console.log(solution(str))

// parseInt사용 못할 시, 수학적 접근법으로 추출

function solution(str)
{
  let answer =0;
  for (let x of str){
    if (!isNaN(x)) answer = answer*10+Number(x);
  }
  return answer;
}
const str = "g0en2T0s8eSoft"
console.log(solution(str))
```

 <br>

 <pre>
 💬  내가 직접한 솔루션은 일단 숫자만 남게끔 정규식으로 다른 문자들 삭제,
    그리고 split('')로 배열로 만든다음 첫번째 인덱스에 0보다 작은 값이
    나오면 제거할때 까지 무한루프를 돌리고, else 시 반환하면서, join('')

     일단 강의에서는 for of을 통해 문자열의 요소를 하나씩 가져오고, 
    if문안에 isNaN()으로 문자열을 필터링하여, int 변수에 숫자들을
    그대로 더해주고, 마지막 반환할때 parseInt()를 사용해 자연수로 만듬

     두번째 방법으로는 만약 코딩테스트할때 parseInt()를 사용하지 못하게
    했을 상황을 가정하여, isNaN은 똑같이 사용하나, int 변수에 넣을 때,
    answer = answer*10+Number(x) 이런식으로 맨앞자리에 0이 들어가면
    자연스레 0이되는 수학적 접근으로 해결 할 수 있었다.
 </pre>


</div>
</details>
 
 <details>
<summary>3_4 가장 짧은 문자거리</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
 </pre>


 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(str, cha)
{
  let answer = [];
  let P = 1000;
  for (let x of str){
    if (x === cha){
      P=0;
      answer.push(P)
    }else{
      P++;
      answer.push(P)
    }
  }
  P=1000;
  for (let i = str.length-1;i>=0;i--){
      if (str[i]===cha){
        P=0;  
      }
      else{
        P++;
        answer[i]=Math.min(answer[i], P);
      }
  }
  return answer;
}
const str = "teachermode"
const cha = 'e'
console.log(solution(str,cha))
 ```


 <br>

 <pre>
 💬  한참 고민하다가 결국엔 솔루션을 봐버렸다. 이해하기 위해서 몇번이나 멈춰서 생각한거 같은데, for문을 두번 쓸줄이야.. 
     일단 처음에는 indexOf 라는 메소드를 사용해서 풀으려고 했으나 fromIndex를 설정하면  오른쪽으로만 계산하는 경향이 있어서 과감히 포기했다. 
     강의에서 본 솔루션은 일단 한 변수를 일단 큰값으로 정해놓고, 찾고자하는 문자를 for문을 돌려 만나게 되면 초기화하고, 멀어질수록 그 카운터에 +한다. 
     하지만 결국 이렇게하면 오른쪽으로만 보게되는 꼴인데, 또 다른 for문으로 마지막 인덱스부터 반대로 내려오게끔 해놓은 다음에 같은 자리 인덱스를 
     마지막에 Math.min(a,b)를 통해서 더 카운터가 작은 값을 넣으면서 정답을 변환하였다. 나중에 다시 풀어봐야겠다.. 
 </pre>


</div>
</details>
 
 <details>
<summary>3_5 문자열 압축</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 <br>반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로<br>
  문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.
 </pre>


 <br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(str)
{
  let answer = "";
  let letter ;
  let cnt = 1;
  for (x of str ){
    if (letter != x){
      if ( cnt > 1 ){
        answer += String(cnt)
        cnt = 1;
      }
      letter = x
      answer += x;
    }else cnt++;
  }
  return answer;
}
const str = "KKHSSSSSSSE"
console.log(solution(str))
 ```


 <br>

 <pre>
 💬  선생님이랑 솔루션이 얼추 비슷한거 같아서, 내꺼에 조금만 수정을 했었다.
     나는 일단 문자열을 무조건 배열로 바꾸려는 습관이 있는데, 선생님꺼는 
     문자열 그대로 받아서 인덱스를 넣고 하시더라.. 나는 for of로 문자열에서
     하나씩 가져와 하나 전에 나왔던 것과 비교해서, if문을 구성해 풀었고,
     모범 솔루션도 얼추 비슷했다.
 </pre>


</div>
</details>

   <br>
 
 ## 챕터4 - 완전탐색(블루투포스)
 
  <br>
 
 <details>
<summary>4_1 자릿수의 합</summary>
<div markdown="1">       
<br>
 
 ### ❓ Question
 
 <pre>N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 
 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 
 될 수 있다면 1234를 답으로 출력해야 합니다.
 </pre>

<br>
 
 ### ‼️ Solution
 
 ```javascript
function solution(arr){
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr){
    let sum=0;
    let tmp = x;
    while(tmp){
      sum+=(tmp%10);
      tmp=Math.floor(tmp/10);
    }
    if(sum>max){
      max = sum;
      answer = x;
    }else if ( sum===max){
      if(x>answer)answer=x;
    }
  }
  return answer;
}
const arr = [128,460,603,444,521,137,123];
console.log(solution(arr));
 ```
 
 <br>

  ### ⁉️ Alternative Solution
 
  ```javascript
function solution(n, arr){
let answer, max = Number.MIN_SAFE_INTEGER;
for (let x of arr) {
    let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
        max = sum;
        answer = x;
    } else if (sum === max) {
        if (x > answer) 
            answer = x;
        }
    }
return answer;
}
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
```
 
<br>

 <pre>
 💬  일단 입력이 숫자라는 가정하에 for of로 요소하나씩 가져와서 해당 요소는 
    건들면 안되니까 임시로 다른변수에 넣은 다음에 while문을 하나 만들고 
    sum+=(tmp%10) 를 통해 sum 변수에 요소값을 10으로 나눈 후 나머지값을 더하게 만든다. 
    그리고 original값은 따로 answer에 보관하고 if 문을통해 먼저 만들어놓은 max와 sum을 비교하여 
    sum이 더 크면 대체해주고, 만약 sum값이 같은걸 고려해서 else if 문을 만들어 original 요소값이 
    더 큰지 비교하여 그런 상황에 대비했다. 

    다른 방법은 문자열로 만들어서 해결해보는 방식인데, 똑같이 for of 문으로 
    요소값을 가져오고 toString().split('') 통해 문자열 한 디짓씩으로 나눈다음에 
    reduce((a, b) => a + Number(b), 0) 메소드를 통해 
    디짓하나하나를 더해준다. 그런데 b에 Number을 붙여주지 않으면 숫자로 
    안 더해지고 그냥 옆에 붙어버린다. 그리고 아래는 똑같다. 
    </pre>


</div>
</details>



