# ๐จ ์๋ฐ์คํฌ๋ฆฝํธ ์๊ณ ๋ฆฌ์ฆ ๋ฌธ์ ํ์ด 

<br>

## ๐ ์ธํ๋ฐ - ์๋ฐ์คํฌ๋ฆฝํธ ์๊ณ ๋ฆฌ์ฆ ๋ฌธ์ ํ์ด(์ฝ๋ฉํ์คํธ ๋๋น) by ๊นํ์ 

[์ธํ๋ฐ ์ฃผ์](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4)

<br>

## ์ฑํฐ1 - ๊ธฐ๋ณธํ์ด ๋ฌธ์ . 

<br>

<details>
<summary>1_1 ์ธ ์ ์ค ์ต์๊ฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>  100์ดํ์ ์์ฐ์ A, B, C๋ฅผ ์๋ ฅ๋ฐ์ ์ธ ์ ์ค ๊ฐ์ฅ ์์ ๊ฐ์ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ ์ธ์.(์ ๋ ฌ์ ์ฌ์ฉํ๋ฉด ์๋ฉ๋๋ค) </pre>
 
 <br>
 
 ### โผ๏ธ Solution 
 
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
 
 ### โ๏ธ Alternative Solution
 
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
 1. ์ ์๋์ ์ผ๋จ if ๋ฌธ์ผ๋ก ๊ฐ๋จํ๊ฒ ๋๋ด์จ๋ค.
 2. ๋๋ Math.max๋ฅผ ์ฌ์ฉํ์ฌ์ ๊ฐ์ ๋ฝ๊ณ ์ถ์๊ณ , ํ์ง๋ง ํด๋น ๋ฉ์๋๋ ๋ฐฐ์ด๋ก ์ถ๋ ฅํ๋ฉด 
    NaN(Not a Number)๊ฐ ์ถ๋ ฅ๋๊ธฐ ๋๋ฌธ์ ์์๋ณด๋ ์ ๊ฐ์ฐ์ฐ์<Spread Operator>๋ apply ๋ฉ์๋
    ๋ฅผ ํตํด์ ๋ฐฐ์ด ํ๋ผ๋ฏธํฐ๋ฅผ ์ ํ  ์ ์์๋ค.
 </pre>

</div>
</details>
 
 <details>
<summary>1_2 ์ผ๊ฐํ ํ๋ณํ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>  1๊ธธ์ด๊ฐ ์๋ก ๋ค๋ฅธ A, B, C ์ธ ๊ฐ์ ๋ง๋ ๊ธธ์ด๊ฐ ์ฃผ์ด์ง๋ฉด ์ด ์ธ ๋ง๋๋ก ์ผ๊ฐํ์ ๋ง๋ค ์ ์์ผ๋ฉด 
 โYES"๋ฅผ ์ถ๋ ฅํ๊ณ , ๋ง๋ค ์ ์์ผ๋ฉด โNO"๋ฅผ ์ถ๋ ฅํ๋ค. </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ ์ผ๋จ ์ง๊ณ  ๋์ด๊ฐ์ผ ํ  ๊ฒ์, ์ ์ผ ๊ธด๋ณ์ ๋๋จธ์ง ๋ ์ ์ ํฉ๋ณด๋ค ์์์๋ 
    ์๋๋ ๊ฒ์๋๋ค. ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ if๋ฌธ์ผ๋ก ์๋ ฅ๊ฐ 3๊ฐ ์ค ์ต๋๊ฐ์ ๊ตฌํ ํ, 
    sum๊ฐ์์ max๋ฅผ ๋นผ๊ณ , ๊ทธ ๊ฐ์ด max ๊ฐ๋ณด๋ค ์์ผ๋ฉด ์ผ๊ฐํ์ด ๋  ์ ์๋ค.
 </pre>

</div>
</details>
 
 <details>
<summary>1_3 ์ฐํ ๊ฐ์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>  ์ฐํ 1 ๋ค์ค๋ 12์๋ฃจ์๋๋ค. ํ์ 1์ธ๋น ์ฐํ์ 1์๋ฃจ์ฉ ๋๋์ด ์ค๋ค๊ณ  
 ํ  ๋ N๋ช์ด ํ์์ ๋ฅผ ์๋ ฅํ๋ฉด ํ์ํ ์ฐํ์ ๋ค์ค ์๋ฅผ ๊ณ์ฐํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ Math.ceil() ๋ฉ์๋๋ง ์๋ฉด ๊ต์ฅํ ๊ฐ๋จํ ๋ฌธ์ ์๋ค. ํ ๋ค์ค์ 12๊ฐ,
    ์ฆ ์๋ ฅ์ 12๋ก ๋๋๊ณ , ๋๋จธ์ง ๊ฐ์ ๋ฌด์กฐ๊ฑด ๋ฐ์ฌ๋ฆผํด์ฃผ๋ฉด ๋๋ ๋ฌธ์ ๋ค.

    ์ฌ๊ธฐ์ ์ถ๊ฐ๋ก Math.float()๋ ๋ฐ๋๋ก ๋ฌด์กฐ๊ฑด ๋ด๋ฆผ๊ฐ์ ์ถ๋ ฅ 
               Math.round()๋ 0.5์ด์์ ๋ฐ์ฌ๋ฆผํด์ฃผ๋ ๋ฉ์๋. 
 </pre>

</div>
</details>
 
 <details>
<summary>1_4 1๋ถํฐ N๊น์ง ํฉ ์ถ๋ ฅํ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>  ์์ฐ์ N์ด ์๋ ฅ๋๋ฉด 1๋ถํฐ N๊น์ง์ ํฉ์ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 
 ### โ๏ธ Alternative Solution
 
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
 ๐ฌ ๋ฐฐ์ด์ด์๋ ํ๋ผ๋ฏธํฐ๊ฐ ์ซ์ํ๋์ธ ์๋ ฅ๊ฐ์ ๋ฐ์๋ ์ ์ผ ๋จ์ํ ๋ฐฉ๋ฒ์ 
    for๋ฌธ์ผ๋ก ๋์ ํฉ์ ๊ตฌํ๋ ๊ฒ ๊ฐ๊ณ  ๋ฐฐ์ด์ผ๋ ๋์ ํฉ์ ๊ตฌํ๋ ๊ฒ๋ for๋ฌธ
    ์ฌ์ฉ์ ํ  ์ ์์ง๋ง reduce() ๋ฉ์๋๋ forEach() ๋ฉ์๋๋ก ๊ตฌํ  ์ ์๋ค.
 </pre>

</div>
</details>

<details>
<summary>1_5 ์ต์๊ฐ ๊ตฌํ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>  7๊ฐ์ ์๊ฐ ์ฃผ์ด์ง๋ฉด ๊ทธ ์ซ์ ์ค ๊ฐ์ฅ ์์ ์๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 
 ### โ๏ธ Alternative Solution
 
  ```javascript
 function solution(arr){
  answer = Math.min(...arr);
  return answer;
}
let arr=[5,7,1,3,2,9,11]
console.log(solution(arr));
```

 <pre>
 ๐ฌ ์ ์๋์ ์ฒซ๋ฒ ์งธ ์๋ฃจ์์ ์ต์๊ฐ์ ๋ฃ์ ๋ณ์์ MAX_SAFE_INTEGER๋ก ์ด๊ธฐํ
    ํ๊ณ , for๋ฌธ์ผ๋ก ๋๋ฆฌ๋ฉด์ ๊ทธ ๋ณ์์ if๋ฌธ์ผ๋ก ๋น๊ตํ๋ฉฐ, ๋ ์์ผ๋ฉด ๊ทธ ๋ณ์๊ฐ์ 
    ์ต์๊ฐ์ ๋ฃ๋ ๋ฐฉ์์ด๊ณ , ๋์ฒด ์๋ฃจ์์ Math.min()๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋ ๊ฑด๋ฐ, 
    ํด๋น ๋ฉ์๋๋ ๋ฐฐ์ด์ ๋ฃ์ผ๋ฉด NaN์ด ๋์ค๊ฒ๋๋ค. ๊ทธ๋์ ์ ๊ฐ ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํด์ฃผ๋ฉด
    ์ธ์ํ์ฌ, ์ ์์๋ํ๋ ๊ฒ์ ๋ณผ ์ ์๋ค. 
 </pre>

</div>
</details>
 
 <details>
<summary>1_6 ํ ์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>  7๊ฐ์ ์์ฐ์๊ฐ ์ฃผ์ด์ง ๋, ์ด๋ค ์ค ํ์์ธ ์์ฐ์๋ค์ ๋ชจ๋ ๊ณจ๋ผ ๊ทธ ํฉ์ ๊ตฌํ๊ณ , ๊ณ ๋ฅธ ํ์๋ค ์ค ์ต์๊ฐ์ ์ฐพ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ 7๊ฐ์ ์์ฐ์์ค์ ํ์๋ง ๊ณจ๋ผ ์ถ๋ ฅํ๋๊ฑฐ๋, ์ผ๋จ ๋ณ์ answer๋ฅผ ๋ฆฌ์คํธ๋ก
    ์ด๊ธฐํํด์ฃผ๊ณ  if๋ฌธ์ผ๋ก ํ์๋ฅผ ๊ณจ๋ผ์ค๋ค์์ ๋ ๋ค๋ฅธ if๋ฌธ์ผ๋ก ์ต์๊ฐ์ด ๋์ฌ๋๋ง๋ค
    ์ต์ ๋ณ์์ ๊ทธ ๊ฐ์ ๋ฃ์ด์ฃผ๊ณ , push() ๋ฉ์๋๋ก answer์ ๋ฃ์ด์ค๋ค. 
 </pre>

</div>
</details>

 <details>
<summary>1_7 10๋ถ์ </summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>  ์์ธ์๋ 6์ 1์ผ๋ถํฐ ๊ตํต ํผ์ก์ ๋ง๊ธฐ ์ํด์ ์๋์ฐจ 10๋ถ์ ๋ฅผ ์ํํ๋ค. ์๋์ฐจ 10๋ถ์ ๋ ์๋์ฐจ ๋ฒํธ์ ์ผ์ ์๋ฆฌ ์ซ์์ 
 <br>   ๋ ์ง์ ์ผ์ ์๋ฆฌ ์ซ์๊ฐ ์ผ์นํ๋ฉด ํด๋น ์๋์ฐจ์ ์ดํ์ ๊ธ ์งํ๋ ๊ฒ์ด๋ค. ์๋ฅผ ๋ค์ด, ์๋์ฐจ ๋ฒํธ์ ์ผ์ ์๋ฆฌ ์ซ์๊ฐ 7์ด๋ฉด 7์ผ,
 <br>   17์ผ, 27์ผ์ ์ดํํ ์ง ๋ชปํ๋ค. ๋ํ, ์๋์ฐจ ๋ฒํธ์ ์ผ์ ์๋ฆฌ ์ซ์๊ฐ 0์ด๋ฉด 10์ผ, 20์ผ, 30์ผ์ ์ดํํ์ง ๋ชปํ ๋ค.
 <br>
   ์ฌ๋ฌ๋ถ๋ค์ ์ผ์ผ ๊ฒฝ์ฐฐ๊ด์ด ๋์ด 10๋ถ์ ๋ฅผ ์๋ฐํ๋ ์๋์ฐจ์ ๋์๋ฅผ ์ธ๋ ๋ด์ฌํ๋์ ํ๋ ค๊ณ  ํ๋ค. ๋ ์ง์ ์ผ์ ์๋ฆฌ ์ซ์๊ฐ ์ฃผ์ด์ง๊ณ  
<br>   7๋์ ์๋์ฐจ ๋ฒํธ์ ๋ ๋ ์๋ฆฌ ์๊ฐ ์ฃผ์ด์ก์ ๋ ์๋ฐํ๋ ์๋์ฐจ์ ๋์๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์ญ์ ์๋ฆฌ์ ์ซ์๋ค์ ์ผ๋จ 10์ผ๋ก ๋๋จธ์ง ์ฐ์ฐ์ ํ๋ฉด 1์ ์๋ฆฌ๋ง ๋จ๊ฒ ๊ณ  ๊ทธ๊ฒ์ ๋ ์ง์ ์ผ์ ์๋ฆฌ์ 
     if๋ฌธ์ผ๋ก ๋น๊ตํด์ ๊ฑธ๋ฆฌ๋ฉด ํ๋์ฉ ์นด์ดํธํ๊ฒ๋ ํ๋ฉด ๋๋ค. 
 </pre>

</div>
</details>

 <details>
<summary>1_8 ์ผ๊ณฑ ๋์์ด</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ์๋น๋ฅผ ํผํด ์ผ๊ณฑ ๋์์ด๋ค๊ณผ ํจ๊ป ํํ๋กญ๊ฒ ์ํํ๊ณ  ์๋ ๋ฐฑ์ค๊ณต์ฃผ์๊ฒ ์๊ธฐ๊ฐ ์ฐพ์์๋ค. ์ผ๊ณผ๋ฅผ ๋ง์น๊ณ  ๋์์จ ๋์์ด๊ฐ 
 <br> ์ผ๊ณฑ ๋ช์ด ์๋ ์ํ ๋ช์ด์๋ ๊ฒ์ด๋ค. ์ํ ๋ช์ ๋์์ด๋ ๋ชจ๋ ์์ ์ด "๋ฐฑ์ค ๊ณต์ฃผ์ ์ผ๊ณฑ ๋์์ด"์ ์ฃผ์ธ๊ณต์ด๋ผ๊ณ  ์ฃผ์ฅํ๋ค. 
 <br> ๋ฐ์ด๋ ์ํ์  ์ง๊ด๋ ฅ์ ๊ฐ์ง๊ณ  ์๋ ๋ฐฑ์ค๊ณต์ฃผ๋, ๋คํ์ค๋ฝ๊ฒ๋ ์ผ๊ณฑ ๋์์ด์ ํค์ ํฉ์ด 100์ด ๋จ์ ๊ธฐ์ตํด ๋๋ค.
<br> ์ํ ๋์์ด์ ํค๊ฐ ์ฃผ์ด์ก์ ๋, ๋ฐฑ์ค๊ณต์ฃผ๋ฅผ ๋์ ์ผ๊ณฑ ๋์์ด๋ฅผ ์ฐพ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์ผ๋จ ๋ชจ๋  ํ๋ผ๋ฏธํฐ๋ฅผ ๋ํด์ ๋์ ํฉ์ ๊ตฌํ๋ค. ๊ทธ๋ฆฌ๊ณ  ์ด์ค for๋ฌธ์ผ๋ก ์ธ๋ฑ์ค i, j ๋ฒ์งธ ํ๋ผ๋ฏธํฐ ๋์ ๋ํ๊ณ ,
     ๋์ ํฉ์์ ๋นผ์ 100์ด ๋์ค๋ฉด ํด๋น ์ธ๋ฑ์ค์ ํ๋ผ๋ฏธํฐ๋ฅผ splice()๋ฉ์๋๋ก ์ ์ธ์ํค๋๋ฐ ์ฌ๊ธฐ์, ๋ค์ ์๋ ์ธ๋ฑ์ค
     j๋ฅผ ๋จผ์  ์ ์ธ์์ผ์ฃผ๋๋ฐ ์ด์ ๋ ์ธ๋ฑ์ค๋ฅผ ์ญ์ ํ๋ฉด, ๋ค์ ์๋ ์ธ๋ฑ์ค๊ฐ ์์ผ๋ก ๋น๊ฒจ์ง๊ธฐ ๋๋ฌธ์ด๋ค. 
 </pre>

</div>
</details>
 
 <details>
<summary>1_9 A๋ฅผ #์ผ๋ก</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>๋๋ฌธ์๋ก ์ด๋ฃจ์ด์ง ์์ด๋จ์ด๊ฐ ์๋ ฅ๋๋ฉด ๋จ์ด์ ํฌํจ๋ โA'๋ฅผ ๋ชจ๋ โ#โ์ผ๋ก ๋ฐ๊พธ์ด ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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

  ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ์ผ๋จ ์๋ฃจ์์ ๊ฐ๋จํ๋ค, for of ๋ก ๋ฌธ์์ด์ ํ๋์ฉ ๊ฐ์ ธ์ค๊ณ  'A'์ ๋์กฐํด ๊ฐ์ผ๋ฉด #์ผ๋ก ๋ฃ์ด์ฃผ๋๊ฑฐ๋ค.
     ๋์ ์๋ฃจ์์ replace() ๋ผ๋ ๋ฉ์๋๋ฅผ ์ฌ์ฉํ๊ฒ ๋๋๋ฐ, ์ฌ๊ธฐ์๋ global์ ๋ถ์ฌ์ค์ผ๋ก์จ ๋ชจ๋  ๋ฌธ์์ด์ 
     ์ํฅ์ ๋ผ์น๊ฒ ํ๋ค. 
 </pre>
 
  ์ฐธ์กฐ ๋งํฌ: [replace()-MDN][ref-mdn]
 
[ref-mdn]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace "ref-replace()"
 
</div>
</details>
 
<details>
<summary>1_10 ๋ฌธ์ ์ฐพ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>ํ ๊ฐ์ ๋ฌธ์์ด์ ์๋ ฅ๋ฐ๊ณ , ํน์  ๋ฌธ์๋ฅผ ์๋ ฅ๋ฐ์ ํด๋น ํน์ ๋ฌธ์๊ฐ ์๋ ฅ๋ฐ์ ๋ฌธ์์ด์ ๋ช ๊ฐ ์กด์ฌํ๋์ง ์์๋ด๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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

  ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ์๋ฃจ์์ for of๋ก ๋ฌธ์์ด์ ๋ฌธ์๋ฅผ ํ๋์ฉ ๊ฐ์ ธ์ค๊ณ  ๋น๊ตํ์ฌ ์นด์ดํธ๋ฅผ ํ๋ ๊ฒ์ด๊ณ  
     ๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก๋ ๋ฌธ์์ด์ ๋ด๊ฐ ์ฐพ์์ผํ๋ ๋ฌธ์๋ก split()ํ์ฌ ๋ฐ๋ก length()๋ก
     ํ๋ผ๋ฏธํฐ๋ฅผ ์นด์ดํธํด์ฃผ๊ณ  ๋ง์ง๋ง์ -1๋ฅผ ํ๋ค.
 </pre>

</div>
</details>
 
<details>
<summary>1_11 ๋๋ฌธ์ ์ฐพ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>ํ ๊ฐ์ ๋ฌธ์์ด์ ์๋ ฅ๋ฐ์ ํด๋น ๋ฌธ์์ด์ ์ํ๋ฒณ ๋๋ฌธ์๊ฐ ๋ช ๊ฐ ์๋์ง ์์๋ด๋ ํ๋ก๊ทธ๋จ ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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

  ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ์ฒซ๋ฒ์จฐ ์๋ฃจ์์ toUpperCase()๋ฉ์๋๋ก ๋ฌธ์์ด์ ๋๋ฌธ์๋ก ์ ๋ถ ๋ฐ๊ฟ์ฃผ๊ณ , ๊ธฐ์กด ๋ฌธ์์ด๊ณผ
     ๋น๊ตํ์ฌ ์นด์ดํธ๋ฅผํ๋ ๋ฐฉ๋ฒ๊ณผ, ๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก๋ charCodeAt() ๋ฉ์๋๋ก for of๋ก ๋๋ ค
     ํด๋น ๋ฌธ์์ด ์ธ๋ฑ์ค์ ํด๋น๋๋ ๋ฌธ์๋ฅผ ์ ๋์ฝ๋๋ก ๋ฐ๊ฟ์ ๋๋ฌธ์ ์ ๋์ฝ๋์ ๋ฒ์ฃผ์์ ๋ค์ด๊ฐ์์ผ๋ฉด
     ์นด์ดํธํ๋๊ฑด๋ฐ, ๊ธฐ์ตํด๋๊ฑด ๋๋ฌธ์(65~90) / ์๋ฌธ์(97~122)     
 </pre>

</div>
</details>
 
<details>
<summary>1_12 ๋๋ฌธ์๋ก ํต์ผ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>ํ ๊ฐ์ ๋ฌธ์์ด์ ์๋ ฅ๋ฐ์ ํด๋น ๋ฌธ์์ด์ ์ํ๋ฒณ ๋๋ฌธ์๊ฐ ๋ช ๊ฐ ์๋์ง ์์๋ด๋ ํ๋ก๊ทธ๋จ ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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

  ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ์ฒซ๋ฒ์งธ ์๋ฃจ์์ for of ๋๋ฆฌ๋ฉด์, ๋ฌธ์์ด ์ธ๋ฑ์ค๋ง๋ค ๋ฌธ์๋ฅผ ์ ๋์ฝ๋๋ฅผ ๋ฐ๊พธ์ด์ ์๋ฌธ์ ๋ฒ์ฃผ์์ ๋ค์ด์๋ค๋ฉด,
     ๋๋ฌธ์ ์ ๋์ฝ๋๋ก ๋ฐ๊ฟ์ค๋ค, ์ํ๋ฒณ๋ง๋ค 32์ฉ ์ฐจ์ด๋์ fromCharCode(num-32) ์ด๋ ๊ฒ ๋ฃ์ด์ค๋ค. 
     ๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก๋ if์ toLowerCase()๋ฉ์๋๋ฅผ ์ฌ์ฉํด์ ๋น๊ตํ๊ณ  ์๋ฌธ์๋ฉด toUpperCase()๋ก ๋ฐ๊ฟ์ค๋ค. 
 </pre>

</div>
</details>

 <details>
<summary>1_13 ๋์๋ฌธ์ ๋ณํ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>๋๋ฌธ์์ ์๋ฌธ์๊ฐ ๊ฐ์ด ์กด์ฌํ๋ ๋ฌธ์์ด์ ์๋ ฅ๋ฐ์ ๋๋ฌธ์๋ ์๋ฌธ์๋ก ์๋ฌธ์๋ ๋๋ฌธ์๋ก ๋ณํํ์ฌ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ๊ฐ๋จํ๋ค, if๋ฌธ toUpperCase()๋ก ๋ฐ๊ฟ์ฃผ๊ณ  ๋น๊ตํด์ ๋ง๋ค๋ฉด ์๋ฌธ์๋ก ์๋๋ฉด ๋๋ฌธ์๋ก ๋ฐ๊ฟ์ค๋ค. 
 </pre>

</div>
</details>

<details>
<summary>1_14 ๊ฐ์ฅ ๊ธด ๋ฌธ์์ด</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>N๊ฐ์ ๋ฌธ์์ด์ด ์๋ ฅ๋๋ฉด ๊ทธ ์ค ๊ฐ์ฅ ๊ธด ๋ฌธ์์ด์ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์ต๋๊ฐ ๋ณ์์ Number.MIN_SAFE_INTEGER ์์๋ฅผ ๋ฃ์ด์ฃผ๊ณ , for of๋ก ์ธ๋ฑ์ค๋ง๋ค ๋ฌธ์์ด๊ฐ์ ธ์์ 
     length()๋ก ๊ธธ์ด๋ฅผ ๋น๊ต๋ฅผ ํด์ ์ ์ผ ํฐ๊ฑธ answer ๋ณ์์ ๋ฃ์ด์ ์ถ๋ ฅ
 </pre>

</div>
</details>

