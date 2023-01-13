function solution(record) {
  let answer = [];
  let mapD = new Map();
  const msg = {
    'Enter' : '님이 들어왔습니다.',
    'Leave' : '님이 나갔습니다.',
  }

  for ( let x of record ) {
    const [ state, id, nickname ] = x.split(' ');

    if( state === 'Enter') {
      mapD.set(id, nickname);
      answer.push([id, state])
    } 
    if ( state === 'Leave') {
      answer.push([id, state])
    }
    if ( state === 'Change') {
      mapD.set(id, nickname);
    }
  }
  return answer.map((v) => mapD.get(v[0]) + msg[v[1]]);
}

console.log(solution([
  "Enter uid1234 Muzi", 
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan"
]));