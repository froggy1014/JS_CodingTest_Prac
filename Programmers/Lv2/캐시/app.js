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