<details>
<summary>1_15 ๊ฐ์ด๋ฐ ๋ฌธ์ ์ถ๋ ฅ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์๋ฌธ์๋ก ๋ ๋จ์ด(๋ฌธ์์ด)๊ฐ ์๋ ฅ๋๋ฉด ๊ทธ ๋จ์ด์ ๊ฐ์ด๋ฐ ๋ฌธ์๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ ์. ๋จ ๋จ์ด์ ๊ธธ์ด๊ฐ ์ง์์ผ ๊ฒฝ์ฐ ๊ฐ์ด๋ฐ 2๊ฐ์ ๋ฌธ์๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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


 ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ์ฒซ ๋ฒ์งธ ์๋ฃจ์์ mid๋ผ๋ ๋ณ์๋ฅผ ํ๋ ๋ง๋ค๊ณ , ๋ฌธ์์ด ๊ฐ์ด๋ฐ ์ธ๋ฑ์ค๋ฅผ ์ก์ ์ ์๊ฒ ๊ฐ์ ๋ฃ์ด์ค๋๋ค. 
     ๊ทธ๋์ ํ์, ์ง์์ ๋ฐ๋ผ, substring() ๋ฉ์๋๋ฅผ ์ด์ฉํด์ ํด๋น ์ธ๋ฑ์ค์ ํด๋น๋๋ ๋ฌธ์๋ฅผ answer์ ๋ฃ์ด์ค๋ค.
     ๋ค๋ฅธ ๋ฐฉ๋ฒ์ substr() ๋ฉ์๋์ธ๋ฐ, ์ฐจ์ด์ ์ด๋ผ๊ณ  ํ๋ค๋ฉด ๋๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ ๋ค์ด๊ฐ ๊ฐ์ ์ธ๋ฑ์ค๊น์ง ์ถ๋ ฅํ๋ค. 
     substring()์ ๋๋ฒ์งธ ํ๋ผ๋ฏธํฐ๊ฐ์ ์  ์ธ๋ฑ์ค๊น์ง ๋ฐํํ๋ค. 
 </pre>

 ์ฐธ์กฐ - [substring()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring), [substr()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

</div>
</details>
 
 <details>
<summary>1_16 ์ค๋ณต๋ฌธ์์ ๊ฑฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์๋ฌธ์๋ก ๋ ํ๊ฐ์ ๋ฌธ์์ด์ด ์๋ ฅ๋๋ฉด ์ค๋ณต๋ ๋ฌธ์๋ฅผ ์ ๊ฑฐํ๊ณ  ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ ์ธ์.<br>
      ์ ๊ฑฐ๋ ๋ฌธ์์ด์ ๊ฐ ๋ฌธ์๋ ์๋ ๋ฌธ์์ด์ ์์๋ฅผ ์ ์งํฉ๋๋ค.
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์๋ฃจ์์ indexOf()๋ผ๋ ๋ฉ์๋๋ก,  ๋ฌธ์์ด s[i]๋ฒ์งธ ์ธ๋ฑ์ค์ ํด๋น๋๋ ๋ฌธ์์ ์ธ๋ฑ์ค ๋ฒํธ๋ for๋ฌธ์ผ๋ก ๋๋ฆฌ๋ i๋ ๋น๊ตํด์
     ๊ทธ ๊ฐ์ด ๊ฐ์ ๋ฌธ์๋ง answer์ ๋ฃ๋๋ค. ์๋ํ๋ฉด indexOf์์ ๊ฐ์ ๋ฌธ์๋ผ๋ ๋ฌธ์์ด์์ ์ฒซ๋ฒ์งธ๋ก ๋์ค๋ ์ธ๋ฑ์ค ๋ฒํธ๋ง ๋์ค๊ธฐ๋๋ฌธ์
     ์ค๋ณต๊ฐ์ด๋ผ๋ฉด ๋ ๊ฐ์ด ๊ฐ์ ์ ์๋ค.    
 </pre>

 ์ฐธ์กฐ - [indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
</div>
</details>

 <details>
<summary>1_17 ์ค๋ณต๋จ์ด์ ๊ฑฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>N๊ฐ์ ๋ฌธ์์ด์ด ์๋ ฅ๋๋ฉด ์ค๋ณต๋ ๋ฌธ์์ด์ ์ ๊ฑฐํ๊ณ  ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. <br>
      ์ถ๋ ฅํ๋ ๋ฌธ์์ด์ ์๋์ ์๋ ฅ์์๋ฅผ ์ ์งํฉ๋๋ค.

 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  filter() ๋ฉ์๋๋ฅผ ์ด์ฉํด์ ์ฝ๋ฐฑํจ์๊ฐ ํต๊ณผํ๋ ๋ชจ๋  ์์๋ฅผ ๋ชจ์ ์๋ก์ด ๋ฐฐ์ด๋ก ๋ฐํํ๋๋ฐ, 
     v ์ฆ indexOf(v)๋ก ํด๋น ๋จ์ด์ ์ธ๋ฑ์ค๋ฅผ ๋ฝ์์ i์ ๋น๊ตํด์ ๊ฐ๋ค๋ฉด ๋ฃ๊ณ  ํ๋ฆฌ๋ค๋ฉด ๊ทธ๋ฅ ๋์ด๊ฐ๋ 
     ์์ผ๋ก ์ค๋ณต ๋ฌธ์๋ฅผ ์ ๊ฑฐํ๋ค. 
 </pre>

 ์ฐธ์กฐ - [indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
</div>
</details>

<br>

## ์ฑํฐ2 - 2์ฐจ์ ๋ฐฐ์ด ํ์
 
<br> 
 
 <details>
<summary>2_1 ํฐ ์ ์ถ๋ ฅํ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>N(1<=N<=100)๊ฐ์ ์ ์๋ฅผ ์๋ ฅ๋ฐ์, ์์ ์ ๋ฐ๋ก ์ ์๋ณด๋ค ํฐ ์๋ง ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์ ์ฑํ์ธ์.<br>
      (์ฒซ ๋ฒ์งธ ์๋ ๋ฌด์กฐ๊ฑด ์ถ๋ ฅํ๋ค)
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์ผ๋จ answer๋ฅผ ๋ฐ์ดํฐ ํ์์ ๋ฆฌ์คํธ๋ก ์ด๊ธฐํํด์ฃผ๊ณ , ๋ฐฐ์ด์ 0๋ฒ ์ธ๋ฑ์ค๋ฅผ pushํด์ ๋ฃ์ต๋๋ค.
     ๊ทธ๋ฆฌ๊ณ  for๋ฌธ์ ๋๋ ค ํ์ฌ i ๋ฒ์งธ๊ฐ ์ ์ธ๋ฑ์ค๋ณด๋ค ํฌ๋ค๋ฉด ํ๋์ฉ pushํ  ์ ์๋๋ก ํ์์ต๋๋ค. 
 </pre>

 ์ฐธ์กฐ - [push()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
</div>
</details>
  
  <details>
<summary>2_2 ๋ณด์ด๋ ํ์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
  <pre>์ ์๋์ด N(1<=N<=1000)๋ช์ ํ์์ ์ผ๋ ฌ๋ก ์ธ์ ์ต๋๋ค. ์ผ๋ ฌ๋ก ์ ์๋ ํ์์ ํค๊ฐ ์์ ์๋ถํฐ ์์๋๋ก ์ฃผ์ด์ง ๋,<br>๋งจ ์์ ์ ์๋ ์ ์๋์ด ๋ณผ ์ ์๋ ํ์์ ์๋ฅผ ๊ตฌํ๋ ํ๋ก๊ทธ ๋จ์ ์์ฑํ์ธ์. (์์ ์ ์๋ ์ฌ๋๋ค๋ณด๋ค ํฌ๋ฉด ๋ณด์ด๊ณ ,<br>์๊ฑฐ๋ ๊ฐ์ผ๋ฉด ๋ณด์ด์ง ์์ต๋๋ค.)
 </pre>
 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ๋๋ฌด ์ฌ์ด ๋ฌธ์ ์๋๋ฐ, ์ผ๋จ ๋งจ์์ ์๋ ํ์์ ๋ฌด์กฐ๊ฑด ๋ณด์ด๋ฏ๋ก answer ๋ณ์๋ 1๋ก ์ด๊ธฐํํ๊ณ , 
    ์ต๋๊ฐ max ๋ณ์๋ฅผ [0]๋ฒ ์ธ๋ฑ์ค๋ก ์ด๊ธฐํ ํ for๋ฌธ์ผ๋ก ๋๋ฆฌ๋ฉด์ [i]๋ฒ์งธ ์ธ๋ฑ์ค๊ฐ ์ต๋๊ฐ๋ณด๋ค ํฌ๋ฉด,
    answer++, ๊ทธ๋ฆฌ๊ณ  ํด๋น ์ธ๋ฑ์ค๋ฅผ max๋ณ์์ ์นํ์ํจ๋ค. 
 </pre>

</div>
</details>

<details>
<summary>2_3 ๊ฐ์ ๋ฐ์ ๋ณด</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>A, B ๋ ์ฌ๋์ด ๊ฐ์๋ฐ์๋ณด ๊ฒ์์ ํฉ๋๋ค. ์ด N๋ฒ์ ๊ฒ์์ ํ์ฌ A๊ฐ ์ด๊ธฐ๋ฉด A๋ฅผ ์ถ๋ ฅํ๊ณ , B๊ฐ ์ด๊ธฐ๋ฉด B๋ฅผ ์ถ๋ ฅํฉ๋๋ค.<br>
 ๋น๊ธธ ๊ฒฝ์ฐ์๋ D๋ฅผ ์ถ๋ ฅํฉ๋๋ค. ๊ฐ์, ๋ฐ์, ๋ณด์ ์ ๋ณด๋ 1:๊ฐ์, 2:๋ฐ์, 3:๋ณด๋ก ์ ํ๊ฒ ์ต๋๋ค.<br>
 ๋ ์ฌ๋์ ๊ฐ ํ์ ๊ฐ์, ๋ฐ์, ๋ณด ์ ๋ณด๊ฐ ์ฃผ์ด์ง๋ฉด ๊ฐ ํ๋ฅผ ๋๊ฐ ์ด๊ฒผ๋์ง ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ ์ ์์ฑํ์ธ์.
 </pre>

 <bt>

 |ํ์|A|B|์น์|
|:---:|:---:|:---:|:---:|
|1|2|1|A|
|2|3|1|B|
|3|3|2|A|
|4|1|2|B|
|5|3|3|D|

 
 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ๊ฐ์๋ฐ์๋ณด์ธ ๊ฑด๋ฐ, if๋ฌธ์ผ๋ก A๊ฐ ์ด๊ธฐ๋ ๊ฒฝ์ฐ๋ฅผ ๋ค else if๋ก ์ ์ด๋๊ณ , ์ฒ์ if์๋ ๋ฌด์น๋ถ์ธ ๊ฒฝ์ฐ
     else๋ ๋ค B๋ฅผ ๋ฐํํ๊ฒํ๋ค. 
 </pre>


</div>
</details>
 
 <details>
<summary>2_4 ์ ์๊ณ์ฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์ํ๋ฌธ์ ์ ์ฑ์  ๊ฒฐ๊ณผ๊ฐ ์ฃผ์ด์ก์ ๋, ์ด ์ ์๋ฅผ ๊ณ์ฐํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
 </pre>

<br>

|์ฑ์ |์ ์|
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
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  for๋ฌธ์ผ๋ก ์ธ๋ฑ์ค๊ฐ์ ธ์ค๊ณ , if๋ก ๋น๊ตํด์ ์ฑ์ ์ด 1์ด๋ฉด score๋ณ์๋ก ๋ํ๊ณ  score++,
    ๊ทธ ๋ค์ ์ธ๋ฑ์ค์์๋ ์ฑ์ ์ด 1์ด๋ฉด ๋ํด์ง score๋ก ๋ค์ ๋ํ๊ณ  ์๋๋ผ๋ฉด score, 1๋ก ์ด๊ธฐํํ๋ค. 
 </pre>


</div>
</details>
 
<details>
<summary>2_5 ๋ฑ์๊ตฌํ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>N(1<=N<=100)๋ช์ ํ์์ ๊ตญ์ด์ ์๊ฐ ์๋ ฅ๋๋ฉด ๊ฐ ํ์์ ๋ฑ์๋ฅผ ์๋ ฅ๋ ์์๋๋ก ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
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

 ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ๋ด๊ฐ ์๊ฐํ ์๋ฃจ์์ rank๋ผ๋ ๋ณ์๋ก ์ผ๋จ length๋ก ์ตํ ์ซ์๋ก ๋ง์ถฐ๋๊ณ  
    for๋ฌธ์ ๋๊ฐ ๋๋ ค์, ๋ถ๋ชจ for๋ฌธ๋ณด๋ค  ์์ for๋ฌธ์ด ๋ ๋์ผ๋ฉด rank์์ 1์ฉ๋นผ๊ฒ
    ํ์ฌ์ ๊ตฌํํ๋ค. 

    ๊ทธ๋ฆฌ๊ณ  ๋ชจ๋ฒ ์๋ฃจ์์์๋ Array.from ๋ฉ์๋๋ฅผ ์ฌ์ฉํ์๋๋ฐ, ์ด๊ฑธ ์ฌ์ฉํด์ง๋ ๋ ๊น๋ํ๊ฒ
    ์ฝ๋๊ฐ ๊ฐ์ ๋์๋๋ฐ, ์ด์ค for๋ฌธ์ ํตํด ํ์ด๋ด๋๊ฑด ๊ฐ์์ผ๋ ์ด ๋ฉ์๋๋ 
    Array.from({length: n}, () => 1) ์ด๋ฐ์์ผ๋ก ํ๋ฉด ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค์ด๋ด๋๋ฐ, 
    n๋งํผ์ length๋ฅผ ๋ค ์์ 1๋ก ์ฌ ์์ฑํ๋ค.
    </pre>


</div>
</details>
 <details>
<summary>2_6 ๊ฒฉ์ํ ์ต๋ํฉ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>N*N์ ๊ฒฉ์ํ์ด ์ฃผ์ด์ง๋ฉด ๊ฐ ํ์ ํฉ, ๊ฐ ์ด์ ํฉ, ๋ ๋๊ฐ์ ์ ํฉ ์ค ๊ฐ ์ฅ ํฐ ํฉ์ ์ถ๋ ฅํฉ ๋๋ค.
 </pre>

 |10|13|10|12|15|
|--|--|--|--|--|
|12|39|30|23|15|
|11|25|50|53|15|
|19|27|29|37|27|
|19|13|30|13|19|

<br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์ด๊ฑฐ๋ ๋ด๊ฐ ์ ๋ชฐ๋ผ์ ๋ชจ๋ฒ๋ต์์ ๋ณด๋ ์ ๋ฐ์ ์์๋ค. 
    ์ผ๋จ ์ด์ค for๋ฌธ์ผ๋ก ํ๋ฒ Math.max()๋ก ํตํด ์ ์ผ ๋์ ๊ฐ์ ๋ฝ์ answer์ ๋ฃ๊ณ ,
    ๊ทธ๋ฆฌ๊ณ  ๋ฌธ์ ๋ ๋๊ฐ์ ์ด์๋๋ฐ, [i][i], [i][n-1-i] ์ด๋ ๊ฒ ๋ฃ์ผ๋ฉด ๋๊ฐ์  ์ธ๋ฑ์ค๊ฐ
    ์กํ๋๋ฐ, ๋ค์์ ํ๋ฒ๋ ํ์ด๋ณด๋ฉด์ ์ต์ํด์ ธ์ผ๊ฒ ๋ค. 
    </pre>


</div>
</details>
 <details>
<summary>2_7 ๋ด์ฐ๋ฆฌ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์ง๋ ์ ๋ณด๊ฐ N*N ๊ฒฉ์ํ์ ์ฃผ์ด์ง๋๋ค. ๊ฐ ๊ฒฉ์์๋ ๊ทธ ์ง์ญ์ ๋์ด๊ฐ ์ฐ์ฌ์์ต๋๋ค.<br> ๊ฐ ๊ฒฉ์ ํ์ ์ซ์ ์ค ์์ ์ ์ํ์ข์ฐ ์ซ์๋ณด๋ค ํฐ ์ซ์๋ ๋ด์ฐ๋ฆฌ ์ง์ญ์๋๋ค.<br>๋ด์ฐ๋ฆฌ ์ง์ญ์ด ๋ช ๊ฐ ์๋ ์ง ์์๋ด๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.<br>
๊ฒฉ์์ ๊ฐ์ฅ์๋ฆฌ๋ 0์ผ๋ก ์ด๊ธฐํ ๋์๋ค๊ณ  ๊ฐ์ ํ๋ค.<br>
๋ง์ฝ N=5 ์ด๊ณ , ๊ฒฉ์ํ์ ์ซ์๊ฐ ๋ค์๊ณผ ๊ฐ๋ค๋ฉด ๋ด์ฐ๋ฆฌ์ ๊ฐ์๋ 10๊ฐ์๋๋ค.
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
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์ด๊ฒ๋ ๋๋ฌด ์ด๋ ค์์ ๋ด๊ฐ ๋ชจ๋ฒ๋ต์์ ๋ณผ ์ ๋ฐ์ ์์๋ค ใ ใ 
    ์ด์ค๋ฌธ์ ์ผ๋จ ๋ง๋ค์ด์ ์ขํ๋ฅผ ๋ง๋ค๊ณ , flag ๋ณ์๋ฅผ ํ๋ ๋ง๋ค์ด์, 4 ๋ฐฉํฅ์ด ๋ค 
    [i][j]์ขํ๋ณด๋ค ํฌ๋ฉด flag๋ 0์ผ๋ก ๋ฐ๋๊ณ  break; ๋ก ๋์ด๊ฐ๊ณ  ๋ฐ๋๋ฉด flag๋ ๊ทธ๋๋ก
    ์ด์์์๊ฒ์ด๊ณ  ์ด๊ฒ ๊ทธ๋๋ก count++๊ฐ ๋์ด์ ์ธ๊ฒ๋๋๊ฒ์ธ๋ฐ, if์ ์ขํ outofrange
    ๊ตฌ๊ฐ์ ๊ฑฐ๋ฅด๊ธฐ ์ํด nx,ny๊ฐ 0๋ณด๋ค ๊ฐ๊ฑฐ๋ ํฌ๊ฒ, ๊ทธ๋ฆฌ๊ณ  arr.length๋ณด๋ค๋ ๋ฌด์กฐ๊ฑด ์๊ฒ
    ํ๊ฒ๋ ํํฐ๋ง์ ๋ง๋ค์ด์ ๋ฐฉ์งํ๋ค. 
    </pre>


</div>
</details>

<br>


 ## ์ฑํฐ3 - ๋ฌธ์์ด ํ์
 
  <br>
 
 <details>
<summary>3_1 ํ๋ฌธ ๋ฌธ์์ด(Palindrome)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์์์ ์ฝ์ ๋๋ ๋ค์์ ์ฝ์ ๋๋ ๊ฐ์ ๋ฌธ์์ด์ ํ๋ฌธ ๋ฌธ์์ด์ด๋ผ๊ณ  ํฉ๋๋ค. ๋ฌธ์์ด์ด ์๋ ฅ๋๋ฉด ํด๋น ๋ฌธ์์ด์ด ํ๋ฌธ ๋ฌธ์์ด์ด๋ฉด "YES", ํ๋ฌธ ๋ฌธ์์ด์ด ์๋๋ฉด <br>
 โNO"๋ฅผ ์ถ๋ ฅ ํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>


 <br>
 
 ### โผ๏ธ Solution
 
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

 ### โ๏ธ Alternative Solution
 
  ```javascript
// ๊ฐ์ ๋ฐ๋ํธ์ ํด๋น๋๋ ์ธ๋ฑ์ค์ ๋น๊ต 

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

// split().reverse().join() ๋ฉ์๋๋ฅผ ์ด์ฉํ ๋ฐฉ๋ฒ

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
 ๐ฌ  ์ฒซ๋ฒ์งธ๋ก ๋ด๊ฐ ์ง์  ์๊ฐํ ์๋ฃจ์์ ์ผ๋จ ๋ฌธ์์ด์ ์ ๋ถ ์๋ฌธ์๋ก
     ๋ฐ๊ฟ์ฃผ๋ ๊ฑด ๊ณตํต์ ์ด๊ณ , ๋ฌธ์์ด ์ธ๋ฑ์ค๋ฅผ ๋ฐ๋๋ก for๋ฌธ์ ๋๋ฆฌ๋ฉฐ
     ๋ค๋ฅธ ๋ฌธ์์ด ๋ณ์์ ๋ํด์ค๋ค์, ์ต์ข ๊ธฐ์กด ๋ฌธ์์ด๊ณผ ๋ฐ๋๋ก ๋ฃ์ 
     ๋ฌธ์์ด๊ณผ ๋น๊ตํ์ฌ ์ ๋ต ๋ฐํํ๋ค.
    
    ๋ด๊ฐ ๋ณด๋ ๊ฐ์์์ ์ด 2๊ฐ์ง์ ๋ค๋ฅธ ์๋ฃจ์์ ์๋ ค์ฃผ์จ๋๋ฐ, ํ๋๋
    ๋ฌธ์์ด์ ๋ฐ์ผ๋ก ๋๋์ด, ์๋ก ๋ง์ฃผ๋ณด๋ ์ธ๋ฑ์ค๋ผ๋ฆฌ for๋ฌธ์ ๋๋ ค ํ
    ๋๋ผ๋ ํ๋ฆฐ๊ฒ ๋์ค๋ฉด ๋ฐ๋ก ์ ๋ต์ ๋ฐํํ๋ ๊ฑฐ์๊ณ , 

    ๋ค๋ฅธ ํ๋๋ split('')์ผ๋ก ๋ฌธ์์ด์ ์์๋ก ๋ง๋ ๋ค์, reverse()
    ๋ฉ์๋๋ก ๋ฆฌ์คํธ๋ฅผ ๋ค์ง์ด ์ค๋ค์ join('')์ผ๋ก ํฉ์ณ์ฃผ์ด ๋ค์ ๋ฌธ์์ด๋ก
    ๋ง๋ค์ด์ฃผ์๋ค. ๊ทธ๋ค์ ๋น๊ต๋ฌธ์ ๋๋ ค ์ ๋ต ๋ฐํ์ ํ์๋ค. 
 </pre>


</div>
</details>

 <details>
<summary>3_2 ์ ํจํ ํฐ๋ฆฐ๋๋กฌ(Palindrome)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์์์ ์ฝ์ ๋๋ ๋ค์์ ์ฝ์ ๋๋ ๊ฐ์ ๋ฌธ์์ด์ ํฐ๋ฆฐ๋๋กฌ์ด๋ผ๊ณ  ํฉ๋๋ค.๋ฌธ์์ด์ด ์๋ ฅ๋๋ฉด ํด๋น ๋ฌธ์์ด์ด ํฐ๋ฆฐ๋๋กฌ์ด๋ฉด "YES", <br>
 ์๋๋ฉด โNO"๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. ๋จ ํ๋ฌธ์ ๊ฒ์ฌํ  ๋ ์ํ๋ฒณ๋ง ๊ฐ์ง๊ณ  ํ๋ฌธ์ ๊ฒ์ฌํ๋ฉฐ, ๋์๋ฌธ์๋ฅผ ๊ตฌ๋ถํ์ง ์์ต๋๋ค. ์ํ๋ฒณ ์ด์ธ์ ๋ฌธ์๋ค์ ๋ฌด์ํฉ๋๋ค.
 </pre>


 <br>
 
 ### โผ๏ธ Solution
 
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

 ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ๋ด๊ฐ ์ง์ ํ์ด๋ณธ ์๋ฃจ์์ผ๋ก๋ ํน์๋ฌธ์ ์ฒดํฌ ์ ๊ท์์ ๊ฐ์ ธ์์
     ํน์๋ฌธ์๋ฅผ ์ ๊ฑฐ ๋ฐ ์๋ฌธ์๋ก ํต์ผํ๊ณ , for๋ฌธ์ผ๋ก ๊ฐ์ 
     ๋์ํ๋ index๋ฅผ ๋น๊ตํ๋ฉด์ ์ ๋ต์ ๋ฐํํ๋ ์์ผ๋ก ํ์๊ณ ,

    ๊ฐ์์์ ๋์จ ๋ชจ๋ฒ๋ต์์ ์ผ๋จ ๋์ฒ๋ผ ํน์๋ฌธ์ ์ฒดํฌ ์ ๊ท์์ ์ธํฐ๋ท
    ์์ ๊ฐ์ ธ์ค์ง ์๊ณ  replace(/[^a-z]/g,'') ์ด๋ ๊ฒํ๋ฉด a-z๋ฅผ
    ์ ์ธํ ๋ชจ๋  ์์๊ฐ ์ ์ธ์ํจ๋ค๋๊ฑธ ์๊ฒ๋์๋ค. ๊ทธ๋ฆฌ๊ณ  ์ด๊ฑธ ์ฌ๋ ํ๋ฌธ
    ๋ฌธ์์ด ๋ฌธ์ ์ ๊ฐ์ด ๋งค์๋๋ฅผ ํตํด ๋ฐ๋๋ก ๋๋ฆฌ๊ณ , ํต์งธ๋ก ๋ฌธ์์ด์
    ๋๊ฐ ๋น๊ตํด์ ์ ๋ต์ ๋ฐํํ์จ๋ค.   
 </pre>


</div>
</details>

<details>
<summary>3_3 ์ซ์๋ง ์ถ์ถ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์๋ฌธ์์ ์ซ์๊ฐ ์์ฌ์๋ ๋ฌธ์์ด์ด ์ฃผ์ด์ง๋ฉด ๊ทธ ์ค ์ซ์๋ง ์ถ์ถํ์ฌ ๊ทธ ์์๋๋ก ์์ฐ์๋ฅผ ๋ง ๋ญ๋๋ค.<br>๋ง์ฝ โtge0a1h205erโ์์ ์ซ์๋ง ์ถ์ถํ๋ฉด 0, 1, 2, 0, 5์ด๊ณ  ์ด๊ฒ์ ์์ฐ์๋ฅผ ๋ง๋ค๋ฉด 1205 ์ด ๋ฉ๋๋ค.<br>์ถ์ถํ์ฌ ๋ง๋ค์ด์ง๋ ์์ฐ์๋ 100,000,000์ ๋์ง ์์ต๋๋ค.
 </pre>


 <br>
 
 ### โผ๏ธ Solution
 
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

 ### โ๏ธ Alternative Solution
 
  ```javascript

//isNaN(), parseInt() ๋ฉ์๋๋ฅผ ํตํ ์ถ์ถ

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

// parseInt์ฌ์ฉ ๋ชปํ  ์, ์ํ์  ์ ๊ทผ๋ฒ์ผ๋ก ์ถ์ถ

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
 ๐ฌ  ๋ด๊ฐ ์ง์ ํ ์๋ฃจ์์ ์ผ๋จ ์ซ์๋ง ๋จ๊ฒ๋ ์ ๊ท์์ผ๋ก ๋ค๋ฅธ ๋ฌธ์๋ค ์ญ์ ,
    ๊ทธ๋ฆฌ๊ณ  split('')๋ก ๋ฐฐ์ด๋ก ๋ง๋ ๋ค์ ์ฒซ๋ฒ์งธ ์ธ๋ฑ์ค์ 0๋ณด๋ค ์์ ๊ฐ์ด
    ๋์ค๋ฉด ์ ๊ฑฐํ ๋ ๊น์ง ๋ฌดํ๋ฃจํ๋ฅผ ๋๋ฆฌ๊ณ , else ์ ๋ฐํํ๋ฉด์, join('')

     ์ผ๋จ ๊ฐ์์์๋ for of์ ํตํด ๋ฌธ์์ด์ ์์๋ฅผ ํ๋์ฉ ๊ฐ์ ธ์ค๊ณ , 
    if๋ฌธ์์ isNaN()์ผ๋ก ๋ฌธ์์ด์ ํํฐ๋งํ์ฌ, int ๋ณ์์ ์ซ์๋ค์
    ๊ทธ๋๋ก ๋ํด์ฃผ๊ณ , ๋ง์ง๋ง ๋ฐํํ ๋ parseInt()๋ฅผ ์ฌ์ฉํด ์์ฐ์๋ก ๋ง๋ฌ

     ๋๋ฒ์งธ ๋ฐฉ๋ฒ์ผ๋ก๋ ๋ง์ฝ ์ฝ๋ฉํ์คํธํ ๋ parseInt()๋ฅผ ์ฌ์ฉํ์ง ๋ชปํ๊ฒ
    ํ์ ์ํฉ์ ๊ฐ์ ํ์ฌ, isNaN์ ๋๊ฐ์ด ์ฌ์ฉํ๋, int ๋ณ์์ ๋ฃ์ ๋,
    answer = answer*10+Number(x) ์ด๋ฐ์์ผ๋ก ๋งจ์์๋ฆฌ์ 0์ด ๋ค์ด๊ฐ๋ฉด
    ์์ฐ์ค๋  0์ด๋๋ ์ํ์  ์ ๊ทผ์ผ๋ก ํด๊ฒฐ ํ  ์ ์์๋ค.
 </pre>


</div>
</details>
 
 <details>
<summary>3_4 ๊ฐ์ฅ ์งง์ ๋ฌธ์๊ฑฐ๋ฆฌ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>ํ ๊ฐ์ ๋ฌธ์์ด s์ ๋ฌธ์ t๊ฐ ์ฃผ์ด์ง๋ฉด ๋ฌธ์์ด s์ ๊ฐ ๋ฌธ์๊ฐ ๋ฌธ์ t์ ๋จ์ด์ง ์ต์๊ฑฐ๋ฆฌ๋ฅผ ์ถ ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>


 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ํ์ฐธ ๊ณ ๋ฏผํ๋ค๊ฐ ๊ฒฐ๊ตญ์ ์๋ฃจ์์ ๋ด๋ฒ๋ ธ๋ค. ์ดํดํ๊ธฐ ์ํด์ ๋ช๋ฒ์ด๋ ๋ฉ์ถฐ์ ์๊ฐํ๊ฑฐ ๊ฐ์๋ฐ, for๋ฌธ์ ๋๋ฒ ์ธ์ค์ด์ผ.. 
     ์ผ๋จ ์ฒ์์๋ indexOf ๋ผ๋ ๋ฉ์๋๋ฅผ ์ฌ์ฉํด์ ํ์ผ๋ ค๊ณ  ํ์ผ๋ fromIndex๋ฅผ ์ค์ ํ๋ฉด  ์ค๋ฅธ์ชฝ์ผ๋ก๋ง ๊ณ์ฐํ๋ ๊ฒฝํฅ์ด ์์ด์ ๊ณผ๊ฐํ ํฌ๊ธฐํ๋ค. 
     ๊ฐ์์์ ๋ณธ ์๋ฃจ์์ ์ผ๋จ ํ ๋ณ์๋ฅผ ์ผ๋จ ํฐ๊ฐ์ผ๋ก ์ ํด๋๊ณ , ์ฐพ๊ณ ์ํ๋ ๋ฌธ์๋ฅผ for๋ฌธ์ ๋๋ ค ๋ง๋๊ฒ ๋๋ฉด ์ด๊ธฐํํ๊ณ , ๋ฉ์ด์ง์๋ก ๊ทธ ์นด์ดํฐ์ +ํ๋ค. 
     ํ์ง๋ง ๊ฒฐ๊ตญ ์ด๋ ๊ฒํ๋ฉด ์ค๋ฅธ์ชฝ์ผ๋ก๋ง ๋ณด๊ฒ๋๋ ๊ผด์ธ๋ฐ, ๋ ๋ค๋ฅธ for๋ฌธ์ผ๋ก ๋ง์ง๋ง ์ธ๋ฑ์ค๋ถํฐ ๋ฐ๋๋ก ๋ด๋ ค์ค๊ฒ๋ ํด๋์ ๋ค์์ ๊ฐ์ ์๋ฆฌ ์ธ๋ฑ์ค๋ฅผ 
     ๋ง์ง๋ง์ Math.min(a,b)๋ฅผ ํตํด์ ๋ ์นด์ดํฐ๊ฐ ์์ ๊ฐ์ ๋ฃ์ผ๋ฉด์ ์ ๋ต์ ๋ณํํ์๋ค. ๋์ค์ ๋ค์ ํ์ด๋ด์ผ๊ฒ ๋ค.. 
 </pre>


</div>
</details>
 
 <details>
<summary>3_5 ๋ฌธ์์ด ์์ถ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>์ํ๋ฒณ ๋๋ฌธ์๋ก ์ด๋ฃจ์ด์ง ๋ฌธ์์ด์ ์๋ ฅ๋ฐ์ ๊ฐ์ ๋ฌธ์๊ฐ ์ฐ์์ผ๋ก <br>๋ฐ๋ณต๋๋ ๊ฒฝ์ฐ ๋ฐ๋ณต๋๋ ๋ฌธ์ ๋ฐ๋ก ์ค๋ฅธ์ชฝ์ ๋ฐ๋ณต ํ์๋ฅผ ํ๊ธฐํ๋ ๋ฐฉ๋ฒ์ผ๋ก<br>
  ๋ฌธ์์ด์ ์์ถํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ ์ค. ๋จ ๋ฐ๋ณตํ์๊ฐ 1์ธ ๊ฒฝ์ฐ ์๋ตํฉ๋๋ค.
 </pre>


 <br>
 
 ### โผ๏ธ Solution
 
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
 ๐ฌ  ์ ์๋์ด๋ ์๋ฃจ์์ด ์ผ์ถ ๋น์ทํ๊ฑฐ ๊ฐ์์, ๋ด๊บผ์ ์กฐ๊ธ๋ง ์์ ์ ํ์๋ค.
     ๋๋ ์ผ๋จ ๋ฌธ์์ด์ ๋ฌด์กฐ๊ฑด ๋ฐฐ์ด๋ก ๋ฐ๊พธ๋ ค๋ ์ต๊ด์ด ์๋๋ฐ, ์ ์๋๊บผ๋ 
     ๋ฌธ์์ด ๊ทธ๋๋ก ๋ฐ์์ ์ธ๋ฑ์ค๋ฅผ ๋ฃ๊ณ  ํ์๋๋ผ.. ๋๋ for of๋ก ๋ฌธ์์ด์์
     ํ๋์ฉ ๊ฐ์ ธ์ ํ๋ ์ ์ ๋์๋ ๊ฒ๊ณผ ๋น๊ตํด์, if๋ฌธ์ ๊ตฌ์ฑํด ํ์๊ณ ,
     ๋ชจ๋ฒ ์๋ฃจ์๋ ์ผ์ถ ๋น์ทํ๋ค.
 </pre>


</div>
</details>

   <br>
 
 ## ์ฑํฐ4 - ์์ ํ์(๋ธ๋ฃจํฌํฌ์ค)
 
  <br>
 
 <details>
<summary>4_1 ์๋ฆฟ์์ ํฉ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>N๊ฐ์ ์์ฐ์๊ฐ ์๋ ฅ๋๋ฉด ๊ฐ ์์ฐ์์ ์๋ฆฟ์์ ํฉ์ ๊ตฌํ๊ณ , ๊ทธ ํฉ์ด ์ต๋์ธ ์์ฐ์๋ฅผ ์ถ๋ ฅ ํ๋ ํ๋ก๊ทธ๋จ์ 
 ์์ฑํ์ธ์. ์๋ฆฟ์์ ํฉ์ด ๊ฐ์ ๊ฒฝ์ฐ ์๋ ์ซ์๊ฐ ํฐ ์ซ์๋ฅผ ๋ต์ผ๋ก ํฉ๋๋ค. ๋ง์ฝ 235 ์ 1234๊ฐ ๋์์ ๋ต์ด 
 ๋  ์ ์๋ค๋ฉด 1234๋ฅผ ๋ต์ผ๋ก ์ถ๋ ฅํด์ผ ํฉ๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
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

  ### โ๏ธ Alternative Solution
 
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
 ๐ฌ  ์ผ๋จ ์๋ ฅ์ด ์ซ์๋ผ๋ ๊ฐ์ ํ์ for of๋ก ์์ํ๋์ฉ ๊ฐ์ ธ์์ ํด๋น ์์๋ 
    ๊ฑด๋ค๋ฉด ์๋๋๊น ์์๋ก ๋ค๋ฅธ๋ณ์์ ๋ฃ์ ๋ค์์ while๋ฌธ์ ํ๋ ๋ง๋ค๊ณ  
    sum+=(tmp%10) ๋ฅผ ํตํด sum ๋ณ์์ ์์๊ฐ์ 10์ผ๋ก ๋๋ ํ ๋๋จธ์ง๊ฐ์ ๋ํ๊ฒ ๋ง๋ ๋ค. 
    ๊ทธ๋ฆฌ๊ณ  original๊ฐ์ ๋ฐ๋ก answer์ ๋ณด๊ดํ๊ณ  if ๋ฌธ์ํตํด ๋จผ์  ๋ง๋ค์ด๋์ max์ sum์ ๋น๊ตํ์ฌ 
    sum์ด ๋ ํฌ๋ฉด ๋์ฒดํด์ฃผ๊ณ , ๋ง์ฝ sum๊ฐ์ด ๊ฐ์๊ฑธ ๊ณ ๋ คํด์ else if ๋ฌธ์ ๋ง๋ค์ด original ์์๊ฐ์ด 
    ๋ ํฐ์ง ๋น๊ตํ์ฌ ๊ทธ๋ฐ ์ํฉ์ ๋๋นํ๋ค. 

    ๋ค๋ฅธ ๋ฐฉ๋ฒ์ ๋ฌธ์์ด๋ก ๋ง๋ค์ด์ ํด๊ฒฐํด๋ณด๋ ๋ฐฉ์์ธ๋ฐ, ๋๊ฐ์ด for of ๋ฌธ์ผ๋ก 
    ์์๊ฐ์ ๊ฐ์ ธ์ค๊ณ  toString().split('') ํตํด ๋ฌธ์์ด ํ ๋์ง์ฉ์ผ๋ก ๋๋๋ค์์ 
    reduce((a, b) => a + Number(b), 0) ๋ฉ์๋๋ฅผ ํตํด 
    ๋์งํ๋ํ๋๋ฅผ ๋ํด์ค๋ค. ๊ทธ๋ฐ๋ฐ b์ Number์ ๋ถ์ฌ์ฃผ์ง ์์ผ๋ฉด ์ซ์๋ก 
    ์ ๋ํด์ง๊ณ  ๊ทธ๋ฅ ์์ ๋ถ์ด๋ฒ๋ฆฐ๋ค. ๊ทธ๋ฆฌ๊ณ  ์๋๋ ๋๊ฐ๋ค. 
    </pre>


</div>
</details>


<details>
<summary>4_2 ๋ค์ง์ ์์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre>N๊ฐ์ ์์ฐ์๊ฐ ์๋ ฅ๋๋ฉด ๊ฐ ์์ฐ์๋ฅผ ๋ค์ง์ ํ ๊ทธ ๋ค์ง์ ์๊ฐ ์์์ด๋ฉด ๊ทธ ์์๋ฅผ ์ถ๋ ฅํ ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. ์๋ฅผ ๋ค์ด 32๋ฅผ ๋ค์ง์ผ๋ฉด 23์ด๊ณ , 23์
  ์์์ด๋ค. ๊ทธ๋ฌ๋ฉด 23์ ์ถ ๋ ฅํ๋ค. ๋จ 910๋ฅผ ๋ค์ง์ผ๋ฉด 19๋ก ์ซ์ํ ํด์ผ ํ๋ค. ์ฒซ ์๋ฆฌ๋ถํฐ์ ์ฐ์๋ 0์ ๋ฌด์ํ๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function isPrime(val){
  if(val===1)return false;
  for(let i = 2; i <= parseInt(val/2); i++){
    if(val%i===0) return false;
  }
  return true;
}

function solution(arr){
  let answer = [];
  for(let x of arr){
    let res=0;
    while(x){
      let t=x%10
      res=res*10+t
      x=parseInt(x/10);
    }
    if (isPrime(res)) answer.push(res);
  }
return answer;
}
const arr = [32,55,62,20,250,370,200,30,100];
console.log(solution(arr));       
 ```
 
 <br>

  ### โ๏ธ Alternative Solution
 
  ```javascript
function isPrime(val){
  if(val===1)return false;
  for(let i = 2; i <= parseInt(val/2); i++){
    if(val%i===0) return false;
  }
  return true;
}

function solution(arr){
  let answer = [];
  for(let x of arr)
  {
    let res=Number(x.toString().split('').reverse().join(''));
    if (isPrime(res)) answer.push(res);
  }
return answer;
}
const arr = [32,55,62,20,250,370,200,30,100];
console.log(solution(arr));       
```
 
<br>

 <pre>
 ๐ฌ  ์ผ๋จ ์ ์๋์ ์ฒซ๋ฒ์งธ ์๋ฃจ์์ ๋ฌธ์์ด๋ก๋ฐ๊ฟ์ ํ๋ ํํ๊ฐ ์๋ ์ํ์ ์ผ๋ก
    ์ ๊ทผํ์ฌ, ์ ์ ํ์์ ๊ทธ๋๋ก ์งํํ๋ค. for of๋ฅผ ํตํด์ ๋ฌธ์์ด์์ ์ซ์๋ฅผ ํ๋์ฉ ๊ฐ์ ธ์จ๋ค. 
    ๊ทธ๋ฆฌ๊ณ  ํ๋์ฉ ๊ฐ์ ธ์จ ์ ์๋ฅผ while()๋ฌธ์ ์ด์ด์ ์กฐ๊ฑด์
    ์ธ์๋ก ๋ฃ๋๋ค. ๊ทธ๋ ๊ฒ let t=์ธ์%10๋ก t์ ์ผ์ ์๋ฆฌ๋ฅผ ๋ฃ์ด์ค๋ค. 
    ๊ทธ๋ฆฌ๊ณ  0์ผ๋ก ๋จผ์  ์ด๊ธฐํ๋์ด์์๋ res์ res*10+t๋ฅผํ๋๋ฐ ๊ทธ๋ฌ๋ฉด 
    res๋ ์ผ์์๋ฆฌ๋ฅผ ๊ฐ์ ธ๊ฐ๋ค. ๊ทธ ๋ค์ x=parseInt(x/10) ์๊น ๋จ์์๋
    ๋ชซ์ ๋ง์  10์ผ๋ก ๋๋ ์ค๋ค. ๊ทธ๋ฌ๋ฉด x๋ ๋ค์ง์ด์ง๋์ ์ผ์ ์๋ฆฌ ์ซ์๊ฐ ๋๋ค.
    ๋ค์ while๋ฌธ์ด ๋์์ ์๊น ๊ทธ x๊ฐ 1์ดํ ๊ฐ์ด ๋๋ฉด escapeํ๋ค์ ์์ ์ธ์ง ๊ฒ์ฌํ๋๋ฐ, 
    ํด๋น ๊ฒ์ฌํ๋ ๊ฒ์ ํจ์๋ก ๋ฐ๋ก ๋ง๋ค์ด ๋๋๋ค, ์ฌ๊ธฐ์ ์์์ฒดํฌํ๋ ๋ฐฉ๋ฒ์ ์์๋๋ฐ, ํด๋น ์ ์๋ฅผ
    2 ~ ์ ์์ ์ ๋ฐ ๊น์ง ๋ชจ๋  ์๋ฅผ ๋๋จธ์ง ์ฐ์ฐ์ ํด๋ณด๊ณ  ๋ค 0์ด ํ๋ฒ์ด๋ผ๋ ๋์จ๋ค๋ฉด ์์๊ฐ ์๋๊ฒ์ด๋ค.


    ๋ค๋ฅธ ์๋ฃจ์์ ํ๋ฒ ๋ฌธ์์ด ํํ๋ก ๋ฐ๊พผ๋ค์์ ๋ค์ง์ด์ ๋ชจ๋  ๋ฌธ์์ด์ ๋ฐ๊ฟ๋๊ณ  ์์๋ฅผ ์ฒดํฌํด๋ณด๋ ๋ฐฉ๋ฒ์ด๋ค.
    toString().split('').reverse().join(''); 
    </pre>


</div>
</details>

<details>
<summary>4_3 ๋ฉํ ๋ง</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> Aํ์์ด ๋ฉํ , Bํ์์ด ๋ฉํฐ๊ฐ ๋๊ณ , ๋ฉํ ๋ M๋ฒ์ ์ํํ์คํธ์์ ๋ชจ๋ ๋ฉํฐ๋ณด๋ค ๋ฑ์๊ฐ ์์์ผํฉ๋๋ค. 
       M๋ฒ๋์ ๋ชจ๋ ์์  ๋ฉํ  ๋ฉํฐ ์ง์ ์ด ๋ช๊ฐ๋ ๋ง๋ค ์ ์๋์ง ์ถ๋ ฅํ์์ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(test){
  let answer = 0, temp=[];
  let m=test.length;
  let n=test[0].length

  for ( let i = 1; i <=n; i++){
    for(let j =1; j<=n; j++){
      let cnt = 0;
      for (let k = 0; k < m; k++)
      { 
        let pi=pj=0;
        for ( let s = 0; s<n; s++){
          if (test[k][s]===i) pi=s;
          if (test[k][s]===j) pj=s;
        }
        if(pi<pj) cnt++;
      }
      if(cnt===m) {
        temp.push([i,j]);
        answer++;
      }
  }
}
  return answer;
}
let arr = [[3,4,1,2],
           [4,3,2,1],
           [3,1,4,2]];

console.log(solution(arr));
     
 ```
 
 <br>

 <pre>
 ๐ฌ  ํ์ฐธ๋์ ์๊ฐํด๋ดค์ง๋ง ๋์ ํ ๋ต์ด ์๋์์ ์ธ๊ฐ์ ๋ณด๊ณ  ์ดํดํ๋ ค ๋ธ๋ ฅํ์ผ๋ ์์ง ์๋ฒฝํ
    ์ดํด๋ ๋ชปํ ์ํ์ด๋ค. ์ด ๋ฌธ์ ๋ ๋ค์ ๋์์์ ๊ผญ ํ๋ฒ ๋ค์ ํ์ด๋ด์ผํ  ๊ณผ์ ์ด๋ค. 
    ํ์ด๋ฅผ ํด๋ณด์๋ฉด ์ผ๋จ ๋ชจ๋  ์ฐธ์ฌ์ 1~4๋ฒ ์ฐธ์ฌ์๋ค์ ๋ํด์ ๋ค for๋ฌธ์ผ๋ก ๋ชจ๋  ๊ฒฝ์ฐ์ ์๋ฅผ
    ๋์๋ด ์ค์ผํ๋ค. ๊ทธ๋์ ์ฒซ i,j๋ฒ ๋ฉํ ์ ๋ฉํฐ์ ๋ํ ๋ฐ๋ณต๋ฌธ์ธ๊ฑฐ๊ณ , ๋ค์์ ๋์จ 
    k,s๋ Kํ์ S์ด๋ก ๋ค ๋์์ฃผ๋ฉด์ i,j๋ฒ ์ฐธ๊ฐ์๊ฐ์ ๋ํ S๊ฐ(์์)์ ์์ ๋ณ์์ ๋ฃ์ด์ฃผ๊ณ 
    ํ๋ง๋ค ๋๋๋ฉด ๋ฉํ ๊ฐ ๋ฉํฐ๋ณด๋ค S๊ฐ(์์)๊ฐ ๋ฎ๋ค๋ฉด, cnt++ํ์ฌ ๋ชจ๋  ํ์ด ๋๋๊ณ  ๋์  cnt๊ฐ์ด 
    ํ์ length๊ฐ๋ณด๋ค ๋์๊ฑฐ๋ผ๋ฉด ํด๋น i,j๋ฒ ์ง์ ๋ฉํ ๊ฐ ๋ชจ๋ ๋์๊ฑฐ๋ answer๋ณ์์ 1์ ์ถ๊ฐํ๋ฉด์ 
    ๋ชจ๋  ๊ฒฝ์ฐ์ ์๋ฅผ ๋๋ฉฐ, answer๋ฅผ ๋ฐํํ๋ค. 
    </pre>


</div>
</details>
 
 <details>
<summary>4_4 ์กธ์์ ๋ฌผ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ํ์ฌ ์์ฐ์ผ๋ก ์ต๋ ๋ช ๋ช์ ํ์์๊ฒ ์ ๋ฌผ์ ์ฌ์ค ์ ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. 
 ์ ์๋์ ์ํ ํ๋๋ฅผ 50% ํ ์ธํด์(๋ฐ ๊ฐ๊ฒฉ) ์ด ์ ์๋ ์ฟ ํฐ์ ๊ฐ์ง๊ณ  ์์ต๋๋ค. ๋ฐฐ์ก๋น๋ ํ ์ธ์ ํฌํจ๋์ง ์์ต๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(budget, arr){
  let answer= 0;
  let n = arr.length;
  arr.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]))

  for(let i = 0; i<n; i++){
    let money= budget-(arr[i][0]/2+arr[i][1])
    let cnt=1;
    for(let j=0; j<n; j++){
      if(j!==i && (arr[j][0]+arr[j][1]) > money) break;
      if(j!==i && (arr[j][0]+arr[j][1]) <= money){
        money -= arr[j][0]+arr[j][1];
        cnt++;
      }
    }
    answer=Math.max(answer,cnt);
  }
  return answer;
}
budget = 28;
let arr = 
[ [6,6],
  [2,2],
  [4,3],
  [4,5],
  [10,3]]
console.log(solution(budget, arr));
 ```
 
 <br>

 <pre>
 ๐ฌ  ์ด ๋ฌธ์ ๋ ๊ฒฐ๊ตญ ๋ด๊ฐ ๋ชป ํ๊ณ , ์ธ๊ฐ์ ๋ฐ๋ผ ๋ดค๋ค. ์ ์๋๊ป์๋ ์ผ๋จ
    ๋ฐฐ์ด์ sort()๋ฅผ ์ด์ฉํด์ ์ค๋ฆ์ฐจ์์ผ๋ก ๋ฌธ๋ค์ด ์ฃผ์จ๊ณ , ๋ค ๋ํด๋ณด๋ฉด์ ๊ฐ์ 
    ์ฐพ์๋ด์ผํ๋ for๋ฌธ์ ๋ง๋๋๋ฐ, ์ผ๋จ ๋์๋ง์ ์ฒซ i๋ฒ์งธ ์ธ๋ฑ์ค์์ ์ฟ ํฐ์ ๋งฅ์ด๊ณ ,
    ํด๋น ์ธ๋ฑ์ค์ ๊ฐ์ ์์ฐ์์ ๋นผ๊ณ  ๋จ์๋์ผ๋ก ๋ค์ j๋ฒ์งธ ์ธ๋ฑ์ค๋ค์ ์ํ๋ค์ ํฉ์
    ๋นผ์ฃผ์ด ๊ทธ ๊ฐ์ด 0๋ณด๋ค ์์ผ๋ฉด break๋๊ฒ ์ค์ ํด์ฃผ์ด, ๊ตฌ๋งค ๊ฐ๋ฅํ ๋๋ง๋ค cnt๋ฅผ ๋ฃ์ด
    ์ ์ฒด for๋ฌธ์ด ๋๋ ๋๋ง๋ค Math.max()๋ฅผ ์ฌ์ฉํด ์ ์ผ ๋ง์ ์ ํ์ด ๊ตฌ๋งคํ  ์ ์๋ค๋ฉด
    ๋ช๊ฐ์ธ์ง ์ธ๋.. ๊ทธ๋ฐ ๋ฌธ์ ์๋๋ฐ ์ญ์ ์ด๋ ต๋ค. ๋ค์ ํด๋ด์ผ๊ฒ ๋ค.
    </pre>


</div>
</details>

 
 <details>
<summary>4_5 K๋ฒ์งธ ํฐ ์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 3์ฅ์ ๋ฝ์ ๊ฐ ์นด๋์ ์ ํ ์๋ฅผ ํฉํ ๊ฐ์ ๊ธฐ๋กํ๋ ค ๊ณ  ํฉ๋๋ค. 
 3์ฅ์ ๋ฝ์ ์ ์๋ ๋ชจ๋  ๊ฒฝ์ฐ๋ฅผ ๊ธฐ๋กํฉ๋๋ค. 
 ๊ธฐ๋กํ ๊ฐ ์ค K๋ฒ์งธ๋ก ํฐ ์๋ฅผ ์ถ๋ ฅ ํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(k,arr){
  let answer =[];
  let total= [];
  let rank = k-1
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j<arr.length; j++){
      if (j===i) break;
      for(let s = 0; s<arr.length; s++){
        if(s===j || s===i)break;
        total.push(arr[i]+arr[j]+arr[s]);
      }
    }
  }
  answer = total.sort((a,b)=>(b-a)).filter((v,i)=>total.indexOf(v)===i)
  return answer[rank];
}
k = 3;
arr = [13,15,34,23,45,65,33,11,26,42];
console.log(solution(k,arr));
 ```
 
 <br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
 function solution(n, k, card) {
  let answer;
  let tmp = new Set();
  for(let i = 0; i < n; i++){
    for(let j = i+1 ; j<n ; j++){
      for(let k=j+1; k<n; k++){
        tmp.add(card[i]+card[j]+card[k]);
      }
    }
  }
  let a=Array.from(tmp).sort((a,b)=>(b-a));
  answer=a[k-1];
  return answer;
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10,3,arr));

