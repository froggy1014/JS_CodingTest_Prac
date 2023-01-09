 ### ❓ Question

 <pre>2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>2016년은 윤년입니다.</li>
  <li>2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)</>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|a|b|result|
|:-:|:-:|:-:|
|5|24|"TUE"|

<br>

 ### ‼️ Solution

 ```javascript
function solution(a, b) {
  // 일단 1년의 12달에 대한 날짜를 카운팅할 수 있는 배열
  const days = [0,31,29,31,30,31,30,31,31,30,31,30,31];
  // 요일에 대한 배열
  const Yoil = [0,"SUN","MON","TUE","WED","THU","FRI","SAT"];
  
  // 정답 변수 선언
  let answer = "";
  
  // 요일을 인덱싱할 변수를 선언 및 시작 요일을 정하기 위한 변수 
  let cnt = 6;

  // 2중 포문을 통해 1년을 다 돌린다.
  for (let m = 1 ; m <= 12; m++) {
    for ( let d = 1 ; d <= days[m] ; d++) {
      // answer에 계속해서 해당 날짜에 대한 요일을 집어 넣는다.
      answer = Yoil[cnt];
      
      //입력한 월, 요일 과 같아지면 반환
      if(m === a && d === b)  return answer;

      // 배열 끝 인덱스라면 1로 초기화 아니면 증감
      cnt === 7 ? cnt = 1 : cnt++;
    }
  }
}
  ```
<br>

