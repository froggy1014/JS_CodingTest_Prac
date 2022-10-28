function solution(arr1,arr2){
  let answer = [];

  for (let x of arr1){
    for( let y of arr2){
      if(x === y)
      answer.push(x);
    }
  }
  return answer.sort((a,b)=>(a-b));
}
let arr1 = [5,3,9,7,2]
let arr2 = [3,2,5,7,8]
console.log(solution(arr1,arr2))


//투포인터 알고리즘을 이용한 풀이 

// function solution(arr1,arr2){
//   let answer = [];
//   arr1.sort((a,b)=>(a-b));
//   arr2.sort((a,b)=>(a-b));
//   let p1=p2=0;
  
//   while(p1<arr1.length && p2<arr2.length){
//     if (arr1[p1] === arr2[p2]){
//       answer.push(arr2[p2++]);
//       p1++
//     }
//     else if (arr1[p1] < arr2[p2]){
//       p1++
//     }
//     else p2++;
//   }
//   return answer
// }
// let arr1 = [1,3,9,5,2]
// let arr2 = [3,2,5,7,8]
// console.log(solution(arr1,arr2))