```

<br>

 <pre>
 ๐ฌ  ์  ๋ ๋ฌธ์ ๋ณด๋ค๋ ํจ์ฌ ์ฌ์ ๋๋ฐ, ๋ด๊ฐ ํ ๋ฐฉ๋ฒ์ ์ด 3์ฅ์ ์นด๋๋ฅผ ๋ฝ์์ผํ๋,
    3์ค for๋ฌธ์ผ๋ก ๋๋ฆฌ๋๋ฐ ์ ์ for๋ฌธ์์ ์ฌ์ฉํ index๋ ํผํด์ผํ๋, if๋ฌธ์ผ๋ก 
    ์  for๋ฌธ์ index๋ break๊ฐ ๋์ ํ์ถ์ํค๊ณ , ์ ์ผ ์์ชฝ for๋ฌธ์์ ๋ฏธ๋ฆฌ ๋ง๋ค์ด
    ๋์ ๋ฐฐ์ด ๋ณ์์ 3๊ฐ์ ์ธ๋ฑ์ค์ ๋ํ ํฉ์ pushํ ํ, sort()๋ก ๋ด๋ฆผ์ฐจ ์์ผ๋ก
    ๋ง๋ค๊ณ , filter()๋ฅผ ํตํด ์ค๋ณต๊ฐ์ ์ ๊ฑฐํ๋ค์์ answer์ [k-1]์ธ๋ฑ์ค๋ฅผ ์ ์ฉํด 
    ๋ฐํํ์ฌ ์ ๋ต์ ๋ฐ์ ๋ด์๋ค. 

    ์ ์๋๋ ๋๋ ๋น์ทํ๊ฒ ์ฌ์ฉํ์จ๋๋ฐ, ์ค๋ณต๊ฐ ์ ๊ฑฐ๋ฅผ set์ผ๋ก ์งํํ์จ๊ณ , for๋ฌธ์์
    ์  for๋ฌธ๊ณผ ์ธ๋ฑ์ค๊ฐ ๊ฒน์น์ง ์๊ฒํ๋ ค๊ณ  ์ฒซ ์กฐ๊ฑด์ +1์ ํ์์ ์ฒ๋ฆฌํ๊ณ , new Set()์ผ๋ก
    ์ ์ธํ ๋ณ์์ .add()์ฌ์ฉํด ํฉ์ฐ๊ฐ์ ๋ฃ์ด์คฌ๋ค.  sort๋ ๋ฐฐ์ด์์๋ง ๋จนํ๋ฏ๋ก, 
    ์๋ก์ด ๋ณ์์ Array.from(Set๋ณ์)๋ฅผ ์ฌ์ฉํด ์ ๋ฐฐ์ด์ ๋ง๋ค์ด ๋ด๋ฆผ์ฐจ์์ผ๋ก ๋ง๋ค๊ณ 
    answer ๋ฐํํ์ฌ ์ ๋ต์ ์ป์ด๋ด์จ๋ค. 
  </pre>


</div>
</details>


  <br>
 
 ## ์ฑํฐ5 - ํจ์จ์ฑ(ํฌํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ, ์ฌ๋ผ์ด๋ฉ์๋์ฐ, ํด์ฌ)
 
  <br>
 
 <details>
<summary>5_1 ๋ ๋ฐฐ์ด ํฉ์น๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌ์ด ๋ ๋ ๋ฐฐ์ด์ด ์ฃผ์ด์ง๋ฉด ๋ ๋ฐฐ์ด์ ์ค๋ฆ์ฐจ์์ผ๋ก ํฉ์ณ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr1, arr2) {
  let answer = [];
    answer = arr1.concat(arr2).sort((a,b)=>(a-b));
  return answer;
}
arr1 = [1,3,5];
arr2 = [2,3,6,7,9];
console.log(solution(arr1,arr2));
 ```
 
 <br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
 function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1=p2=0;

  for(let i = 0 ; i < n ; i++){
    for( let j = i+1 ; j < n ; j++){
      if (arr1[i] > arr1[j]) {
        let tmp = arr1[i];  
        arr1[i] = arr1[j];
        arr1[j] = tmp;
      }
    }
  }
  for( let i = 0; i < m; i++){
    for( let j = i+1 ; j < m ; j++){
      if (arr2[i] > arr2[j]) {
        let tmp = arr2[i];  
        arr2[i] = arr2[j];
        arr2[j] = tmp;
      }
    }
  }

  while(p1<n && p2<m){
      if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
      else answer.push(arr2[p2++]);
  }
  while(p1<n) answer.push(arr1[p1++]);
  while(p2<m) answer.push(arr2[p2++]);

  return answer;
}
arr1 = [3,7,9];
arr2 = [1,3,4,5,6];
console.log(solution(arr1,arr2));
```

<br>

 <pre>
 ๐ฌ  ๋ด๊ฐ ์๊ฐํ ์๋ฃจ์์ ์ผ๋จ concat ๋ฉ์๋๋ก ๋๊ฐ์ ๋ฐฐ์ดํฉ์น๊ณ , sort๋ก ์ค๋ฆ์ฐจ ์์ผ๋ก ๋ง๋ค์ด์ ๋ฐํ ํ ์ถ๋ ฅํ๋ค. ๊ฐ๋จํ๊ฒ.

     ๊ทธ๋ฐ๋ฐ ์ ์๋์ ํฌํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ์ผ๋ก ํธ์ ๋ค๊ณ  ๋๋ ์ข ๋ค๋ฅด๊ฒํ์จ๋ค. ์ผ๋จ ๊ทธ๋ฆฌ๊ณ  ์ด๊ฒ ์กฐ๊ฑด์ด ์ผ๋จ ์ค๋ฆ์ฐจ์์ผ๋ก ์ฃผ์ด์ง๋ค๋ ์กฐ๊ฑด์ด๊ณ 
     sort๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋ฉด NlogN์ด๋ผ์ ๋ณํฉ์ ๋ ฌ์ ๋ฐฐ์ฐ๊ธฐ ์ํด์๋ผ๋ ์ ๋ฐ์์ผ๋ก ํ์จ๋ค๊ณ  ํ๋ค. ๊ทธ๋ ๊ฒ ๋ฐฐ์ด์ ์ค๋ฆ์ฐจ์์ผ๋ก ๋ฐ๊ฟ์ฃผ๊ณ , 
     while๋ฌธ์ ๋ง๋ค์ด์ arr1์ p1์ธ๋ฑ์ค์๋ฆฌ๊ฐ arr2์ p2์ธ๋ฑ์ค์๋ฆฌ์ ์ซ์๋ณด๋ค ์์ผ๋ฉด answer์ pushํ๊ณ  ์ธ๋ฑ์ค์นด์ดํฐ๋ฅผ ์ฌ๋ ค์ฃผ๋ ์์ผ๋ก
     ์ฒ๋ฆฌํ๋ค์ ๋ ์ค์ ํ๋๋ผ๋ ์ต๋ ์ธ๋ฑ์ค๊น์ง ๋๋๋ฉด ๋ค๋ฅธ while๋ฌธ ๋๊ฐ๋ฅผ ๋ง๋ค์ด์ ๋จ์ ๋ฐฐ์ด์ ๋๋จธ์ง๋ฅผ ์ญ ๋ฃ์ด๋ฒ๋ฆฌ๋ while๋ฌธ์ ์ถ๊ฐํ์์
     ํธ์จ๋ค. 
  </pre>


</div>
</details>

 <details>
<summary>5_2 ๊ณตํต์์ ๊ตฌํ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> A, B ๋ ๊ฐ์ ์งํฉ์ด ์ฃผ์ด์ง๋ฉด ๋ ์งํฉ์ ๊ณตํต ์์๋ฅผ ์ถ์ถํ์ฌ ์ค๋ฆ์ฐจ์์ผ๋ก ์ถ๋ ฅํ๋ ํ๋ก ๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr1,arr2){
  let answer = [];

  for (let x of arr1){
    for( let y of arr2){
      if(x === y)
      answer.push(x);
    }
  }
  return answer.sort((a,b)=>(a-b));
}
let arr1 = [1,3,9,5,2]
let arr2 = [3,2,5,7,8]
console.log(solution(arr1,arr2))

 ```
 
 <br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(arr1,arr2){
  let answer = [];
  arr1.sort((a,b)=>(a-b));
  arr2.sort((a,b)=>(a-b));
  let p1=p2=0;
  
  while(p1<arr1.length && p2<arr2.length){
    if (arr1[p1] === arr2[p2]){
      answer.push(arr2[p2++]);
      p1++
    }
    else if (arr1[p1] < arr2[p2]){
      p1++
    }
    else p2++;
  }
  return answer
}
let arr1 = [1,3,9,5,2]
let arr2 = [3,2,5,7,8]
console.log(solution(arr1,arr2))
```

<br>

 <pre>
 ๐ฌ  ๋๋ ์ผ๋จ for of๋ฅผ ์ฌ์ฉํด ์ฒซ๋ฒ์งธ ๋ฐฐ์ด์์ ๊ฐ ์์๋ฅผ ๊ฐ์ ธ์์ ๋๋ฒ์งธ 
    ๋ฐฐ์ด์ ๋ชจ๋  ์์์ ๋น๊ตํด์ ๊ณตํต๋๋ฉด answer๋ผ๋ ๋ณ์์ pushํ๊ณ  
    returnํ ๋ sort๋ฅผ ์ฌ์ฉํด ์ค๋ฆ์ฐจ์์ผ๋ก ๋ฐ๊ฟจ๋ค.

    ์ ์๋์ ์ผ๋จ ๋จผ์  ๋ฐฐ์ด๋ค์ sort()๋ฅผ ์ฌ์ฉํ์ฌ ์ค๋ฆ์ฐจ์์ผ๋ก ๋ฐ๊พธ๊ณ ,
    p1,p2๋ผ๋ ๋ณ์๋ฅผ 0์ผ๋ก ์ด๊ธฐํํ์ฌ ์์ฑํ๊ณ  while๋ฌธ์ผ๋ก ์ฒซ๋ฒ์งธ ๋ฐฐ์ด์
    p1์ธ๋ฑ์ค์ ๋๋ฒ์งธ ๋ฐฐ์ด์ p2์ธ๋ฑ์ค์ ์๋ ์์๋ฅผ ๋น๊ต ํ ๊ฐ์ผ๋ฉด answer์ pushํ๊ณ , p1์ด p2๋ณด๋ค ์์ผ๋ฉด p1++ ๊ทธ ๋ฐ๋๋ผ๋ฉด p2++ ํ์ฌ ๊ฒฐ๊ตญ ๋ค 
    answer push()ํ๋ ๋ฐฉ๋ฒ์ด์์ต๋๋ค. 
    
  </pre>


</div>
</details>


<details>
<summary>5_3 ์ฐ์ ๋ถ๋ถ์์ด1</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ์ด ์์ด์์ ์ฐ์๋ถ๋ถ์์ด์ ํฉ์ด ํน์ ์ซ์ M์ด ๋๋ ๊ฒฝ์ฐ๊ฐ ๋ช ๋ฒ ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(sum,arr1){
  let answer = 0;
  for(let i = 0; i<arr1.length; i++)
  {
    let cnt = 0;
    for(let j = i; j < arr1.length+1; j++){
      if( cnt < sum )
        {
        cnt += arr1[j];
        }
      else if (cnt === sum)
      {
        answer++;
        break;
      }
      else break;
    }
  }
  return answer
}
let sum = 6;
let arr1 = [1,2,1,3,1,1,1,2]
console.log(solution(sum,arr1))
 ```
 
 <br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution (sum, arr1){
  let answer = 0, lt=0, total=0;
  for(let rt=0; rt<arr1.length; rt++)
  {
    total += arr1[rt];
    if(total===sum) answer++;
    while(total >= sum)
    {
      total -= arr1[lt++];
      if(total === sum) answer++;
    }
  }
  return answer;
}
let sum = 6;
let arr1 = [1,2,1,3,1,1,1,2]
console.log(solution(sum,arr1))
```

<br>

 <pre>
 ๐ฌ  ๋ด๊ฐ ๊ตฌ์ํ ๋ฐฉ๋ฒ์ 2์ค for๋ฌธ์ผ๋ก ์ฝ๊ฐ ๋ธ๋ฃจํฌํฌ์ค(?) ๋ฐฉ์์ผ๋ก ํ์๋ค๊ณ ํด์ผํ ๊น 
    ๋ฌด์ํ์ง๋ง ๊ทธ ๋ฐฉ๋ฒ์ผ๋ก ํ์ด๋๋ค. 

    ๊ทธ๋ฐ๋ฐ ์ ์๋์ ์์์ ์ ์คํ๋ค. ํฌํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ์ ์ฌ์ฉ์ํ๋ฉด ์ด์ค for๋ฌธ ์ฌ์ฉํ  ๊ฒ์ด๋ผ๋
    ๊ฑธ ๋ฐ๋ก ๊ฐํํ์จ๊ณ , ์ ์๋ ๊ฐ์๊ฒฝ์ฐ๋ lt, rt ๋ณ์๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด์ค์ For ์ธ์๋ก rt๋ฅผ ๋ฃ๊ณ ,
    ๋ชฉํ๊ฐ๊ณผ ๊ฐ์์ง๋ฉด answer์ +1ํด์ฃผ๊ณ , ๊ทธ ๋ ํฌ๊ฑฐ๋ ๊ฐ์ ๊ฒฝ์ฐ์ while๋ฌธ์ ๊ฑธ์ด lt์ ๊ฐ์ ธ์์
    ์ดํฉ์์ arr[lt]๋ฅผ ๋นผ์ค์ผ๋ก์จ ์ if๋ฌธ์ ๋ง์๋ํด์ฃผ๋๊ฑธ ๊ณ์ ๋ฐ๋ณตํ๋ค.. 
    
  </pre>


</div>
</details>


<details>
<summary>5_4 ์ฐ์ ๋ถ๋ถ์์ด2</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ์์ด์์ ์ฐ์๋ถ๋ถ์์ด์ ํฉ์ด ํน์ ์ซ์ M์ดํ๊ฐ ๋๋ ๊ฒฝ์ฐ๊ฐ ๋ช ๋ฒ ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ ๋จ์ ์์ฑํ์ธ์. M = 5
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(n,arr){
  let answer=0, lt=0, sum=0;

  for ( let rt =0; rt < arr.length; rt++)
  {
    sum += arr[rt];
    while(sum > 5){
      sum -=arr[lt++];
    }
    answer += (rt-lt+1);
  }
  return answer;
}
const n = 5;
const arr = [1,3,1,2,3]
console.log(solution(n,arr))
 ```
 
 <br>


<br>

 <pre>
 ๐ฌ  ๋ฐ๋ก ์  ์ฐ์ ๋ถ๋ถ์์ด1์ด๋ ๋น์ทํ ๋ฌธ์ ์์ง๋ง ๋๋ ... ๋จธ๋ฆฌ๊ฐ ๋๋น ์์ธ์ง ํผ์์๋ ํ์ด๋ด์ง ๋ชปํด
    ์ ์๋ ์๋ฃจ์์ ๋ฐ๋ก ๋ด๋ฒ๋ ธ๋ค. ๋๋ ๊ณ์ ์ด์ค for๋ฌธ๋ง ๋จธ๋ฆฟ์์ ๋ฉค๋์์ ํฌํฌ์ธํฐ ๋ณ์๋ฅผ ๋ง๋ค์ด๋
    ๋์์ ๋๊ฐ๋ค ์ธ ์๊ฐ๋ง ํ๋ค. ์๋ฌด๋๋ ์ด์ค for๋ฌธ์ ์ต์ํด์ ธ๋ฒ๋ฆฐ๊ฑธ๊น. for๋ฌธ์ ๋๋ฉด์ rt๋ฅผ ์ฆ๊ฐ์ํค๋ฉฐ 
    5์ดํ์ผ๋ answer ์ (rt-lt+1)๋ฅผ ๋ฃ์๋๋ฐ, ์ด๊ฑฐ๋ฅผ ์๊ฐํ์ด์ผํ๋ค. ์ฆ ์ฐ์ ๋ถ๋ถ์์ด
    ์ด ์กฐ๊ฑด์ ๋ง์ผ๋ฉด ๋์ธ๋ฑ์ค(rt)์ - ์ฒซ์ธ๋ฑ์ค(lt) + 1๋ฅผ ํ๋ฉด ๊ทธ ์ธ๋ฑ์ค ์ฌ์ด์ ์์๋ค์ ๋ค ๋ ํ  ์ 
    ์๋๋ฐ ์ด๊ฑฐ๋ฅผ ์๊ฐํ๋๊ฒ key์๋๊ฑฐ ๊ฐ๋ค. [1 1 3 2] ์ด๋ฐ์์ผ๋ก ์์ผ๋ฉด
    [1] 1 rt-lt+1 = 1
    [1] 2 rt-lt+1 = 1
    [3] 5 rt-lt+1 = 3
    [2] 7 x
    while 7-arr[lt++] = 6 x 
    while 6-arr[lt] 5 rt-lt+1 = 3
    ์ด๋ฐ์์ผ๋ก ํด์ ์ด 8์ด ๋์จ๋ค.
    
  </pre>


</div>
</details>


<details>
<summary>5_5 ์ต๋ ๋งค์ถ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ์ฐ์ ๋ K์ผ ๋์์ ์ต๋ ๋งค์ถ์ก์ด ์ผ๋ง์ธ์ง ๊ตฌํ๋ผ๊ณ  ํ์ต๋๋ค. K = 3
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(k, arr)
{
  let answer = 0;
  for( let rt = k-1; rt < arr.length; rt++)
  {
    let temp_total = 0;
    temp_total = arr[rt-2]+arr[rt-1]+arr[rt]
    if(answer < temp_total) answer = temp_total ;
  }
  return answer;
}
k = 3;
arr = [12,15,11,20,25,10,20,19,13,15]
console.log(solution(k,arr))
 ```
 
 <br>


 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(k, arr)
{
  let answer = 0, temp_total = 0;
  for(let i = 0; i < k; i++) temp_total += arr[i];
  answer = temp_total;
  for (let i = k ; i < arr.length; i++)
  {
    temp_total += arr[i]-arr[i-k]
    answer = Math.max(answer, temp_total);
  }
  return answer;
}
k=3;
arr = [12,15,11,20,25,10,20,19,13,15];
console.log(solution(k,arr))
```

<br>

 <pre>
 ๐ฌ  ์ด๋ฒ์๋ ์ด์ค For๋ฌธ์ ๊ธฐํ์ฝ์ผ ์ฐ์ง์๊ฒ ๋ค๊ณ  ํ์ง๋ง, ์์จ๋ณด๋ ์ข ์ถํ์ฝ๋๊ฐ ๋๊ฑฐ ๊ฐ๋ค.
    For๋ฌธ ํ๋๋ฅผ ์ฐ๋๋ฐ, ์ค๋ฅธ์ชฝ ์ธ๋ฑ์ค๋ฅผ ํ๋์ฉ ์ฆ๊ฐ์ํค๊ณ , ์ผ์ชฝ ์ธ๋ฑ์ค๋ฅผ [rt-2][rt-1] 
    ์ด๋ฐ ์์ผ๋ก for๋ฌธ์์ ์์ผ๋ก ๊ธฐ์ํด ํฉ์ ๊ตฌํ ๋ค ๋น๊ตํ์ฌ answer์ ๋ฃ๋ ์์ผ๋ก ๊ตฌํ ํ๋ค.
    ๋ง์ ์๋ค์ง๋ง.. ๋์์ ๋์ ์ด๋ ๊ฒ ์ฌ๋ ค๋จ๋ค.

    ์ ์๋์ด ์ฌ์ฉํ์จ๋ ๋ฐฉ๋ฒ์ ์ฌ๋ญ๋ค๋ฅด๋ค. ์ญ์ ๊นจ๊ธํ๋ค. ์ฌ๋ผ์ด๋ฉ ์๋์ฐ๋ผ๋ ์๊ณ ๋ฆฌ์ฆ(?)์ผ๋ก ๋ถ๋ฆฌ๋
    ๋ฏ ํ๋ค. ๋ง๊ทธ๋๋ก ์ฐฝ๋ฌธ์ ์์ผ๋ก ์ด๋ํ๋ค๋ ๊ทธ๋ฐ ๋ป์ธ๊ฒ ๊ฐ๊ณ , ์ ์๋ ์ฝ๋์์๋ ์ผ๋จ ์ฒซ k๊ฐ์
    ์ธ๋ฑ์ค๋ฅผ temp_total๋ณ์์ ๋ฃ์ด์ฃผ๊ณ , answer์์ ๊ทธ ๊ฐ์ผ๋ก ์ด๊ธฐํํด์ค๋ค. ๊ทธ๋ฐ ๋ค์ for๋ฌธ์ผ๋ก
    i๋ฅผ k๋ก ์ด๊ธฐํํด์ฃผ๊ณ , temp_total ์  arr[i]์ธ๋ฑ์ค ๊ฐ์ ๋ํด์ฃผ๊ณ , ๊ทธ ์  ๋งจ์ฒซ๋ฒ์งธ ์ธ๋ฑ์ค ์ฆ,
    arr[i-k]์ธ๋ฑ์ค๋ฅผ ๋นผ์ค์ผ๋ก์จ ๊ทธ๋ฌ๋ฉด ์ค๋ฅธ์ชฝ์ผ๋ก ์ธ๋ฑ์ค๊ฐ ํ์นธ ์์ง์ธ ๊ฒ์ฒ๋ผ ๋๋๋ฐ, ์ด ์ํ์์ 
    answer์ temp_total๋ฅผ Math.max๋ก ๋น๊ตํด์ฃผ๊ณ  ๋ ํฐ ๊ฐ์ ๋ฃ์ด์ค์ ํ์ด๋ด์จ๋ค. 
  </pre>

</div>
</details>

 <details>
<summary>5_6 ํ๊ธ ํ์ฅ(ํด์ฌ)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ๋ ๋ฒ์งธ ์ค์ N๊ฐ์ ํฌํ์ฉ์ง์ ์ฐ์ฌ์ ธ ์๋ ๊ฐ ํ๋ณด์ ๊ธฐํธ๊ฐ ์ ์๋์ด ๋ฐํํ ์์๋๋ก ๋ฌธ์์ด๋ก ์๋ ฅ๋ฉ๋๋ค.
 ํ๊ธ ํ์ฅ์ผ๋ก ์ ํ๋ ๊ธฐํธ๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr)
{
  let answer = '';
  let cand = ['A','B','C','D','E']
  let newarr = arr.split('')
  let temp_cnt = 0; 

  for(let i = 0; i < cand.length; i++)
  {
    if (temp_cnt < newarr.filter(element => cand[i] === element).length)
    {
      temp_cnt = newarr.filter(element => cand[i] === element).length;
      answer = cand[i];
    }
  }
  return answer;
}
let arr ="BACBACCACCBDEDE"
console.log(solution(arr))
 ```
 
 <br>


 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(s){
  let answer = 0;
  let sH = new Map()
  for (let x of s){
    if(sH.has(x))
      sH.set(x, sH.get(x)+1)
    else 
      sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for( let [key,val] of sH )
    {
      if (max < val)
      {
        max = val;
        answer = key;
      }
    }
  return answer;
}
let str = "BACBACCACCBDEDE"

console.log(solution(str))
```

<br>

 <pre>
 ๐ฌ  ์ผ๋จ ์๋ ฅ์ด ๋ฌธ์์ด๋ก ์ค๋ ๋ฌธ์ ๋ผ ์ด๋ป๊ฒ ํ์ด๋ด์ผํ ์ง ์กฐ๊ธ ์ด๋ ค์ ๋ค. 
    ํญ์ ํด์๋ ๋๋ก ๋น์ฐํ๋ฏ์ด ๋ฌธ์์ด์ split()๋ฉ์๋๋ฅผ ํตํด ๋ฆฌ์คํธ๋ก ๋ง๋ค์๊ณ , ํ๋ณด ๋ชฉ๋ก๋ค์ 
    ๋ฆฌ์คํธ๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด์ ํด๋น ๋ฆฌ์คํธ๋ก for๋ฌธ์ ๋ง๋ค๊ณ , ๊ทธ ์์ if ๋ฌธ์ ํตํด์ ๋ฏธ๋ฆฌ ์ด๊ธฐํํด๋์
    temp_cnt์ newarr.filter(element => cand[i] === element).length ๋ฅผ ํตํด ๊ทธ ํ๋ณด๊ฐ
    ๋ฐฐ์ด์์ ๋ช๊ฐ๋ ์๋์ง length ๋ก ๊ฐ์ ธ์ ๋น๊ต ๋ฐ answer์ ์ฝ์ํ๋ ์์ผ๋ก ํ์๋ค. ๊ทธ๋ฐ๋ฐ 
    ํ๋ณด๋ฅผ ๋ด๊ฐ ์ง์  ์๋ ฅํด์ ๋ฐฐ์ด์ ๋ง๋ค๊ณ , ๊ตณ์ด ๋ฌธ์์ด์ ๋ฆฌ์คํธ๋ก ๋ฐ๊พธ์์ ์์ฌ์ ๋ค.

    ์ ์๋ ์๋ฃจ์์ ์ผ๋จ Map()์ผ๋ก key์ value๋ฅผ ์์ผ๋ก ๊ฐ์ ์ ์๊ฒ ๋ณ์ ํ๋๋ฅผ ์ ์ธํ๊ณ , 
    For of ๋ฅผ ์ฌ์ฉํด์ ๋ฌธ์์ด์์ ๋ฌธ์์ ํ๋์ฉ ๊ฐ์ ธ์์ if(sH.has(x)) sH.set(x, sH.get(x)+1)
    ์ฆ for of ๋ก ๊ฐ์ ธ์จ ๋ฌธ์๋ฅผ ๊ฐ์ง๊ณ  ์์ผ๋ฉด ํด๋น key(x)์ .get+1 1์ ๋ํด์ฃผ๊ณ , 
    else sH.set(x, 1); ๋ง์ฝ์ ๋ฌธ์์ ํด๋น๋๋ key๊ฐ ์์ผ๋ฉด ์ด๊ธฐ๊ฐ 1์ ์ฃผ๊ณ , ๋ง๋ค์ด์ค๋ค. 
    ๊ทธ ๋ค์ ๋ค์ For of ๋ฌธ์ผ๋ก sH์์ key, value๊ฐ์ ๊ฐ์ ธ์์ ๋น๊ตํ๊ณ  ๋ง์ง๋ง answer์ ๋ค์ด๊ฐ
    ๊ฐ์ด ์ ๋ต ! 
  </pre> 

</div>
</details>

<details>
<summary>5_7 ์๋๊ทธ๋จ(ํด์ฌ)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> Anagram์ด๋ ๋ ๋ฌธ์์ด์ด ์ํ๋ฒณ์ ๋์ด ์์๋ฅผ ๋ค๋ฅด์ง๋ง ๊ทธ ๊ตฌ์ฑ์ด ์ผ์นํ๋ฉด ๋ ๋จ์ด๋ ์ ๋๊ทธ๋จ์ด๋ผ๊ณ  ํฉ๋๋ค. 
 ์ด๋ ํ ๋จ์ด๋ฅผ ์ฌ ๋ฐฐ์ดํ๋ฉด ์๋ํธ ๋จ์ด๊ฐ ๋  ์ ์๋ ๊ฒ์ ์๋๊ทธ๋จ์ด๋ผ ํฉ๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr1,arr2){
  let answer = "Yes";
  let sH = new Map();

  for( let x of arr1){
    if (sH.has(x))
      sH.set(x, sH.get(x)+1)
    else 
      sH.set(x, 1)
  }
  for( let t of arr2)
  {
    if (!sH.has(t)|| sH.get(t) === 0) return "No"
    sH.set(t, sH.get(t)-1)
  }
    return answer;
}
arr1 = "abaCC"
arr2 = "CaaCb"
console.log(solution(arr1,arr2))
 ```

<br>

 <pre>
 ๐ฌ  ์๊ฐ์ ํด๋ณด๋ค๊ฐ, ๋์ ํ ์๋๊ฒ ์ด์ ์๋ฃจ์์ ๋ดค๋ค. map()์ด๋ผ๋ ๋ฉ์๋๋ฅผ ์ด์ฉํด์ ์๋กญ๊ฒ ๋ณ์๋ฅผ ๋ง๋ค์ด์ค๋ค. ๊ทธ๋ฆฌ๊ณ  ๋์ for of๋ฌธ์ ํตํด, 
 ์์ ๋ง๋ค์ด์ค ๋ณ์์ ์ฒซ๋ฒ์งธ ๋ฐฐ์ด์์ ํ๋์ฉ ๋นผ์ if๋ฌธ์ผ๋ก ๋น๊ต๋ฅผ ํด๊ณ , ์๋ค๋ฉด x์ ํด๋น๋๋ key๊ฐ์ value๋ฅผ +1ํด์ฃผ๊ณ , ์๋ค๋ฉด x๋ผ๋ key๊ฐ์ 
 ํ๋ set()ํด์ฃผ๊ณ , value๋ฅผ 1๋ก ์ธํํด์ค๋ค. ์ด๋ ๊ฒ ์ฒซ๋ฒ์งธ ๋ฐฐ์ด์ ๋ค ํด์ฃผ๊ณ , ๊ทธ ๋ณ์์ ๋๋ฒ์งธ ๋ฐฐ์ด์ for of๋ก ๋ค์ ํ๋์ฉ ๋น๊ตํด์ฃผ๋ฉด์ ํด๋น 
 key๊ฐ์ด ์กด์ฌํ๋ฉด key๊ฐ value์ -1 ์ฉํด์ฃผ๊ณ , ๊ทธ๋ฆฌ๊ณ  ๋ค๋ฅธ ์กฐ๊ฑด์์ผ๋ก key๊ฐ์ด ์กด์ฌํ์ง์๊ฑฐ๋ ๊ทธ key๊ฐ์ด value๊ฐ ์ด๋ฏธ 0์ด๋ผ๋ฉด "No" returnํ๊ณ  
 ๋ง์ง๋ง ๊น์ง ์กฐ๊ฑด์ ๋ง์ผ๋ฉด ์๋ ์ค์ ํด๋์ "Yes"๊ฐ ๊ทธ๋๋ก ๋๊ฐ๋ค. 

  </pre> 

</div>
</details>

 <details>
<summary>5_8 ๋ชจ๋  ์๋๊ทธ๋จ ์ฐพ๊ธฐ(ํด์ฌ, ํฌํฌ์ธํฐ, ์ฌ๋ผ์ด๋ฉ ์๋์ฐ)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ๋ฌธ์์ด์์ T๋ฌธ์์ด๊ณผ ์๋๊ทธ๋จ์ด ๋๋ S์ ๋ถ๋ถ๋ฌธ์์ด์ ๊ฐ์๋ฅผ ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์
  ์์ฑํ์ธ์. ์๋๊ทธ๋จ ํ๋ณ์ ๋์๋ฌธ์๊ฐ ๊ตฌ๋ถ๋ฉ๋๋ค. ๋ถ๋ถ๋ฌธ์์ด์ ์ฐ์๋ ๋ฌธ์์ด์ด์ด์ผ ํฉ๋๋ค
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function compareMaps(map1, map2){
  if(map1.size !== map2.size)return false;
  for(let [key,value] of map1){
    if(!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(arr1,arr2){
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  for(let t of arr2){
    if (tH.has(t)) tH.set(t, tH.get(x)+1);
    else tH.set(t, 1);
  }
  let len = arr2.length-1
  for(let i = 0 ; i < len ; i++){
    if (sH.has(arr1[i])) sH.set(arr1[i], sH.get(arr1[i])+1);
    else sH.get(arr1[i]+1);
  }

  let lt = 0;
  for (let rt=len; rt < arr1.length; rt++){
    if (sH.has(arr1[rt])) sH.set(arr1[rt], sH.get(arr1[rt])+1);
    else sH.set(arr1[rt],1);
    if(compareMaps(sH,tH)) answer++;
    sH.set(arr1[lt], sH.get(arr1[lt])-1);
    if(sH.set(arr1[lt])===0) sH.delete(arr1[lt]);
    lt++
  }
  return answer;
}
let arr1 = "bacaAacba";
let arr2 = "abc";
console.log(solution(arr1,arr2));
 ```

<br>

 <pre>
 ๐ฌ  ์ด๋ฒ ์ฑํฐ์์ ๋ฐฐ์ด ๋ชจ๋  ๊ฑธ ์จ๋จน์ผ๋ผ๋ ๋ฌธ์ ์๋ค. ์ผ๋จ ์ด์ฌํ ํด๋ณด๋ค๊ฐ ๊ฒฐ๊ตญ ์๋ฃจ์์
 ๋ด๋ฒ๋ ธ๋๋ฐ, Map ๊ฐ์ฒด ๋ณ์๋ฅผ ์ผ๋จ ๋๊ฐ ๋ง๋ค์ด ์ฃผ๊ณ , for of ๋ก ๋๋ฒ์งธ ๋ฌธ์์ด์ ์ก์์ฃผ๊ณ ,
 ๊ทธ๋ฆฌ๊ณ  ๋๋ฒ์งธ ๋ฌธ์์ด ๊ธธ์ด๋งํผ for of๋ก ์ฒซ๋ฒ์งธ ๋ฌธ์์ด์ Map ๊ฐ์ฒด ๋ณ์๋ก ๋ฃ์ด์ฃผ๊ณ , ์ฌ๋ผ์ด
 ๋ฉ ์๋์ฐ ์๊ณ ๋ฆฌ์ฆ์ผ๋ก for๋ฌธ์ ๋๋ ค์ ํ๋์ฉ ์ด๋ํ๋ฉด์, ๋น๊ตํด์ฃผ๊ณ , ํ๋๋ผ๋ ์กฐ๊ฑด์ด ์๋ง์ผ๋ฉด false ๋ฅผ ๋ฐํํ๋ ์์ผ๋ก ํ์จ๋ค. 

  </pre> 

