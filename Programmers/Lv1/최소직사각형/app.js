function solution(sizes) {
  let w = Number.MIN_SAFE_INTEGER;
  let h = Number.MIN_SAFE_INTEGER;
  const sortedSize = sizes.map((v) => v.sort((a,b) => a - b));

  for(let i = 0 ; i < sortedSize.length ; i++) {
    w = Math.max(w, sortedSize[i][0]);
    h = Math.max(h, sortedSize[i][1]);
  }
  return w*h;
}

console.log(solution([[3,4],[2,1]]))