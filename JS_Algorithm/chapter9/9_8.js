// function solution(arr){
//   let answer = 0;
//   let n = arr.length
//   let dx = [-1,-1,0,1,1,1,0,-1];
//   let dy = [0,-1,-1,-1,0,1,1,1];
//   let queue = [];
  
//   for(let i = 0; i < n ; i ++){
//     for(let j = 0 ; j < n ; j++){
//       if(arr[i][j] === 1){
//         arr[i][j] = 0;
//         queue.push([i,j]);
//         answer++;
//         while(queue.length){
//           let [x, y] = queue.shift();
//           for(let k = 0; k < 8; k++){
//             let nx = x + dx[k];
//             let ny = y + dy[k];
//             if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny]===1){
//               arr[nx][ny] = 0;
//               queue.push([nx,ny]);
//             }
//           }
//         }
//       }
//     }
//   }
//   return answer;
// }
// const array = [
//   [1,1,0,0,0,1,0],
//   [0,1,1,0,1,1,0],
//   [0,1,0,0,0,0,0],
//   [0,0,0,1,0,1,1],
//   [1,1,0,1,1,0,0],
//   [1,0,0,0,1,0,0],
//   [1,0,1,0,1,0,0]
// ]

// console.log(solution(array))



function solution(arr){
  let answer = 0;
  let n = arr.length
  let dx = [-1,-1,0,1,1,1,0,-1];
  let dy = [0,-1,-1,-1,0,1,1,1];
  let queue = [];
  

  for(let x = 0 ; x < n ; x++){
    for( let y = 0 ; y < n ; y++){
      if(arr[x][y] === 1){
        queue.push([x,y])
        answer++;
        while(queue.length){
          let [ax,ay] = queue.shift();
          for(let c = 0 ; c < 8; c++){
            let newx = ax+dx[c];
            let newy = ay+dy[c];
            if(newx>=0 && newx<n && newy>=0 && newy<n && arr[newx][newy] === 1){
              arr[newx][newy] = 0;
              queue.push([newx,newy]);
            }
          }
        }
      } 
    }
  }

  return answer;
}
const array = [
  [1,1,0,0,0,1,0],
  [0,1,1,0,1,1,0],
  [0,1,0,0,0,0,0],
  [0,0,0,1,0,1,1],
  [1,1,0,1,1,0,0],
  [1,0,0,0,1,0,0],
  [1,0,1,0,1,0,0]
]

console.log(solution(array))