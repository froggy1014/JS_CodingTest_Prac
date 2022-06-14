const fs=require('fs');
const input  =fs.readFileSync('./input.txt').toString().trim().split('\n');

const current = input[0].split(' ').map(Number);

const currentHour = current[0];
const currentMinute = current[1];
const cookTime = Number(input[1])