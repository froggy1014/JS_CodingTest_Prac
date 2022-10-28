const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

  for( let n of input){
    const arr = [];
    let answer;
    if(n%2 === 0){
      for ( let i = 2 ; i <= n ; i++){
        if(isPrimeNumber(i)) arr.push(i)
      }
      if( arr !== [] ) {
        for ( let x of arr ) {
          const index = arr.indexOf(n - x)
          if(index !== -1 && arr[index] - x >= 0) answer = x
        }
        console.log(answer, n-answer);
      }
  }
}

function isPrimeNumber(num) {
  if(num === 1 ) return false;
  for(let i = 2; i <= Math.sqrt(num) ; i++) {
    if(num%i===0) return false;
  }
  return true;
}

