// 쉬웠음.

function solution(a){
  let answer = 0;
  let ammu = 1;
  for ( let i = 0; i < a.length; i++){
    if (a[i] === 1 )
    {
      answer += ammu;
      ammu++
    }
    else ammu = 1;
  }
  return answer
}

let A = [1,0,1,1,1,0,0,1,1,0]

console.log(solution(A))