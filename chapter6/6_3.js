// function solution(board, moves){
//   let answer = 0;
//   let bucket = [];
//   for( let i = 0; i < moves.length; i++)
//   {
//     let move = moves[i]-1;
//     let escape = idx = 0;
//     while(escape === 0)
//     {
//         if(board[idx][move] === 0) 
//         {
//           if (idx === 4) escape = 1;
//           else idx++;
//         }
//         else if (board[idx][move] !== 0)
//         {
//           if(bucket[bucket.length-1] === board[idx][move])
//           {
//             console.log("겹치는거 발견");
//             bucket.splice(bucket.length-1,1);
//             console.log(bucket);
//             answer += 2;
//           }
//         else 
//           {
//             console.log("스택쌓기");
//             bucket.push(board[idx][move]);
//             console.log(bucket);
//           }
//           board[idx].splice(move,1,0); 
//           escape = 1;
//         }
//     }
//   }
//   return answer;
// }
// let board = [
//   [0,0,0,0,0],
//   [0,0,1,0,3],
//   [0,2,5,0,1],
//   [4,2,4,4,2],
//   [3,5,1,3,1]]
// let moves = [1,5,3,5,1,2,1,4];
// console.log(solution(board, moves));

function solution(board, moves)
{
  let answer = 0;
  let stack = [];
  moves.forEach(pos => {
    for (let i = 0; i < board.length; i++){
      if(board[i][pos-1]!==0){
        let tmp=board[i][pos-1];
        board[i][pos-1]=0;
        if(tmp===stack[stack.length-1]){
          stack.pop()
          answer+= 2;
        }
        else stack.push(tmp);
        break;
      }
    }
  })
  return answer;
}
let board = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]]
let moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));