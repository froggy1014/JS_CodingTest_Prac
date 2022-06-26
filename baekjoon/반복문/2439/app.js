const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString()



  for (let i = 1 ; i <= input ; i++){
    let star = '*'.repeat(i);
    console.log(star.padStart(Number(input)));
  }


