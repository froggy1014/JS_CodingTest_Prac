function solution(n, t, m, p) {
  let answer = '';
  let cnt = 0;
  let turn = 1;
  let string = "";

  for( let i = 0 ; i < t*m; i++ ) {
    let number = i;
    string += number.toString(n);
  }

  for( let x of string ) {
    if ( cnt === t ) return answer.toUpperCase();
    
    if(turn === p) {
      answer += x;
      cnt++;
    }

    if ( turn === m ) turn = 0;
    turn++;
  } 
}

console.log(solution(16,16,2,2));