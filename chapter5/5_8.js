function compareMaps(map1, map2){
  if(map1.size !== map2.size)return false;
  for(let [key,value] of map1){
    if(!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(arr1,arr2){

  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  for(let t of arr2){
    if (tH.has(t)) tH.set(t, tH.get(x)+1)
    else tH.set(t, 1)
  }
  let len = arr2.length-1
  for(let i = 0 ; i < len ; i++){
    if (sH.has(arr1[i])) sH.set(arr1[i], sH.get(arr1[i])+1)
    else sH.get(arr1[i]+1)
  }

  let lt = 0;
  for (let rt=len; rt < arr1.length; rt++){
    if (sH.has(arr1[rt])) sH.set(arr1[rt], sH.get(arr1[rt])+1)
    else sH.set(arr1[rt],1)
    if(compareMaps(sH,tH)) answer++;
    sH.set(arr1[lt], sH.get(arr1[lt])-1)
    if(sH.set(arr1[lt])===0) sH.delete(arr1[lt]);
    lt++
  }
  return answer;
}

let arr1 = "bacaAacba"
let arr2 = "abc"

console.log(solution(arr1,arr2))