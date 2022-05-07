function isPrime(val){
  if(val===1)return false;
  for(let i = 2; i <= parseInt(val/2); i++){
    if(val%i===0) return false;
  }
  return true;
}

function solution(arr){
  let answer = [];
  for(let x of arr){
    let res=0;
    while(x){
      let t=x%10
      res=res*10+t
      x=parseInt(x/10);
    }
    if (isPrime(res)) answer.push(res);
  }
return answer;
}
const arr = [32,55,62,20,250,370,200,30,100];
console.log(solution(arr));       



function isPrime(val){
  if(val===1)return false;
  for(let i = 2; i <= parseInt(val/2); i++){
    if(val%i===0) return false;
  }
  return true;
}

function solution(arr){
  let answer = [];
  for(let x of arr){
    let res=Number(x.toString().split('').reverse().join(''));
    if (isPrime(res)) answer.push(res);
    }
return answer;
}
const arr = [32,55,62,20,250,370,200,30,100];
console.log(solution(arr));       

