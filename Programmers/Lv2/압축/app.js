function solution(msg) {
  let answer = [];
  let str = 65;
  const mapD = new Map();

  for ( var i = 0 ; i < 26; i++) {
    if(!mapD.has(String.fromCharCode(str+i))) {
      mapD.set(String.fromCharCode(str+i), i+1);
    }
  }

  while(msg.length !== 0) {
    let w = "";
    let c = "";
    let lt = 0;

    while(!(mapD.has(w) && !mapD.has(w+c))) {
      w += msg[lt]
      c = msg[lt+1];
      lt++;
    }

    answer.push(mapD.get(w));
    mapD.set(w+c, mapD.size + 1);
    msg = msg.slice(w.length);
  }
  return answer;
}

console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))    