 ### ❓ Question

 <pre>스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.</pre>

|종류|이름|
|:-:|:-:|
|얼굴|	동그란 안경, 검정 선글라스|
|상의|	파란색 티셔츠|
|하의|	청바지|
|겉옷|	긴 코트|
<pre>스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.</li>
  <li>스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.</li>
  <li>같은 이름을 가진 의상은 존재하지 않습니다.</li>
  <li>clothes의 모든 원소는 문자열로 이루어져 있습니다.</li>
  <li>모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.</li>
  <li>스파이는 하루에 최소 한 개의 의상은 입습니다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|clothes|return|
|:-:|:-:|
|[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]|5|
|[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"|3|

<br>

### 🗣 입출력 예 설명

<pre>예제 #1
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses

예제 #2
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.

1. crow_mask
2. blue_sunglasses
3. smoky_makeup</pre>

 <br>

 ### ‼️ Solution

 ```javascript
function solution(clothes) {
  const map = new Map();
  let answer = 1;

  clothes.forEach((v, i) => {
    if(map.has(v[1])) map.set(v[1], map.get(v[1]) + 1)
    else map.set(v[1], 1);
  })
  
  const arr = [...map].map((v) => v);

  arr.forEach((v) => answer += answer * v[1]);
  return answer - 1;
}
 ```
<br>

<pre>Map 객체를 이용해서 같은 종류의 의상들을 key값으로 넣고,
map.has를 통해 있는 경우에는 하나씩 증가시켜주고 배열로 만들고나서, 
해당 배열을 forEach를 통해 순열하면서, answer변수에 1을 먼저 담아두고,
answer += answer * 옷의 갯수 이런식으로 누적해주고, 마지막 정답반환할때
-1 을 해줘서 정답을 얻었다.</pre>
