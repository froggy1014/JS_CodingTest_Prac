 ### ❓ Question

 <pre>2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.</li>
  <li>행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.</li>
  <li>곱할 수 있는 배열만 주어집니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|arr1|arr2|return|
|:-:|:-:|:-:|
|[[1, 4], [3, 2], [4, 1]]|[[3, 3], [3, 3]]|[[15, 15], [15, 15], [15, 15]]|
|[[2, 3, 2], [4, 2, 4], [3, 1, 4]]|[[5, 4, 3], [2, 4, 1], [3, 1, 1]]|[[22, 22, 11], [36, 28, 18], [29, 20, 14]]|
<br>


 ### ‼️ Solution

 ```javascript
function solution(arr1, arr2) {
  let answer = [];

  for ( let i = 0 ; i < arr1.length ; i++) {
    let array = [];
    for ( let j = 0 ; j < arr2[0].length; j++) {
      let acc = 0;
      for( let k = 0 ; k < arr2.length; k++) {
        acc += arr1[i][k] * arr2[k][j]
      }
      array.push(acc);
    }
    answer.push(array);
  }
  return answer;
}
 ```
<br>


 <pre>일단 먼저 행렬의 곱셈을 다시한번 보고와서 문제를 풀어야했다.
 단순히 이제 arr1 행과 arr2의 열을 같인 인덱스번호를 조합해 더하고 
 배열을 얻는 방식을 택했다. 이때 arr2가 행과열이 숫자가 충족하지 못하면 
 거기까지만 해야하기때문에 중간에 arr2[0].length를 통해 제한하였다.</pre>
