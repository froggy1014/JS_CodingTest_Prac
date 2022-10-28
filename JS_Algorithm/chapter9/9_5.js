// 최단거리 구할때 BFS를 많이 씀 

function solution(){
  let answer = "";
  let queue = [];
  queue.push(1);
  while(queue.length){
    let v = queue.shift()
    answer+=  v+" ";
    for(let nv of [v*2, v*2+1]){
    console.log(nv);
      if(nv>7) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution())