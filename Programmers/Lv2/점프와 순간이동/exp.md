 ### ❓ Question

 <pre>OO 연구소는 한 번에 K 칸을 앞으로 점프하거나, (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동을 할 수 있는 특수한 기능을 가진 아이언 슈트를 개발하여 판매하고 있습니다. 이 아이언 슈트는 건전지로 작동되는데, 순간이동을 하면 건전지 사용량이 줄지 않지만, 앞으로 K 칸을 점프하면 K 만큼의 건전지 사용량이 듭니다. 그러므로 아이언 슈트를 착용하고 이동할 때는 순간 이동을 하는 것이 더 효율적입니다. 아이언 슈트 구매자는 아이언 슈트를 착용하고 거리가 N 만큼 떨어져 있는 장소로 가려고 합니다. 단, 건전지 사용량을 줄이기 위해 점프로 이동하는 것은 최소로 하려고 합니다. 아이언 슈트 구매자가 이동하려는 거리 N이 주어졌을 때, 사용해야 하는 건전지 사용량의 최솟값을 return하는 solution 함수를 만들어 주세요.

예를 들어 거리가 5만큼 떨어져 있는 장소로 가려고 합니다.
아이언 슈트를 입고 거리가 5만큼 떨어져 있는 장소로 갈 수 있는 경우의 수는 여러 가지입니다.

처음 위치 0 에서 5 칸을 앞으로 점프하면 바로 도착하지만, 건전지 사용량이 5 만큼 듭니다.
처음 위치 0 에서 2 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 2) x 2에 해당하는 위치로 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 3 만큼 듭니다.
처음 위치 0 에서 1 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 1) x 2에 해당하는 위치로 이동할 수 있으므로 위치 2로 이동됩니다. 이때 다시 순간이동 하면 (현재까지 온 거리 : 2) x 2 만큼 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 2 만큼 듭니다.
위의 3가지 경우 거리가 5만큼 떨어져 있는 장소로 가기 위해서 3번째 경우가 건전지 사용량이 가장 적으므로 답은 2가 됩니다.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>숫자 N: 1 이상 10억 이하의 자연수</li>
  <li>숫자 K: 1 이상의 자연수</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|N|result|
|:-:|:-:|
|5|2|
|6|2|
|5000|5|

<br>

 ### ‼️ Solution

 ```javascript
function solution(n)
{
  let answer = 0;
  
  while(n > 0){
    if ( n % 2 === 0 ) {
      n /= 2;
    } else {
      n -= 1;
      answer += 1;
    }
  }

  return answer;
}
 ```
<br>

 ### another Solution

 ```javascript
function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}
 ```



 <pre>1. N의 자연수가 2로 나머지가 0일때는 순간이동하여 이동가능합니다.
 2. 그러니까 2로 나눠주고 넘어가게 됩니다.
 3. 하지만 홀수여서 나머지가 0이 아닐경우에는 자연수를 1로 빼주어서 짝수로 만들어줍니다. 
 4. 그리고 answer 건전지를 1만큼 소모했으니 더해줍니다. 
 5. 이렇게 반복하게되면 정답이 나오게됩니다.

 다른사람의 풀이도 한번가져와봤다. 이 사람은 해당자연수를 2진수로 만들어서 1의 갯수를 카운팅해서
 정답을 추출했다고 보면된다. reduce를 통해 1의 갯수를 더했다. 
 </pre>