</div>
</details>

  <br>
 
 ## ์ฑํฐ6 - ์๋ฃ๊ตฌ์กฐ(์คํ, ํ)
 
  <br>

<details>
<summary>6_1 ์ฌ๋ฐ๋ฅธ ๊ดํธ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ๊ดํธ๊ฐ ์๋ ฅ๋๋ฉด ์ฌ๋ฐ๋ฅธ ๊ดํธ์ด๋ฉด โYES", ์ฌ๋ฐ๋ฅด์ง ์์ผ๋ฉด โNO"๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
(())() ์ด๊ฒ์ ๊ดํธ์ ์์ด ์ฌ๋ฐ๋ฅด๊ฒ ์์นํ๋ ๊ฑฐ์ง๋ง, (()()))์ ์ฌ๋ฐ๋ฅธ ๊ดํธ๊ฐ ์๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(s){
  let answer = "Yes"
  let stack = [];

  for (let x of s){
    if(x==='(') stack.push(x);
    else {
      if(stack.length === 0) return "No";
      stack.pop();
    }
  }
  if(stack.length>0) return "NO";
  return answer;
}
let str = "()(()()"
console.log(solution(str))
 ```

<br>

 <pre>
 ๐ฌ  ๋ด ๋๋ฆ๋๋ก ๋จผ์  Map ๊ฐ์ฒด๋ฅผ ํตํ key,value์์ value๊ฐ์ ๋น๊ตํด์ ๋์ค๋๋ก ํ์ง๋ง ๊ดํธ๊ฐ ๋ฐ๋๋ก 
 ๋์๋ฒ๋ ค๋ ์ ์์ผ๋ก ์ธ์ํด๋ฒ๋ ค์, ๊ทธ๋ฅ ์๋ฃจ์์ ๋ฐ๋ผํด๋ดค๋ค. ์ ์๋์
 ์คํ ๋ณ์๋ฅผ ์ผ๋จ ๋ง๋์๊ณ , ์ด๋ฆฐ ๊ดํธ๊ฐ ๋์ค๋ฉด, pushํ๊ณ , ๋ซ๋ ๊ดํธ๊ฐ ๋์จ๋ค๋ฉด, pop์ผ๋ก
 ๋ฆฌ์คํธ๋ฅผ ์ง์์ฃผ๊ณ , length๊ฐ for of๋ฅผ ๋ค ๋๊ธฐ์ ์ 0๊ฐ ๋๋ฉด, ๊ฑฐ๊พธ๋ก ๋๊ฑฐ๋๊น "No"
 ๋ฐํ์ ํด์ฃผ๊ณ  ๋ฌธ์ ์์ด ๋ค ๋๊ฒ๋๋ฉด ๊ธฐ์กด์ ๋ฃ์ด๋๋ "YES" ์ถ๋ ฅ
  </pre> 

</div>
</details>
 
 <details>
<summary>6_2 ๊ดํธ๋ฌธ์์ ๊ฑฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> ์๋ ฅ๋ ๋ฌธ์์ด์์ ์๊ดํธ ( ) ์ฌ์ด์ ์กด์ฌํ๋ ๋ชจ๋  ๋ฌธ์๋ฅผ ์ ๊ฑฐํ๊ณ  ๋จ์ ๋ฌธ์๋ง ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(s){
  let answer = [];
  let flag = 0;

  for (let x of s){
    if (x === "(")
      flag++;
    else if (x === ")") 
      flag--; 
    else if (flag === 0)
      answer.push(x)
  }
  return answer.join('');
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str))
 ```

<br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(s){
  let answer;
  let stack = []
  for (let x of s){
    if(x===')')
    {
      while(stack.pop()!=='(');
    }
    else stack.push(x)
  }
  answer = stack.join('');
  return answer;
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str))
```

<br>

 <pre>
 ๐ฌ  ์ผ๋จ ๋ด๊ฐ ๊ตฌํํด๋ณธ ์ฝ๋๋ flag๋ผ๋ ๋ณ์๋ฅผ 0์ผ๋ก ์ด๊ธฐํํ๊ณ , ์ด๋ฆฐ ๊ดํธ๊ฐ ์๊ธฐ๋ฉด 
 flag์ ++ ๋ซ๋ ๊ดํธ๋ผ๋ฉด --, 0์ด ๋๋ฉด ๋ฆฌ์คํธ์์ pushํด์ ๋ฃ์ด์ฃผ๊ณ , answer์ 
 ๋ฐํํ ๋ join์ผ๋ก ๋ฌธ์์ด๋ก ์นํํด์ค๋ค. 

 ์ ์๋์ด ์ ์ํ ์๋ฃจ์์ ์ญ์ ์คํ์ด๋ผ๋ ๋ฆฌ์คํธ๋ฅผ ๋จผ์  ๋ง๋ค์ด์ for of๋ก ๋๋ฆฌ๊ณ ,๋ซ๋ 
 ๊ดํธ ์ธ์๋ ์คํ์ด๋ผ๋ ๋ฆฌ์คํธ์ ๊ณ์ push๋ฅผ ํด์ฃผ๊ณ , ๋ง์ฝ ๋ซ๋ ๊ดํธ๊ฐ ๋์ค๋ฉด ๊ทธ ๋ฆฌ์คํธ์์ 
 ์ฌ๋ ๊ดํธ๊ฐ ๋์ฌ๋๊น์ง pop์ ํด์ ๋ค ์ง์์ฃผ๋ ๊ฑธ ๋ฐ๋ณตํ๊ณ  ๋ฐํํ์ค๋๋ 
 ๋์ฒ๋ผ join๋ฉ์๋๋ก ๋ฌธ์์ด๋ก ์นํํด์ฃผ์จ๋ค. 
  </pre> 

</div>
</details>

 <details>
<summary>6_3 ํฌ๋ ์ธ ์ธํ๋ฝ๊ธฐ(์นด์นด์ค ๊ธฐ์ถ)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
๊ฒ์ ํ๋ฉด์ ๊ฒฉ์์ ์ํ๊ฐ ๋ด๊ธด 2์ฐจ์ ๋ฐฐ์ด board์ ์ธํ์ ์ง๊ธฐ ์ํด ํฌ๋ ์ธ์ ์๋์ํจ 
์์น๊ฐ ๋ด๊ธด ๋ฐฐ์ด moves๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ํฌ๋ ์ธ์ ๋ชจ๋ ์๋์ํจ ํ ํฐํธ๋ ค์ ธ ์ฌ๋ผ์ง 
์ธํ์ ๊ฐ์๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(board, moves){
  let answer = 0;
  let bucket = [];
  for( let i = 0; i < moves.length; i++)
  {
    let move = moves[i]-1;
    let escape = idx = 0;
    while(escape === 0)
    {
        if(board[idx][move] === 0) 
        {
          if (idx === 4) escape = 1;
          else idx++;
        }
        else if (board[idx][move] !== 0)
        {
          if(bucket[bucket.length-1] === board[idx][move])
          {
            bucket.splice(bucket.length-1,1);
            answer += 2;
          }
        else 
          {
            bucket.push(board[idx][move]);
          }
          board[idx].splice(move,1,0); 
          escape = 1;
        }
    }
  }
  return answer;
}
let board = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]]
let moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));
```

<br>


 ### โ๏ธ Alternative Solution
 
  ```javascript
 function solution(board, moves)
{
  let answer = 0;
  let stack = [];
  moves.forEach(pos => {
    for (let i = 0; i < board.length; i++){
      if(board[i][pos-1]!==0){
        let tmp=board[i][pos-1];
        board[i][pos-1]=0;
        if(tmp===stack[stack.length-1]){
          stack.pop()
          answer+= 2;
        }
        else stack.push(tmp);
        break;
      }
    }
  })
  return answer;
}
let board = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]]
let moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));
```

<br>

 <pre>
 ๐ฌ  ์ผ๋จ ๋ด๊ฐ ๋ง๋  ์ฝ๋๋ escape๋ผ๋ ๋ณ์๋ฅผ ํ๋ ์ ์ธ ๋ฐ 0์ผ๋ก ์ด๊ธฐํ ํ์ํ์์ 
    while๋ก ๊ณ์ ๋๋ ค์ฃผ๋ฉด์ ์ด์ค์ธ๋ฑ์ค๋ก ์คํ ์์์ฃผ๊ณ , ์์ ์ธ๋ฑ์ค์ ์ซ์์ ๊ฐ๋ค๋ฉด 
    splice๋ก ์ง์์ฃผ๊ณ  2๋ฅผ answer์ ๋ํด์ฃผ๊ณ  ๋ค ๋๋๋ฉด escape์ 1์ ๋ฃ์ด์ฃผ์ด์ 
    while๋ฌธ์ ๋๋ด์ค๋ค์์ ๊ฐ์ ๋ฐํํ๊ฒ ๋ง๋ค์๋ค. 

    ์ ์๋์ด ๊ตฌํํ์  ์ฝ๋๋ forEach๋ฌธ์ผ๋ก moves์ ์์๋ค์ ํ๋์ฉ ๊ฐ์ ธ์ค๊ณ  ๋๊ฐ์ด
    if๋ฌธ์ผ๋ก ํ์ธํ๊ณ  ๋ฐํํด์ฃผ๋ ์์ธ๋ฐ forEach๋ฅผ ์ฌ์ฉํ๋๊น ์ข๋ ์ฝ๋๊ฐ ๊ฐ๊ฒฐํด์ง๊ณ 
    ์ข์๋ค. 
  </pre> 

</div>
</details>

 <details>
<summary>6_4 ํ์์ ์ฐ์ฐ(postfix)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
ํ์์ฐ์ฐ์์ด ์ฃผ์ด์ง๋ฉด ์ฐ์ฐํ ๊ฒฐ๊ณผ๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(s){
  let answer = 0;
  let num = [];
  let rt = lt = 0;

  for ( let x of s){
    if (Number.isInteger(Number(x)) === true)
        { 
          num.push(Number(x))
        }
    else{
      rt = num[num.length-1];
      lt = num[(num.length-1)-1];
      num.pop();
      num.pop();
      let temp_answer = 0;
      if( x === '+'){
        temp_answer = lt + rt;
        num.push(temp_answer);
      }
      else if( x === '*'){
        temp_answer = lt * rt;
        num.push(temp_answer);
      }
      else if( x === '-'){
        temp_answer = lt - rt;
        num.push(temp_answer);
      }
      else{ 
      temp_answer = lt / rt;
      num.push(temp_answer);
    }
    }
  }
  answer = num[0]
  return answer; 
}
let str = "352+*9-"
console.log(solution(str))
```

<br>


 ### โ๏ธ Alternative Solution
 
  ```javascript

function solution(s){
  let answer;
  stack = [];
  for ( let x of s){
    if(!isNaN(x)) stack.push(Number(x));
    else{
      let rt = stack.pop();
      let lt = stack.pop();
      if(x==='+') stack.push(lt+rt);
      else if(x==='-') stack.push(lt-rt);
      else if(x==='*') stack.push(lt*rt);
      else if(x==='/') stack.push(lt/rt);
    }
  }
  answer = stack[0];
  return answer;
}
let str = "3352+*9-";
console.log(solution(str))
```

<br>

 <pre>
 ๐ฌ  ์ผ๋จ ๋ด๊ฐ ๊ตฌํํ ์ฝ๋๋ for of๋ก ์๋ ฅ๊ฐ์์ ์ซ์๋ง ๋ฐฐ์ด์ ๋ฃ์ด ๋๊ณ 
    ์ฐ์ฐ์๊ฐ ๋์ค๋ฉด ์๊น ์ซ์๋ง ๋ฃ์๋ ๋ฐฐ์ด ๋งจ๋ค์ ๊ทธ ์์ ์ธ๋ฑ์ค๋ฅผ ๋๊ฐ
    rt, lt๋ก ์ ์ธํ๋ค, ์ฐ์ฐ์์ ๋ฐ๋ผ์ ๊ณ์ฐํ๊ณ , ์์๋ก ์ ์ธํ ๋ณ์์ ํฉ์ฐ์
    ํด์ฃผ๊ณ ๋์ answer๋ก ๋ณํํด์ค๋๋ค. 

    ์ ์๋์ด ๊ตฌํํ์  ์ฝ๋๋ ๋ง์ด ๋น์ทํ๋ฉด๋ฐ, ๋ฉ์๋๋ฅผ ์ฌ์ฉํด์, ์ฝ๋๊ฐ ํจ์ฌ
    ๊ฐ๊ฒฐํ๊ณ  ๋์ ๋ณด๊ธฐ๋ ์ข์๋ฐ..
  </pre> 

</div>
</details>


<details>
<summary>6_5 ์ ๋ง๋๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
์ ๋ง๋๊ธฐ์ ๋ ์ด์ ์ ๋ฐฐ์น๋ฅผ ๋ํ๋ด๋ ๊ดํธ ํํ์ด ์ฃผ์ด์ก์ ๋, 
์๋ ค์ง ์ ๋ง๋๊ธฐ ์กฐ๊ฐ์ ์ด ๊ฐ์๋ฅผ ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(s){
  let answer = 0;
  let stack = [];
  
  for ( let i = 0 ; i < s.length; i++){
    if (s[i] === '(') stack.push(s[i]); 
    else if (s[i] === ')'){
      stack.pop();
      if(s[i-1] === '(') answer += stack.length;
      else answer += 1;
    }
  }
  return answer;
}
let str = "()(((()())(())()))(())";
console.log(solution(str))
```

<br>

 <pre>
 ๐ฌ  ์ผ๋จ ๋ฌธ์ ๋ฅผ ๋ณด๊ณ  ์ง์ง ๋ตใ๋ฅด ๋ชจ๋ฅด๊ฒ ์ด์ ์ ์๋ ์๋ฃจ์์ ๋ณด๊ณ  ์งํ์ ํ์๋๋ฐ,
    ์ค๋ช์ ๋ณด๊ณ  ์ด๋ ๊ฒ ๊ฐ๋จํ ๊ฑฐ์๋ ์ถ์๋ค. stack ๋ฐฐ์ด ๋ณ์ ์ ์ธํด์ฃผ๊ณ , 
    ์ธ๋ฑ์ค๋ฅผ ์ฌ์ฉํด์ผํ๊ธฐ ๋๋ฌธ์ ํ๋ฒํ for๋ฌธ์ผ๋ก ์งํ์ ํ๊ณ , ์ฌ๋ ๊ดํธ๋ฉด stack์
    ๋ฃ์ด์ฃผ๊ณ , ๋ซ๋๊ดํธ๋ฉด ๋ฐฐ์ด์์ pop์ผ๋ก ์ง์์ฃผ๊ณ , ๋ง์ฝ ์ ์ธ๋ฑ์ค๊ฐ ์ฌ๋ ๊ดํธ๋ฉด answer์ 
    ๊ทธ ์คํ length๋ก ๊ตฌํด ๋ํด์ฃผ๊ณ , ์๋๋ฉด answer์ ๊ทธ๋ฅ 1์ ๋ํด์ค๋ค.
    ์ด๊ฑฐ๋ ์ง์  ์ค๋ช๋ค์ผ๋ฉด์ ํด์ผ ํท๊ฐ๋ฆฌ์ง์์๋ค. ใ  
  </pre> 

</div>
</details>

 <details>
<summary>6_6 ๊ณต์ฃผ ๊ตฌํ๊ธฐ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
1๋ฒ ์์๋ถํฐ ์ ๊ณ๋ฐฉํฅ์ผ๋ก ๋์๊ฐ๋ฉฐ 1๋ถํฐ ์์ํ์ฌ ๋ฒํธ๋ฅผ ์ธ์น๊ฒ ํ๋ค. 
ํ ์์๊ฐ K(ํน์ ์ซ์)๋ฅผ ์ธ์น๋ฉด ๊ทธ ์์๋ ๊ณต์ฃผ๋ฅผ ๊ตฌํ๋ฌ ๊ฐ๋๋ฐ์ ์ ์ธ๋๊ณ  ์ ๋ฐ์ผ๋ก 
๋์ค๊ฒ ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ๋ค์ ์์๋ถํฐ ๋ค์ 1๋ถํฐ ์์ํ์ฌ ๋ฒํธ๋ฅผ ์ธ์น๋ค.
๋ง์ง๋ง  ์์์ ๋ฒํธ๋ฅผ ๊ตฌํ๋ฉด ๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(n, k){
  let answer ; 
  let stack = [];
  let cnt = 1;
  for(let i = 1; i <= n ; i++)
    stack.push(i);
  while(stack.length !== 1)
  {
    for(let i = 0; i < stack.length; i++){
      if (cnt === k){
        stack.splice(i,1)
        i -= 1;
        cnt = 1;
      }
      else cnt++;
    }
  }
  answer = stack[0];
  return answer;
}
let prince = 8;
let num = 3;
console.log(solution(prince, num));
```

<br>


 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(n, k){
  let answer;
  let queue = Array.from({length:n}, (v,i)=>i+1);
  while(queue.length){
    for(let i = 1; i<k; i++) queue.push(queue.shift());
    queue.shift();
    if(queue.length === 1) answer = queue.shift();
  }
  return answer;
}
let princes = 8;
let num = 3;
console.log(solution(princes, num))
```

<br>

 <pre>
 ๐ฌ  ์ผ๋จ ๋ด๊ฐ ๊ตฌํํด๋ณธ ์ฝ๋๋ฅผ ์ค๋ชํด๋ณด์๋ฉด, stack์ ๋จผ์  push๋ฅผ 
    ํด์ n๋ฒ ์์๋ค์ ๋ฃ์ด์ฃผ๊ณ , ์คํ length๊ฐ ํ๋ ๋จ์๋๊น์ง
    ๋๊ฒ ํด๋์ ๋ค์์ k์ cnt๋ผ๋ ๋ณ์๊ฐ ๊ฐ์์ง๋ฉด i๋ฒ ์ธ๋ฑ์ค๋ฅผ splice๋ฅผ ํตํด์ ์ ๊ฑฐํ๊ณ  i์ -1์ ํ๊ณ , 
    cnt๋ฅผ 1๋ก ๋ค์ ์ด๊ธฐํ๋ฅผ ์์ผ๋๋๋ค. ๊ทธ์ ๊น์ง๋ ๊ทธ๋ฅ cnt๋ง 1์ฆ๊ฐ์ํค๊ณ , ๊ฒฐ๊ตญ
    ์คํ์ ํ๊ฐ๋ง ๋จ๊ฒ๋๋ฉด ํด๋น stack์ answer์ ๋ฃ์ด ๋ฐํํ์๋ค. 

    ์ ์๋์ ๋ฐฉ๋ฒ์ queue๋ผ๋ ๋ณ์๋ฅผ ์ ์ธ ํ Array.from์ผ๋ก n๋ฒ๊น์ง๋ก ์ด๋ค์ง ๋ฐฐ์ด์ ๋ง๋ค๊ณ , 
    while๋ฌธ์ ๋๋ ค์ ๊ทธ ์์ for๋ฌธ์ผ๋ก k๋ฒ๊น์ง shiftํ๊ณ  ํด๋น ์์๋ฅด ํธ์ํ์ฌ ๋ค๋ก 
    ๋ณด๋ด์ค๋๋ค. ๊ทธ๋ฆฌ๊ณ  ํ์ ํ๋๋ฐ์ ์๋จ์ผ๋ฉด answer์ ๋ฃ์ด์ฃผ๊ณ  ๋ฐํ์ ํด์ค๋๋ค. 
  </pre> 

</div>
</details>
 
 <details>
<summary>6_7 ๊ต์ก๊ณผ์  ์ค๊ณ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
  ํ์๊ณผ๋ชฉ๊ณผ ์๊ฐ๊ณผ๋ชฉ์ด ๋์ค๋๋ฐ ํ์ ๊ณผ๋ชฉ์ด ์์๋๋ก ์๊ฐ๊ณผ๋ชฉ์
  ์๋ค๋ฉด "YES" ์ถ๋ ฅ ์์๊ฐ ํ๋ฆฌ๊ฑฐ๋ ์๋ค๋ฉด "NO" ์ถ๋ ฅ
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(imp, classes){

  let answer = "YES"
  let queue = classes.split('');
  let cnt = Number.MIN_SAFE_INTEGER;

  for( let d of imp){
    for ( let i = 0; i < queue.length; i++){
      if ( queue[i] === d ){
         if(i < cnt) return "No"
        cnt = i;
      }
    }
  }
    return answer;
}
let imp = "CBA";
let classes = "CDGETYA";
console.log(solution(imp, classes));
```

<br>


 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(need, plan){
  let answer = "YES";
  let queue  = need.split('');

  for(let x of plan){
    if(queue.includes(x)){
      if(x!==queue.shift())
        return "NO";
    }
  }
  if(queue.length>0) return "No";
  return answer;
}
let a = "CBA";
let b = "CBDGEA";
console.log(solution(a,b));
```

<br>

 <pre>
 ๐ฌ  ๋ด๊ฐ ๊ตฌํํ ์ฝ๋๋ก๋ ์๊ฐ๊ณผ๋ชฉ๋ค์ split์ ํตํด ๋ฐฐ์ด๋ก ๋ง๋ค๊ณ ,
    for of ํ์๊ณผ๋ชฉ์ ํ๋์ฉ ๊ฐ์ ธ์ค๋ฉด์ ์๊น ๋ง๋ค์ด๋์ ์๊ฐ๊ณผ๋ชฉ ๋ฐฐ์ด์ ํ๋์ฉ 
    for๋ฌธ์ผ๋ก ํ์ผ๋ฉด์ ๊ฐ์ผ๋ฉด ํด๋น ์ธ๋ฑ์ค๋ฅผ ๊ธฐ๋กํด์
    cnt๋ผ๋ ๋ณ์์ ๋ฃ์ด์ฃผ๊ณ , ๋งค๋ฒ i์ธ๋ฑ์ค์ ๋ค์ ํ์๊ณผ๋ชฉ์ด ๊ฒน์น ๋
    ๊ธฐ๋กํ๋ ์ธ๋ฑ์ค๋ณด๋ค ์์ผ๋ฉด ์์๊ฐ ํ๋ฆฐ๊ฑฐ๊ณ  ๋๋จธ์ง ์ํฉ์์๋ ๋ค 
    "NO"๋ฅผ ๋ฐํํ๊ฒ ํ์๊ณ , ์๋ฌด ์ด์์์ด for๋ฌธ์ ๋์ค๋ฉด 
    ๊ธฐ์กด์ ์ค์ ํด๋์๋ "YES"๊ฐ ๋์ค๋ ๊ฒ์ด๋ค.

    ์ ์๋๋ ๋๊ฐ์ด queue์ split์ ํตํ ๋ฐฐ์ด์ ๋ง๋ค์์ง๋ง
    ์๊ฐ๊ณผ๋ชฉ์ด ์๋ ํ์๊ณผ๋ชฉ์ ๋ฃ์๊ณ , ์๊ฐ๊ณผ๋ชฉ์ for of๋ก 
    ๋๋ฆฌ๋ฉด์ ์ฒซ if๋ฌธ์ queue.includes๋ก ๊ฐ์ง๊ณ  ์๋์ง
    ๊ทธ๋ฆฌ๊ณ  queue.shift์ for of์ x๊ฐ ๊ฐ์ง์๋ค๋ฉด "NO"
    ๋ฅผ ๋ฐํํ๊ณ  ๋ค ๋๋๊ณ  ๋ ํ queue์ if ๋ฌธ์ผ๋ก length๊ฐ
    0๋ณด๋ค ํฌ๋ฉด ๋ค ์๋๊ฒ ์๋๊ฑฐ๋๊น ๋ "NO"๋ฅผ ๋ฐํํ๊ฒ ํ์๊ณ ,
    ๋ชจ๋  ์กฐ๊ฑด์ด ์ถฉ์กฑ๋๋ฉด ๊ธฐ์กด์ "YES" ๋ฐํ๋๊ฒ ํ์๋ค.
  </pre> 

</div>
</details>

 
   <br>
 
 ## ์ฑํฐ7 - ์ ๋ ฌ๊ณผ ๊ทธ๋ฆฌ๋, ๊ฒฐ์ ์๊ณ ๋ฆฌ์ฆ
 
  <br>
 
 <details>
<summary>7_1 ์ ํ ์ ๋ ฌ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
N๊ฐ์ด ์ซ์๊ฐ ์๋ ฅ๋๋ฉด ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ์ฌ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. 
์ ๋ ฌํ๋ ๋ฐฉ๋ฒ์ ์ ํ์ ๋ ฌ์๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr) {
  let answer = arr.sort((a,b) => (a-b));
  return answer;
}
let arr = [13, 5, 11, 7,23,15];
console.log(solution(arr))
```

<br>


 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(arr){
  let answer = arr;
    for ( let i = 0; i < arr.length-1; i++){
      let idx = i;
      for ( let j = i+1 ; j < arr.length; j++){
        if(arr[j] < arr[idx]) idx=j;
      }
      [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
  return answer;
}
let arr = [13,5,11,7,23,15]
console.log(solution(arr))
```

<br>

 <pre>
 ๐ฌ  ๋ด๊ฐ ๊ตฌํํ ์ ํ ์ ๋ ฌ์ ๊ทธ ์ ๋ ฌ ๋ฉ์ปค๋์ฆ์ ์์ฐ๊ณ , sort() ๋ฉ์๋๋ก
    ๊ฐํธํ๊ฒ ๋ง๋ค์์ง๋ง ๋ฌธ์ ์๋๋ ๊ทธ๊ฒ ์๋์๋๊ฑฐ ๊ฐ๋ค.. 

    ์ ์๋์ด ๊ตฌํํ ์ ํ ์ ๋ ฌ์ ์ผ๋จ answer์ shallow copy๋ฅผ ํ๊ณ , 
    ์ผ๋จ ์ฒ์๋ถํฐ ๋๊น์ง ์ค์บ์ ํด์ผํ๋๊น for๋ฌธ์ ํ๋ ๋ง๋ค์ด์ฃผ๊ณ  ๊ทธ ์์
    ์ด์ค for๋ฌธ์ ๋ง๋ค์ด ์ด๊ธฐ๊ฐ์ ์ฒ์ for๋ฌธ์ i์ +1์ ํ์ฌ ๋ค์ ์ธ๋ฑ์ค์
    ๋น๊ตํ๊ฒ๋ ํ๋ค. for๋ฌธ๋ค ์ฌ์ด์ idx = i ๋ผ๋ ์์์ ์ผ๋ก ๋ณ์๋ฅผ ๋ง๋๋๋ฐ,
    ๊ทธ๋ฆฌ๊ณ  ์ฌ๊ธฐ์ if๋ฌธ์ผ๋ก j์ ์์์ ๋ง๋  idx๋ก ๋ ์ธ๋ฑ์ค์ ์์นํ ๊ฐ์ ๋น๊ตํด์
    j์ ๊ฐ์ด ๋ ํฌ๋ค๋ฉด idx์ j๊ฐ์ ๊ณ์ ๋ฐ๊ฟ ๋ฃ์ด์ฃผ๋ฉด ์ด์ค for๋ฌธ์ด ๋๋๋ฉด 
    ๊ธฐ์กด i์ idx์ ์ ์ฅ๋์๋ index์ ์์นํ ๋ ๊ฐ์ ๊ตํํด์ฃผ๊ธฐ ์ํด 
    [arr[i], arr[idx]] = [arr[idx], arr[i]] ์ด๋ฐ ๋ฐฉ์์ ์ฌ์ฉํ๋ค.
    ์ต์  ์๋ฐ์คํฌ๋ฆฝํธ์๋ ์ ์ฉ์ด ๋์๋๊ฑฐ๋ผ๊ณ  ํ๋ค. 
  </pre> 

</div>
</details>

 <details>
