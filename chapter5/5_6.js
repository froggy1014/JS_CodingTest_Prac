// function solution(arr)
// {
//   let answer = '';
//   let cand = ['A','B','C','D','E']
//   let newarr = arr.split('')
//   let temp_cnt = 0; 

//   for(let i = 0; i < cand.length; i++)
//   {
//     if (temp_cnt < newarr.filter(element => cand[i] === element).length)
//     {
//       temp_cnt = newarr.filter(element => cand[i] === element).length;
//       answer = cand[i];
//     }
//   }
//   return answer;
// }
// let arr ="BACBACCACCBDEDE"
// console.log(solution(arr))

function solution(s){
  let answer = 0;
  let sH = new Map()
  for (let x of s){
    if(sH.has(x))
      sH.set(x, sH.get(x)+1)
    else 
      sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for( let [key,val] of sH )
    {
      if (max < val)
      {
        max = val;
        answer = key;
      }
    }
  return answer;
}
let str = "BACBACCACCBDEDE"

console.log(solution(str))
