// function solution(n, k){
//   let answer ; 
//   let stack = [];
//   let cnt = 1;
//   for(let i = 1; i <= n ; i++)
//     stack.push(i);
//   while(stack.length !== 1)
//   {
//     for(let i = 0; i < stack.length; i++){
//       if (cnt === k){
//         stack.splice(i,1)
//         i -= 1;
//         cnt = 1;
//       }
//       else cnt++;
//     }
//   }
//   answer = stack[0];
//   return answer;
// }
// let prince = 8;
// let num = 3;
// console.log(solution(prince, num));

function solution(n, k){
  let answer;
  let queue = Array.from({length:n}, (v,i)=>i+1);
  while(queue.length){
    for(let i = 1; i<k; i++) queue.push(queue.shift());
    queue.shift();
    if(queue.length === 1) answer = queue.shift();
  }
  return answer;
}
let princes = 8;
let num = 3;
console.log(solution(princes, num))
