let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

// input.shift();

// let answer = input.sort((a,b) => a - b);

// console.log(answer.join('\n'));

const max = input.shift();


// 선택정렬 
// for( let i = 0; i < max-1; i++) {
//   let idx = i;
//   for( let j = i+1; j < max; j++){
//     if(input[idx] > input[j]) idx=j;
//   }
//   [input[i],input[idx]]=[input[idx],input[i]];
//   console.log(input[i]);
// }
// console.log(input[max-1]);

// 버블정렬
// for( let i = 0 ; i < max; i++){
//   for(let j = 0; j < max - i; j++){
//     if( input[j] > input[j+1] ) 
//       [input[j],input[j+1]] = [input[j+1],input[j]] 
//   }
// }
// console.log(input.join('\n')); 

// 삽입정렬
// for ( let i = 0 ; i < max ; i++) {
//   let temp = input[i];
//   let j;
//   for (j = i-1; j >= 0; j--) {
//     if(input[j] > temp) input[j+1] = input[j];
//     else break;
//   }
//   input[j+1] = temp;
// }
// console.log(input.join('\n'));

