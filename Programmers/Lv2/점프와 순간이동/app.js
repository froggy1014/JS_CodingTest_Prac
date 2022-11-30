// function solution(n)
// {
//   let answer = 0;
  
//   while(n > 0){
//     if ( n % 2 === 0 ) {
//       n /= 2;
//     } else {
//       n -= 1;
//       answer += 1;
//     }
//   }

//   return answer;
// }

function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    console.log(nArr)
    return nArr.reduce((a,b)=>(+a)+(+b));
}

console.log(solution(5000));