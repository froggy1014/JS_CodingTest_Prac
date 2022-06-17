const fs=require('fs');
const input  =fs.readFileSync('./input.txt').toString().trim().split('\n');

const current = input[0].split(' ').map(Number);

const currentHour = current[0];
const currentMinute = current[1];
const ovenMin = parseInt(input[1])

const cookEndTimeHour = parseInt((currentHour*60 + currentMinute + ovenMin)/ 60) ;
const cookEndTimeMinute = parseInt((currentHour*60 + currentMinute + ovenMin)% 60);

console.log(cookEndTimeHour >= 24 ? cookEndTimeHour-24 : 
  cookEndTimeHour, cookEndTimeMinute)