<summary>7_2 ๋ฒ๋ธ ์ ๋ ฌ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
N๊ฐ์ด ์ซ์๊ฐ ์๋ ฅ๋๋ฉด ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ์ฌ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. ์ ๋ ฌํ๋ ๋ฐฉ๋ฒ์ ๋ฒ๋ธ์ ๋ ฌ์๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr){
  let answer = arr;

  for (let i=0; i < arr.length-1; i++){
    for(let j=0; j < arr.length-i-1; j++){
      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
  return answer;
}
arr = [35,23,11,4,36,1];
console.log(solution(arr))
```

<br>

 <pre>
 ๐ฌ  ๋๋ ์ด ๋ฒ๋ธ ์ ๋ ฌ์ด๋๊ฒ ๋ญ์ง ๋ชฐ๋๋ค. ๊ทธ๋์ ํ๋ฒ ์ค๋ช์ ๋ค์ด์ผ ๊ตฌํ์ ํ  ์ ์
    ์๋ค. ๋ฒ๋ธ ์ ๋ ฌ์ด๋๊ฒ ์ธ์ ํ ๋ ์ธ๋ฑ์ค์ ์์นํ ๊ฐ์ ๋น๊ตํด๊ฐ๋ฉด์ for๋ฌธ์ ์งํํจ์ 
    ๋ฐ๋ผ 2์ค for๋ฌธ์์ ๋ฐฐ์ด์ ๋์ ๊ฐ๋ค์ด ๋น๊ต๊ฐ ํ์ํ๋ ์ ์ธ์์ผ์ฃผ๋ฉด์ ์ ๋ ฌํด์ฃผ๋
    ๋ฐฉ์์ด๋ค.  ๊ทธ๋์ ์ด์ค for์ ๋ณด๋ฉด length-i-1์ด ์๋๋ฐ, ์์ for๋ฌธ์ด ์ง๋จ์
    ๋ฐ๋ผ ๋งจ๋ค์ ๊ฐ์ ์ด์ฐจํผ ์ ์ผ ํฌ๋๊ฐ ์ ์ธ์ํค๋ฉด์ ์ต๋ํ ํ์ผ์ ์ค์ด๋ ๊ฒ์ด๋ค.
  </pre> 

</div>
</details>

 <details>
<summary>7_3 Special Sort(๊ตฌ๊ธ ์ธํฐ๋ทฐ)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
N๊ฐ์ ์ ์๊ฐ ์๋ ฅ๋๋ฉด ๋น์ ์ ์๋ ฅ๋ ๊ฐ์ ์ ๋ ฌํด์ผ ํ๋ค.
์์ ์ ์๋ ์์ชฝ์ ์์์ ์๋ ๋ท์ชฝ์ ์์ด์ผ ํ๋ค. 
๋ํ ์์์ ์์ ์์์ ์์ ์์์๋ ๋ณํจ์ด ์์ด์ผ ํ๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr){
  let answer = [];
  for ( let t of arr) if(t<0) answer.push(t)
  for ( let x of arr)if(x>0) answer.push(x)
  return answer;
}
let arr = [-8,4,7,-4,-9,2,3];
console.log(solution(arr))
```

<br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(arr){
  let answer = arr;
  for (let i=0; i < arr.length-1; i++){
    for(let j=0; j < arr.length-i-1; j++){
      if (arr[j] > 0 && arr[j+1] < 0) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
  return answer;
}
let arr = [1,2,3,-3,-2,5,6,-6];
console.log(solution(arr))
```
<br>

 <pre>
 ๐ฌ  ์ผ๋จ ๋ด๊ฐ ๊ตฌํํ ์ฝ๋๋ ์ ๋ง ๋จ์ํ for of๋ฅผ ๋๊ฐ ๋๋ฆฌ๋๋ฐ ์ฒซ๋ฒ์งธ๊บผ์
    0๋ณด๋ค ์์ผ๋ฉด ๋จผ์  answer๋ก pushํด์, ์์ ๋ฃ๊ณ  ๋ค๋ฅธ ๊ฑด 0๋ณด๋ค ํฌ๋ฉด
    pushํด์ ์์๋ฅผ ์์๋๋ก ๋ฃ์ด๋ฒ๋ ธ์ง๋ง,, ๋ฌธ์ ๋ ๊ทธ ์๋๊ฐ ์๋์๊ธฐ์ 
    ์ ์๋์ ํ์ด๋ฅผ ๋ดค์ด์ผ ํ๋ค. 

    ๋ณด๊ณ  ๋๋ ์ ๋ง ๋จ์ํ๋ค. ์์ ์ฌ์ฉํ ๋ฒ๋ธ ์ ๋ ฌ์ ์ฌ์ฉํ๋๊ฑด๋ฐ, ์ผ๋จ ๊ฐ์
    ์์๋ ์์๋ผ๋ฆฌ๋ ์์๋ฅผ ๋ฐ๊พธ์ง ์๊ธฐ์ ๋ฒ๋ธ ์ ๋ ฌ์ ์ด์คํฌ๋ฌธ์ if ์กฐ๊ฑด๋ฌธ์
    ๋ฃ๋๋ฐ, ์ผ์ชฝ index๊ฐ 0๋ณด๋ค ํฌ๊ณ (์์) ์ค๋ฅธ์ชฝ index๊ฐ 0๋ณด๋ค ์์ผ๋ฉด(์์)
    ๋์ด ๊ฐ์ ๊ตํํด์ฃผ๋ ์์ผ๋ก ๊ฐ๋ฉด ๊ฒฐ๊ตญ์๋ ์ฐ๋ฆฌ๊ฐ ๋ฐ๋ผ๋ ๋ต์ด ๋์จ๋ค. 
  </pre> 

</div>
</details>

  <details>
<summary>7_4 ์ฝ์ ์ ๋ ฌ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
N๊ฐ์ด ์ซ์๊ฐ ์๋ ฅ๋๋ฉด ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ์ฌ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. ์ ๋ ฌํ๋ ๋ฐฉ๋ฒ์ ์ฝ์์ ๋ ฌ์๋๋ค
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr) {
  let answer = [];
  for( let i = 0 ; i < arr.length; i++){
    for (let j = 0; j < arr.length-i-1; j++){
      if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
    answer.unshift(arr[arr.length-i-1]);
  }
  return answer;
}
let arr = [11, 7, 5, 6,10,9];
console.log(solution(arr));
```

<br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(arr) {
  let answer = arr;
  for( let i = 0 ; i < arr.length; i++){
    let temp = arr[i], j;
    for(j=i -1; j >= 0; j--){
      if(arr[j]>temp) arr[j+1] = arr[j]
      else break;
    }
    arr[j+1]=temp;
  }
  return answer;
}
let arr = [11, 7, 5, 6,10,9];
console.log(solution(arr));

```
<br>

 <pre>
 ๐ฌ  ๋๋ ์ฝ์์ ๋ ฌ์ด๋ผ๊ธธ๋, ๋๋ฆ๋๋ก ์ฝ์ํ๋ค๊ณ  ๋ฒ๋ธ์ ๋ ฌ ์ฌ์ฉํด์ unshift๋ก ๋ฐฐ์ด
    ๋งจ ๋ค ๊ฐ๋ถํฐ ํ๋์ฉ ๋ฃ์ด์ ์์ฑํ๋๋ฐ, ์ญ์ ๊ทธ ์๋๊ฐ ๊ทธ๊ฒ ์๋๋๊ตฐ์. 

    ์ ์๋ ๋ฐฉ์์ ์ผ๋จ ๋ฒ๋ธ์ ๋ ฌ๊ณผ ๋น์ทํด๋ณด์์ง๋ง? ์์๋ค์ ์ค์บํ๋๊ฑธ ๋ฐ๋๋ฐฉํฅ๋ถํฐ
    ํ๊ฒ๋ ํ๋ค๊ณ  ํด์ผํ ๊น, ๊ทธ๋ฆฌ๊ณ  temp๋ผ๋ ๋ณ์์ ์ฒซ๋ฒ์งธ for๋ฌธ์ i์ธ๋ฑ์ค ๊ฐ์
    ๋ฃ์ด์ฃผ๊ณ , i์ธ๋ฑ์ค๋ฅผ ๊ธฐ์ค์ผ๋ก ์ผ์ชฝ์ผ๋ก ์งํํด์ฃผ๋ฉด์, ์กฐ๊ฑด์ ๋ฐ๋ผ ๊ฐ์ ๋ฐ๊ฟ์ฃผ๊ณ  
    ๋ง์ง๋ง์ j+1์ temp ๋ณ์๊ฐ์ ๋ฃ์ด์ฃผ๋ฉฐ ๋ง๋ฌด๋ฆฌ..
  </pre> 

</div>
</details>

<details>
<summary>7_5 Least Recently Used</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
์บ์์ ํฌ๊ธฐ๊ฐ ์ฃผ์ด์ง๊ณ , ์บ์๊ฐ ๋น์ด์๋ ์ํ์์ N๊ฐ์ ์์์ CPU๊ฐ ์ฐจ๋ก๋ก
์ฒ๋ฆฌํ๋ค๋ฉด N๊ฐ์ ์์์ ์ฒ๋ฆฌํ ํ ์บ์๋ฉ๋ชจ๋ฆฌ์ ์ํ๋ฅผ ๊ฐ์ฅ ์ต๊ทผ ์ฌ์ฉ๋
์์๋ถํฐ ์ฐจ๋ก๋๋ก ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr){
  let answer = [0,0,0,0,0];

  for(let x of arr){
    if(answer.indexOf(x) === -1){
      for( let i = answer.length-1; i > 0 ; i--){
        answer[i] = answer[i-1];
      }
      answer[0] = x;
    }else {
      let idx = answer.indexOf(x);
      let temp = answer[idx];
      for ( let j = idx; j > 0 ; j--)
      {
        answer[j] = answer[j-1];
      } 
      answer[0] = temp;
    }  
  }
  return answer;
}
let arr = [1,2,3,2,6,2,3,5,7]
console.log(solution(arr))
```

<br>

 ### โ๏ธ Alternative Solution
 
  ```javascript
function solution(size, arr){
  let answer = Array.from({length:size}, () =>0);
  arr.forEach(x => {
      let pos = -1;
      for(let i=0; i < size; i++) if(x===answer[i]) pos=i;
      if(pos===-1){
        for(let i=size-1; i>=1; i--){
          answer[i] = answer[i-1];
        }
      }
      else{
        for(let i=pos; i>=1; i--){
          answer[i] = answer[i-1];
        }
      }
      answer[0] = x;
  });

  return answer;
}
let arr = [1,2,3,2,6,2,3,5,7];
console.log(solution(5, arr));
```
<br>

 ### โ๏ธ Alternative Solution2
 
  ```javascript
function solution(size, arr){
  let answer = [];
  arr.forEach(x => {
      let pos = -1;
      for(let i=0; i < size; i++) if(x===answer[i]) pos=i;
      if(pos===-1){
        answer.unshift(x);
        if(answer.length>size) answer.pop();
      }
      else{
        answer.splice(pos, 1);
        answer.unshift(x);
      }
  });
  return answer;
}
let arr = [1,2,3,2,6,2,3,5,7];
console.log(solution(5, arr));
```

<br>

 <pre>
 ๐ฌ  ๋ด๊ฐ ์๊ฐํด๋ธ ๋ฐฉ๋ฒ์ ์ผ๋จ answer๋ผ๋ ๋ฐฐ์ด์ ๋ง๋ค์ด 0 5๊ฐ๋ก
 ์ด๊ธฐํ๋ฅผ ํด๋๊ณ , for of ๋ก ์๋ ฅ ๋ฐฐ์ด์ ํ๋์ฉ ๊ฐ์ ธ์ answer๋ผ๋ 
 ๋ฐฐ์ด์ ํด๋น x๊ฐ์ด ์์ผ๋ฉด for๋ฌธ์ ๋๋ ค answer[i] = answer[i-1];
 ์ด๋ฐ์์ผ๋ก ๊ฐ๋ค์ ์ค๋ฅธ์ชฝ์ผ๋ก shiftํด์ ๊ฐ์ ์๋ฐ์ดํธํ์๊ณ , ๋๋๋ฉด [0]
 ๋ฒ ์ธ๋ฑ์ค์ x๊ฐ์ ๋ฃ๊ณ  ๋ง๋ฌด๋ฆฌํ๋ฉด์, ๊ทธ x๊ฐ์ด answer ๋ฐฐ์ด์์ ์๋ ์์๋ผ๋ฉด 
 indexOf(x)๋ก ๋์จ ์ธ๋ฑ์ค๊ฐ๊น์ง ๊ฐ์ shiftํ๊ณ  ๋๊ฐ์ด [0]์ ๊ทธ ์์๋ฅผ ๋ฃ์ด์ฃผ๊ฒ๋ ๊ตฌํํ์๋ค. 

 ์ ์๋๋ ์ ์ฒด์ ์ธ ์ปจ์์ ๋น์ทํ์จ์ง๋ง, ์ผ๋จ answer๋ฅผ ๋ฐฐ์ด๋ก ์ ์ธํ ๋
 Array.from์ด๋ผ๋ ๋ฉ์๋๋ก length๋ฅผ ์ ํ๊ณ  0์ ์ฑ์ ๊ณ , pos๋ผ๋ ๋ณ์์ -1๋ฅผ ์ด๊ธฐํํ๊ณ ,
 answer ๋ฐฐ์ด์์ forEach๋ก ๋๋ ค์ ๋์จ x๊ฐ์ด ์๋์ง ํ์ธ ํ ์๋ค๋ฉด, ๊ทธ ํด๋ฅ ์ธ๋ฑ์ค๊ฐ์ pos์ ๋ฃ๊ณ  
 ์ธ๋ฑ์ค๊ฐ ์ฒ์ ๊ฐ -1๋ผ๋ฉด ๋ฐฐ์ด์์ x๊ฐ ์๋๊ฑฐ๋ ๋ชจ๋  ๊ฐ๋ค์ ์ค๋ฅธ์ชฝ์ผ๋ก shift์ํค๊ณ , ์๋ค๋ฉด ํด๋น ์ธ๋ฑ์ค๊น์ง 
 ์ค๋ฅธ์ชฝ์ผ๋ก shift์ํจ๋ค. ๊ทธ๋ฆฌ๊ณ  ๋ค ๋๋๊ณ  ๋์๋ ์ธ๋ฑ์ค [0]์๋ฆฌ์ x๊ฐ์ ๋ฃ๋๋ค. 

 ๊ทธ๋ฆฌ๊ณ  ์ ์๋์ ๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก ์๋ฃจ์์ ๋ณด์ฌ์ฃผ์จ๋๋ฐ, ์๋ forEach๋ก
 ํ๋ ๊ฑด ๋๊ฐ์์ผ๋, ๊ฐ๋ค์ shiftํ์ง์๊ณ , unshift(x)๋ฅผ ํตํด์ ๋ฐฐ์ด 
 ์ฒซ๋ฒ์งธ ์ธ๋ฑ์ค์ ๊ฐ์ ๋ฃ์ด์ฃผ๊ณ  ์ฒ์์ ์ ํด์ค length๊ฐ ๋์ผ๋ฉด pop()์ผ๋ก 
 ๋ฐฐ์ด ๋์ ๋ ๋ ค์ฃผ๋ ์์ผ๋ก ํ์จ๋ค. ์ข ๋ ๋จ์ํ ๋ฐฉ๋ฒ์ด์๋ฌ๊น?
  </pre> 

</div>
</details>
 
 <details>
<summary>7_6 ์ฅ๋๊พธ๋ฌ๊ธฐ ํ์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
์ ์๋์ ๋ฐ ํ์๋ค์๊ฒ ๋ฐ ๋ฒํธ๋ฅผ ์ ํด ์ฃผ๊ธฐ ์ํด ์ด๋์ฅ์ ๋ฐ ํ์๋ค์ 
ํค๊ฐ ๊ฐ์ฅ ์์ ํ ์๋ถํฐ ์ผ๋ ฌ๋ก ํค์์ผ๋ก ์ธ์ ์ต๋๋ค. ์ ์ผ ์์ ๊ฐ์ฅ 
์์ ํ์๋ถํฐ ๋ฐ ๋ฒํธ๋ฅผ 1๋ฒ๋ถํฐ N๋ฒ๊น ์ง ๋ถ์ฌํฉ๋๋ค. ํ์๋ ์ง๊ฟ๋ณด๋ค
ํค๊ฐ ํฝ๋๋ค. ๊ทธ๋ฐ๋ฐ ํ์๊ฐ ์ ๋ฒํธ๋ฅผ ๋ฐ๊ณ  ์ถ์ด ์ง๊ฟ๊ณผ ์๋ฆฌ๋ฅผ ๋ฐ๊ฟจ์ต๋๋ค. 
์ ์๋์ ์ด ์ฌ์ค์ ๋ชจ๋ฅด๊ณ  ํ์๋ค์๊ฒ ์์๋ ์์๋๋ก ๋ฒํธ๋ฅผ ๋ถ์ฌํ์ต๋๋ค.
ํ์์ ์ง๊ฟ์ด ์๋ฆฌ๋ฅผ ๋ฐ๊พผ ๋ฐ ํ์๋ค์ ์ผ๋ ฌ๋ก ์์๋ ํค ์ ๋ณด๊ฐ ์ฃผ์ด์ง ๋
ํ์๊ฐ ๋ฐ์ ๋ฒ ํธ์ ํ์ ์ง๊ฟ์ด ๋ฐ์ ๋ฒํธ๋ฅผ ์ฐจ๋ก๋ก ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ 
์์ฑํ์ธ์.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr){
  let answer= [];
  let sortArr = arr.slice();
  sortArr.sort((a,b) => (a-b));
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== sortArr[i]) answer.push(i+1);
  }
  return answer;
}
let arr = [120,125, 152, 130, 135, 135, 143, 127, 160]
console.log(solution(arr));
```

<br>

 <pre>
 ๐ฌ  ๋ ์๊ฐ์ ํด๋ณด๋ฉด ๋ฌด์ํ๊ฒ ์ฝ๋๋ฅผ ์ง ๋ณผ์ ์์๊ฑฐ๊ฐ์์ง๋ง, ๊นจ๋ํ๊ฒ
 ํ๋ฒ์ ํ๊ณ  ์ถ์ด์, ์ผ๋จ ์ ์๋์ ์๋ฃจ์์ ๋จผ์  ๋ณด์๋ค. ์ผ๋จ ์ ์๋์
 ๋ฐ๋ ์๋ฆฌ์ ์ธ๋ฑ์ค๋ฅผ ์์๋ด์ผํ๊ธฐ๋๋ฌธ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ ๋ฐฐ์ด ๋จผ์  
 ๋ง๋ค์๋๋ฐ, sortArr = arr.slice(); ์ด๋ฐ์์ผ๋ก ์๋ ฅ๋ฐ์ ๋ฐฐ์ด์
 slice ์ณ์ ์๋ก์ด ๋ฐฐ์ด๋ก ๋ง๋ค์ด์ฃผ์๋ค. ๊ทธ๋ฆฌ๊ณ  ์ธ๋ฑ์ค
 ์๋ฆฌ๋ฅผ ๋ฐ๊ฟง๋ค๋ ์๋ ฅ ๋ฐฐ์ด์ ๋น๊ตํด์ ์ธ๋ฑ์ค๋ฅผ ๊ฐ์ ธ์ค๊ณ  ์ถ๋ ฅํ๋ค. 
  </pre> 

</div>
</details>

 <details>
<summary>7_7 ์ขํ ์ ๋ ฌ</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
N๊ฐ์ ํ๋ฉด์์ ์ขํ(x, y)๊ฐ ์ฃผ์ด์ง๋ฉด ๋ชจ๋  ์ขํ๋ฅผ ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ๋
ํ๋ก๊ทธ๋จ์ ์์ฑํ ์ธ์. ์ ๋ ฌ๊ธฐ์ค์ ๋จผ์  x๊ฐ์ ์ํด์ ์ ๋ ฌํ๊ณ , x๊ฐ์ด
๊ฐ์ ๊ฒฝ์ฐ y๊ฐ์ ์ํด ์ ๋ ฌํฉ๋๋ค.
 </pre>

<br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr){
  let answer =  arr;
  arr.sort((a, b) => {
    if(a[0] === b[0]) return a[1]-b[1];
    else return a[0] - b[0];
  });
  return answer;
}
let arr = [[2,7], [1,3], [1,2], [2,5], [3,6]]
console.log(solution(arr))
```

<br>

 <pre>
 ๐ฌ  ์ฒ์ ์๋ ฅ๋ฐ๋ arr๋ฅผ answer๋ก shallow copy(์์๋ณต์ฌ)๋ฅผ ํด์ฃผ๊ณ ,
 sort()๋ก ์ ๋ ฌ์ ํด์ฃผ๋ฉด๋๋๋ฐ, ์ฒซ๋ฒ์งธ ์ธ์๊ฐ ์๋ก ๊ฐ๋ค๋ฉด ๋๋ฒ์งธ ์ธ์๋ก
 ๋น๊ตํด์ ์ ๋ ฌ์ ํด์ฃผ๋ฉด ๋๋ค. 
  </pre> 

</div>
</details>

<details>
<summary>7_8 ํฌ์์ค ๋ฐฐ์ </summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
ํ ๊ฐ์ ํ์์ค์ด ์๋๋ฐ ์ด๋ฅผ ์ฌ์ฉํ๊ณ ์ ํ๋ n๊ฐ์ ํ์๋ค์ ๋ํ์ฌ ํ์์ค ์ฌ์ฉํ๋ฅผ ๋ง๋ค๋ ค๊ณ  ํ๋ค. 
๊ฐ ํ์์ ๋ํด ์์์๊ฐ๊ณผ ๋๋๋ ์๊ฐ์ด ์ฃผ์ด์ ธ ์๊ณ , ๊ฐ ํ์๊ฐ ๊ฒน์น์ง ์๊ฒ ํ๋ฉด์ ํ์์ค์ ์ฌ์ฉํ  
์ ์๋ ์ต๋์์ ํ์๋ฅผ ์ฐพ์๋ผ. ๋จ, ํ์๋ ํ๋ฒ ์์ํ๋ฉด ์ค๊ฐ์ ์ค๋จ๋  ์ ์์ผ๋ฉฐ ํ ํ์๊ฐ ๋๋๋ 
๊ฒ๊ณผ ๋์์ ๋ค์ ํ์๊ฐ ์์๋  ์ ์๋ค.
 </pre>
<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช
<pre>
  ์ฒซ์งธ ์ค์ ํ์์ ์ n(1<=n<=100,000)์ด ์ฃผ์ด์ง๋ค. ๋์งธ ์ค๋ถํฐ n+1 ์ค๊น์ง ๊ฐ ํ์์ ์ 
  ๋ณด๊ฐ ์ฃผ์ด์ง๋๋ฐ ์ด๊ฒ์ ๊ณต๋ฐฑ์ ์ฌ์ด์ ๋๊ณ  ํ์์ ์์์๊ฐ๊ณผ ๋๋๋ ์๊ฐ์ด ์ฃผ์ด์ง๋ค.
  ํ์์ ์์์๊ฐ๊ณผ ๋๋๋ ์๊ฐ์ ์กฐ๊ฑด์ (์์์๊ฐ <= ๋๋๋ ์๊ฐ)์๋๋ค.
<hr/>
  ์ฒซ์งธ ์ค์ ์ต๋ ์ฌ์ฉํ  ์ ์๋ ํ์ ์๋ฅผ ์ถ๋ ฅํ์ฌ๋ผ. 
</pre>

<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 
<pre>
 5      |
1 4     |
2 3     |      3
3 5     |
4 6     |
5 7     |
</pre>


 <br>
 
 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr){
  let answer = 0;
  arr.sort((a,b)=> {
    if(a[1]===b[1]) return a[0]-[b];
    else return a[1]-b[1];
  })
  let et = 0;
  for ( let x of arr ){
    if(x[0] >= et){
      answer++;
      et=x[1];
    }
  }
  return answer;
}
let arr = [[1,4], [2,3], [3,5], [4,6], [5,7]]
console.log(solution(arr))
```

<br>

 <pre>
 ๐ฌ  
  1. ํ์์ค ํด์ค์๊ฐ์ด ๊ฐ์ผ๋ฉด ์์ค์๊ฐ์ ๊ธฐ์ค์ผ๋ก arr๋ฅผ ์ฌ์ ๋ ฌํ์ฌ ๋ฐํํด์ค๋ค.
  2. et๋ผ๋ ๋ณ์๋ฅผ 0์ผ๋ก ์ด๊ธฐํ๋ฅผ ํด์ค๋ค.
  3. for of๋ก ํ๋์ฉ ๊บผ๋ด๋ณด๋ฉด์ ์ฒซ ์์ค์์ ์๊ฐ๊ณผ et๋ฅผ ๋น๊ตํ๊ณ  ์กฐ๊ฑด์ ๋ง์ผ๋ฉด answer์ ++๋ฅผ ํด์ฃผ๋ฉฐ ์นด์ดํธ๋ฅผ ํ๊ณ , 
      ํด๋น ์กฐ๊ฑด์ ๋ง์กฑ์ํจ ํ์์ค ์ฌ์ฉ์์ ํด์ค์๊ฐ์ et๋ณ์์ ๋ค์ ๋ฃ์ด์ค๋ค. 
  4. ๋ค์ ์ฌ์ฉ์์ ์์ฅ์๊ฐ์ด ํ์ฌ ์ฌ์ฉ์ค์ธ ์ฌ์ฉ์ ํด์ค์๊ฐ๋ณด๋ค ๋ฆ๊ฑฐ๋ ๊ฐ์ผ๋ฉด ๊ณ์ answer++ ํด์ ์ฐ์ ์ฌ์ฉ๊ฐ๋ฅํ ํ์์ค ๊ฐ 
      ๋ฐ et๊ฐ์ ๊ณ์ ์๋ฐ์ดํธํด์ค๋ค.
  </pre> 

</div>
</details>

<details>
<summary>7_9 ๊ฒฐํผ์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
ํ์๋ ๋ค์ ๋ฌ์ ๊ฒฐํผ์ ํฉ๋๋ค. ํ์๋ ๊ฒฐํผ์ ํผ๋ก์ฐ์ ์ฅ์๋ฅผ ๋น๋ ค 3์ผ๊ฐ ์ฌ์ง ์๊ณ  ํ๋ ค๊ณ  ํฉ๋๋ค.
ํผ๋ก์ฐ์ ์ฐธ์ํ๋ ์น๊ตฌ๋ค N๋ช์ ์ฐธ์ํ๋ ์๊ฐ์ ๋ณด๋ฅผ ํ์๋ ์น๊ตฌ๋ค์๊ฒ ๋ฏธ๋ฆฌ ์๊ตฌํ์ต๋๋ค.
๊ฐ ์น๊ตฌ๋ค์ ์์ ์ด ๋ช ์์ ๋์ฐฉํด์ ๋ช ์์ ๋ ๋  ๊ฒ์ธ์ง ํ์์๊ฒ ์๋ ค์ฃผ์์ต๋๋ค.
ํ์๋ ์ด ์ ๋ณด๋ฅผ ๋ฐํ์ผ๋ก ํผ๋ก์ฐ ์ฅ์์ ๋์์ ์กด์ฌํ๋ ์ต๋ ์ธ์์๋ฅผ ๊ตฌํ์ฌ ๊ทธ ์ธ์์ ์์ฉํ  ์ ์๋ ์ฅ์๋ฅผ ๋น๋ฆฌ๋ ค๊ณ  ํฉ๋๋ค. 
์ฌ๋ฌ๋ถ์ด ํ์๋ฅผ ๋์์ฃผ์ธ์. ๋ง์ฝ ํ ์น๊ตฌ๊ฐ ์ค๋ ์๊ฐ 13, ๊ฐ๋์๊ฐ 15๋ผ๋ฉด ์ด ์น๊ตฌ๋ 13์ ์ ๊ฐ์ ํผ๋ก์ฐ ์ฅ์ ์กด์ฌํ๋ ๊ฒ์ด๊ณ  
15์ ์ ๊ฐ์๋ ์กด์ฌํ์ง ์๋๋ค๊ณ  ๊ฐ์ ํฉ๋๋ค.
 </pre>
<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช
<pre>
  ์ฒซ์งธ ์ค์ ํผ๋ก์ฐ์ ์ฐธ์ํ  ์ธ์์ N(5<=N<=100,000)์ด ์ฃผ์ด์ง๋๋ค.
  ๋ ๋ฒ์งธ ์ค๋ถํฐ N์ค์ ๊ฑธ์ณ ๊ฐ ์ธ์์ ์ค๋ ์๊ฐ๊ณผ ๊ฐ๋ ์๊ฐ์ด ์ฃผ์ด์ง๋๋ค.
  ์๊ฐ์ ์ฒซ๋  0์๋ฅผ 0์ผ๋ก ํด์ ๋ง์ง๋ง๋  ๋ฐค 12์๋ฅผ 72๋ก ํ๋ ํ์๋ผ์ธ์ผ๋ก 
  ์ค๋ ์๊ฐ๊ณผ ๊ฐ๋ ์๊ฐ์ด ์์ด ์๋ ์ ์๋ก ํํ๋ฉ๋๋ค.
<hr/>
  ์ฒซ์งธ ์ค์ ํผ๋ก์ฐ์ฅ์ ๋์์ ์กด์ฌํ๋ ์ต๋ ์ธ์์ ์ถ๋ ฅํ์ธ์.
</pre>

<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 
<pre>
5     |
14 18 |
12 15 |   2
15 20 |  
20 30 |
5  14 |     
</pre>


 <br>

 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let t_Line = [];
  for (let x of arr) {
    t_Line.push([x[0], "s"]);
    t_Line.push([x[1], "e"]);
  }
  t_Line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of t_Line) {
    if (x[1] === "s") cnt++;
    else if (x[1] === "e") {
      answer = Math.max(answer, cnt);
      cnt--;
    }
  }
  return answer;
}
let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
```

<br>

 <pre>
 ๐ฌ  ๋ญ๋์ ๊ฒฐํผ์์ 72์๊ฐ ํํ์์ผ๋ก ๋ธ๋์ง ๋ชจ๋ฅด๊ฒ ์ง๋ง ์ผ๋จ ๊ทธ๋ ๋ค.
 1. ํญ์ ๊ทธ๋ ๋ฏ์ด answer ๋ณ์ ์ ์ธํด์ฃผ๊ณ , ์ด๋ฐ ๋น๊ต๋ฅผ ์ํด ์ต์์๋ก ์ ์ด๋ผ๋ค.
 2. t_Line์ด๋ผ๋ ๋ฐฐ์ดํ๋ ๋ง๋ค์ด, for๋ฌธ์ ์ด์ฉํ์ฌ ์๋ ฅ๋ฐฐ์ด ์ฆ ์ฌ๋๋ค์ ์ค์ผ์ค์
    ๊ฐ์ ธ์ค๋๋ฐ ์ฌ๊ธฐ์ ์์ฅ์๊ฐ๊ณผ ํด์ฅ์๊ฐ์ 's' ์ 'e'๋ผ๋ ์บ๋ฆญํฐ๋ฅผ ์ถ๊ฐํด์ 
    t_Line ๋ฐฐ์ดํด ๋ฃ์ด์ค๋ค. 
    [
      [ 14, 's' ], [ 18, 'e' ],
      [ 12, 's' ], [ 15, 'e' ],
      [ 15, 's' ], [ 20, 'e' ],
      [ 20, 's' ], [ 30, 'e' ],
      [ 5, 's' ],  [ 14, 'e' ]
    ]
 3. t_Line ๋ฐฐ์ด์ ์๋ ์ค์ผ์ค๋ค์ ์ด์  ์ ๋ ฌ์ ํด์ค๊ฑด๋ฐ, ๋ง์ฝ์ ์์ฅ์๊ฐ๊ณผ
    ํด์ฅ์๊ฐ์ด ๊ฒน์น๋ค๋ฉด ๊ทธ๊ฑด ํด๋น์ด ์๋๋ค๊ณ  ํ์ผ๋, e๊ฐ ๋ค์ด์๋ ํด์ฅ์๊ฐ์ด
    ๋จผ์  ์์ ์ค๊ฒ๋ํด์ค๋ค. ์ด๋ ๋ฌธ์์ด๋ก ์กํ๊ธฐ๋๋ฌธ์ charCodeAt() ๋ฉ์๋๋ฅผ
    ์ฌ์ฉํด์ ์์คํค์ฝ๋๋ก ๋ฐ๊ฟ์ค์ผ ์ ๋ ฌ์ด ๋๋ค.
    [
      [ 5, 's' ],  [ 12, 's' ],
      [ 14, 'e' ], [ 14, 's' ],
      [ 15, 'e' ], [ 15, 's' ],
      [ 18, 'e' ], [ 20, 'e' ],
      [ 20, 's' ], [ 30, 'e' ]
    ]
 4. ์ด์  cnt๋ผ๋ ๋ณ์๋ฅผ 0๋ก ์ด๊ธฐํ ๋ฐ ์ ์ธ์ ํด์ค๋ค.
 5. For of๋ก t_Line ์์๋ค์ ํ๋์ฉ ๊ฐ์ ธ์ค๋ฉฐ 's'๋ฉด cnt++;
    'e'๋ฉด ํ์ฌ๊น์ง ๊ฒฐํผ์์ฅ์ ์๋ ์ฌ๋๋ค ์ฆ ํ์ฌ cnt์ ์์ฌ์ง
    ์นด์ดํธ์ answer๋ผ๋ ์ต์ข ๋ณ์์ ๋ ๋์ ๊ฐ์ Math.max()๋ก
    ๋น๊ตํ์ฌ ์์ฅ ์๊ฐ๋ด ์ฌ๋๋ค์ด ๋์์ ์ ์ผ ๋ง์ด ๋ช๋ช ์์๋์ง
    ํ์ธํ๊ณ , cnt--;๋ฅผ ํด์ฃผ๋ฉด์ ๋ต์ ๊ตฌํ๋ค.
  </pre> 

</div>
</details>

<details>
<summary>7_10 ์ด๋ถ๊ฒ์</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
์์์ N๊ฐ์ ์ซ์๊ฐ ์๋ ฅ์ผ๋ก ์ฃผ์ด์ง๋๋ค. N๊ฐ์ ์๋ฅผ ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ 
๋ค์ N๊ฐ์ ์ ์ค ํ ๊ฐ์ ์์ธ M์ด ์ฃผ์ด์ง๋ฉด ์ด๋ถ๊ฒ์์ผ๋ก M์ด ์ ๋ ฌ๋ ์ํ์์ 
๋ช ๋ฒ์งธ์ ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. ๋จ ์ค๋ณต๊ฐ์ ์กด์ฌํ์ง ์์ต๋๋ค.
 </pre>
<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช
<pre>
์ฒซ ์ค์ ํ ์ค์ ์์ฐ์ N(3<=N<=1,000,000)๊ณผ M์ด ์ฃผ์ด์ง๋๋ค.
๋ ๋ฒ์งธ ์ค์ N๊ฐ์ ์๊ฐ ๊ณต๋ฐฑ์ ์ฌ์ด์ ๋๊ณ  ์ฃผ์ด์ง๋๋ค.
<hr/>
  ์ฒซ ์ค์ ์ ๋ ฌ ํ M์ ๊ฐ์ ์์น ๋ฒํธ๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>

<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 
<pre>
8 32
23 87 65 12 57 32 99 81
<hr/>
3
</pre>


 <br>

 ### โผ๏ธ Solution
 
 ```javascript
function solution(arr, val){
  let answer;
  let lt = 0, rt = arr.length-1;
  arr.sort((a,b) => a-b);
  while(lt<=rt){
    let mid = parseInt((lt+rt)/2)
    if(arr[mid] === val){
      answer = mid+1
      break;
    }
    else if(arr[mid] > val) rt = mid-1;
    else lt = mid+1;
  }
  return answer
}
let arr = [23,87,65,12,57,32,99,81];
let val = 32
console.log(solution(arr,val))
```

<br>

 <pre>
 ๐ฌ  ์ผ๋จ ๋ด๊ฐ ํด๋ณธ ๋ฐฉ์๋๋ก๋ ์์ง๋ง, ์ด๋ถ๊ฒ์์ ์ํด๋ณธ ๋๋ก์จ ๊ฐ์๋ฅผ ๋ณด๊ณ 
    ๊ฐ์ ์ก์์ผํ๋ค. 

    1. lt์ rt๋ฅผ ์๋ ฅ ๋ฐฐ์ด์ ์ฒซ,๋ ์ธ๋ฑ์ค๋ก ์ด๊ธฐํ ๋ฐ ์ ์ธ์ ํด์ค๋ค. 
    2. ์ ๋ ฌ์ด ์๋์ด ์์ผ๋ sort()๋ก ์ ๋ ฌ์ ์์ผ์ค๋ค.
    3. while(lt<=rt){} ์ด ์ฝ๋์์์ ์ด๋ถ๊ฒ์์ ํ๋ฉด๋๋๋ฐ ๊ทธ๋ฅ ์ธ์ฐ๋
    4. lt์ rt๋ฅผ ๋ํ๊ณ  2๋ก ๋๋์ด ์ด๋ถ์ ํด์ฃผ๊ณ  ๊ทธ๊ฒ์ mid๋ผ๋ ๋ณ์์ 
       ๋ฃ์ด์ค๋ค. ๊ทผ๋ฐ ์ ์๊ฐ ์๋์ฌ์ ์๊ธฐ๋๋ฌธ์ parseInt๋ก ๋ฐ๋ด๋ฆผ์ ํด์ค
    5. ์กฐ๊ฑด์ด ์ด 3๊ฐ์ธ๋ฐ, 
       if (๋ฐฐ์ด[mid]๊ฐ ์ฐ๋ฆฌ๊ฐ ์ฐพ๊ณ  ์๋ target ๊ฐ๊ณผ ๊ฐ๋ค๋ฉด)
         ๊ทธ๊ฒ ์ ๋ต์ด๋ answer์ ๋ฃ์ด์ฃผ๊ณ  break;ํ์ฌ ๋์์ค๋ค.
       else if (๋ฐฐ์ด[mid]๊ฐ ์ฐ๋ฆฌ๊ฐ ์ฐพ๊ณ  ์๋ target ๊ฐ๋ณด๋ค ๋๋ค๋ฉด)
         ๋ฐ์ผ๋ก ๋๋ ์ธ๋ฑ์ค์ค ์ฐ์ธก ์์๋ค์ ํด๋น์๋๋๊น rt๋ฅผ mid-1 ์ธ๋ฑ์ค
         ๊ฐ์ผ๋ก ์๋ฐ์ดํธํด์ค๋ค.
       else 
         ๋ฐฐ์ด[mid]๊ฐ ๋ ๋ฎ์ผ๋ ๋ฐ๋๋ก lt๋ฅผ mid+1 ์ธ๋ฑ์ค๊ฐ์ผ๋ก ์๋ฐ์ดํธ.
    6. ๊ณ์ ๋ฐ๋ณต๋๋ฉด์ ๊ฒฐ๊ตญ ์ฒซ๋ฒ์งธ ์กฐ๊ฑด์ ๊ฑธ๋ฆฌ๋ฉด ๋์ค๋ ๊ฒ์ด๋ค. 
  </pre> 

</div>
</details>

<details>
<summary>7_11 ๋ฎค์ง๋น๋์ค(๊ฒฐ์ ์๊ณ ๋ฆฌ์ฆ)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
์ง๋๋ ์ฝ๋์์๋ ๋ถ์ธ์ถ์ ๊ฐ์ ์กฐ์ํ์ ๋ผ์ด๋ธ ๋์์์ DVD๋ก ๋ง๋ค์ด ํ๋งคํ๋ ค ํ๋ค.
DVD์๋ ์ด N๊ฐ์ ๊ณก์ด ๋ค์ด๊ฐ๋๋ฐ, DVD์ ๋นํํ  ๋์๋ ๋ผ์ด๋ธ์์์ ์์๊ฐ ๊ทธ๋๋ก ์ ์ง
๋์ด์ผ ํ๋ค. ์์๊ฐ ๋ฐ๋๋ ๊ฒ์ ์ฐ๋ฆฌ์ ๊ฐ์ ์กฐ์ํ์จ๊ฐ ๋งค์ฐ ์ซ์ดํ๋ค. 
์ฆ, 1๋ฒ ๋ธ๋์ 5๋ฒ ๋ธ๋๋ฅผ ๊ฐ์ DVD์ ๋นํํ๊ธฐ ์ํด์๋ 1๋ฒ๊ณผ 5๋ฒ ์ฌ์ด์ ๋ชจ๋  ๋ธ๋๋ 
๊ฐ์ DVD์ ๋นํํด์ผํ๋ค. ๋ํ ํ ๋ธ๋๋ฅผ ์ชผ๊ฐ์ ๋ ๊ฐ์ DVD์ ๋นํํ๋ฉด ์๋๋ค.
์ง๋๋ ์ฝ๋ ์์ฅ์์๋ ์ด DVD๊ฐ ํ๋ฆด ๊ฒ์ธ์ง ํ์ ํ  ์ ์๊ธฐ ๋๋ฌธ์ ์ด ์ฌ์์ ๋ญ๋น๋๋
DVD๋ฅผ ๊ฐ๊ธ์  ์ค์ด๋ ค๊ณ  ํ๋ค. ๊ณ ๋ฏผ ๋์ ์ง๋๋ ์ฝ๋๋ M๊ฐ์ DVD์ ๋ชจ๋  ๋์์์ ๋นํํ๊ธฐ๋ก ํ์๋ค. 
์ด ๋ DVD์ ํฌ๊ธฐ(๋นํ ๊ฐ๋ฅํ ๊ธธ์ด)๋ฅผ ์ต์๋ก ํ๋ ค๊ณ  ํ๋ค. ๊ทธ๋ฆฌ๊ณ  M๊ฐ์ DVD๋
๋ชจ๋ ๊ฐ์ ํฌ๊ธฐ์ฌ์ผ ์ ์กฐ์๊ฐ๊ฐ ์ ๊ฒ ๋ค๊ธฐ ๋๋ฌธ์ ๊ผญ ๊ฐ์ ํฌ๊ธฐ๋ก ํด์ผ ํ๋ค.
 </pre>
<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช
<pre>
์ฒซ์งธ ์ค์ ์์ฐ์ N(1โคNโค1,000), M(1โคMโคN)์ด ์ฃผ์ด์ง๋ค. ๋ค์ ์ค์๋ ์กฐ์ํ์ด ๋ผ์ด๋ธ์์
๋ถ๋ฅธ ์์๋๋ก ๋ถ๋ฅธ ๊ณก์ ๊ธธ์ด๊ฐ ๋ถ ๋จ์๋ก(์์ฐ์) ์ฃผ์ด์ง๋ค. ๋ถ๋ฅธ ๊ณก์ ๊ธธ์ด๋ 10,000๋ถ์
๋์ง ์๋๋ค๊ณ  ๊ฐ์ ํ์.
<hr/>
  ์ฒซ ๋ฒ์งธ ์ค๋ถํฐ DVD์ ์ต์ ์ฉ๋ ํฌ๊ธฐ๋ฅผ ์ถ๋ ฅํ์ธ์.
</pre>

<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 
<pre>
9 3
1 2 3 4 5 6 7 8 9
<hr/>
17
</pre>


 <br>

 ### โผ๏ธ Solution
 
 ```javascript
function count(songs, capacity){
  let cnt=1, sum=0;
  for(let x of songs){
    if(sum+x>capacity){
      cnt++
      sum = x;
    }else sum+=x;
  }
  return cnt;
}

function solution(m, songs){
  let answer;
  let lt = Math.max(...songs)
  let rt = songs.reduce((a,b) => a+b, 0);
  while(lt<=rt){
    let mid = parseInt((lt+rt)/2);
    if(count(songs,mid) <= m) 
    {answer = mid;
      rt = mid-1;
    }
    else 
      lt = mid+1;
  }
  return answer;
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(solution(3, arr));
```

