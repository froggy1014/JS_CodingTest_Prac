const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim();


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let answer = [];

for ( let i = 0 ; i < alphabet.length; i++){
  answer += str.indexOf(alphabet[i]) + ' ';
}
console.log(answer)


