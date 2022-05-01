function solution(arr){
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr){
    let sum=0;
    let tmp = x;
    while(tmp){
      sum+=(tmp%10);
      tmp=Math.floor(tmp/10);
    }
    if(sum>max){
      max = sum;
      answer = x;
    }else if ( sum===max){
      if(x>answer)answer=x;
    }
  }
  return answer;
}

const arr = [128,460,603,444,521,137,123];

console.log(solution(arr));