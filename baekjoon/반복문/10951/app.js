const fs=require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');



for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(' ').map(v => v * 1);
  console.log(numbers[0]+numbers[1]);
}


//   for (let i = 1 ; i <= input ; i++){
//     let star = '*'.repeat(i);
//     console.log(star.padStart(Number(input)));
//   }


