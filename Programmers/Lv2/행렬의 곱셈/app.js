function solution(arr1, arr2) {
  let answer = [];

  for ( let i = 0 ; i < arr1.length ; i++) {
    let array = [];
    for ( let j = 0 ; j < arr2[0].length; j++) {
      let acc = 0;
      for( let k = 0 ; k < arr2.length; k++) {
        acc += arr1[i][k] * arr2[k][j]
      }
      array.push(acc);
    }
    answer.push(array);
  }
  return answer;
}
const arr1 =  [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
const arr2 = [[5, 4], [2, 4], [3, 1]];

console.log(solution(arr1, arr2));

