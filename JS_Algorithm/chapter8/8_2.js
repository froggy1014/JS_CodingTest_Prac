// function solution(n){
//   let answer = "";
//   let quo = n;

//   while(quo > 0)
//  { 
//    answer+=quo%2;
//    quo = Math.floor(quo/2)
//  }
//  return answer  = answer.split("").reverse().join("");
// }
// console.log(solution(11))

// answer 데이터 타입을 먼저 문자열로 선언하면 후에 더해주면 문자열로 붙어서 넣어진다.


function solution(n){
  let answer="";
  function DFS(n){
      if(n===0) return;
      else {
        DFS(parseInt(n/2));
        answer+=(n%2);
      }
  }
  DFS(n);
  console.log(typeof answer);
  return answer;
}
console.log(solution(11))