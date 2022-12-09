 ### ❓ Question

 <pre>일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.</li>
  <li>인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.</li>
  <li>location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|priorities|location|return|
|:-:|:-:|:-:|
|[2, 1, 3, 2]|	2|	1|
|[1, 1, 9, 1, 1, 1]|	0|	5|

<br>

### 🗣 입출력 예 설명

<pre>예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.</pre>

 <br>

 ### ‼️ Solution

 ```javascript
function solution(priorities, location) {
  let count = 0;
  const maxIndex = priorities.indexOf(Math.max(...priorities));
  const priorArr = priorities.map((v, i) => [v, i])
  const slicedArr = priorArr.splice(0, maxIndex);
  priorArr.push(...slicedArr);

  while(1) {
    const elF = priorArr.shift();
    
    if(checkPriorty(elF)) {
      if(elF[1] === location) return count+1;
      count += 1;
    }
    else priorArr.push(elF);
  }

  function checkPriorty(arr) {
    const result = priorArr.filter((prior) => prior[0] > arr[0])
    return !result.length;
  }
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
 ```
<br>


 <pre>일단 배열중에 현재 검사하는 값이 더 높은게 있는 지 확인하는 함수를 만들었다.
 filter를 통해 length가 0이라면 없다는 거니 true로 아니면 false로 나오게끔 만들었다.
 while(1)을 통해 일단 먼저 현재 인쇄 목록중에 제일 먼저 나오는 것을 shift로 빼주고 
 조건을 걸어서, 현재 인쇄 중요도보다 높은게 없다면, count를 증가하시키고, 리스트 맨뒤로 빼주지 않습니다.
 하지만 만약에 더 높은 중요도가 있다면, shift로 뺀 요소를 뒤로 넣어준다. 그런데 앞서서 인덱스를 추가해줬는데,
 인자로 들어온 location과 현재 인쇄 승인이 난 아이템의 인덱스를 확인하고 맞다면 바로 반환한다.</pre>
