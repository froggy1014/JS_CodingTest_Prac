const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

input.shift();

const peopleList = input.map((person) => person.split(' ').map(Number));
const sortedList = input.map((person) => person.split(' ').map(Number)).sort((a, b) => b[0] - a[0]);

for( let i = 0; i < peopleList.length; i++) {
  let cnt = 1; 
  for(let j = 0; j < sortedList.length; j++) {
    if ((sortedList[j][0] > peopleList[i][0] && sortedList[j][1] > peopleList[i][1])) cnt++;
  }
  console.log(cnt);
}