<br>

 <pre>
 ๐ฌ  ๊ฒฐ์ ์๊ณ ๋ฆฌ์ฆ ์ ๋ง ๋จธ๋ฆฌ์ํ๊ธฐ ์์ํ๋ค... 
    ์ด ๋ฌธ์ ๋ ์ผ๋จ ๋ชจ๋  ๊ณก๋ค์ DVD์์ ๋ด๋๊ฑด๋ฐ DVD๊ฐ ์ด ๋ช์ฅ์ ๋ง๋ค๊ฑด์ง
    ์ฃผ์ด์ง๋ค. DVD 3์ฅ์์ ์  ์๋ก๊ณก๋ค์ ๋ด๊ณ , ๊ทธ 3์ฅ์ ๋ค ๋ด๊ธธ๋์ ์ต์ ์ฉ๋ ํฌ๊ธฐ๋ฅผ ์ถ๋ ฅํ๋ ๋ฌธ์ ์ด๋ค. 

    1. ์ด๋ถ๊ฒ์์ด๋ lt์ rt๋ฅผ ์ ์ธ ๋ฐ ์ก์์ค๋ค. ๊ทผ๋ฐ ์ฌ๊ธฐ์  ์ธ๋ฑ์ค๊ฐ ์๋
       ํ DVD์์ ์ฉ๋ ํฌ๊ธฐ๋ฅผ ์ฐพ์์ผํ๊ธฐ ๋๋ฌธ์ lt์ songs๋ฐฐ์ด์ ์ ์ผ
       ํฐ ์์๋ฅผ ๋ฃ์ด์ฃผ๊ณ , rt์๋ reduce() ๋ฉ์๋๋ฅผ ํตํด์ ์ต๋๊ฐ์
       ๋ฃ์ด์ค๋ค. 
       lt = Math.max(...songs)
       rt = songs.reduce((a,b) => a+b, 0)
    2. ์ด๋ถ๊ฒ์ ๊ณต์ while(lt<=rt){} ์ด์ด์ค๋ค. 
    3. ์ผ๋จ mid๋ณ์์ lt์ rt ์ด๋ถํ ๊ฐ์ ๋ฃ์ด์ค๋ค. 
    4. ์กฐ๊ฑด๋ฌธ์ ๊ฑธ์ด์ฃผ๋๋ฐ count๋ผ๋ ํจ์์ ๋ฐฐ์ด๊ณผ mid๋ฅผ ํ๋ผ๋ฏธํฐ๋ก ๋ฃ๊ณ  
       ๋ฐํ๋ ๊ฐ๊ณผ ์ง๋๋ ์ฝ๋ ์ธก์์ ๋งํ DVD ๊ฐฏ์์ ๋น๊ต๋ฅผ ํ๋ค.
       DVD๊ฐ ๊ฐฏ์๊ฐ ์ด๊ณผ๋ง ์๋๋ฉด ๋๋ ์กฐ๊ฑด์ด ๋ง์ผ๋ฉด answer์ mid ์ฆ
       ์ต์ ์ฉ๋ ํฌ๊ธฐ๋ฅผ ๋ฃ์ด์ฃผ๊ณ , rt๋ mid-1๋ก ์๋ฐ์ดํธ ํด์ค๋ค.
       if(count(songs,mid) <= m) 
    5. ์ฌ๊ธฐ์ countํจ์๋ฅผ ์์ ๋ฏธ๋ฆฌ ๋ง๋ค์ด ๋์๋๋ฐ, ๋ ํ๋ผ๋ฏธํฐ๋ฅผ
       ๋ฐ๊ณ  cnt, sum์ด๋ผ๋ ๋ณ์๋ฅผ ๋ง๋ค์ด์ for of๋ก songs์ 
       ์์๋ฅผ ํ๋์ฉ ๊ฐ์ ธ์ sum์ ๋ํ๊ณ  ๋๊ฒจ๋ฐ์ mid๋ณด๋ค ์ปค์ง๊ธฐ ์ ๊น์ง
       ๋ฃ๋๋ฐ ๊ทธ๋ฌ๋ฉด ๋๋ฆฌ๋๋ฐ, ์์ง mid๋ณด๋ค ์์ผ๋ฉด ๊ณ์ Sum์ ๋์ ํฉํ๊ณ 
       ๋์ด๋ฒ๋ฆฌ๊ฒ๋๋ ์๊ฐ, sum์ ์๋ก ๋ค์ด์ค๋ ์์๋ก ์ด๊ธฐํํ๊ณ , cnt++
       ํด์ ์ฆ๊ฐํ๋๋ฐ, ์ด๊ฒ DVD ํ์ฅ์ด ๋๋๊ฑฐ๊ณ , ์์๋ค์ ๋ค ๋๋ฉด 
       cnt๋ฅผ returnํ๋ค. 
    6. ๊ทธ๋ ๊ฒ ๊ณ์ ๋๋ค๋ณด๋ฉด DVD ๊ฐฏ์๊ฐ ์ด๊ณผํ์ง๋ง, ๊ทธ๋ ๋ค๋ฉด lt์ mid+1;
       ๋ฅผ ์๋ฐ์ดํธํ๋ฉด์ ์ด๋ถ๊ฒ์์ ๋๊น์ง ํ๋ค. 
       2 24
       3 17
       5 9
       5 9
       4 9
       4 9
    7. ์ต์ข answer๋ 17์ด ์ถ๋ ฅ์ด๋๋ค.    
  </pre> 

</div>
</details>

<details>
<summary>7_12 ๋ง๊ตฌ๊ฐ ์ ํ๊ธฐ(๊ฒฐ์ ์๊ณ ๋ฆฌ์ฆ)</summary>
<div markdown="1">       
<br>
 
 ### โ Question
 
 <pre> 
N๊ฐ์ ๋ง๊ตฌ๊ฐ์ด ์์ง์ ์์ ์์ต๋๋ค. ๊ฐ ๋ง๊ตฌ๊ฐ์ x1, x2, x3, ......, xN์ ์ขํ๋ฅผ ๊ฐ์ง๋ฉฐ, 
๋ง๊ตฌ๊ฐ๊ฐ์ ์ขํ๊ฐ ์ค๋ณต๋๋ ์ผ์ ์์ต๋๋ค.ํ์๋ C๋ง๋ฆฌ์ ๋ง์ ๊ฐ์ง๊ณ  ์๋๋ฐ, 
์ด ๋ง๋ค์ ์๋ก ๊ฐ๊น์ด ์๋ ๊ฒ์ ์ข์ํ์ง ์์ต๋๋ค. ๊ฐ ๋ง๊ตฌ๊ฐ์๋ ํ ๋ง๋ฆฌ์ ๋ง๋ง ๋ฃ์ ์ ์๊ณ , 
๊ฐ์ฅ ๊ฐ๊น์ด ๋ ๋ง์ ๊ฑฐ๋ฆฌ๊ฐ ์ต๋๊ฐ ๋๊ฒ ๋ง์ ๋ง๊ตฌ๊ฐ์ ๋ฐฐ์นํ๊ณ  ์ถ์ต๋๋ค. 
C๋ง๋ฆฌ์ ๋ง์ N๊ฐ์ ๋ง๊ตฌ๊ฐ์ ๋ฐฐ์นํ์ ๋ ๊ฐ์ฅ ๊ฐ๊น์ด ๋ ๋ง์ ๊ฑฐ๋ฆฌ๊ฐ ์ต๋๊ฐ ๋๋ ๊ทธ ์ต๋ ๊ฐ์ 
์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>
<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช
<pre>
์ฒซ ์ค์ ์์ฐ์ N(3<=N<=200,000)๊ณผ C(2<=C<=N)์ด ๊ณต๋ฐฑ์ ์ฌ์ด์ ๋๊ณ  ์ฃผ์ด์ง๋๋ค.
๋์งธ ์ค์ ๋ง๊ตฌ๊ฐ์ ์ขํ xi(0<=xi<=1,000,000,000)๊ฐ ์ฐจ๋ก๋ก ์ฃผ์ด์ง๋๋ค.
<hr/>
์ฒซ ์ค์ ๊ฐ์ฅ ๊ฐ๊น์ด ๋ ๋ง์ ์ต๋ ๊ฑฐ๋ฆฌ๋ฅผ ์ถ๋ ฅํ์ธ์.
</pre>

<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 
<pre>
5 3
1 2 8 4 9
<hr/>
3
</pre>


 <br>

 ### โผ๏ธ Solution
 
 ```javascript
function count(stable, dist){
  let cnt = 1, ep = stable[0];
  for( let i = 1; i < stable.length; i++){
    if(stable[i]-ep >= dist){
      cnt++;
      ep=stable[i];
    }
  }
  return cnt;
}
function solution(c, stable){
  let answer;
  stable.sort((a,b) => a-b);
  let lt = 1;
  let rt = stable[stable.length-1];
  while(lt<=rt){
    let mid = parseInt((lt+rt)/2)
    if(count(stable,mid) >= c){
      answer=mid;
      lt=mid+1
    }
    else rt=mid-1;
  }
  return answer;
}
let arr = [1,2,8,4,9];
console.log(solution(3, arr))
```

<br>

 <pre>
 ๐ฌ  ์ดํดํ๊ธฐ ์ํด์ ๊ณ์ ๋๋ ค๋ณด์๋ค. 
  
    1. ์๋ ฅ ๋ฐฐ์ด์ ์ผ๋จ sort() ํ์ฌ ์ ๋ ฌํด์ฃผ๊ณ , lt, rt๋ฅผ ์ ์ธ ๋ฐ ํ ๋น์ ํด์ค๋ค.
    
    2. ์ด๋ถ๊ฒ์ ๊ตญ๋ฃฐ whilte(lt<=rt){} ๋ฅผ ๋ง๋ค์ด์ฃผ๊ณ , mid ๊ฐ์ ์ ์ธ ๋ฐ ํ ๋น์ ํด์ค๋ค. 
       parseInt ๋ฐ๋ด๋ฆผํด์ค๋ค.
    
    3. count๋ผ๋ ํจ์์ ๋ฐฐ์ด๊ณผ mid๋ฅผ ํ๋ผ๋ฏธํฐ๋ก ๋ฃ์ด์ฃผ๊ณ  ์ฐ๋ฆฌ๊ฐ ๋ฐฐ์นํด์ผ ํ  ๋ง์ ๋ง๋ฆฌ์์ ๊ฐ๊ฑฐ๋ 
       ํฌ๊ฒ๋ cnt ๋ณ์๊ฐ ๋ฐํ๋๋ฉด, answer์ ํด๋น mid ๊ฐ ์ฆ ๊ฐ๊น์ด ๋ง์ ์ต๋ ๊ฑฐ๋ฆฌ๋ฅผ ํ ๋นํด์ฃผ๊ณ , 
       lt๋ฅผ mid๊ฐ +1 ํ์ฌ ์ต์ ์ ๊ฐ์ ๋ค์ ์ฐพ๊ฒ๋ ํ๋ค. 
       
    4. ๋ฐํ๋ cnt๊ฐ ๋ง์ ๋ง๋ฆฌ์๋ณด๋ค ์ ์ผ๋ฉด mid์์ ์ฐ์ธก์ ๋ณด๋๋ง๋ ์ด๋๊น, rt๋ฅผ mid-1๋ก ์ฌํ ๋นํด์ค๋ค. 
    
    5. count ํจ์๋ฅผ ์ดํด๋ณด์ 
       cnt์ 1๋ฅผ ํ ๋นํด์ค๋ค, ํ๋ง๋ฆฌ๋ ๋ฌด์กฐ๊ฑด ์๊ณ , ์์ํ ๋ ์ด๋ฏธ ep๋ผ๋ ๋ณ์์ 0๋ฒ ์ธ๋ฑ์ค(์ฒซ๋ฒ์งธ ๋ง ์ขํ)๋ฅผ 
       ํ ๋นํด์ฃผ๋ ๋ง์ด๋ค. ๊ทธ๋ฆฌ๊ณ  for๋ฌธ์ ๋๋ ค, ๋ฐฐ์ด์์์ ep์ ํ ๋น๋ ๊ฐ์ด ์๊น ๋๊ฒจ๋ฐ์ mid ํ๋ผ๋ฏธํฐ 
       ์ฆ ๋ง๊ฐ์ ๊ฑฐ๋ฆฌ๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ์ผ๋ฉด ์กฐ๊ฑด์ ๋ถํฉํ๋๊น cnt++ ํด์ฃผ๊ณ , ep์ ์๋ก์ด ํด๋น [i]๋ฒ์งธ ๋ง๊ตฌ๊ฐ ์ฃผ์๋ฅผ 
       ์ฌํ ๋นํด์ค๋ค. ๊ทธ๋ ๊ฒ for๋ฌธ์ด ๋๋๋ฉด cnt๋ฅผ ๋ฐํํด์ค๋ค.
       
    6. ๊ทธ๋ฆฌ๊ณ  ์ต์ข์ผ๋ก answer์ ๋ค์ด๊ฐ mid ๊ฐ์ด ์ ๋ต์ผ๋ก ๋์จ๋ค. 
  </pre> 

</div>
</details>
 
 <br>
 
 ### ์ฑํฐ 8 - แแขแแฑแแกแทแแฎแแช แแชแซแแฅแซแแกแทแแขแจ(แแตแแแตแแฎแแฅแซแแกแทแแขแจ, DFS)
 
 <br>
 
<details>
<summary>8_1 ์ฌ๊ทํจ์์ ์คํํ๋ ์</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 
์์ฐ์ N์ด ์๋ ฅ๋๋ฉด ์ฌ๊ทํจ์๋ฅผ ์ด์ฉํ์ฌ 1๋ถํฐ N๊น์ง๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์ ์ N(3<=N<=10)์ด ์๋ ฅ๋๋ค.
<hr/>
์ฒซ์งธ ์ค์ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
3
<hr/>
1 2 3 
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n){
    function DFS(L){
      if(L==0) return; 
      else{
        DFS(L-1)
        console.log(L);
      }
    }
    DFS(n)
}
solution(3);
 ```

<br>

 <pre>
 ๐ฌ  ์ธํฐ๋ทฐ์์๋ ๋ง์ด ๋ฌผ์ด๋ณด๊ณ  ์์ผ๋ก ํ  ์๊ณ ๋ฆฌ์ฆ์ ๋ง์ด ๋์ค๊ธฐ๋๋ฌธ์ ํ์คํ ์ดํดํ๊ณ  ๋์ด๊ฐ์ผ๊ฒ ๋ค.


    1. solution ํจ์๋ฅผ ํธ์ถ 
    
    2. solution ํจ์์ ๋ด๋ถ ํจ์์ธ DFS(n) ํธ์ถ
    
    3. DFS ํจ์๋ด์์ ๋ฐ์์จ ํ๋ผ๋ฏธํฐ ๊ฐ์ด == 0์ด๋ฉด return; ์๋๋ฉด DFS(L-1) ํธ์ถํ๋๋ฐ, 
    ์ฒ์ ํธ์ถํ ๋ ํ๋ผ๋ฏธํฐ๊ฐ 3์ด์์ผ๋๊น DFS(L-1)์ ๊ณ์ ํธ์ถํ๋๋ฐ ์ด๋ Stack Frame์ ํจ์์ ์ ๋ณด๋ค์ด ์ ์ฅ๋๋ค. 
    ์ด๋ ๊ทธ ์๋ซ์ค์ console.log(L)์ ์คํํ์ง ์๊ณ  ์ฌ๊ทํ๊ฒ ๋๋ค.
</pre>

  ```mermaid
 classDiagram
  direction LR
  
  class DFS{
  ๋งค๊ฐ๋ณ์
  ๋ณต๊ท์ฃผ์
  ์ง์ญ๋ณ์
  }
  
  class StackFrame1 {
    DFS(3)
  }
  class StackFrame2{
		DFS(2)
    DFS(3)
  }
  class StackFrame3{
    DFS(1)
    DFS(2)
    DFS(3)
  }
  StackFrame1 --> StackFrame2 : stack
  StackFrame2 --> StackFrame3 : stack
  ```
<pre>
4. DFS(0)์ด ๋๋ ์๊ฐ return; ์ด ๋๊ฒ๋๊ณ , ๊ทธ๋ StackFrame์ ์์ฌ์๋ ํจ์๋ค์ด ๋ณต๊ท์ฃผ์ ์ฆ ํธ์ถํ ์ฝ๋ ๋ผ์ธ์ผ๋ก ๋ณต๊ท๋ฅผ ํ๊ณ  
   ์๊น๋ง์  ์คํํ์ง ๋ชปํ๋, console.log(L); ์ ์คํํ๊ณ , ํด๋น ํจ์๋ pop()์ด ๋๊ณ  ๊ฒฐ๊ตญ ์ฐ๋ฆฌ๊ฐ ๋ฐ๋ฌ๋ ์ถ๋ ฅ์ด ๋์ค๊ฒ ๋๋ค.
</pre>
 
   ```mermaid
    classDiagram
     direction LR
     
     class DFS{
     ๋งค๊ฐ๋ณ์
     ๋ณต๊ท์ฃผ์
     ์ง์ญ๋ณ์
     }
     
     class StackFrame5 {
       DFS(3)
     }
     class StackFrame4{
   		DFS(2)
       DFS(3)
     }
     class StackFrame3{
       DFS(1)
       DFS(2)
       DFS(3)
     }
     
     StackFrame3 --> StackFrame4 : pop()
     StackFrame4 --> StackFrame5 : pop()
   ```


```javascript
// ์ถ๋ ฅ๊ฒฐ๊ณผ
1
2
3
```
	
<pre>
5.  ํ์ง๋ง ์ฌ๊ธฐ์ console.log()๋ฅผ ์ฌ๊ทํ๊ธฐ ํ๊ฐ ์๋ ์ ์ผ๋ก ๋จผ์  ์คํ๋๊ฒ ํด๋์๋ค๋ฉด ์คํ๊ฒฐ๊ณผ๋ ๋ฐ๋๋ก ๋์ต๋๋ค.
</pre> 
	
 
   ```javascript
 // ์ถ๋ ฅ๊ฒฐ๊ณผ
   3
   2
   1
 ```
</div>
</details>
	
<details>
<summary>8_2 ์ฌ๊ทํจ์๋ฅผ ์ด์ฉํ ์ด์ง์ ์ถ๋ ฅ</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 
10์ง์ N์ด ์๋ ฅ๋๋ฉด 2์ง์๋ก ๋ณํํ์ฌ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. ๋จ ์ฌ๊ทํจ์๋ฅผ ์ด์ฉ
ํด์ ์ถ๋ ฅํด์ผ ํฉ๋๋ค.
 </pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ 10์ง์ N(1<=N<=1,000)์ด ์ฃผ์ด์ง๋๋ค.
<hr/>
์ฒซ ๋ฒ์งธ ์ค์ ์ด์ง์๋ฅผ ์ถ๋ ฅํ์ธ์.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
11
<hr/>
1011
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n){
  let answer="";
  function DFS(n){
      if(n===0) return;
      else {
        DFS(parseInt(n/2));
        answer+=(n%2);
      }
  }
  DFS(n);
  return answer;
}
console.log(solution(11))
 ```

<br>

 <pre>
 ๐ฌ  while๋ฌธ์ด๋ ๋ค๋ฅธ ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๋ฉด ์ฝ๊ฒ ๊ตฌํ์ด ๊ฐ๋ฅํ์ง๋ง ์ฌ๊ทํจ์๋ฅผ ์ฌ์ฉํ๋ผ๊ณ  ํ์์ผ๋
    ํ๋ฒ ํ์ด๋ณด๋ฉด 
    1. answer๋ฅผ ๋ฌธ์์ด๋ก ์ ์ธํ๊ณ , DFS(n) ์ฌ๊ทํจ์๊ฐ ํธ์ถ๋๊ณ  ๋ด๋ถ ํจ์์ธ DFS๊ฐ ํธ์ถ๋๋ค.
    
    2. ๋งค๊ฐ๋ณ์๊ฐ 0์ด ๋  ๋๊น์ง ์ฌ๊ท๋ฅผ ๋ฐ๋ณตํ๋๋ฐ, DFS(parseInt(n/2))์ผ๋ก 2๋ก ๊ณ์ ๋๋๊ณ ,
       ๋งค๊ฐ๋ณ์๊ฐ 0์ด ๋ ์๊ฐ return; ์ฌ๊ทํจ์๊ฐ ๋ฉ์ถ๋ค. 

    3. ๊ทธ๋ฌ๊ณ  ๋๋ฉด StackFrame์ ์์ฌ์๋ ํจ์๋ค์ด ๋ณต๊ท์ฃผ์๋ก ๋์๊ฐ๋ฉด์ ๋ฐ๋ก ์๋ ์๋ 
       answer += (n%2); ์คํํด์ฃผ๋ฉด์, ์์ ์์ฌ์๋ ํจ์์ ๋งค๊ฐ๋ณ์ ๊ฐ์ ํ๊ฒ์ผ๋ก 
       ๋๋จธ์ง ์ฐ์ฐํ์ฌ answer์ ๋ํด์ฃผ๊ฒ๋๋ค.

    4. answer๋ฅผ ๋ฌธ์์ด๋ก ๋จผ์  ์ ์ธ์ ํด์ ๋ํด์ฃผ๊ธฐ๋งํด๋ ๋ฌธ์์ด๋ก ์ญ ๋๋ํ ๋ํด์ง๋ค.
  </pre>

</div>
</details>
	
<details>
<summary>8_3 ์ด์งํธ๋ฆฌ ์ํ(๊น์ด์ฐ์ ํ์)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 
  ์๋ ๊ทธ๋ฆผ๊ณผ ๊ฐ์ ์ด์งํธ๋ฆฌ๋ฅผ ์ ์์ํ์ ํ์์ํ๋ฅผ ์ฐ์ตํด๋ณด์ธ์.
 </pre>

```mermaid
stateDiagram-v2
    1 --> 2
    2 --> 4
    2 --> 5
    1 --> 3
    3 --> 6
    3 --> 7
  ``` 

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ ์์ํ ์ถ๋ ฅ : 1 2 4 5 3 6 7
์ค์์ํ ์ถ๋ ฅ : 4 2 5 1 6 3 7
ํ์์ํ ์ถ๋ ฅ : 4 5 2 6 7 3 1
</pre>


<br>

<!-- ### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
11
<hr/>
1011
</pre>



 <br> -->

 ### โผ๏ธ Solution

 ```javascript
// ์ ์์ํ ์ถ๋ ฅ
function solution(v){
  let answer;
  function DFS(v){
    if(v>7) return;
    else{
      console.log(v);
      DFS(v*2);
      DFS(v*2+1);
    }
  }
  DFS(v);
  return answer;
}
console.log(solution(1));
 ```


 ```javascript
// ์ค์์ํ ์ถ๋ ฅ
function solution(v){
  let answer;
  function DFS(v){
    if(v>7) return;
    else{
      DFS(v*2);
      console.log(v);
      DFS(v*2+1);
    }
  }
  DFS(v);
  return answer;
}
console.log(solution(1));
 ```


 ```javascript
// ํ์์ํ ์ถ๋ ฅ
function solution(v){
  let answer;
  function DFS(v){
    if(v>7) return;
    else{
      DFS(v*2);
      DFS(v*2+1);
      console.log(v);
    }
  }
  DFS(v);
  return answer;
}
console.log(solution(1));
 ```
 

<br>

 <pre>
 ๐ฌ  ๊น์ด์ฐ์ ํ์์ ๊ทธ๋ฆผ์ด๋ ์์๋๋ก ์์๋ฅผ ์ ์ด์ ๋ค์ ํ์๋ ๋๋ฌด ๋ง์ด ๊ธธ์ด์ง๊ฑฐ๊ฐ์์ ๋ด๊ฐ ์์๋ค์ ๊ฒ์ ์์ฝํด์ ์ ๋๋ก ํ๊ฒ ์ต๋๋ค.

solution ํจ์์์ DFS(v)๊ฐ ์คํ๋๋ฉฐ ๋ด์ฅํจ์์ธ DFS๋ฅผ ํธ์ถํ๊ณ , ๊ทธ ์์์ ์กฐ๊ฑด๋ฌธ์ ํตํด v๊ฐ์ผ๋ก ๋ถ๋ณํ๋ฉด์ 
์ถ๋ ฅ ๋ฐ ์ฌ๊ทํจ์๊ฐ ์ฑ๋ฆฝ์ด ๋๋๋ฐ, ์ผ๋จ ์ ์ผ ์ค์ํ๊ฑด ํจ์๊ฐ ์คํ๋๊ณ  ๋ค์ ์ฌ๊ทํ๊ฒ๋๋ฉด StackFrame ์ด๋ผ๋ ๊ณณ์ 
ํด๋น ํจ์์ ์ ๋ณด๊ฐ ๋ด๊ธฐ๊ฒ๋๋๋ฐ, ๊ฑฐ๊ธฐ์ ๋ณต๊ท์ฃผ์๊ฐ ๋ด๊ฒจ์์ต๋๋ค. ๊ทธ๋์ ์ฌ๊ท๊ฐ ๋๊ณ , <mark>if๋ฌธ ์กฐ๊ฑด์ ์ฐธ์ด๋๋ฉด return;์ 
ํ๊ฒ ๋๋๋ฐ ์ฌ๊ธฐ์๋ ํจ์์ ์ข๋ฃ๋ฅผ ์๋ฏธํ๊ณ  StackFrame์ ํจ์๊ฐ ์์ด์๋ง์ pop()์ด ๋์ด ์๋ฌด๊ฒ๋ ์คํ์๋๊ณ  StackFrame 
๋ฐ๋ก ์๋ ์์ฌ์๋ ํจ์๋ฅผ ๋ค์ ๊บผ๋ด์ด ๋ณต๊ท์ฃผ์๋ก  ๋์๊ฐ์ ๋ค์๋ผ์ธ์ ์ฝ๋๋ฅผ ์คํํฉ๋๋ค.</mark> ์ด๊ฑฐ๋ฅผ ๊ทธ๋์ console.log()์์น๋ง์ผ๋ก๋
์ ์,์ค์,ํ์๊ฐ ๊ฒฐ์ ์ด ๋๋๋ฐ, ์๋ํ๋ฉด StackFrame ์์ด๊ธฐ ์ , StackFrame ์์ด๊ณ  ๋ค์ ๊บผ๋ด์ด์ ๋ณต๊ท์ฃผ์๋ก ๋์์์ ์ถ๋ ฅ 
์ด๊ฑธ๋ก ์ ์ด๋ฅผ ํ๊ธฐ ๋๋ฌธ์๋๋ค. ์ผ๋จ ์ต์ํด์ง๊ธฐ ์ํด ์ฌ๋ฌ๋ค๋ฅธ ๋ฌธ์ ๋ฅผ ๋ด์ผ๊ฒ ๋ค์.
  </pre>

</div>
</details>

<details>
	
<summary>8_4 ๋ถ๋ถ์งํฉ ๊ตฌํ๊ธฐ(DFS)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 
  ์์ฐ์ N์ด ์ฃผ์ด์ง๋ฉด 1๋ถํฐ N๊น์ง์ ์์๋ฅผ ๊ฐ๋ ์งํฉ์ ๋ถ๋ถ์งํฉ์ ๋ชจ๋ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์
 </pre>


<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ N(1<=N<=10)์ด ์ฃผ์ด์ง๋๋ค.
<hr/>
์ฒซ ๋ฒ์งธ ์ค๋ถํฐ ๊ฐ ์ค์ ํ๋์ฉ ๋ถ๋ถ์งํฉ์ ์๋์ ์ถ๋ ฅ์์ ์ ๊ฐ์ ์์๋ก ์ถ๋ ฅํ๋ค.
๋จ ๊ณต์งํฉ์ ์ถ๋ ฅํ์ง ์์ต๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
3
<hr/>
1 2 3
1 2
1 3
1
2 3
2
3
</pre>



 <br> 

 ### โผ๏ธ Solution

 ```javascript
function solution(n){
  let answer = [];
  let ch = Array.from({length:n+1}, ()=>0)  
  function DFS(v){
    if(v === n+1){
      let tmp = "";
      for(let i =1; i <= n; i++){
        if(ch[i]===1) tmp+= i+" ";
      }
      if(tmp.length>0)answer.push(tmp.trim());
    } 
    else {
      ch[v]=1;
      DFS(v+1);
      ch[v]=0;
      DFS(v+1);
    }
  }
  DFS(1);
  return answer;
}
console.log(solution(3));
 ```


<br>

 <pre>
 ๐ฌ  ์ผ๋จ ์ด์งํธ๋ฆฌ๋ฅผ ์งํํ๋๋ฐ ์์ ํ๋์ฉ ์งํฉ์ ์ฐธ์ฌํ๊ณ  ์ํ๊ณ  ์ฌ๋ถ๋ฅผ ๊ฒฝ์ฐ์ ์๋ก ์ก์์ ๊ตฌํ์ ํด์ผํ๋๋ฐ, 
 ch๋ผ๋ ๋ฐฐ์ด๋ก 1,0 ์ผ๋ก ์ฐธ์ฌ ์ฌ๋ถ๋ฅผ ํ์ธํด์ ์ถ๋ ฅ์ ํด์ฃผ๋๋ฐ ์ฒ์ ์๋ ฅ๋ฐ๋ n+1 ๋ ๊ฐ์ด๋ ๊ฐ์์ง๋ฉด ํ์์ ๋๋ธ๊ฑฐ๋๊น,
 answer์ push๋ฅผ ํด์ฃผ๊ฒ๋๊ณ , ์๋์ผ๋ฉด else ๋ฐฐ์ดํ๊ณ  ๊ธฐ์กด์ฒ๋ผ ์ฌ๊ทํ์ฌ ํ์์ ๋์ ๋ค. 

 % Array.from({length:n}, ()=>0)
    - length๊ฐ n์ธ ๋ฐฐ์ด์ ๋ง๋ค๊ณ , ์์ 0์ผ๋ก ์ด๊ธฐํ
 % (tmp.length>0) answer.push(tmp.trim())
    - ๊ณต์งํฉ์ .trim(), if๋ฌธ์ผ๋ก ์ก์ 
  </pre>


	
</div>
</details>

<details>
<summary>8_5 ํฉ์ด ๊ฐ์ ๋ถ๋ถ์งํฉ(DFS : ์๋ง์กด ์ธํฐ๋ทฐ)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 
N๊ฐ์ ์์๋ก ๊ตฌ์ฑ๋ ์์ฐ์ ์งํฉ์ด ์ฃผ์ด์ง๋ฉด, ์ด ์งํฉ์ ๋ ๊ฐ์ ๋ถ๋ถ์งํฉ์ผ๋ก ๋๋์์ ๋
๋ ๋ถ๋ถ์งํฉ์ ์์์ ํฉ์ด ์๋ก ๊ฐ์ ๊ฒฝ์ฐ๊ฐ ์กด์ฌํ๋ฉด โYES"๋ฅผ ์ถ๋ ฅํ๊ณ , 
๊ทธ๋ ์ง ์์ผ๋ฉด โNO"๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
๋๋ก ๋๋๋ ๋ ๋ถ๋ถ์งํฉ์ ์๋ก์ ์งํฉ์ด๋ฉฐ, ๋ ๋ถ๋ถ์งํฉ์ ํฉํ๋ฉด ์๋ ฅ์ผ๋ก ์ฃผ์ด์ง ์๋์ ์งํฉ์ด ๋์ด ํฉ๋๋ค.
์๋ฅผ ๋ค์ด {1, 3, 5, 6, 7, 10}์ด ์๋ ฅ๋๋ฉด {1, 3, 5, 7} = {6, 10} ์ผ๋ก 
๋ ๋ถ๋ถ์งํฉ์ ํฉ์ด 16์ผ๋ก ๊ฐ์ ๊ฒฝ์ฐ๊ฐ ์กด์ฌํ๋ ๊ฒ์ ์ ์ ์๋ค.
 </pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ N(1<=N<=10)์ด ์ฃผ์ด์ง๋๋ค.
