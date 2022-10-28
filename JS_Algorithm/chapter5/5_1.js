// function solution(arr1, arr2) {
//   let answer = [];
//     answer = arr1.concat(arr2).sort((a,b)=>(a-b));
//   return answer;
// }
// arr1 = [1,3,5];
// arr2 = [2,3,6,7,9];
// console.log(solution(arr1,arr2));

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1=p2=0;
  
  // for(let i = 0 ; i < n ; i++){
  //   for( let j = i+1 ; j < n ; j++){
  //     if (arr1[i] > arr1[j]) {
  //       let tmp = arr1[i];  
  //       arr1[i] = arr1[j];
  //       arr1[j] = tmp;
  //     }
  //   }
  // }
  // for( let i = 0; i < m; i++){
  //   for( let j = i+1 ; j < m ; j++){
  //     if (arr2[i] > arr2[j]) {
  //       let tmp = arr2[i];  
  //       arr2[i] = arr2[j];
  //       arr2[j] = tmp;
  //     }
  //   }
  // }
  
// console.log(arr1,arr2)
  while(p1<n && p2<m){
      if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
      else answer.push(arr2[p2++]);
  }
  while(p1<n) answer.push(arr1[p1++]);
  while(p2<m) answer.push(arr2[p2++]);

  return answer;
}
arr1 = [7,3,9];
arr2 = [2,3,1,2,1];
console.log(solution(arr1,arr2));

