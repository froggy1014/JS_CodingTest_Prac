const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);

const [M, N] = input;

const isPrimeNumber = ( num ) => {
  // 입력이 1들어올시에  예외처리 false를 반납해준다. 
  if(num === 1) return false;

  // 시작은 2부터 끝은 입력값의 제곱근을 달아놓고 for문을 돌려준다.
  for( let i = 2; i <= Math.sqrt(num); i++) {
    // 만약 입력받은 숫자가 i 나눠서 나머지가 0이 나오는 경우가 있다면 소수가 아닐테니 false 반환
    if((num%i) == 0 ) return false;
  }

  // 소수라면 true 반환
  return true;
}

for(let i = M ; i <= N ; i++){
  if (isPrimeNumber(i)) console.log(i);
}


// const fs=require('fs');
// const input=fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);

// const [M, N] = input;

// const arr = Array(N+1).fill(true).fill(false, 0, 2);


// for( let i = 2; i*i <= N; i++) isPrimeNumber(i);

// if( M > 2 ) arr[2] = false;
// for(let i = 0; i < M ; i++ ) arr[i] = false;

// arr.map((v, i) => {
//   if(v === true) console.log(i);
// })

// function isPrimeNumber(factor) {
//   if(arr[factor]){
//     for(let j=factor*factor; j<=N; j+=factor){
//         arr[j] = false;
//     }
//   }
// }