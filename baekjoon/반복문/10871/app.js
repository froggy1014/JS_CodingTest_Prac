const fs=require('fs');
const [a,b] = fs.readFileSync('./input.txt').toString().split('\n');

let [n,x] = a.split(' ');
let s =b.split(' ');


for(let v of s ){
  if( Number(v) < Number(x) ) console.log(v);  
}



//   for (let i = 1 ; i <= input ; i++){
//     let star = '*'.repeat(i);
//     console.log(star.padStart(Number(input)));
//   }


