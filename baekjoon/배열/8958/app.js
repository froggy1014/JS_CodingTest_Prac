const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');


const num = input[0]*1;
let ox = [];
for(let i = 1 ; i < input.length; i++){
  ox.push(input[i])
}

for(let j = 0; j < ox.length; j++){
  let score = 0;
  let add = 1;
  let tmp = '';
  for(x of ox[j]){
    if(tmp === x && x === 'O'){
     score+=(++add);
     tmp = x;
    }
    else if( tmp !== x && x === 'O'){
      score+= add;
      tmp = x;
    }
    else{
      tmp = x;  
      add = 1;
    } 
  }
  console.log(score);
}