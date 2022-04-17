// 처음에 너무 복잡하게 생각했다. 
// 논리연산자로 경우의 수 딱 절반만 즉 A의 승리, 무승부만 묶어놓고 
// 나머지는 B의 승리로 잡으면 됨.

function solution(a,b){
  let answer = ""
  for ( let i = 0; i < a.length; i++)
  {
    if(a[i]===b[i]) answer+='D'+' ';
    else if(a[i]===1 && b[i]===3)answer+='A'+' ';
    else if(a[i]===2 && b[i]===1)answer+='A'+' ';
    else if(a[i]===3 && b[i]===2)answer+='A'+' ';    
    else answer+='B'+' ';
  }

  return answer
}

let A = [2,3,3,1,3]
let B = [1,1,2,2,3]
console.log(solution(A, B))