const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = input.shift();
let cnt = 0;

input.map((word) => {
  let temp = [];
  let flag = true;
  for ( let x of word ){
    if(temp.indexOf(x) === -1) temp.push(x);
    else if(temp.at(-1) === x ) temp.push(x);
    else return flag = false;
  }
  if(flag) cnt++;
})
console.log(cnt);

// const n = input.shift();
// let answer = 0;

// input.map((word) => {
//   let tempW = word.split('');
//   let container = []
//   tempW.forEach((e,i)=>{
//     if(i === 0) container.push(e);
//     if(container[i-1] !== e){
//       if(!(container.includes(e))) container.push(e)
//     }
//     else if(i+1 === tempW.length) {
//       container = []
//       answer++;
//     }
//   })
//   console.log(answer);
// })
