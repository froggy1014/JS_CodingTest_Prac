 ### ❓ Question

 <pre>정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>1 ≤ n ≤ 107</li>
  <li>0 ≤ left ≤ right < n2 </li>
  <li>right - left < 105</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|n|left|right|result|
|:-:|:-:|:-:|:-:|
|3|	2|	5	|[3,2,2,3]|
|4|	7|	14|	[4,3,3,3,4,4,4,4]|

<br>

 ### ‼️ Solution

 ```javascript
function solution(n, left, right) {
  const axisX = Array(n).fill(1)

  let array = [];

  for ( let i = 0 ; i < n ; i++ ) {
    const array_copy = [...axisX];
    array.push(array_copy);
  }

  for ( let i = 1 ; i < n ; i++) {
    const number = i+1;
    for ( let l = 0 ; l <= i ; l++ ) {
      for( let r = 0 ; r <= i ; r++) {
        if ( l === i || r === i) array[l][r] = number;
      }
    }
  }
  return array.flat().slice(left, right+1);
}
console.log(solution(4,7,14));
 ```
<br>


### Another Solution
```js
function solution(n, left, right) {
    var answer = [];

    for (let i = left; i <= right; i++) {
        answer.push(Math.max(i % n, parseInt(i / n)) + 1)
    }

    return answer;
}
```


<pre>나는 N차배열을 직접 만들고, for문으로 노가다하는 방식으로 무식하게 정답을 뽑아냈다. 
그래서 타임아웃에러가 났었고, 더 나은 사람의 답을 가져와보았다. 나는 규칙성 찾는데 
재능이 없는 것 같다.

Another Solution을 보면 일단 뽑아야하는 만큼이 숫자가 들어있는고 또한 인덱스 정보라고 볼 수 있는 
left, right 값으로 for문을 만들어준다. 그리고 answer에다가 값을 push해주는데,
이때 i 에서 n으로 나머지셈을하고 나온 값과 i를 n으로 나눈 몫값을 반올림하고 1을 더한뒤 더 큰값을
push해주는데, 이게 N차 배열에 flat()을 한 거나 다름없으니 이런 규칙성이 나오는 것 같다.</pre>
