function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let stolen = lost.sort();
  let spareGroup = reserve.sort();

  for( let x of stolen ) {
    if(spareGroup.includes(x)) {
      stolen = stolen.filter((v) => v!== x)
      spareGroup = spareGroup.filter((v) => v!== x)
      answer++;
    }
  }

  for(let x of stolen.reverse()) {
      if(spareGroup.includes(x+1)) {
        answer++;
        spareGroup = spareGroup.filter(v => v!==x+1);
      }
      else if(spareGroup.includes(x-1)) {
        answer++;
        spareGroup = spareGroup.filter(v => v!==x-1);
      }
  }

  return answer;
}

console.log(solution(4	,[2, 3],	[3, 4]));