๋ ๋ฒ์งธ ์ค์ ์งํฉ์ ์์ N๊ฐ๊ฐ ์ฃผ์ด์ง๋ค. ๊ฐ ์์๋ ์ค๋ณต๋์ง ์์ผ๋ฉฐ, 
๊ทธ ํฌ๊ธฐ๋ 1,000,000 ์ดํ์๋๋ค.
<hr/>
์ฒซ ๋ฒ์งธ ์ค์ โYES" ๋๋ โNO"๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
6
1 3 5 6 7 10 
<hr/>
YES
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(arr){
  let answer = "NO", flag = 0; 
  let total = arr.reduce((a,b) => a+b,0);
  let n = arr.length;
  function DFS(L,sum){
    if(flag) return;
  
    if(L === n)
    {
        if((total - sum)===sum) 
        {
          answer = "YES"
          flag=1;
        }
    }
    else
    {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0,0)
  return answer;
}
let arr = [1,3,5,6,7,10]
console.log(solution(arr));
 ```

<br>

 <pre>
 ๐ฌ  ์ด์งํธ๋ฆฌ ์ดํด๊ฐ ์ฝ์ง์๋.. 
    ์ฒ์์๋ ์ด๋กํ ์ง ๊ฐ๋ ์ ์กํ๋ค๊ฐ, ๋ง์ ๋ณด๋ฉด ์ด๊ฑธ ์ ๋ชฐ๋์ง.. 
    ์ฝ๋ ์์ ๋ณ์์ ์ธ๋ถํฐ ๋ค์ ๋ณด์.
</pre>

```javascript
      let answer = "NO", flag = 0; 
      let total = arr.reduce((a,b) => a+b,0);
      let n = arr.length;
```

 <pre>
    ์ผ๋จ answer๋ผ๋ ๋ณ์๋ฅผ "NO"๋ก ์ ์ธํด์ค๋ค. ๊ทธ๋ฆฌ๊ณ  flag๋ผ๋ ๋ณ์๋ ์ ์ธ
    ํ๋๋ฐ, ์ด๊ฑด ์ ๋ต์ด ์ด๋ฏธ ๋์์ ๊ฒฝ์ฐ ์ธ๋ฐ์์ด ํ์ํ์ง ๋ง๊ณ  ๋น ๋ฅด๊ฒ ์ข๋ฃํ 
    ์ ์๊ฒ ํ๊ธฐ์ํด ์ ์ธํด์ฃผ๋๊ฒ ์ข๋ค๊ณ  ํฉ๋๋ค. ํ์ด์ฌ์ด๋ C++๊ฐ์ ์ธ์ด์๋
    exit์ด๋ผ๋ ํจ์๊ฐ์๊ฑธ๋ก ํ์ถํ๋ค๊ณ  ํ์ง๋ง JS๋ ์๋๊ฑฐ ๊ฐ์์. 
    ๊ทธ๋ฆฌ๊ณ  ์ด ๋ฌธ์ ๋ ๋ฐฐ์ด์์์ ๋๊ฐ์ ๋ถ๋ถ์งํฉ์ ๋ง๋ค์ด ๋ ๊ฐ์ด ๊ฐ๊ฒ ๋ง๋๋
    ๊ฒ์ด๊ธฐ๋๋ฌธ์ ์ผ๋จ ์์ ์ซ์๋ค์ ๋ค ๋์ ํฉ์ ํด์ฃผ๊ณ  ํ ๋ถ๋ถ์งํฉ์ ๋บ ๊ฐ์ด 
    ๊ทธ ๋ถ๋ถ์งํฉ์ด๋ ๊ฐ์ด ๋๊ฐ๊ฒ ๋์ค๋ฉด ๋๊ธฐ๋๋ฌธ์, reduce๋ก total๊ฐ์ 
    ๋ฝ์์ค๋๋ค. ๊ทธ๋ฆฌ๊ณ  L๊ฐ์ด ๋๊น์ง ๋๋ฌํ๋์ง ํ์ธํ๊ธฐ ์ํ n ๋ณ์ ์ ์ธ.
</pre>

```javascript
    function DFS(L,sum){
    if(flag) return;
  
    if(L === n)
    {
        if((total - sum)===sum) 
        {
          answer = "YES"
          flag=1;
        }
    }
    else
    {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
```

<pre>

  ์ฌ๊ทํจ์๊ฐ ์์๋๋ฉด L,sum์ ์ผ๋จ 0,0์ผ๋ก ์์ํ๊ฒ ๋ฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ๋ฐ๋ก ๋ง๋ฅ๋๋ฆฌ๋
  flag๋ฅผ ์ฒดํฌํ๋ if๋ฌธ์๋๋ค. ๋ง์ฝ ์ ๋ต์ด ๋์๋ค๋ฉด ๋ถํ์ํ ์ฌ๊ท๋ฅผ ๋ฉ์ถ๊ณ  ๋ฐ๋ก return์ ํด์ฃผ๋ฉฐ, 
  ํจ์๋ฅผ ํ์ถํฉ๋๋ค. ๊ทธ ๋ค์ if๋ฌธ์ L๊ฐ์ด ์ด์งํธ๋ฆฌ ๋ง์ง๋ง ์์๋ธ๋๊น์ง ๋๋ฌํ๋๋ฐ ํ์ธ์ ํ๋ฉฐ,
  ์กฐ๊ฑด์์ (total-sum)===sum์ผ๋ก ์ด๋ฉฐ, ์ด๊ฒ ์ ๋ต์ ํด๋น๋๋ค๋ฉด, answer์ "YES"๋ฅผ ๋ฃ๊ณ , 
  flag๋ฅผ toggleํด์ฃผ๋ฉฐ ๋์ด๋๊ณ  ์ด๋ ๊ฒ ์ ๋ต์ด ๋์ฌ๋๊น์ง๋ else์์ ์ฌ๊ท๋ฅผ ๋ฐ๋ณตํด์ค๋๋ค.    
</pre>

</div>
</details>

<details>
<summary>8_6 ๋ฐ๋์ด ์น์ฐจ(DFS)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 
์ฒ ์๋ ๊ทธ์ ๋ฐ๋์ด๋ค์ ๋ฐ๋ฆฌ๊ณ  ์์ฅ์ ๊ฐ๋ ค๊ณ  ํ๋ค. 
๊ทธ๋ฐ๋ฐ ๊ทธ์ ํธ๋ญ์ Cํฌ๋ก๊ทธ๋จ ๋๊ฒ ํ์ธ์๊ฐ ์๋ค. 
์ฒ ์๋ C๋ฅผ ๋์ง ์์ผ๋ฉด์ ๊ทธ์ ๋ฐ๋์ด๋ค์ ๊ฐ์ฅ ๋ฌด๊ฒ๊ฒ ํ์ฐ๊ณ  ์ถ๋ค.
N๋ง๋ฆฌ์ ๋ฐ๋์ด์ ๊ฐ ๋ฐ๋์ด์ ๋ฌด๊ฒ W๊ฐ ์ฃผ์ด์ง๋ฉด, 
์ฒ ์๊ฐ ํธ๋ญ์ ํ์ธ ์ ์๋ ๊ฐ์ฅ ๋ฌด๊ฑฐ์ด ๋ฌด๊ฒ๋ฅผ ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
 </pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ C(1<=C<=100,000,000)์ N(1<=N<=30)์ด ์ฃผ์ด์ง๋๋ค.
๋์งธ ์ค๋ถํฐ N๋ง๋ฆฌ ๋ฐ๋์ด์ ๋ฌด๊ฒ๊ฐ ์ฃผ์ด์ง๋ค.
<hr/>
์ฒซ ๋ฒ์งธ ์ค์ ๊ฐ์ฅ ๋ฌด๊ฑฐ์ด ๋ฌด๊ฒ๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
259 5
81
58
42
33
61
<hr/>
242
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(capa,arr){
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L,sum){
    if(sum < capa) return;
    if(L === n){
        answer = Math.max(answer,sum);
    }
    else
    {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  } 
  DFS(0,0);
  return answer;
}
let capa = 259;
let arr = [81,58,42,33,61]
console.log(solution(capa,arr));
 ```

<br>

 <pre>
 ๐ฌ ๋ด๊ฐ ์ด๊ฑฐ๋ ์ ์๋ ํด์ค์์ด ์ ์๋์ด๋ ํ๋ฐ...
   ์ ์ ํ๋ ๋ฌธ์ ๋ ๋น์ทํ๋ฐ, ๋ค๋ฅธ ์ ์ ์ผ๋จ flag๊ฐ ์๋ค ์๋ํ๋ฉด
   ๋๊น์ง ๋๋๊น์ง ์ ๋ต์ ๋ชจ๋ฅด๋ ๊ฑฐ๊ณ , capa๋ณด๋ค ๋์ผ๋ฉด ๋์ํด๋ณผํ์๋ ์๊ธฐ
   ๋๋ฌธ์ returnํด์ค๋ค. answer์ max๊ฐ์ ๊ณ์ ๋์ํด์ค์ ๋ง์ง๋ง๊น์ง ๋จ์๊ฒ
   ์ ์ผ ํฐ ๊ฐ์ผํ๋ ๊ตฌํ์ด ์ด๋ ๊ฒ ๋์๋ค๊ณ  ํ๋ค.
</pre>

</div>
</details>
	
	
<details>
<summary>8_7 ์ต๋์ ์ ๊ตฌํ๊ธฐ(DFS)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 
์ด๋ฒ ์ ๋ณด์ฌ๋ฆผํผ์๋๋ํ์์ ์ข์ ์ฑ์ ์ ๋ด๊ธฐ ์ํ์ฌ ํ์๋ ์ ์๋์ด ์ฃผ์  N๊ฐ์ ๋ฌธ์ ๋ฅผ
ํ๋ ค๊ณ  ํฉ๋๋ค. ๊ฐ ๋ฌธ์ ๋ ๊ทธ๊ฒ์ ํ์์ ๋ ์ป๋ ์ ์์ ํธ๋๋ฐ ๊ฑธ๋ฆฌ๋ ์๊ฐ์ด ์ฃผ์ด์ง๊ฒ ๋ฉ
๋๋ค. ์ ํ์๊ฐ M์์ N๊ฐ์ ๋ฌธ์  ์ค ์ต๋์ ์๋ฅผ ์ป์ ์ ์๋๋ก ํด์ผ ํฉ๋๋ค. (ํด๋น๋ฌธ์ ๋
ํด๋น์๊ฐ์ด ๊ฑธ๋ฆฌ๋ฉด ํธ๋ ๊ฑธ๋ก ๊ฐ์ฃผํ๋ค, ํ ์ ํ๋น ํ๊ฐ๋ง ํ ์ ์์ต๋๋ค.
 </pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ๋ฌธ์ ์ ๊ฐ์N(1<=N<=20)๊ณผ ์ ํ ์๊ฐ M(10<=M<=300)์ด ์ฃผ์ด์ง๋๋ค.
๋ ๋ฒ์งธ ์ค๋ถํฐ N์ค์ ๊ฑธ์ณ ๋ฌธ์ ๋ฅผ ํ์์ ๋์ ์ ์์ ํธ๋๋ฐ ๊ฑธ๋ฆฌ๋ ์๊ฐ์ด ์ฃผ์ด์ง๋๋ค.
<hr/>
์ฒซ ๋ฒ์งธ ์ค์ ์ ํ ์๊ฐ์์ ์ป์ ์ ์๋ ์ต๋ ์ ์๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
5 20
10 5
25 12
15 8
6 3
7 4
<hr/>
41
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(limit, arr)
{
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L,score,time)
  {
    if ( time > limit) return; 
    if( L === n ) answer = Math.max(answer, score);
    else
    {
      DFS(L+1,score+arr[L][0],time+arr[L][1]);
      DFS(L+1,score,time);
    }
  }
  DFS(0,0,0)
  return answer;
}
let arr = [
  [10,5],
  [25,12],
  [15,8],
  [6,3],
  [7,4]
];
console.log(solution(20,arr));
 ```

<br>

 <pre>
 ๐ฌ ์ด๋ฒ์ ์ ์๋ ์ ์์ง๋ง ์๊ฐ๋ ๋์ ์ ํด์ผํด์, ํ๋ผ๋ฏธํฐ ํ๋๋ฅผ 
 ๋ ๋ฃ์์ผ๋ก์จ ํด๊ฒฐํ๋ค. ์  ๋ฌธ์ ๋ ๋ง์ด ๋น์ทํด์ ์ฝ๊ฒ ํ์๋๋ฐ ์ ์๋๊ณผ
 ํ์ด๊ฐ ๋น์ทํด์ ๊ฐ์ด์ด ์์ฅํด์ก๋ค.
</pre>


</div>
</details>

<details>

<summary>8_8 ์ค๋ณต์์ด ๊ตฌํ๊ธฐ</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre> 1๋ถํฐ N๊น์ง ๋ฒํธ๊ฐ ์ ํ ๊ตฌ์ฌ์ด ์์ต๋๋ค. ์ด ์ค ์ค๋ณต์ ํ๋ฝํ์ฌ M๋ฒ์ ๋ฝ์ ์ผ๋ ฌ๋ก ๋์ดํ๋ ๋ฐฉ๋ฒ์ ๋ชจ๋ ์ถ๋ ฅํฉ๋๋ค.</pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ N(3<=N<=10)๊ณผ M(2<=M<=N) ์ด ์ฃผ์ด์ง๋๋ค.
<hr/>์ฒซ ๋ฒ์งธ ์ค์ ๊ฒฐ๊ณผ๋ฅผ ์ถ๋ ฅํฉ๋๋ค. ๋งจ ๋ง์ง๋ง ์ด ๊ฒฝ์ฐ์ ์๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
์ถ๋ ฅ์์๋ ์ฌ์ ์์ผ๋ก ์ค๋ฆ์ฐจ์์ผ๋ก ์ถ๋ ฅํฉ๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
3 2
<hr/>1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
9
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n,m){
  let answer = [];
  let tmp = Array.from({length:m}, ()=>0) 
  function DFS(L){
    if(L===m){
          answer.push(tmp.slice()); 
    }
    else{
      for(let i = 1; i <= n; i++)
      {
        tmp[L]=i;
        DFS(L+1);
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(3,2))
 ```

<br>

 <pre>
 ๐ฌ ์ผ๋จ ๋จผ์  ๋ค์ค for๋ฌธ์ผ๋ก ์ํ๊ณ  ์ฌ๊ทํจ์๋ฅผ ์ฐ๋ ์ด์ ๋ฅผ ์ ๊ฒ ๋ค. ์ง์  ์ฝ๋๋ฅผ ์จ๋ณด๋ฉด
 ์๊ฒ ์ง๋ง ํจ์๋ก ์ฒ์๋ค์ด์ค๋ ํ๋ผ๋ฏธํฐ ์ซ์๊ฐ ๋ฐ๋๋๋ง๋ค, for๋ฌธ์ ํ๋์ฉ ๋๋ ค์ผํ๋ค.
 ์์ ์ฝ๋๋ฅผ ๋ณด๋ฉด ์๊ฒ ์ง๋ง ์์ฐ์ 3์ 2๋ฒ ์ค๋ณต์์ด์ ๊ตฌํ๋๋ฐ, for๋ฌธ์ผ๋ก ํ๊ฒ๋๋ฉด 
 ์ด์ค for๋ฌธ์ ํ๋ฉด ์ ๋ต์ด ๋์ค์ง๋ง, ํ๋ผ๋ฏธํฐ๊ฐ 4, 3 ์ด๋ ๊ฒ ๋๋ฉด ์ผ์ค for๋ฌธ ๊ทธ๋ฆฌ๊ณ  ๊ณ์
 ๊ทธ๋ ๊ฒ ์ฌ์ฉ์๊ฐ ์ง์  ๋๋ ค๊ฐ์ผํ๋ค. ๊ทธ๋ฐ๋ฉด์์ ์ฌ๊ทํจ์๊ฐ ํจ์ฌ ์ตํต์ฑ(?)์ด ์๋ค๊ณ  ํ  ์ 
 ์๋ค. 

 ์ฝ๋๋ฅผ ๋ณด๊ฒ ๋ค. ์ผ๋จ ์์ ๋ฐฐ์ด ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ค์ผํ๋ค. ์ฌ๊ท๋ก ๊ฐ์ ๋ฝ๊ณ  ๋ฃ์ด์ค์ผํ๋ ๊ณณ์ด 
 ์์ด์ผ ํ๊ธฐ์. Array.from ์ผ๋ก ๊ธธ์ด๊ฐ m๊ฐ์ธ ๊ฐ์ฒด๋ฅผ 0์ผ๋ก ์ด๊ธฐ๊ฐ ๋ง๋ค์ด์ค๋ค. 
 ๊ทธ๋ฆฌ๊ณ  ์ฌ๊ทํจ์๊ฐ ๋๋๋ฐ, ์ด๊ธฐ๊ฐ์ 0์ด๋ค. Level๊ฐ์ด 0๋ถํฐ ์์ํ๋๊น ์ฒ์๋ค์ด์ค๋ฉด
 else๋ก ๋ค์ด์ค๋ฉด์ for๋ฌธ์์ ๋๊ฒ๋๋๋ฐ, ์ด๋ tmp[L] ์ i ๊ฐ์ ๋ฃ์ด์ฃผ๊ณ , 
 ๋ ์ฌ๊ทํด์ฃผ๋ฉด์ ๋ค์ ์ธ๋ฑ์ค๋ก ๋์ด๊ฐ์ ํ๋์ฉ ์ฆ๊ฐํ๋ค. ๊ทธ๋ฆฌ๊ณ  L๊ฐ์ด ๋๊น์ง ๋๋ฌํ๋ฉด,
 if๋ฌธ์์ ๊ฑธ๋ ค์ answer์ push๋ฅผํด์ฃผ๋๋ฐ ๊ทธ๋ฅ pushํ๊ฒ๋๋ฉด, ์์๋ณต์ฌ๊ฐ ๋๊ธฐ ๋๋ฌธ์
 ๋ค์ด๊ฐ ๋ชจ๋  ์์๋ค์ด ๊ฐ์ ๋ฐ์ดํฐ ์ฃผ์๋ฅผ ๊ฐ๊ฒ๋์ด์, ๊ฐ์ด ๋ง์ง๋ง ๊ฐ์ผ๋ก ํต์ผ๋๊ฒ ๋๋๋ฐ
 ๊ทธ๋์ .splice()๋ฉ์๋๋ก ๊น์ ๋ณต์ฌ(?)๋ฅผ ํด์ค๋ค. 
</pre>
</div>
	
</details>
 
<details>

<summary>8_9 ๋์ ๊ตํ</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>๋ค์๊ณผ ๊ฐ์ด ์ฌ๋ฌ ๋จ์์ ๋์ ๋ค์ด ์ฃผ์ด์ ธ ์์๋ ๊ฑฐ์ค๋ฆ๋์ ๊ฐ์ฅ ์ ์ ์์ ๋์ ์ผ๋ก ๊ตํ ํด์ฃผ๋ ค๋ฉด ์ด๋ป๊ฒ ์ฃผ๋ฉด ๋๋๊ฐ? ๊ฐ ๋จ์์ ๋์ ์ ๋ฌดํ์  ์ธ ์ ์๋ค.</pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์๋ ๋์ ์ ์ข๋ฅ๊ฐ์ N(1<=N<=12)์ด ์ฃผ์ด์ง๋ค. 
๋ ๋ฒ์งธ ์ค์๋ N๊ฐ์ ๋์ ์ ์ข๋ฅ๊ฐ ์ฃผ์ด์ง๊ณ , ๊ทธ ๋ค์์ค์ ๊ฑฐ์ฌ๋ฌ ์ค ๊ธ์ก M(1<=M<=500)์ด ์ฃผ์ด์ง๋ค.
๊ฐ ๋์ ์ ์ข๋ฅ๋ 100์์ ๋์ง ์๋๋ค.
<hr/>์ฒซ ๋ฒ์งธ ์ค์ ๊ฑฐ์ฌ๋ฌ ์ค ๋์ ์ ์ต์๊ฐ์๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
3
1 2 5
15
<hr/>3
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(m,arr){
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum){
    if ( sum > m ) return;
    if(L >= answer) return;
    if ( sum === m ) answer = Math.min(answer, L);
    else{
      for(let i = 0; i < n; i++){
        DFS(L+1,sum+arr[i]);
      }
    }
  }
  DFS(0,0);
 return answer;
}
let arr = [1,2,5];
console.log(solution(15,arr));
 ```

<br>

 <pre>
 ๐ฌ ๋ท๋ฌธ์ ์๋ ์ค๋ณต์์ด์ฒ๋ผ ๊ฐฏ์์ ๋ํ ์ ํ์ด ์๊ธฐ๋๋ฌธ์ if๋ฌธ ๊ฑธ๋ฆฌ๋ ์กฐ๊ฑด์
   ๋์ ํฉ์ด ๋ชฉํ ๊ฐ๊ฒฉ์ด๋ ๊ฐ๊ฒ๋๋ฉด ๋๋ฌํ Level๊ฐ์ด ๋์ ์ ๊ฐ์์ธ๋ฐ, 
   Math.min์ ์ด์ฉํด์ ์ต์๊ฐ์๋ฅผ ๊ณ์ ๋ฐ์ ธ์ answer์ ์ง์ด๋ฃ๋๊ฒ์ด๋ค. ๊ทผ๋ฐ
   ์ด๋ ๊ฒ Level์ ์ ํ์ด ์์๋๋, edge cutting์ ํด์ ๋ถํ์ํ ๋ฐ๋ณต์ด ์์ ์ 
   ์๋๋ก ์์ ๋ณด๋ฉด ํฉ์ด ๋ชฉํ ๊ฐ๋ณด๋ค ๋๊ฑฐ๋, ์ด๋ฏธ ๋์จ ์ต์๊ฐ์๋ณด๋ค ๋ง์ผ๋ฉด ๊ทธ๋ฅ return์ ๋ฐํํด์ค๋ค. 
</pre>
</div>	
</details>

<details>

<summary>8_10 ์์ด ๊ตฌํ๊ธฐ</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>10์ดํ์ N๊ฐ์ ์์ฐ์๊ฐ ์ฃผ์ด์ง๋ฉด ์ด ์ค M๊ฐ๋ฅผ ๋ฝ์ ์ผ๋ ฌ๋ก ๋์ดํ๋ ๋ฐฉ๋ฒ์ ๋ชจ๋ ์ถ๋ ฅํฉ๋๋ค.</pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ N(3<=N<=10)๊ณผ M(2<=M<=N) ์ด ์ฃผ์ด์ง๋๋ค.
๋ ๋ฒ์งธ ์ค์ N๊ฐ์ ์์ฐ์๊ฐ ์ค๋ฆ์ฐจ์์ผ๋ก ์ฃผ์ด์ง๋๋ค.
<hr/>์ฒซ ๋ฒ์งธ ์ค์ ๊ฒฐ๊ณผ๋ฅผ ์ถ๋ ฅํฉ๋๋ค. ๋งจ ๋ง์ง๋ง ์ด ๊ฒฝ์ฐ์ ์๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
์ถ๋ ฅ์์๋ ์ฌ์ ์์ผ๋ก ์ค๋ฆ์ฐจ์์ผ๋ก ์ถ๋ ฅํฉ๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
3 2
3 6 9
<hr/>3 6
3 9
6 3
6 9
9 3
9 6
6
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(m,arr){
  let answer = [];
  let n = arr.length;
  let ch = Array.from({length:n}, () => 0);
  let tmp = Array.from({length:m}, () => 0);
  function DFS(L){
    if(L===m){
      answer.push(tmp.slice());
    }
    else{
      for(let i = 0 ; i < n ; i++){
          if(ch[i] === 0){
            ch[i] = 1;
            tmp[L]=arr[i];
            DFS(L+1);
            ch[i] = 0;
          }}
    }
  }
  DFS(0)
  return answer;
}
let arr = [3,6,9];
console.log(solution(2,arr))
 ```

<br>

 <pre>
 ๐ฌ ์ค๋ณต ์์ด์ด ์๋๊ณ  ๊ทธ๋ฅ ์์ด์ด๊ธฐ๋๋ฌธ์ M๊ฐ ๋งํผ๋ฝ๋๋ฐ ์ผ๋จ ์ฝ๋๋ฅผ ๋ณด๋ฉด 
 ์์ด๋ก ๋ฝ์ ๊ฐ์ ์์๋ก ๋ฃ์ด๋๊ธฐ ์ํด tmp๋ผ๋ length๊ฐ M๊ฐ์ธ ๋ฐฐ์ด์ ๋ง๋ค์ด์ฃผ๊ณ  
 ์ค๋ณต์ ๋ฐฉ์งํ๊ธฐ ์ํด ch๋ผ๋ length N๊ฐ์ธ ๋ฐฐ์ด์ ๋ง๋ค์ด์ค๋ค.
 L๊ฐ์ด m์ ๋๋ฌํ๋ฉด, tmp์ ์์ธ ๊ฐ์ answer ์ pushํด์ฃผ๊ณ  
 ๊ทธ ์ธ๋ for ๋ฌธ์ผ๋ก n ์ ๊น์ง ๋๋ฉด์, ์ค๋ณต๊ฒ์ฌ๋ฅผ ํด์ค ๋ค์ 
 tmp[L]์ arr[i]๊ฐ์ ๋ฃ์ด์ฃผ๊ณ  ์ฌ์ฉํ i๊ฐ์ ch์ 1๋ก ํด์ฃผ๊ณ , 
 DFS(L+1)๋ก ์ฆ๊ฐํด์ฃผ๊ณ , ๋ค ๋๋์ ๋์์ค๋ฉด ch[i]์์ ์ฒดํฌํ๋๊ฑธ ํ์ด์ค๋ค.
</pre>
</div>
	
	
</details>
	
<details>

<summary>8_11 ํฉํ ๋ฆฌ์ผ</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>์์ฐ์ N์ ์๋ ฅํ๋ฉด N!๊ฐ์ ๊ตฌํ์ธ์.
N! = n*(n-1)*(n-2)*.....*2*1์๋๋ค.
๋ง์ฝ N=5๋ผ๋ฉด 5!=5*4*3*2*1=120์๋๋ค.</pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ์งธ ์ค์ ์์ฐ์ N(3<=n<=10)์ด ์๋ ฅ๋ฉ๋๋ค.
<hr/>์ฒซ์งธ ์ค์ Nํฉํ ๋ฆฌ์ผ ๊ฐ์ ์ถ๋ ฅํฉ๋๋ค
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
5
<hr/>120
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n){
  let answer = 0;
  function DFS(n){
    if(n===1) return 1;
    else return n*DFS(n-1)
  }
  answer = DFS(n);
  return answer;
}
console.log(solution(5))
 ```

<br>

 <pre>
 ๐ฌ ํฉํ ๋ฆฌ์ผ์ด๋ค. ๊ฐ๋จํ ์ฝ๋๋น..  ๋ค์์ ์์ด๊ด๋ จ ๋ฐ ๋ค๋ฅธ ์๊ณ ๋ฆฌ์ฆ๋ ์ฐธ์กฐํ๊ธฐ ์ํด... ๊ทผ๋ฐ ์ด๊ฒ ์์ ์ฐ์ธ๊ฒ์ฒ๋ผ 
 n*(n-1) .....2*1 ์ด๋ ๊ฒ ๊ฐ๋๊ฒ ํฉํ ๋ฆฌ์ผ์ธ๋ฐ. DFS๋๊น DFS(5)๋ถํฐ ์์ํด์ DFS(1)์์ ๋๋์ 
 ์คํํ๋ ์์ ์์ธ๊ฒ ํ๋์ฉ๋์๊ฐ๊ธฐ๋๋ฌธ์ ๊ณ์ฐํ๋ฉด 1*2....(n-1)*n ์ด๋ ๊ฒ ๊ณ์ฐ์ด ๋๋ค๊ณ  ๋ณด๋ฉด๋๋ค. (์ค์ํ๊ฐ?)
</pre>
</div>
</details>

<details>

<summary>8_12 ์กฐํฉ์ ๊ฒฝ์ฐ์(๋ฉ๋ชจ์ด์ ์ด์)</summary>
<div markdown="1">       
<br>


 ### โ Question

<sub>n</sub>C<sub>r</sub> = $\frac{n!}{(n-r)!r!} $ ๋ก ๊ณ์ฐํฉ๋๋ค.<br>
ํ์ง๋ง ์ฌ๋ฌ๋ถ์ ์ด ๊ณต์์ ์ฐ์ง์๊ณ  ๋ค์ ๊ณต์์ ์ฌ์ฉํ์ฌ ์ฌ๊ท๋ฅผ ์ด์ฉํด ์กฐํฉ์๋ฅผ ๊ตฌํด์ฃผ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.<br>
<sub>n</sub>C<sub>r</sub> = <sub>n-1</sub>C<sub>r-1</sub> + <sub>n-1</sub>C<sub>r</sub>


<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ์งธ ์ค์ ์์ฐ์ n(3<=n<=33)๊ณผ r(0<=r<=n)์ด ์๋ ฅ๋ฉ๋๋ค.
<hr/>์ฒซ์งธ ์ค์ ์กฐํฉ์๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
5 3
<hr/>10
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n, r){
let answer;
let dy = Array.from(Array(35), () => Array(35).fill(0))
function DFS(n,r){
  if(dy[n][r] > 0) return dy[n][r];
  if(n === r || r === 0) return 1;
  else return dy[n][r] = DFS(n-1, r-1)+DFS(n-1,r);
}
answer = DFS(n,r);
return answer;
}
console.log(solution(33,19));
 ```

<br>

  ```mermaid
  stateDiagram-v2
    5<sup>C</sup>3 --> 4<sup>C</sup>2  
    5<sup>C</sup>3 --> 4<sup>C</sup>3
    4<sup>C</sup>2 --> 3<sup>C</sup>1
    4<sup>C</sup>2 --> 3<sup>C</sup>2
    3<sup>C</sup>1 --> 2<sup>C</sup>0
    3<sup>C</sup>2 --> 2<sup>C</sup>1'
    3<sup>C</sup>2 --> 2<sup>C</sup>2'
    2<sup>C</sup>1' --> 1<sup>C</sup>0'
    2<sup>C</sup>1' --> 1<sup>C</sup>1'
    2<sup>C</sup>2' --> 1<sup>C</sup>1''
    2<sup>C</sup>2' --> 1<sup>C</sup>2'
    3<sup>C</sup>1 --> 2<sup>C</sup>1
    2<sup>C</sup>1 --> 1<sup>C</sup>0
    2<sup>C</sup>1 --> 1<sup>C</sup>1
    4<sup>C</sup>3 --> 3<sup>C</sup>2'
    4<sup>C</sup>3 --> 3<sup>C</sup>3
  ```
 <pre>
 ๐ฌ ์ฝ๊ฐ ์ด๋ฐ์์ผ๋ก DFS๋ก ๋ด๋ คํ๊ณ  ๊ฐ์ ๊ฒฝ์ฐ์ ์๋ฅผ ๊ตฌํ๋๋ฐ, ๋งจ ํ๋จ ๋ธ๋๋ ์ด์ฐจํผ 1์ด ๋์ค๋๊น 1๋ก ๋ฐํํด์ฃผ๊ณ , 
 ๋๋จธ์ง๋ค์ DFS(n-1, r-1)+DFS(n-1,r) ๋ก ์งํํ๋ฉด ๊ฐ์ด ๋์ค์ง๋ง ์ง๊ธ ์์ ์ฒ๋ผ 5, 3์ ๋ฃ์ผ๋ฉด 10๊ฐ์ง ๋ฐ์ ์์ผ๋ 
 ๊ต์ฅํ ๋นจ๋ฆฌ ๊ฒฐ๊ณผ๊ฐ ์ฒ๋ฆฌ๋์ง๋ง, ์ข ๋ ํฐ ์ซ์๊ฐ ๋์ค๋ฉด, ์ฐ์ฐ์ด ์ค๋๊ฑธ๋ฆฌ๊ฒ ๋๋ค. 
 ๊ทธ๋์ ์ ์๋์ '๋ฉ๋ชจ์ด์ ์ด์' ์ด๋ผ๋ ๊ฐ๋์ ์ฌ์ฉํ์๋๋ฐ, ์์์ ๋ดค๋ฏ์ด ์ผ์ชฝ์์ ์ด๋ฏธ ์งํํ ๋ธ๋๋ฅผ 
 ๋๊ฐ์ด ์ค๋ฅธ์ชฝ์์ ํ๊ณ ๋ด๋ ค๊ฐ๋ค๋ณด๋ ์ฐ์ฐ์ด ์ค๋๊ฑธ๋ฆฌ๋๋ฐ, ๊ทธ ์ผ์ชฝ ๋ธ๋์์ ๊ฐ์ ๋ธ๋ ๊ฒฐ๊ณผ๊ฐ์ 2์ฐจ์ ๋ฐฐ์ด์ ์ ์ฅ์ ํด์ 
 ๊ฒ์ฌ๋ฅผ ํ๋ค์ ๋ฐํ์ ํด์ฃผ๋ฉด ์๊ฐ ๋ณต์ก๋๋ฅผ ์์ฒญ๋๊ฒ ์ค์ฌ์ฃผ๊ฒ ๋๋ค. 
</pre>

</div>
</details>
	
<details>

<s><summary>8_13 ์์ด ์ถ์ธกํ๊ธฐ(์์ด, ์ดํญ๊ณ์ ์์ฉ)</summary></s>
<div markdown="1">       
<br>


 ### โ Question

 <pre>๊ฐ์ฅ ์์ค์ 1๋ถํฐ N๊น์ง์ ์ซ์๊ฐ ํ ๊ฐ์ฉ ์ ํ ์๋ค. 
 ๊ทธ๋ฆฌ๊ณ  ๋์งธ ์ค๋ถํฐ ์ฐจ๋ก๋๋ก ํ์ค์นผ์ ์ผ๊ฐํ์ฒ๋ผ ์์ ๋๊ฐ๋ฅผ ๋ํ ๊ฐ์ด ์ ์ฅ๋๊ฒ ๋๋ค. 
 ์๋ฅผ ๋ค์ด N์ด 4 ์ด๊ณ  ๊ฐ์ฅ ์ ์ค์ 3 1 2 4 ๊ฐ ์๋ค๊ณ  ํ์ ๋, ๋ค์๊ณผ ๊ฐ์ ์ผ๊ฐํ์ด ๊ทธ๋ ค์ง๋ค.
                   3 1 2 4
                    4 3 6
                     7 9
                      16 
N๊ณผ ๊ฐ์ฅ ๋ฐ์ ์๋ ์ซ์๊ฐ ์ฃผ์ด์ ธ ์์ ๋ ๊ฐ์ฅ ์์ค์ ์๋ ์ซ์๋ฅผ ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค. 
๋จ, ๋ต์ด ์ฌ๋ฌ๊ฐ์ง๊ฐ ๋์ค๋ ๊ฒฝ์ฐ์๋ ์ฌ์ ์์ผ๋ก ๊ฐ์ฅ ์์ ์ค๋ ๊ฒ์ ์ถ๋ ฅํ์ฌ์ผ ํ๋ค.
</pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ์งธ ์ค์ ๋๊ฐ์ ์ ์ N(1โคNโค10)๊ณผ F๊ฐ ์ฃผ์ด์ง๋ค. 
N์ ๊ฐ์ฅ ์์ค์ ์๋ ์ซ์์ ๊ฐ์๋ฅผ ์๋ฏธํ๋ฉฐ F๋ ๊ฐ์ฅ ๋ฐ์ ์ค์ ์๋ ์๋ก 1,000,000 ์ดํ์ด๋ค.
<hr/>์ฒซ์งธ ์ค์ ์ผ๊ฐํ์์ ๊ฐ์ฅ ์์ ๋ค์ด๊ฐ N๊ฐ์ ์ซ์๋ฅผ ๋น ์นธ์ ์ฌ์ด์ ๋๊ณ  ์ถ๋ ฅํ๋ค. 
๋ต์ด ์กด์ฌํ์ง ์๋ ๊ฒฝ์ฐ๋ ์๋ ฅ์ผ๋ก ์ฃผ์ด์ง์ง ์๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
4 16
<hr/>3 1 2 4
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n, f){
  let answer;
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({length:n+1}, ()=> 0);
  let p = Array.from({length:n}, ()=> 0);
  let b = Array.from({length:n}, ()=> 0);
  function combi(n,r){
    if(dy[n][r] > 0) return dy[n][r];
    if(n === r || r === 0) return 1;
    else return dy[n][r] = combi(n-1, r-1)+combi(n-1,r);
  }
  function DFS(L,sum){
    if(flag) return;
    if(L===n && sum===f){
      answer = p.slice();
      flag = 1;
    }
    else { 
      for(let i = 1; i <=n ; i++){
        if(ch[i] === 0){
          ch[i] = 1;
          p[L] = i;
          DFS(L+1, sum+(b[L]*p[L]));
          ch[i] = 0;
        }
      }
    }
  }
  for( let i = 0; i < n ; i++){
    b[i] = combi(n-1, i)
  }
  DFS(0,0);
  return answer;
  }
  console.log(solution(4,16));
 ```

<br>

  ```mermaid
  stateDiagram-v2
    1 --> (1+2)
    (1+2) --> (1+2+2+3)
    2 --> (1+2)
    (2+3) --> (1+2+2+3)
    2 --> (2+3)
    (2+3) --> (2+3+3+4)
    (3+4) --> (2+3+3+4)
    3 --> (2+3)
    3 --> (3+4)
    4 --> (3+4)
    (1+2+2+3) --> (1+2+2+2+3+3+3+4)
    (2+3+3+4) --> (1+2+2+2+3+3+3+4)
    
  ```


 <pre>
 ๐ฌ  ์์ง ์ดํด๋ฅผ ๋ชปํ ๋ฌธ์ . 
</pre>

</div>
	
</details>
<details>

<summary>8_14 ์กฐํฉ ๊ตฌํ๊ธฐ</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>1๋ถํฐ N๊น์ง ๋ฒํธ๊ฐ ์ ํ ๊ตฌ์ฌ์ด ์์ต๋๋ค. ์ด ์ค M๊ฐ๋ฅผ ๋ฝ๋ ๋ฐฉ๋ฒ์ ์๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
</pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ N(3<=N<=10)๊ณผ M(2<=M<=N) ์ด ์ฃผ์ด์ง๋๋ค.
<hr/>์ฒซ ๋ฒ์งธ ์ค์ ๊ฒฐ๊ณผ๋ฅผ ์ถ๋ ฅํฉ๋๋ค. ๋งจ ๋ง์ง๋ง ์ด ๊ฒฝ์ฐ์ ์๋ฅผ ์ถ๋ ฅํฉ๋๋ค. ์ถ๋ ฅ์์๋ ์ฌ์ ์์ผ๋ก ์ค๋ฆ์ฐจ์์ผ๋ก ์ถ๋ ฅํฉ๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
4 2
<hr/>1 2
1 3
1 4
2 3
2 4
3 4
6
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n,m){
  let answer = [];
  let tmp = Array.from({length:m}, () => 0);
  function DFS(L,s){
    if(L === m){
      answer.push(tmp.slice());
    }
    else {
      for ( let i = s ; i <= n; i++){
        tmp[L]= i;
        DFS(L+1, i+1);
      }
    }
  }
  DFS(0,1)
  return answer;
}
console.log(solution(4, 2));
 ```

<br>



 <pre>
 ๐ฌ  ์กฐํฉ์์๋ 2, 1 ์ด๋ 1,2 ๊ฐ ๋๊ฐ๋ค๊ณ  ๋ณด๊ธฐ์ ์ค๋ณต์ ์์ ์ค์ผํ๋ค. 
 ๊ทธ๋์ ์ ์ด์ ์ฌ๊ท๋ฅผ ์์ํ ๋ 0, 1์ ๋ฃ์ด์ฃผ๊ณ , ์ฌ๊ท์ฐํ๋๋ง๋ค L๋ฒ ์ธ๋ฑ์ค์ 
 for๋ฌธ์ ํตํ i ๋ฅผ ๋ฃ์ด์ค์ผ๋ก์จ ์ค๋ฆ์ฐจ์๋๋ก ์ถ๋ ฅ๋๋๋ฐ, ์์  ๋ณต์ฌ๋ฅผ ์ํด์ Pushํด์ค๋ slice()๋ฅผ ์ด์ฉํ๋ค. 
</pre>
</div>
</details>

<details>

<summary>8_15 ์๋ค์ ์กฐํฉ</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>N๊ฐ์ ์ ์๊ฐ ์ฃผ์ด์ง๋ฉด ๊ทธ ์ซ์๋ค ์ค K๊ฐ๋ฅผ ๋ฝ๋ ์กฐํฉ์ ํฉ์ด ์์์ ์ ์ 
 M์ ๋ฐฐ์์ธ ๊ฐ์๋ ๋ช ๊ฐ๊ฐ ์๋์ง ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. 
 ์๋ฅผ ๋ค๋ฉด 5๊ฐ์ ์ซ์ 2 4 5 8 12๊ฐ ์ฃผ์ด์ง๊ณ , 3๊ฐ๋ฅผ ๋ฝ์ ์กฐํฉ์ ํฉ์ด 6์ ๋ฐฐ์์ธ ์กฐํฉ์ ์ฐพ์ผ๋ฉด 4+8+12 2+4+12๋ก 2๊ฐ์ง๊ฐ ์์ต๋๋ค.
</pre>

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ์ค์ ์ ์์ ๊ฐ์ N(3<=N<=20)๊ณผ ์์์ ์ ์ K(2<=K<=N)๊ฐ ์ฃผ์ด์ง๊ณ ,
๋ ๋ฒ์งธ ์ค์๋ N๊ฐ์ ์ ์๊ฐ ์ฃผ์ด์ง๋ค. ์ธ ๋ฒ์งธ ์ค์ M์ด ์ฃผ์ด์ง๋๋ค.
<hr/>์ด ๊ฐ์ง์๋ฅผ ์ถ๋ ฅํฉ๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
5 3
2 4 5 8 12
6
<hr/>2
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n,k,arr,m){
  let answer= 0;
  let tmp = Array.from({length:k});
  function DFS(L,s,sum){
    if(L === k )
    {
      if(sum%m === 0) answer++;
      console.log(sum, tmp);
    }
    else {
      for(let i = s ; i < n; i++){
        tmp[L] = arr[i];
        DFS(L+1, i+1, sum+arr[i])
      }
    }
  }
  DFS(0,0,0);
  return answer; 
}
let arr = [2,4,5,8,12];
console.log(solution(5,3,arr,6))
 ```

<br>



 <pre>
 ๐ฌ  for๋ฌธ์ ํตํด ์ฌ๊ทํจ์๋ฅผ ํตํด 3๊ฐ์ฉ ๋ฝ์๋ด์ sum ์ ์ฌํด๋์ ๋ค์์ L๊ฐ์ด m๊ณผ ๊ฐ์์ง๋ฉด,  
 sum๊ฐ์ด 6์ ๋ฐฐ์์ธ์ง ํ์ธ์ ํด์ฃผ๊ณ  ๋ง๋ค๋ฉด answer์ ์นด์ดํธ๋ฅผ ํด์ฃผ๊ณ  ๊ณ์ ๋ฐ๋ณต,
</pre>

</div>	
</details>

<br> 

## ์ฑํฐ9 - แแณแแขแแณแแช แแกแทแแขแจ(DFS, BFS(แแฅแฒแแตแแฎแแฅแซ))

<details>

<summary>9_1 ๊ทธ๋ํ์ ์ธ์ ํ๋ ฌ</summary>
<div markdown="1">       
<br>






## 1. ๋ฌด๋ฐฉํฅ ๊ทธ๋ํ 

```mermaid
flowchart LR
    1---2
    2---5
    1---3
    3---4
    2---4
