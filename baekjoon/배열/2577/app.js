const fs=require('fs');
const input  = fs.readFileSync('./input.txt').toString().trim().split('\n');

const result = String(input[0]*input[1]*input[2])

for(let i = 0 ; i < 10 ; i++){
    let cnt = 0;
  for(let j = 0 ; j < result.length; j++){
    if (result[j] === String(i)){
      cnt++;
    }
  }
  console.log(cnt);
}