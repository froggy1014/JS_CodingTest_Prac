// const fs = require('fs');
// let input = fs.readFileSync('./example.txt').toString();
// console.log(input);
// input = input.split('\n');
// console.log(input);
// const inputC = +input[0];
// const inputTestCase = [];

// for ( let i = 1; i <= inputC; ++i){
//   const arr = input[i].split(' ').map(item => +item);
//   const newArr = [];
//   for ( let i = 1; i <= arr[0]; ++i){
//     newArr.push(arr[i]);
//   }
//   const testCase = {
//     N: arr[0],
//     arr: newArr,
//   };
//   inputTestCase.push(testCase);
  
// }


// function solution(c, testCase){
//   console
// } 

// solution(inputC, inputTestCase)


const fs = require('fs');
let input = fs.readFileSync('./example.txt').toString().split(' ');
let newArr = [];


function solution(n){
  
  const A = n[0]
  const B = n[1]
  const C = n[2]

  console.log((A+B)%C);
  console.log(((A%C) + (B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C) * (B%C))%C);

}

for(let i = 0 ; i<input.length;i++){
  newArr.push(parseInt(input[i]))
}
solution(newArr);
