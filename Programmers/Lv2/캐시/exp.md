 ### ❓ Question

 <pre>지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.</pre>
 
<br>

### ⚠️ 제한사항

<ul>
  <li>캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.</li>
  <li>cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.</li>
  <li>cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.</li>
  <li>각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.</li>
</ul>

<br>

### 🔢 입력예제 & 출력예제

|캐시크기|도시이름|실행시간|
|:-:|:-:|:-:|
|3|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|50|
|3|["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]|21|
|2|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]|60|
|0|["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|25|
<br>


 ### ‼️ Solution

 ```javascript
function solution(cacheSize, cities) {
  

  // 캐시가 입력 도시 배열보다 크다면 
  if ( cacheSize > cities.length ) {
    const map = new Map();
    let answer = 0;

    cities.forEach((city) => {
      if( map.has(city) )  answer += 1;
      else {
        map.set(city, 1);
        answer += 5;
      }
    })
    return answer;
  }
  

  let cache = [];
  let index = 0;
  let answer = 0;

  // 소문자로 통일
  const equalsignorecase = cities.map((v) => v.toLowerCase());


  // 캐시 배열이 캐시 사이즈보다 같아질때까지 돌기
  while(cache.length < cacheSize) {

    // 만약 모든 배열을 순회할때까지 캐시가 다 안찬다면 정답 반환
    if ( index === cities.length ) return answer;

    // 캐시 안에 해당 도시가 있다면 
    // filter를 통해 제거하고, push하여 다시 캐시 뒤단에 push로 최상단으로 올려줌
    cache.indexOf(equalsignorecase[index]) !== -1 ? answer += 1 : answer +=5
    
    // 결과가 어찌되었든 filter를 통해 중복되었던 도시이름 제거하고 최상단에 Push
    cache = cache.filter((city) => city !== equalsignorecase[index]);
    cache.push(equalsignorecase[index])
    index++;
  }
  

  // cache 사이즈만큼 배열이 다 찼다면, 해당 인덱스를 가져와서 이어서 시작 
  for(let i = index; i < cities.length; i++) {

    // 캐시안에 존재하는 도시 이름이라면 역시나 answer에 1을 더하고 중복이름 제거해줍니다.
    if (cache.indexOf(equalsignorecase[i]) !== -1) {
      answer += 1;
      cache = cache.filter((city) => city !== equalsignorecase[i]);
    } else {
      // 없었다면 최하단에 있는 배열을 없애주고 answer에 5를 더합니다.
      answer += 5;
      cache.shift();
    }
    // 이제 캐시에 최상단으로 방금 그 도시로 push해주는데 캐시사이즈가 0이라면 푸시를 안합니다.
    if(cacheSize) cache.push(equalsignorecase[i]);
  }

  return answer;
}
 ```
<br>

### Another Solution
```js
function solution(cacheSize, cities) {
    const MISS = 5, HIT = 1;

    if (cacheSize === 0) return MISS * cities.length;

    let answer = 0,
        cache = [];

    cities.forEach(city => {
        city = city.toUpperCase();

        let idx = cache.indexOf(city);

        if (idx > -1) {
            cache.splice(idx, 1);
            answer += HIT;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            answer += MISS;
        }

        cache.push(city);
    });

    return answer;
}
```


 <pre>일단 경우의 수를 생각하게 되는 문제였다.
 1. 캐시가 일단 0이라면 계산할 필요없이 바로 도시 배열과 5를 곱해서 반환했다. 
 2. 겹치는 도시이름이 나와서 캐시사이즈를 끝까지 못채울 경우
 3. 일단 캐시에 이미 있다면 filter로 해당 도시를 제거하고, push로 최상단에 올려줬다.</pre>
