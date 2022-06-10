// function solution(arr){
//   let answer = [0,0,0,0,0];

//   for(let x of arr){
//     if(answer.indexOf(x) === -1){
//       for( let i = answer.length-1; i > 0 ; i--){
//         answer[i] = answer[i-1];
//       }
//       answer[0] = x;
//     }else {
//       let idx = answer.indexOf(x);
//       let temp = answer[idx];
//       for ( let j = idx; j > 0 ; j--)
//       {
//         answer[j] = answer[j-1];
//       } 
//       answer[0] = temp;
//     }  
//   }
//   return answer;
// }
// let arr = [1,2,3,2,6,2,3,5,7]
// console.log(solution(arr))

// function solution(size, arr){
//   let answer = Array.from({length:size}, () =>0);
//   arr.forEach(x => {
//       let pos = -1;
//       for(let i=0; i < size; i++) if(x===answer[i]) pos=i;
//       if(pos===-1){
//         for(let i=size-1; i>=1; i--){
//           answer[i] = answer[i-1];
//         }
//       }
//       else{
//         for(let i=pos; i>=1; i--){
//           answer[i] = answer[i-1];
//         }
//       }
//       answer[0] = x;
//   });

//   return answer;
// }
// let arr = [1,2,3,2,6,2,3,5,7];
// console.log(solution(5, arr));

function solution(size, arr){
  let answer = [];
  arr.forEach(x => {
      let pos = -1;
      for(let i=0; i < size; i++) if(x===answer[i]) pos=i;
      if(pos===-1){
        answer.unshift(x);
        if(answer.length>size) answer.pop();
      }
      else{
        answer.splice(pos, 1);
        answer.unshift(x);
      }
  });

  return answer;
}
let arr = [1,2,3,2,6,2,3,5,7];
console.log(solution(5, arr));