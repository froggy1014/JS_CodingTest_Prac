function solution(s) {
  let idx = 0;
  let answer = [];
  const dictionary = s.toLowerCase().split('')
  
  dictionary.forEach((v) => {
    if ( v !== ' ' && idx % 2 === 0 ) answer.push(v.toUpperCase())
    else  answer.push(v)
    
    v === ' ' ? idx = 0 : idx += 1
  })

  return answer.join('');
}

console.log(solution("try hello world"));