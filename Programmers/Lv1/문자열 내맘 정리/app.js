function solution(strings, n) {
  let answer = strings.sort(myFilt);

  function myFilt(a,b) {
    if ( a.at(n) ===  b.at(n) ) {
      if(a > b) return 1
      else return -1
    }
    if ( a.at(n) >  b.at(n)) return 1 ;
    else return -1;
  }
  
  return answer;
}

console.log(solution(["abce", "abcd", "cdx"]	,2))