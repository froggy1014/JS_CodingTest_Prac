const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim();

let acc = 1;
let i = 1;
while( i++ < input){
  acc = acc * i;
}

console.log(acc);

// function solution(n) {
//   function DFS(L, T) {
//     if(L === n) return console.log(T);
//     else {
//       L = L + 1
//       T = T * L;
//       DFS(L, T);
//     }
//   }
//   DFS(0, 1);
// }
// solution(Number(input));