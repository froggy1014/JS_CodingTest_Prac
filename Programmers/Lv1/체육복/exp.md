 ### ❓ Question

 <pre>점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.</pre>

<br>

### ⚠️ 제한사항

<ul>
  <li>전체 학생의 수는 2명 이상 30명 이하입니다.</li>
  <li>체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.</li>
  <li>여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.</li>
  <li>여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.</li>
  <li>여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|n|lost|reserve|return|
|:-:|:-:|:-:|:-:|
|5|[2, 4]|[1, 3, 5]|5|
|5|[2, 4]|[3]|4|
|3|[3]|[1]|2|



<br>

 ### ‼️ Solution

 ```javascript
function solution(n, lost, reserve) {

  // 옷이 부족한 사람 카운트
  let answer = n - lost.length;

  // 두 그룹에 대해서 정렬하고, 새 변수에 담아준다. 
  let stolen = lost.sort();
  let spareGroup = reserve.sort();


  // 체육복 도둑받은 사람과 여유복 있는사람 겹치는 것을 검사하고 그에 대한 예외처리
  for( let x of stolen ) {
    if(spareGroup.includes(x)) {
      stolen = stolen.filter((v) => v!== x)
      spareGroup = spareGroup.filter((v) => v!== x)
      answer++;
    }
  }

  // 정렬 배열을 뒤집고 for of를 통해 순회
  for(let x of stolen.reverse()) {
    // x보다 뒷사람이 있다면 제거를 해주고 증감을 해준다.
      if(spareGroup.includes(x+1)) {
        answer++;
        spareGroup = spareGroup.filter(v => v!==x+1);
      }
    // x보다 뒷사람이 없고 앞사람만 있다면 제거를 해주고 증감을 해준다.
      else if(spareGroup.includes(x-1)) {
        answer++;
        spareGroup = spareGroup.filter(v => v!==x-1);
      }
  }

  return answer;
}
 ```
<br>

