 ### ❓ Question

 <pre>배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>배열 arr의 크기 : 1,000,000 이하의 자연수</li>
  <li>배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|arr|answer|
|:-:|:-:|
|[1,1,3,3,0,1,1]|[1,3,0,1]|
|[4,4,4,3,3]|[4,3]|


<br>

 ### ‼️ Solution

 ```javascript
function solution(arr)
{
    let stack = [ arr[0] ];
    for ( let i = 1 ; i < arr.length ; i++ ) {
      if ( stack.at(-1) !== arr[i] ) stack.push(arr[i]);
    }
    return stack;
}

console.log(solution([1,1,3,3,0,1,1]))
 ```
<br>

 <pre>스택을 하나 만들어주고, for문으로 순회하면서, 배열 위에 쌓인거를 비교하면서
 안 겹치면, 스택에 쌓아주고, 겹쳐있다면 스킵한다.</pre>
