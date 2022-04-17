// 몇번의 복습이 필요해보임. 
// 일단 문제를 잘 이해하는게 중요
// 선생님의 솔루션은 먼저 현재좌표에서 비교해야하는 좌표까지에 대한 거리에 대한 값을 미리 dx,dy로 정의
// 2중 for문으로 모든 좌표를 훑으면서 현재 좌표에서 체크해야하는 갯수만큼의 for문을 마지막에 추가하고
// if문 앞에 Out of range 값들은 거를수 있게 미리 &&로 막아놓고, 조건을 만족못할시 flag를 0으로 변경 및 break하여 마지막 
// for문 탈출.

function solution(arr){
  let answer = 0 ;
  let n = arr.length;
  let dx= [-1,0,1,0];
  let dy= [0,1,0,-1];
    for (let i = 0; i < n; i++) 
    {
      for (let j = 0; j < n; j++) 
      {    flag = 1;
           for(let k = 0; k < 4; k++) 
           {
              let nx = i + dx[k];
              let ny = j + dy[k];
              if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) 
              {
                flag = 0;
                break;
              }
            }
            if (flag) answer++;
      }
    }
  return answer
}

let arr =  [[5,3,7,2,3],
            [3,7,1,6,1],
            [7,2,5,3,4],
            [4,3,6,4,1],
            [8,7,3,5,2]]

console.log(solution(arr))