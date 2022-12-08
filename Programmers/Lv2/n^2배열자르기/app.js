// function solution(n, left, right) {
//   const axisX = Array(n).fill(1)

//   let array = [];

//   for ( let i = 0 ; i < n ; i++ ) {
//     const array_copy = [...axisX];
//     array.push(array_copy);
//   }

//   for ( let i = 1 ; i < n ; i++) {
//     const number = i+1;
//     for ( let l = 0 ; l <= i ; l++ ) {
//       for( let r = 0 ; r <= i ; r++) {
//         if ( l === i || r === i) array[l][r] = number;
//       }
//     }
//   }
//   return array.flat().slice(left, right+1);
// }
// console.log(solution(4,7,14));


function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    console.log( i%n, (i/n)+1)
    answer.push(Math.max(i % n, parseInt(i / n)) + 1)
  }
  
  return answer;
}
console.log(solution(3, 2, 5));