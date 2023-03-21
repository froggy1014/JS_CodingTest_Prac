function solution(babbling) {
  const Pronunciation = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  
  for( let x of babbling) {
    let str = x;
    let num = 1;
    for ( let y of Pronunciation) {
      if(str.includes(y)){
        str = str.replaceAll(y, String(num))
        num++;
      } 
    }

    let prev = 0;
    let flag = true;
    for( let x of str.split('')) {
      if( prev === Number(x) || isNaN(Number(x))) flag = false;
      prev = Number(x);
    }

    if(flag) answer++;
  }

  return answer;
}

console.log(solution(	["yeye"]))
