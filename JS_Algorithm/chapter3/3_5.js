function solution(str)
{
  let answer = "";
  let letter ;
  let cnt = 1;
  for (x of str ){
    if (letter != x){
      if ( cnt > 1 ){
        answer += String(cnt)
        cnt = 1;
      }
      letter = x
      answer += x;
    }else cnt++;
  }
  return answer;
}
const str = "KKHSSSSSSSE"
console.log(solution(str))

