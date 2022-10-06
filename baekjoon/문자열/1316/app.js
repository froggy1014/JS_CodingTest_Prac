const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = input.shift();
let answer = 0;

input.map((word) => {
  let tempW = word.split('');
  let container = []
  tempW.forEach((e,i)=>{
    if(i === 0) container.push(e);
    if(container[i-1] !== e){
      if(!(container.includes(e))) container.push(e)
    }
    else if(i+1 === tempW.length) {
      container = []
      answer++;
    }
  })
  console.log(answer);
})
