// function solution(s){
//   let answer = [];
//   let flag = 0;

//   for (let x of s){
//     if (x === "(")
//       flag++;
//     else if (x === ")") 
//       flag--; 
//     else if (flag === 0)
//       answer.push(x)
//   }
//   return answer.join('');
// }
// let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str))

function solution(s){
  let answer;
  let stack = []
  for (let x of s){
    if(x===')')
    {
      while(stack.pop()!=='(');
    }
    else stack.push(x)
  }
  answer = stack.join('');
  return answer;
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str))