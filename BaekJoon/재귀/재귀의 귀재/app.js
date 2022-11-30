const fs=require('fs');
// const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

// input.forEach((word) => getAnswer(word))

// function getAnswer(word){
//   function RCS(L, R, C){
//     if (R === L || L > R) return console.log(1, C);
//     if (word[L] !== word[R]) return console.log(0, C);
//     else {
//       L = L+1;
//       R = R-1;
//       C = C+1;
//       RCS(L, R, C);
//     }
//   }
//   RCS(0, word.length-1, 1);
// }

const [num, ...arr]=fs.readFileSync('./input.txt').toString().trim().split('\n');

const recursion = (str, i, j, cnt) => {
  if (i >= j) {
    return [1, cnt];
  } else if (str[i] !== str[j]) {
    return [0, cnt];
  } else {
    return recursion(str, i + 1, j - 1, cnt + 1);
  }
};

const isPalindrome = (str) => {
  return recursion(str, 0, str.length - 1, 1);
};

console.log(arr.map((el) => isPalindrome(el).join(' ')).join('\n'));