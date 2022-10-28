// function solution(s){
//   let answer = "No"
//   let sH = new Map()
//   let temp_val = Number.MIN_SAFE_INTEGER;

//   for (let x of s)
//   {
//     if(sH.has(x)) sH.set(x, sH.get(x)+1)
//     else sH.set(x, 1)
//   }
//   for (let [key,val] of sH){
//     if(temp_val < val)
//       temp_val = val;
//     else if (temp_val == val)
//       { 
//         answer = "Yes"
//         break;
//       }
//   }
//   return answer;
// }
// let str = "(()))("
// console.log(solution(str))

function solution(s){
  let answer = "Yes"
  let stack = [];

  for (let x of s){
    if(x==='(') stack.push(x);
    else {
      if(stack.length === 0) return "No";
      stack.pop();
    }
  }
  if(stack.length>0) return "NO";
  return answer;
}
let str = "()(()()"
console.log(solution(str))