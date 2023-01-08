function solution(n, arr1, arr2) {
  let answer = [];
  let secretMapA = [];
  let secretMapB = [];
  for(let i = 0 ; i < arr1.length ; i++) {
    let cnt = 0;
    cnt = arr1[i].toString(2).length !== n ? n - arr1[i].toString(2).length : 0;
    secretMapA.push('0'.repeat(cnt) + arr1[i].toString(2));
    cnt = arr2[i].toString(2).length !== n ? n - arr2[i].toString(2).length : 0;
    secretMapB.push('0'.repeat(cnt) + arr2[i].toString(2));
  }

  for(let i = 0 ; i < arr1.length; i++) {
    let map = ''
    for( let j = 0; j < n ; j++) {
      secretMapA[i][j] == 1 || secretMapB[i][j] == 1 ? map += "#" : map += ' ';
    }
    answer.push(map);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11]
, [30, 1, 21, 17, 28]))