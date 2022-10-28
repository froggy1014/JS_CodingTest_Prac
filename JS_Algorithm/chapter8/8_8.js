// function solution(n,m){
//   let answer = 0;
//   for(let i = 1; i < n+1 ; i++){
//     for(let j = 1; j < n+1 ; j++ ){
//       console.log(i, j);
//       answer++;
//     }
//   }
//   return answer;
// }
// console.log(solution(3,2))

// for문과 재귀함수의 차이는 들어오는 변수에 따라 융통성있게 바뀌지않는다 for문은 


function solution(n,m){
  let answer = [];
  let tmp = Array.from({length:m}, ()=>0) // 길이가 m개인 객체를 0으로 초기값 만들어준다. 
  function DFS(L){
    if(L===m){
          answer.push(tmp.slice()); // .slice() 메소드를 통해 깊은 복사, 얕은 복사를 시행시에 같은 데이터주소를 갖고있어 값이 다 같아진다.
    }
    else{
      for(let i = 1; i <= n; i++)
      {
        tmp[L]=i;
        DFS(L+1);
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(4,3))