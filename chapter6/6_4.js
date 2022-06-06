// function solution(s){
//   let answer = 0;
//   let num = [];
//   let rt = lt = 0;

//   for ( let x of s){
//     if (Number.isInteger(Number(x)) === true)
//         { 
//           num.push(Number(x))
//         }
//     else{
//       rt = num[num.length-1];
//       lt = num[(num.length-1)-1];
//       num.pop();
//       num.pop();
//       let temp_answer = 0;
//       if( x === '+'){
//         temp_answer = lt + rt;
//         num.push(temp_answer);
//       }
//       else if( x === '*'){
//         temp_answer = lt * rt;
//         num.push(temp_answer);
//       }
//       else if( x === '-'){
//         temp_answer = lt - rt;
//         num.push(temp_answer);
//       }
//       else{ 
//       temp_answer = lt / rt;
//       num.push(temp_answer);
//     }
//     }
//   }
//   answer = num[0]
//   return answer; 
// }
// let str = "352+*9-"
// console.log(solution(str))

function solution(s){
  let answer;
  stack = [];
  for ( let x of s){
    if(!isNaN(x)) stack.push(Number(x));
    else{
      let rt = stack.pop();
      let lt = stack.pop();
      if(x==='+') stack.push(lt+rt);
      else if(x==='-') stack.push(lt-rt);
      else if(x==='*') stack.push(lt*rt);
      else if(x==='/') stack.push(lt/rt);
    }
  }
  answer = stack[0];
  return answer;
}
let str = "3352+*9-";
console.log(solution(str))