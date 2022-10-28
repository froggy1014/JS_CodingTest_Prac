// function solution(imp, classes){

//   let answer = "YES"
//   let queue = classes.split('');
//   let cnt = Number.MIN_SAFE_INTEGER;

//   for( let d of imp){
//     for ( let i = 0; i < queue.length; i++){
//       if ( queue[i] === d ){
//          if(i < cnt) return "No"
//         cnt = i;
//       }
//     }
//   }
//     return answer;
// }
// let imp = "CBA";
// let classes = "CDGETYA";
// console.log(solution(imp, classes));


function solution(need, plan){
  let answer = "YES";
  let queue  = need.split('');

  for(let x of plan){
    if(queue.includes(x)){
      if(x!==queue.shift())
        return "NO";
    }
  }
  if(queue.length>0) return "No";
  return answer;
}
let a = "CBA";
let b = "CBDGEA";
console.log(solution(a,b));