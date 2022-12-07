 ### ❓ Question

 <pre>프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.</li>
  <li>작업 진도는 100 미만의 자연수입니다</li>.
  <li>작업 속도는 100 이하의 자연수입니다.</>
  <li>배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|progress|speeds|return|
|:-:|:-:|:-:|
|[93, 30, 55]|[1, 30, 5]|[2, 1]|
|[95, 90, 99, 99, 80, 99]|[1, 1, 1, 1, 1, 1]|[1, 3, 2]|

<br>

### 🗣 입출력 예 설명

<pre>입출력 예 #1
첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.

입출력 예 #2
모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.</pre>

<br>

 ### ‼️ Solution

 ```javascript
function solution(progresses, speeds) {
  const answer = [];
  let Time = [];
  let max = 0;

  const init = (days) => {
    max = days < 2 ? 2 : days;
    Time.push(days < 2 ? 2 : days);
  };

  progresses.forEach((v, i) => {
    const days = Math.ceil((100 - v) / speeds[i]);

    if (!Time.length && !max) init(days);
    
    else {
      if (max < days) {
        max = days < 2 ? 2 : days;
        answer.push(Time.length);
        Time = [];
      }
      Time.push(days < 2 ? 2 : days);
    }
  });

  if (Time) answer.push(Time.length);
  return answer;
}

const progresses = [1, 1, 50];
const speeds = [100, 2, 1];

console.log(solution(progresses, speeds));

 ```
<br>


### Another Solution
```js
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
```


<pre>나는 일단 배열을 두개 만들고, max라는 변수를 만들어서
앞에 기능이 현재 계산한 days보다 높다면 Time이라는 배열에 계속해서 
스택을 해주고, days가 앞에 max변수보다 낮아진다면, Time 배열에 
length를 answer 배열에 push를 해준다. 그리고 해당 배열을 정리해준다.
그리고 마지막에 Time에 남아있으면 마지막으로 다시 answer에 넣어주게끔 예외처리 해주었다.

그런데 훨씬 스마트하게 하신 코드가 있어서 가져와봤다. 일단 answer 변수 배열에 0번 인덱스에 0을 넣어놓고
days 라는 배열에 먼저 다 걸리는 날짜들을 계산해서 배열로 만들어준다음에 maxDay라는 변수를 만들어서 
인덱스에 max가 갱신될대마다 해당 인덱스 값을 넣어주는 방식인거 같다. 
그리고나서 이분은 for문을 통해 모든 days 배열을 순회해주면서, 
지금 현재 days가 maxdays보다 작다면 j변수에 1씩 증감시켜주고, 
그 외는 maxDay와 현재 순회한 날짜와 같다면 answer에 해당 인덱스에 1을 넣어줍니다.</pre>
