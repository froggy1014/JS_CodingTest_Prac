 ### ❓ Question

 <pre>H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.</li>
  <li>논문별 인용 횟수는 0회 이상 10,000회 이하입니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|citations|return|
|:-:|:-:|
|[3, 0, 6, 1, 5]|[3|

<br>

### 🗣 입출력 예 설명

<pre>이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.</pre>

<br>

 ### ‼️ Solution

 ```javascript
function solution(C) {
  const citations = C.sort((a,b) => a - b);
  const n = C.length;
  
  if(citations.every((v) => v === 0)) return 0;
  for ( let i = 0; i < n; i++) {
    hIndex = n - i; 
    if( citations[i] >= hIndex) return hIndex;
  }
}
console.log(solution([0]));
 ```
<br>



 <pre>1. 일단 H-index가 무엇인지 알아야한다.
2. 연구 역량을 측정하는 한 단위입니다. 
3. 하나의 피인용수와 다른 피인용수가 같거나 혹은 더많을때 그 수가같은 값을 H-index라고한다.
4. 일단 쉽게 풀기위햇 sort()를 통해 정렬합니다. 
5. 그리고 일단 모든 논문이 피인용수가 0일것을 대비해서 예외처리를 해주었습니다.
6. 그리고 논문 인용 수 배열을 오름차순으로 순회합니다
7. h-index가 현재값에서 배열길이를 현재 인덱스 값을 뺀것과 같다고 보면됩니다.
8. 그리고 h-index중에 피인용수와 H-index가 더 작거나 같다면 그 값이 정답입니다.   </pre>

 

