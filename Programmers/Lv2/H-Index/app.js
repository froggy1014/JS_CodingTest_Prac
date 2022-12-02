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

