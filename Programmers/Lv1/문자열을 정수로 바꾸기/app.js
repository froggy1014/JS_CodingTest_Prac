function solution(s) {
  let prefix;
  let number = s;

  if( s.includes('-') || s.includes('+')) {
    let strArray = s.split('')
    prefix = strArray.shift();
    number = strArray.join('');
  }

  if(prefix === '-') return 0 - number;
  else return +number;
}

console.log(solution("+1234"));