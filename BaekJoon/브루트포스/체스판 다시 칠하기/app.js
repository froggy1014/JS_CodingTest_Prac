const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

const [L, R] = input.shift().split(' ').map(Number);

let MIN = 64;

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function compare(height,width) {
  let candi1 = 0;
  let candi2 = 0;
  let temph = 0;
  for( let h = height ; h < height + 8; h++) {
    let tempw = 0;
    for( let w = width ; w < width + 8; w++) {
      if(input[h][w] !== blackFirstBoard[temph][tempw]) candi1++;
      if(input[h][w] !== whiteFirstBoard[temph][tempw]) candi2++;
      tempw++;
    }
    temph++;
  }
  return Math.min(candi1, candi2);
}

for(let h = 0 ; h <= L - 8 ; h++) {
  for( let w = 0; w <= R - 8 ; w++) {
    MIN = Math.min(MIN, compare(h,w));
  }
}
console.log(MIN);





