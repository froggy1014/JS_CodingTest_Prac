let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

input.shift();

let answer = input.sort((a,b) => a - b);

console.log(answer.join('\n'));

// 선택정렬 
// for( let i = 0; i < max-1; i++) {
//   let idx = i;
//   for( let j = i+1; j < max; j++){
//     if(numArray[idx] > numArray[j]) idx=j;
//   }
//   [numArray[i],numArray[idx]]=[numArray[idx],numArray[i]];
//   console.log(numArray[i]);
// }
// console.log(numArray[max-1]);

// 버블정렬
// for( let i = 0 ; i < max - 1; i++){
//   for(let j = 0; j < max - i - 1; j++){
//     if( numArray[j] > numArray[j+1] ) 
//       [numArray[j],numArray[j+1]] = [numArray[j+1],numArray[j]] 
//   }
// }
// console.log(numArray);


// 선택정렬
// for ( let i = 0 ; i < max ; i++) {
//   let temp = numArray[i];
//   let j;
//   for (j = i-1; j >= 0; j--) {
//     if(numArray[j] > temp) numArray[j+1] = numArray[j];
//     else break;
//   }
//   numArray[j+1] = temp;
// }
// numArray.map(( v ) => console.log(v));

// numArray.sort().map((v) => console.log(v));
