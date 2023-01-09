function solution(s) {
  let answer = "";
  let number = ""

  const Alphabet = {
    "zero" : '0',
    "one" : '1',
    "two" : '2',
    "three" : '3',
    "four" : '4',
    "five" : '5',
    "six" : '6',
    "seven" : '7',
    "eight" : '8',
    "nine" : '9',
  }


  for( let x of s) {
    let c = +x;
    if(!isNaN(c)) answer += x;
    else  number += x;

    if(Alphabet[number] !== undefined){
      answer += Alphabet[number];
      number = ""
    } 
  }
  if(Alphabet[number] !== undefined) answer += Alphabet[number];
  return Number(answer);
}

console.log(solution("2three45sixseven"));