function solution(n) {
    let answer = Number.MAX_SAFE_INTEGER;
    let k = 2;

    while(k < n){
     if(n%k === 1){
        answer = k;
        return answer;
     }
    k++;
  }
}