const fs=require('fs');
const str = fs.readFileSync('./input.txt').toString().trim().split('\n');

for(let i = 0 ; i < str.length ; i++) {
  let result = ""
  let [cnt, char] = str[i].split(' ');
  if(char === '') continue;
  for(let j = 0 ; j < char.length ; j++){
    for(let k = 0 ; k < cnt ; k++){
      result += char[j]
    }
  }
  console.log(result.trim());
}

