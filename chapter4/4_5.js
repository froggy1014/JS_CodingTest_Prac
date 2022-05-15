function solution(k,arr){
  let answer =[];
  let total= [];
  let rank = k-1
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j<arr.length; j++){
      if (j===i) break;
      for(let s = 0; s<arr.length; s++){
        if(s===j || s===i)break;
        total.push(arr[i]+arr[j]+arr[s]);
      }
    }
  }
  answer = total.sort((a,b)=>(b-a)).filter((v,i)=>total.indexOf(v)===i)
  return answer[rank];
}
k = 3;
arr = [13,15,34,23,45,65,33,11,26,42];
console.log(solution(k,arr))


// function solution(n, k, card) {
//   let answer;
//   let tmp = new Set();
//   for(let i = 0; i < n; i++){
//     for(let j = i+1 ; j<n ; j++){
//       for(let k=j+1; k<n; k++){
//         tmp.add(card[i]+card[j]+card[k]);
//       }
//     }
//   }
//   let a=Array.from(tmp).sort((a,b)=>(b-a));
//   answer=a[k-1];
//   return answer;
// }
// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10,3,arr));
