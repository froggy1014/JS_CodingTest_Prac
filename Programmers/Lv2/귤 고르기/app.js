function solution(k, tangerine) {
  let map = new Map();
  let n = tangerine.length ;
  let acc = n - k;
  let cnt = 0;

  for(let i = 0; i < n ; i++) {
    if(map.has(tangerine[i]))  map.set(tangerine[i], map.get(tangerine[i])+1)
    else map.set(tangerine[i], 1);
  }

  const sortedMap = [...map].sort(sorting);

  function sorting(a, b) {
    if( a[1] !== b[1] ) return a[1] < b[1] ? -1 : 1;
    return a[0] < b[0] ? -1 : 1;
  }
  
  sortedMap.forEach((size) => {
    if (acc <= 0) return ;
    else {
      cnt += 1;
      acc -= size[1];
    }
  })
  return acc < 0 ? sortedMap.length - cnt + 1 : sortedMap.length - cnt ;
}

const k = 5;
const tangerined = [2,2,3,3,4,4,5,5,7,7]	
console.log(solution(k, tangerined));