function solution(str, cha)
{
  let answer = [];
  let P = 1000;
  for (let x of str){
    if (x === cha){
      P=0;
      answer.push(P)
    }else{
      P++;
      answer.push(P)
    }
  }
  P=1000;
  for (let i = str.length-1;i>=0;i--){
      if (str[i]===cha){
        P=0;  
      }
      else{
        P++;
        answer[i]=Math.min(answer[i], P);
      }
  }
  return answer;
}
const str = "teachermode"
const cha = 'e'
console.log(solution(str,cha))

