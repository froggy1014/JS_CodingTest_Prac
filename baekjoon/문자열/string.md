# 문자열 

## 1. [아스키 코드 ](https://www.acmicpc.net/problem/11654)

```js 
const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();

const n = input.charCodeAt();
console.log(n);
```
> charCodeAt() 메소드는 아스키 코드를 반환해줌. 

<br>

## 2. [숫자의 합](https://www.acmicpc.net/problem/11720)

```js 
const fs=require('fs');
const [a, b] = fs.readFileSync('./input.txt').toString().trim().split('\n');

const result = b.split('').reduce((a,b) => Number(a)+Number(b), 0);
console.log(result);
```
> 문제를 보아하니 모든 문자를 다 쪼개서 더하는 모양새여서 split으로 다 쪼개주고 
> reduce를 통해 누적합을 구해줬다. string을 number로 바꿔줘야하긴 했지만.

<br>

## 3. [알파벳 찾기](https://www.acmicpc.net/problem/10809)

```js 
const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim();


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let answer = [];
for ( let x of alphabet ){
  answer += str.indexOf(x) + ' ';
}
console.log(answer)
```
> 일단 소문자를 배열에 다 넣어주고, for x으로 순회하면서 indexOf로 해당 스트링
> index 값을 구해주는데, 애초에 없으면 -1을 반환해준다. 

<br>

## 4. [문자열 반복 ](https://www.acmicpc.net/problem/2675)

```js 
const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().split('\n');

for ( let x of str) {
  let string = ''
  const [ a, b ] = x.split(' ');
  if(b){
    for ( let y of b ){
      string += y.repeat(a);
    }
  console.log(string);
  }
} 
```
> 일단 입력이 반복 갯수랑, 문자열이 들어오는데, 둘을 갈라줘서 배열 디스트럭쳐링 처리 해준다음에 문자열 있는지 체크해주고 repeat 메소드를 통해 한글자마다 반복해주고 앞서 선언한 스트링에 더해주고 다 끝나면 출력을 해준다. 

<br>

## 5. [단어 공부](https://www.acmicpc.net/problem/1157)

```js 
const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().toLowerCase()

function solution(str){
const map = new Map();
let max = Number.MIN_SAFE_INTEGER;
let answer;
for ( let x of str ){
  if(map.has(x)) map.set(x, map.get(x)+1)
  else map.set(x, 1);
}

for ( let y of map){
  const [ a, b ] = y;
  if ( max === b ) answer = '?';
  if ( max < b ){
    max = b; 
    answer = a.toUpperCase();
    }
  }
  return answer;
}
console.log(solution(str));
```
> new Map()을 통해 중복되는 알파벳에 대한 value를 증감했다. 
> 그리고 2번째 for문에서 돌려주면서 Max값을 구해주고, 다 돌때까지 만약에 Max 값이 같은게 있었다면 answer에는 '?'만 남아 있을테고, 아니면 그 알파벳을 반환

<br>

## 6. [단어의 개수](https://www.acmicpc.net/problem/1152)

```js 
const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().split(' ')

console.log(str[0] === "" ? 0 : str.length);
```
> 간단하게 length로 처리하면 되는 줄 알았는데, 아무런 단어가 없는 상태면 1이 나와버리더라 그래서, 만약에 빈 문자열이면 0을 나오게끔 했다. 

<br>

## 7. [상수](https://www.acmicpc.net/problem/2908)

```js 
const fs=require('fs');
const [a,b] = fs.readFileSync('./input.txt').toString().trim().split(' ');

let num1 = Number(a.split('').reverse().join(''))
let num2 = Number(b.split('').reverse().join(''));

console.log(Math.max(num1, num2));
```
> 뒤집기 국룰 split,reverse,join 콤보로 바꾸고 Max로 하나뽑아줬다.

<br>

## 8. [다이얼](https://www.acmicpc.net/problem/5622)

```js 
const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

let answer = 0;
const char = input.split('');

const dial = ['', '', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', ''];

for( let x of char ) {
  dial.map((v, i) => {
    if(v.indexOf(x) !== -1) answer += i;
  })
}

console.log(answer);
```
> 다이얼, 문자열 다 배열로 만들어주고, 문자열을 하나씩 뽑아내면서, 다이얼을 순회하며 indexOf로 해당 index 번호를 알아내어 answer에 누적해준다.

<br>

## 9. [크로아티아 알파벳](https://www.acmicpc.net/problem/2941)

```js 
const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

let croatia = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join('C');
  }
  return input.length; 
}

console.log(solution(input));
```
> 크로아티아 문자열을 순회하면서 해당 단어가 문자열안에 있으면 그걸 기준으로 split되는데 join으로 해당 단어를 C라는 문자로 바꿔주고 나중에 한번에 length로 구해주었다.

<br>

## 10. [그룹 단어 체커](https://www.acmicpc.net/problem/1316)

```js 
const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = input.shift();
let cnt = 0;

input.map((word) => {
  let temp = [];
  let flag = true;
  for ( let x of word ){
    if(temp.indexOf(x) === -1) temp.push(x);
    else if(temp.at(-1) === x ) temp.push(x);
    else return flag = false;
  }
  if(flag) cnt++;
})
console.log(cnt);
```
> 단어마다 char을 순회하면서, 배열을 만들어 없던 문자는 넣어주고, 배열안에 문자가 존재하면서 제일 마지막으로 들어간 인덱스가 현재 문자와 다르다면 flag에 false를 리턴히면서 순회문을 종료시키고 바로 다음 그룹 단어 체커를 시행하게 한다.

<br>
