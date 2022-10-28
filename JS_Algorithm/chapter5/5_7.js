function solution(arr1,arr2){
  let answer = "Yes";
  let sH = new Map();

  for( let x of arr1){
    if (sH.has(x))
      sH.set(x, sH.get(x)+1)
    else 
      sH.set(x, 1)
  }
  for( let t of arr2)
  {
    if (!sH.has(t)|| sH.get(t) === 0) return "No"
    sH.set(t, sH.get(t)-1)
  }
    return answer;
}
arr1 = "abaCC"
arr2 = "CaaCb"
console.log(solution(arr1,arr2))