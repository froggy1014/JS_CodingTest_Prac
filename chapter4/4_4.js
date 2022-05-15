function solution(budget, arr){
  let answer= 0;
  let n = arr.length;
  arr.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]))

  for( let i = 0; i<n; i++){
    let money= budget-(arr[i][0]/2+arr[i][1])
    let cnt=1;
    for(let j=0; j<n; j++){
      if(j!==i && (arr[j][0]+arr[j][1]) > money) break;
      if(j!==i && (arr[j][0]+arr[j][1]) <= money){
        money -= arr[j][0]+arr[j][1];
        cnt++;
      }
    }
    answer=Math.max(answer,cnt);
  }
  return answer;
}

budget = 28;

let arr = 
[ [6,6],
  [2,2],
  [4,3],
  [4,5],
  [10,3]]

console.log(solution(budget, arr));