```
---
  
  |a|b|
  |---|---|
  |1|2|
  |1|3|
  |2|4|
  |3|4|
  |2|5|

---

|-|-|1|2|3|4|5| 
|---|---|---|---|---|---|---|
|-|-|-|-|-|-|-|
|1|-|0|1|1|0|0|
|2|-|1|0|0|1|1|
|3|-|1|0|0|1|0|
|4|-|0|1|0|0|0|
|5|-|0|0|0|0|0|

---

<pre>
๐ฌ ๋ฐฉํฅ์ด ์๋ ๊ทธ๋ํ์ด๊ธฐ๋๋ฌธ์ ํ์์ ์ด๋ก, ์ด์์ ํ์ผ๋ก <br>graph[a][b]= 1;<br>graph[b][a]= 1; 
์๋ ฅ ๊ฐ a,b 2์ฐจ์ ๋ฐฐ์ด์ ํ๊ธฐํด์ค๋ค. 
</pre>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## 2. ๋ฐฉํฅ ๊ทธ๋ํ 


```mermaid
flowchart LR
    1-->2
    2-->5
    1-->3
    3-->4
    4-->2
```
---

|a|b|
|---|---|
|1|2|
|1|3|
|3|4|
|4|2|
|2|5|

---

|-|-|1|2|3|4|5| 
|---|---|---|---|---|---|---|
|-|-|-|-|-|-|-|
|1|-|0|1|1|0|0|
|2|-|0|0|0|0|1|
|3|-|0|0|0|1|0|
|4|-|0|1|0|0|0|
|5|-|0|0|0|0|0|

---

<pre>
๐ฌ ๋ฐฉํฅ ์๋ ๊ทธ๋ํ์ด๊ธฐ๋๋ฌธ์ ํ์์ ์ด๋ก๋ง<br>graph[a][b]= 1; ์๋ ฅ ๊ฐ a,b 2์ฐจ์ ๋ฐฐ์ด์ 1๋ก ํ๊ธฐํด์ค๋ค. 
</pre>



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


## 3. ๊ฐ์ค์น ๋ฐฉํฅ ๊ทธ๋ํ

```mermaid
flowchart LR
    1--2-->2 
    2--5-->5
    1--4-->3
    3--5-->4
    4--2-->2
```
---

|a|b|c|
|---|---|---|
|1|2|2|
|1|3|4|
|3|4|5|
|4|2|2|
|2|5|5|

---

|-|-|1|2|3|4|5| 
|---|---|---|---|---|---|---|
| -|- |- | -|- | -| -|
|1|-|0|2|4|0|0|
|2|-|0|0|0|0|5|
|3|-|0|0|0|5|0|
|4|-|0|2|0|0|0|
|5|-|0|0|0|0|0|


---

<pre>
๐ฌ ๋ฐฉํฅ ์๋ ๊ทธ๋ํ์ด๊ธฐ๋๋ฌธ์ ํ์์ ์ด๋ก๋ง<br>graph[a][b]= c; ์๋ ฅ ๊ฐ a,b 2์ฐจ์ ๋ฐฐ์ด์ c๋ก ํ๊ธฐํด์ค๋ค. 
</pre>

</details>
<details>
<summary>9_2 ๊ฒฝ๋ก ํ์(์ธ์ ํ๋ ฌ)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>๋ฐฉํฅ๊ทธ๋ํ๊ฐ ์ฃผ์ด์ง๋ฉด 1๋ฒ ์ ์ ์์ N๋ฒ ์ ์ ์ผ๋ก ๊ฐ๋ ๋ชจ๋  ๊ฒฝ๋ก์ ๊ฐ์ง ์๋ฅผ ์ถ๋ ฅํ๋ ํ
๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. ์๋ ๊ทธ๋ํ์์ 1๋ฒ ์ ์ ์์ 5๋ฒ ์ ์ ์ผ๋ก ๊ฐ๋ ๊ฐ์ง ์๋ ์ด 6 ๊ฐ์ง์๋๋ค. 
1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5
</pre>
```mermaid
flowchart LR
    1-->2
    4-->5
    1-->3
    1-->4
    2-->5
    2-->3
    3-->4
    4-->2
```

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ์งธ ์ค์๋ ์ ์ ์ ์ N(1<=N<=20)์ ๊ฐ์ ์ ์ M๊ฐ ์ฃผ์ด์ง๋ค. ๊ทธ ๋ค์๋ถํฐ M์ค์ ๊ฑธ์ณ ์ฐ๊ฒฐ์ ๋ณด๊ฐ ์ฃผ์ด์ง๋ค.
<hr/>์ด ๊ฐ์ง์๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
5 9
1 2
1 3
1 4
2 1
2 3
2 5
3 4
4 2
4 5 
<hr/>6
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n,arr){
  let answer = 0;
  let graph=Array.from(Array(n+1), ()=>Array(n+1).fill(0));
  let ch = Array.from({length:n+1} , () => 0) 
  path=[];
  for(let[a,b] of arr)
  {
    graph[a][b] = 1;
  }
  function DFS(v){
    if(v===n){
      answer++;
    }
    else{
      for(let i = 1 ; i <= n; i++){
        if(graph[v][i] === 1 && ch[i] === 0){
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop()
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}
let arr = [
  [1,2],
  [1,3],
  [1,4],
  [2,1],
  [2,3],
  [2,5],
  [3,4],
  [4,2],
  [4,5]
]
console.log(solution(5,arr))
 ```

<br>



 <pre>
 ๐ฌ  ์ผ๋จ ์๋ ฅ์ผ๋ก ๊ฐ์ ์ ๋ฐฐ์ด๋ก ๋ง๋ค์ด์ ๋ฃ์ด์ฃผ๊ณ , ์ ์ ์ ์๋ ๋ฃ์ด์ค๋ค.
 ๋จผ์  2์ฐจ ๋ฐฐ์ด ๋ณ์๋ฅผ ๋ง๋ค์ด 0์ผ๋ก ์ด๊ธฐํ๋ฅผ ํด์ฃผ๊ณ , ์ด๋ฏธ ์ง๋๊ฐ ์ ์ ์
 ์ฒดํฌํ๊ธฐ ์ํ ch ๋ฐฐ์ด๋ ๋ง๋ค์ด ์ด๊ธฐํํด์ค๋ค. ๊ทธ๋ฆฌ๊ณ  for of๋ฅผ ๋๋ ค์ 
 2์ฐจ ๋ฐฐ์ด์ ๊ฐ์  ์ขํ์ ์๋ ๊ณณ๋ง๋ค 1๋ก ์ฑ์์ค๋ค. 
 ๊ทธ๋ฆฌ๊ณ  ๊ฒฝ๋ก ํ์์ ๋ฌด์กฐ๊ฑด์ด 1๋ถํฐ ์์ํ๊ธฐ ๋๋ฌธ์ ch[1]์ 1๋ก ๋ง์์ฃผ๊ณ 
 ์ฌ๊ทํจ์๋ฅผ ์์ํ๋๋ฐ, ์กฐ๊ฑด์ ๋ญ ๋น์ฐํ ์ ์ ์ด์ฆ v๊ฐ์ด 5๊ฐ ๋๋ฉด, answer์ ์นด์ดํธ๋ฅผ ํด์ฃผ๊ณ , 
 ๊ทธ ์ ๊น์ง else์์ ์ฌ๊ท๋ฅผ ๋๊ฒ๋๋๋ฐ ์ด๋ ๊ฐ์ ์ ํด๋น๋๋์ง graph ๋ฐฐ์ด์์ ํ์ธํ๊ณ  
 ch ๋ฐฐ์ด์์ ์ด๋ฏธ ์ง๋์จ ์ ์ ์ธ์ง if ์กฐ๊ฑด์ผ๋ก ๋๋ฆฌ๊ฒ ๋๋๋ฐ, ์กฐ๊ฑด์ ๋ถํฉ๋๋ฉด ํด๋น i๊ฐ 
 ์ฆ ์ ์  ๊ฐ์ ํด๋น๋๋ ch๋ฐฐ์ด์ ์ธ๋ฑ์ค๋ฅผ 1๋ก ์ฒดํฌํด์ค๋ค. 
 ๊ทธ๋ฆฌ๊ณ  ์ฌ๊ท์์ ๋์์ค๋ฉด ch๋ฅผ ํ์ด์ฃผ๋ฉด์ ๊ณ์ ๋์๊ฐ๋ ๋ฐฉ์์ด๋ค. 
</pre>

</div>
</details>
<details>
<summary>9_3 ๊ฒฝ๋ก ํ์(์ธ์ ๋ฆฌ์คํธ)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>๋ฐฉํฅ๊ทธ๋ํ๊ฐ ์ฃผ์ด์ง๋ฉด 1๋ฒ ์ ์ ์์ N๋ฒ ์ ์ ์ผ๋ก ๊ฐ๋ ๋ชจ๋  ๊ฒฝ๋ก์ ๊ฐ์ง ์๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. 
 ์๋ ๊ทธ๋ํ์์ 1๋ฒ ์ ์ ์์ 5๋ฒ ์ ์ ์ผ๋ก ๊ฐ๋ ๊ฐ์ง ์๋ ์ด 6 ๊ฐ์ง์๋๋ค. 
 1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5

</pre> 
```mermaid
flowchart LR
    1-->2
    1-->3
    1-->4
    2-->1
    2-->3
    2-->5
    3-->4
    4-->2
    4-->5
```

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ์งธ ์ค์๋ ์ ์ ์ ์ N(1<=N<=20)์ ๊ฐ์ ์ ์ M๊ฐ ์ฃผ์ด์ง๋ค. ๊ทธ ๋ค์๋ถํฐ M์ค์ ๊ฑธ์ณ ์ฐ๊ฒฐ์ ๋ณด๊ฐ ์ฃผ์ด์ง๋ค.
<hr/>์ด ๊ฐ์ง์๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
5 9
1 2
1 3
1 4
2 1
2 3
2 5
3 4
4 2
4 5  
<hr/>6
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(n,arr){
  let answer = 0;
  let graph=Array.from(Array(n+1), ()=>Array());
  let ch = Array.from({length:n+1} , () => 0);
  let path = [];
  for(let[a,b] of arr)
  {
    graph[a].push(b)
  }
  function DFS(v){
    if(v===n){
      answer++;
      console.log(path);
    }
    else{
      for(let i = 0 ; i < graph[v].length; i++){
        if(ch[graph[v][i]] === 0){
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}
let arr = [
  [1,2],
  [1,3],
  [1,4],
  [2,1],
  [2,3],
  [2,5],
  [3,4],
  [4,2],
  [4,5]
]
console.log(solution(5,arr))
 ```

<br>



 <pre>
 ๐ฌ  9_2 ๋ฌธ์ ๋ ๊ฐ์ ์ง๋ฌธ์ด์ง๋ง ์์์ ํผ ๊ฒ์ ์ธ์  ํ๋ ฌ์ด๊ณ  ์ด๋ฒ์๋ ์ธ์ ๋ฆฌ์คํธ๋ก ํ๋ผ๋ ์ง์๋ฅผ ๋ด๋ฆฌ์จ๋ค.
 ๊ฒฝ์ฐ์ ์๊ฐ ์์๋๋ ์ธ์  ํ๋ ฌ๋ก ํ ์ ์์ง๋ง ์ข ๋ง์์ง๋ฉด ์ธ์ ๋ฆฌ์คํธ๋ก ํ์ด์ผ ํจ์ฌ ๋ซ๋ค๊ณ  ํ์จ๋ค.<br>์ผ๋จ 2์ฐจ ๋ฐฐ์ด ๋ณ์ graph๋ฅผ ํ๋ ๋ง๋ค์ด ์์๋ ๋น์ ๋๋๋ค. <br>๊ทธ๋ฆฌ๊ณ  ๋ค๋ ธ๋ ์ ์ ์ ์ฒดํฌํด์ฃผ๊ธฐ์ํด ch ๋ฐฐ์ด์ ํ๋ ๋ง๋ค์ด ์ค๋ค<br>๊ทธ๋ฆฌ๊ณ  for of๋ฌธ์ ์ฌ์ฉํด, arr์ ์์ ๊ฐ๋ค์ ์ด์ฉํด์ ๊ฐ์ ๋ฃ์ด์ค๋ค.<br> ์ถ๋ฐ์ ์  ๋ฌด์กฐ๊ฑด 1์ด๋ฏ๋ก ch[1] = 1์ ์ ์ผ ๋จผ์  ๋ฃ์ด์ฃผ๊ณ , ์ฌ๊ทํจ์๋ฅผ ์คํํ๋ค.<br>๋ง์ง๋ง ์ ์ ์ v๊ฐ์ด ๋์ฐฉํ๋ฉด answer++๋ฅผ ํด์ฃผ๊ณ <br>๊ทธ์ธ์๋ for๋ฌธ์ graph ํ ์ธ๋ฑ์ค์ length ๋งํผ ๋๋ ค์ ํด๋น ์ ์ ์ด ch๊ฐ 1์ธ์ง ํ์ธํ๋ค<br>์๋ค๋ฉด ํด๋น ch ์ธ๋ฑ์ค์ 1์ ์ฒดํฌํด์ฃผ๊ณ , ๋ค์ ์ฌ๊ท๋ฅผ ๋๋ฆฐ๋ค.<br>๊ทธ๋ฆฌ๊ณ  ์ฌ๊ท๊ฐ ๋๋๋ฉด ch๋ฅผ ํ์ด์ค์ ๋ค์ ๊ฒฝ์ฐ์ ์๋ฅผ ๊ฐ๊ฒ๋ํ๋ค.
</pre>
</div>
</details>

<details>
<summary>9_4 ๋ฏธ๋กํ์(DFS)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>7*7 ๊ฒฉ์ํ ๋ฏธ๋ก๋ฅผ ํ์ถํ๋ ๊ฒฝ๋ก์ ๊ฐ์ง์๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์. 
 ์ถ๋ฐ์ ์ ๊ฒฉ์์ (1, 1) ์ขํ์ด๊ณ , ํ์ถ ๋์ฐฉ์ ์ (7, 7)์ขํ์ด๋ค. 
 ๊ฒฉ์ํ์ 1์ ๋ฒฝ์ด๊ณ , 0์ ํต๋ก์ด๋ค. ๊ฒฉ์ํ์ ์์ง์์ ์ํ์ข์ฐ๋ก๋ง ์์ง์ธ๋ค. 
 ๋ฏธ๋ก๊ฐ ๋ค์๊ณผ ๊ฐ๋ค๋ฉด์ง๋์์ ์ถ๋ฐ์ ์์ ๋์ฐฉ์ ๊น์ง ๊ฐ ์ ์๋ ๋ฐฉ๋ฒ์ ์๋ 8๊ฐ์ง์ด๋ค</pre> 

## ์ง๋

 |์ถ๋ฐ|0|0|0|0|0|0|
 |:--:|:--:|:--:|:--:|:--:|:--:|:--:|
 |0|1|1|1|1|1|0|
 |0|0|0|1|0|0|0|
 |1|1|0|1|0|1|1|
 |1|1|0|0|0|0|0|
 |1|1|0|1|1|0|0|
 |1|0|0|0|0|0|๋์ฐฉ|


 
<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
7*7 ๊ฒฉ์ํ์ ์ ๋ณด๊ฐ ์ฃผ์ด์ง๋๋ค.
<hr/>์ฒซ ๋ฒ์งธ ์ค์ ๊ฒฝ๋ก์ ๊ฐ์ง์๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0
<hr/>8
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(board){
  let answer = 0;
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
    function DFS(x,y){
      if(x === 6 && y === 6) answer++;
      else{
        for(let k = 0; k < 4; k++){
          let nx= x+dx[k];
          let ny= y+dy[k];
          if(nx>=0 && nx <= 6 &&ny>=0 && ny<=6 && board[nx][ny] === 0){
            board[nx][ny] = 1;
            DFS(nx,ny);
            board[nx][ny]=0;
          }
        }
      }
    }
  board[0][0] = 1;
  DFS(0,0);
  return answer ;
}
let arr = [
  [0,0,0,0,0,0,0],
  [0,1,1,1,1,1,0],
  [0,0,0,1,0,0,0],
  [1,1,0,1,0,1,1],
  [1,1,0,0,0,0,1],
  [1,1,0,1,1,0,0],
  [1,0,0,0,0,0,0]
];
console.log(solution(arr));

 ```
<br>



 <pre>
 ๐ฌ  ์ผ๋จ ๋ฏธ๋ก์์ ๋ฐฉํฅ์ ์ด 4๋ฐฉํฅ์ผ๋ก ๊ฐ๊ธฐ๋๋ฌธ์ ํด๋น ๋ฐฉํฅ ์ขํ๋ก ๊ฐ๊ธฐ์ํด์ dx, dy ๋ฐฐ์ด์ ๋ง๋ค์ด์ค๋๋ค. 
 ๊ทธ๋ฆฌ๊ณ  ์ฒ์๋ถํฐ 2์ฐจ ๋ฐฐ์ด์ ์ด๋ฏธ ์ธ์๋ก ๊ฐ์ ธ์์ ๋ฐ๋ก 2์ฐจ๋ฐฐ์ด์ ๋ง๋ค์ด์ฃผ์ง ์๋๋ค.
 board[0][0]์์น๋ ์ถ๋ฐ์ด๊ธฐ ๋๋ฌธ์, 1๋ก ๋จผ์  ์ฒดํฌํด์ฃผ๊ณ , ์ฌ๊ท๋ฅผ ์์ํด์ค๋๋ค. 
 x,y๊ฐ ๊ฐ๊ฐ 6์ด๋๋ฉด ๋์ฐฉ์ด๋๊น answer์ +1 ์ ํด์ฃผ๊ณ ,
 else ์์๋ ํ์ฌ ์ขํ์์ 4๋ฐฉํฅ์ ๊ฐ๊ฐ for๋ฌธ์ผ๋ก ํ์ํด์ฃผ๋๋ฐ, ์ด๋ dx,dy ๋ฐฐ์ด์ ์ด์ฉํด์
 ํ์ฌ ์ขํ์ ๊ฐ์ ์์ ํ๊ณ , nx,ny๋ผ๋ ๋ณ์์ ์ฌ ํ ๋นํ์ฌ, ๋ซ๋ ค์๋ ๊ธธ์ธ์ง ํ์ธ์ ํ๊ณ  ๋ง๋ค๋ฉด
 ํด๋น board ์ขํ์ 1๋ก ์ฒดํฌํด์ฃผ๊ณ , ์ฌ๊ท๊ฐ ๋๋๋ฉด ๋ค์ ์ฒดํฌ๋ฅผ ํ์ด์ฃผ๊ฒ๋ํด์ฃผ๋ฉด 
 ์ด์  ์ฌ๊ท๋ฅผ ๋๋ฉฐ ์ด ๊ฒฝ๋ก์ ์๋ฅผ ์ถ๋ ฅํ๋ค. 
</pre>

</div>
</details>

<details>
<summary>9_5 ์ด์งํธ๋ฆฌ ๋์ด์ฐ์ ํ์(BFS)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>์๋ ๊ทธ๋ฆผ๊ณผ ๊ฐ์ ์ด์งํธ๋ฆฌ๋ฅผ ๋์ด์ฐ์ ํ์ํด ๋ณด์ธ์. </pre> 

```mermaid
stateDiagram-v2
    1-->2
    1-->3
    2-->4
    2-->5
    3-->6
    3-->7
  ``` 

 
<br>

### ๐  ์ถ๋ ฅ

<br>

<pre>๋์ด ์ฐ์  ํ์ : 1 2 3 4 5 6 7</pre>




 <br>

 ### โผ๏ธ Solution

 ```javascript
// ์ต๋จ๊ฑฐ๋ฆฌ ๊ตฌํ ๋ BFS๋ฅผ ๋ง์ด ์ 

function solution(){
  let answer = "";
  let queue = [];
  queue.push(1);
  while(queue.length){
    let v = queue.shift()
    answer+=  v+" ";
    for(let nv of [v*2, v*2+1]){
      if(nv>7) continue;
      queue.push(nv);
    }
  }
  return answer;
}
console.log(solution())
 ```
<br>



 <pre>
 ๐ฌ  ๋์ด ์ฐ์  ํ์ (BFS)์ queue๋ฅผ ์ฌ์ฉํ๋ค. queue์ ์์ ๋ธ๋์ธ 1์ pushํ๊ณ  

    1. while๋ฌธ์ด ์์๋๋๋ฐ, queue.length๊ฐ 0์ด๋๋ฉด ๋ฉ์ถ๋ ์กฐ๊ฑด์ ์์๋๋ค. 
    2. ๋ณ์ v์ queue.shift()๋ก queue ๋งจ์ ๋ฐฐ์ด์ v์ ๋ฃ์ด์ค๋ค. 
    3. answer์ v+" "; ๋ก ์ซ์์ ์คํ์ด์ค๋ฅผ ๋ฃ์ด์ฃผ๊ณ  ๋ํด์ค๋ค. 
    4. ์์ ๋ค์ด๊ทธ๋จ์ ๋ณด๋ฉด ๊ท์น์ด ๋ณด์ผ ๊ฒ์ด๋ค. ๋ธ๋์ *2, *2+1 ์ธ๋ฐ.
    5. for( ๋ณ์ nv์ ์๊น ๋ฃ์๋ ๋ณ์์ (v*2),(v*2+1) ์ ๋ฃ์ด์ค๋ค.)
    6. nv๊ฐ 7์ด๊ณผ ๋๋ฉด ๋ค์ ์ฝ๋๋ฅผ ๋์ด๊ฐ๋ค. ( ์ต๋๊ฐ์ด 7 ์ด๋๊น )
    7. ์ดํ๋ queue์ nv๋ฅผ push ํ๋ค. 
    8. return answer; 
</pre>

</div>




</details>


<details>
<summary>9_6 ์ก์์ง ์ฐพ๊ธฐ(BFS : ์ํํธ๋ฆฌํ์)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>ํ์๋ ์ก์์ง๋ฅผ ์์ด๋ฒ๋ ธ๋ค. ๋คํํ ์ก์์ง์๋ ์์น์ถ์ ๊ธฐ๊ฐ ๋ฌ๋ ค ์๋ค. 
 ํ์์ ์์น์ ์ก์์ง์ ์์น๊ฐ ์์ง์ ์์ ์ขํ ์ ์ผ๋ก ์ฃผ์ด์ง๋ฉด ํ์๋ ํ์ฌ ์์น์์ ์ก์์ง์ ์์น๊น์ง ๋ค์๊ณผ ๊ฐ์ ๋ฐฉ๋ฒ์ผ๋ก ์ด๋ํ๋ค. 
 ์ก์์ง๋ ์์ง์ด์ง ์๊ณ  ์ ์๋ฆฌ์ ์๋ค.ํ์๋ ์ค์นด์ด ์ฝฉ์ฝฉ์ ํ๊ณ  ๊ฐ๋๋ฐ ํ ๋ฒ์ ์ ํ๋ก ์์ผ๋ก 1, ๋ค๋ก 1, ์์ผ๋ก 5๋ฅผ ์ด๋ํ  ์์๋ค. 
 ์ต์ ๋ช ๋ฒ์ ์ ํ๋ก ํ์๊ฐ ์ก์์ง์ ์์น๊น์ง ๊ฐ ์ ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.</pre> 

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ํ์์ ์์น S์ ์ก์์ง์ ์์น E๊ฐ ์ฃผ์ด์ง๋ค. ์ง์ ์ ์ขํ ์ ์ 1๋ถํฐ 10,000๊น์ง์ด๋ค.
<hr/>์ ํ์ ์ต์ํ์๋ฅผ ๊ตฌํ๋ค. ๋ต์ 1์ด์์๋๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
5 14,  8 3
<hr/>3,      5
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(s,e){
  let answer = 0;
  let ch=Array.from({length:10001}, ()=>0);
  let dis=Array.from({length:10001}, ()=>0);
  let queue = [];
  ch[s]= 1;
  queue.push(s);
  dis[s]= 0;
  while(queue.length){
    let x = queue.shift();
    for(let nx of [x-1, x+1, x+5]){
      if(nx === e) return dis[x]+1;
      if(nx > 0 && nx <= 10000 && ch[nx] === 0 ){
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x]+1;
      }
    }
  }
  return answer;
}
console.log(solution(8,3))
 ```
<br>



 <pre>
 ๐ฌ  ์ผ๋จ ํ์์ ์์น์์ ์ก์์ง์ ์์น๋ฅผ ๋์ด ์ฐ์  ํ์์ผ๋ก ์ฐพ๋๊ฑด๋ฐ Level๊ฐ์ด ์ฆ ํ์์ ์ก์์ง ๊ฐ์ ๊ฑฐ๋ฆฌ๋ค.
    ์ผ๋จ ํ์์์ ๊ฐ๋ ๋ธ๋๋ก ๋๊ฐ๋ ๊ฒ์ ๋ง๊ธฐ์ํด ch ๋ฐฐ์ด์ ๋ง๋ค์ด์ฃผ๊ณ , ํ๋ฒ ๋ ๋ฒจ์ด ๋ด๋ ค๊ฐ๋๋ง๋ค, 
    ๋ ๋ฒจ์ด ๋ด๋ ค๊ฐ๋ฉด์ ๋ง๋ ๋ธ๋์ค์ ์ก์์ง ์์น๊ฐ ์๋ค๋ฉด dis[x]+1 ๋ฅผ ๋ฐ๋ฉํ๊ณ , ์๋๋ฉด ๋ ๋ฒจ์ด 00๋ณด๋ค ๋๊ณ , 
    10000์ดํ์ด๋ฉฐ, ch๋ก ๊ฑฐ์ณ๊ฐ์ ์ด ์๋์ง ํ์ธํ๋ค๋ฉด, ch[nx]์ 1์ ๋ฃ์ด ์ฒดํฌํด์ฃผ๊ณ , queue์ ํด๋น
    ๋ ๋ฒจ์ ๋ฃ์ด์ค๋ค์์, dis[nx]์ ๋ฐฉ๊ธ ์  ๋ ๋ฒจ์ +1 ํด์ ๋ฃ์ด์ฃผ๋ฉด์ ๊ฑฐ๋ฆฌ๋ฅผ ๊ตฌํ๋ ๊ฒ์ด๋ค.
</pre>

</div>

</details>

<details>
<summary>9_7 ์ฌ๋๋ผ ์์ผ๋๋(DFS ํ์ฉ)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>N*N์ ์ฌ๋๋ผ ์์ผ๋๋์ ์ง๋๊ฐ ๊ฒฉ์ํ์ ์ ๋ณด๋ก ์ฃผ์ด์ง๋๋ค. ๊ฐ ์ฌ์ 1๋ก ํ์๋์ด ์ํ์ข์ฐ์ ๋๊ฐ์ ์ผ๋ก ์ฐ๊ฒฐ๋์ด ์์ผ๋ฉฐ,<br> 
 0์ ๋ฐ๋ค์๋๋ค. ์ฌ๋๋ผ ์์ผ๋๋์ ๋ช ๊ฐ์ ์ฌ์ด ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.</pre> 

<br>

|1|1|0|0|0|1|0|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|0|1|1|0|1|1|0|
|0|1|0|0|0|0|0|
|0|0|0|1|0|1|1|
|1|1|0|1|1|0|0|
|1|0|0|0|1|0|0|
|1|0|1|0|1|0|0|

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ N(3<=N<=20)์ด ์ฃผ์ด์ง๋๋ค.<br>
๋ ๋ฒ์งธ ์ค๋ถํฐ ๊ฒฉ์ํ ์ ๋ณด๊ฐ ์ฃผ์ด์ง๋ค.
<hr/>์ฒซ ๋ฒ์งธ ์ค์ ์ฌ์ ๊ฐ์๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
7
1 1 0 0 0 1 0
0 1 1 0 1 1 0
0 1 0 0 0 0 0
0 0 0 1 0 1 1
1 1 0 1 1 0 0
1 0 0 0 1 0 0
1 0 1 0 1 0 0
<hr/>5
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(arr){
  let answer = 0;
  let n = arr.length;
  let dx = [-1,-1,0,1,1,1,0,-1];
  let dy = [0,-1,-1,-1,0,1,1,1];
  
function DFS(x,y){
  arr[x][y] = 0;
  for(let k = 0 ; k < 8 ; k++){
    let nx = x + dx[k];
    let ny = y + dy[k];
    if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny]===1){
      DFS(nx,ny);
    }
  }
}

  for(let i = 0; i < n ; i ++){
    for(let j = 0 ; j < n ; j++){
      if(arr[i][j] === 1){
        answer++;
        DFS(i,j);
      }
    }
  }
  return answer;
}
const array = [
  [1,1,0,0,0,1,0],
  [0,1,1,0,1,1,0],
  [0,1,0,0,0,0,0],
  [0,0,0,1,0,1,1],
  [1,1,0,1,1,0,0],
  [1,0,0,0,1,0,0],
  [1,0,1,0,1,0,0]
];
console.log(solution(array));
 ```
<br>



 <pre>
 ๐ฌ <br>
๋ฌธ์ ์์ ์ ์๋ ๊ฒ์ฒ๋ผ ์ํ์ข์ฐ ๋๊ฐ์  ๋ค ๊ฒ์ฌ๋ฅผ ์งํํด์ผํ๋๊น, ์ด 8๊ฐ์ x,y ์ขํ๋ฅผ ์ค๋นํ๋ค.<br>
2์ฐจ์ ๋ฐฐ์ด์ด๋ ์ด์ค for๋ฌธ์ผ๋ก ๊ฐ์ธ์ฃผ๊ณ  ์์์ ํด๋น x,yํ๋ฅผ 0,0๋ถํฐ ๊ฒ์ฌํด์ 1์ ๋ง๋๋ฉด ์นด์ดํธํด์ฃผ๊ณ , ์ฌ๊ทํจ์๋ก ๋ค์ด๊ฐ๋ค.<br>
ํด๋น ์ขํ๋ฅผ ๋งค๊ฐ๋ณ์๋ก ๋ฐ๊ณ  ์ฌ๊ทํจ์๊ฐ ์์๋๋ค.<br>
์ฌ๊ทํจ์ ์์ํ์๋ง์ ํด๋น ์ขํ๋ ํ์ธ์ ํ์ผ๋ 0์ผ๋ก ๋ง๋ค์ด์ค์ ๋ค์ ์กฐ๊ฑด๋ฌธ์ ๊ฑธ๋ฆฌ๋ ์ผ์ด ์๊ฒ ๋ง๋ ๋ค<br>
์๊น ์ฐ๋ฆฌ๊ฐ ๋ง๋  ํ์ฌ ์์น์์ ๊ฒ์ฌํ  8๊ฐ์ง ๋ฐฉํฅ์ผ๋ก์ dx,dy ์ขํ๋ฅผ ์ด์ฉํ๊ธฐ ์ํด 8๋ฒ ๋๋ for๋ฌธ์ ๋ง๋ ๋ค.<br>
๊ทธ ํ์ธํ ์ขํ์์ 1์ด ๋ฐ๊ฒฌ๋๋ฉด ๋ค์ํ๋ฒ ์ฌ๊ท๋ฅผ ํ๊ณ , ์๋๋ฉฐ ๋์ด๊ฐ๋ ์์ผ๋ก ๊ทธ ์ฌ์ ์์ญ(?)์ 0์ผ๋ก ๋ฎ์ด์ฃผ๋ ์์์ ํด์ค๋ค.<br>
๊ทธ๋ ๊ฒ ๊ณ์ํ๋ฉด ์ด ์ฌ์ ๊ฐฏ์๊ฐ ๋์จ๋ค. 
</pre>

</div>
</details>

<details>
<summary>9_8 ์ฌ๋๋ผ ์์ผ๋๋(DFS ํ์ฉ)</summary>
<div markdown="1">       
<br>


 ### โ Question

 <pre>N*N์ ์ฌ๋๋ผ ์์ผ๋๋์ ์ง๋๊ฐ ๊ฒฉ์ํ์ ์ ๋ณด๋ก ์ฃผ์ด์ง๋๋ค. ๊ฐ ์ฌ์ 1๋ก ํ์๋์ด ์ํ์ข์ฐ์ ๋๊ฐ์ ์ผ๋ก ์ฐ๊ฒฐ๋์ด ์์ผ๋ฉฐ,<br> 
 0์ ๋ฐ๋ค์๋๋ค. ์ฌ๋๋ผ ์์ผ๋๋์ ๋ช ๊ฐ์ ์ฌ์ด ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.</pre> 

<br>

|1|1|0|0|0|1|0|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|0|1|1|0|1|1|0|
|0|1|0|0|0|0|0|
|0|0|0|1|0|1|1|
|1|1|0|1|1|0|0|
|1|0|0|0|1|0|0|
|1|0|1|0|1|0|0|

<br>

### ๐ ์๋ ฅ์ค๋ช ๋ฐ ์ถ๋ ฅ์ค๋ช

<pre>
์ฒซ ๋ฒ์งธ ์ค์ ์์ฐ์ N(3<=N<=20)์ด ์ฃผ์ด์ง๋๋ค.<br>
๋ ๋ฒ์งธ ์ค๋ถํฐ ๊ฒฉ์ํ ์ ๋ณด๊ฐ ์ฃผ์ด์ง๋ค.
<hr/>์ฒซ ๋ฒ์งธ ์ค์ ์ฌ์ ๊ฐ์๋ฅผ ์ถ๋ ฅํ๋ค.
</pre>


<br>

### ๐ฃ ์๋ ฅ์์  & ์ถ๋ ฅ์์ 

<pre>
7
1 1 0 0 0 1 0
0 1 1 0 1 1 0
0 1 0 0 0 0 0
0 0 0 1 0 1 1
1 1 0 1 1 0 0
1 0 0 0 1 0 0
1 0 1 0 1 0 0
<hr/>5
</pre>



 <br>

 ### โผ๏ธ Solution

 ```javascript
function solution(arr){
  let answer = 0;
  let n = arr.length
  let dx = [-1,-1,0,1,1,1,0,-1];
  let dy = [0,-1,-1,-1,0,1,1,1];
  let queue = [];
  
  for(let i = 0; i < n ; i ++){
    for(let j = 0 ; j < n ; j++){
      if(arr[i][j] === 1){
        arr[i][j] = 0;
        queue.push([i,j]);
        answer++;
        while(queue.length){
          let [x, y] = queue.shift();
          for(let k = 0; k < 8; k++){
            let nx = x + dx[k];
            let ny = y + dy[k];
            if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny]===1){
              arr[nx][ny] = 0;
              queue.push([nx,ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}
const array = [
  [1,1,0,0,0,1,0],
  [0,1,1,0,1,1,0],
  [0,1,0,0,0,0,0],
  [0,0,0,1,0,1,1],
  [1,1,0,1,1,0,0],
  [1,0,0,0,1,0,0],
  [1,0,1,0,1,0,0]
];
console.log(solution(array));
 ```
<br>



 <pre>
 ๐ฌ <br>
9_7 ๋ฌธ์ ์ ๊ฐ์ง๋ง ํ์ด ๋ฐฉ์์ queue๋ฅผ ์ด์ฉํ ๊น์ด ์ฐ์  ๋ฐฉ์์ผ๋ก ์ฒ๋ฆฌํ๋ ๋ฌธ์ ์ด๋ค.<br>
์ผ๋จ queue๋ฅผ ์ฒ์์ ๋ฐฐ์ด๋ก ์ ์ธ์ ํด์ฃผ๊ณ , ์ด์ค For๋ฌธ๊น์ง๋ ๋๊ฐ๋ค.<br>
์กฐ๊ฑด๋ฌธ์ ํตํด ์ขํ์ 1์ด ๋์ค๋ฉด ํด๋น ์ขํ๋ฅผ 0์ ๋ฐ๊ฟ์ฃผ๊ณ , queue์ [x,y]์ ๋ณด๋ฅผ ๋ฐ์ด์ค๋๋ค.<br>
์นด์ดํธ๋ฅผ ํด์ค๋ค์, while๋ฌธ์ ์์ํด์ค๋๋ค. while ์์์  queue์ ๋ฃ์ด๋์ ์ขํ๋ฅผ ๊ฐ์ ธ์์<br>
ํด๋น ์ขํ์์ 8๋ฉด์ ๊ฒ์ฌ๋ฅผ ์คํํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ํด๋น ์ขํ์์ 1์ด ๋์ค๋ฉด queue์ ์ขํ๋ฅผ ๋ฃ์ด์<br>
while๋ฌธ์ด 8๋ฉด์ด ๋ค 0์ด ๋์ฌ๋๊น์ง ๋๊ฒํฉ๋๋ค. ์ฆ ์ฌ์ ์์ญ์ ์ด๊ฒ๋ ๋ค 0์ผ๋ก ๋ง๋๋ ์์์ธ๊ฑฐ์ฃ <br> 
</pre>

</div>
</details>