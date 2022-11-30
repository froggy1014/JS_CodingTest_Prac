const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim()*1;



// function solution(n){
//   function DFS(arr, T, C) {
//     T -= 1;
//     if( T === 0 ) {
//       return console.log(arr[1])
//     } else {
//       arr[0] = arr[1];
//       arr[1] = C;
//       C = arr[0] + arr[1];
//       DFS(arr, T, C)
//     }
//   }

//   DFS([0, 1], n, 1);
// }
// solution(input);

function fibonichi(n) {
  if ( n=== 0) {
    return 0; 
  } else if ( n===1) {
    return 1;
  } else {
    return fibonichi(n-1) + fibonichi(n -2);
  }
}
console.log(fibonichi(input));