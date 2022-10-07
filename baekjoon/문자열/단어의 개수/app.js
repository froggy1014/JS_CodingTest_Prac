const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().split(' ')

console.log(str[0] === "" ? 0 : str.length);