// Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
// console.log(Array.from([1, 2, 3], x => x + x));
//      expected output: Array [2, 4, 6]

function solution(s){
  // let answer = [];
  // for ( let i = 0; i<s.length;i++){
  //   let rank = s.length
  //   for ( let j = 0; j<s.length;j++)
  //   {
  //     if (i !== j){
  //       if (s[i] >= s[j])
  //         rank--
  //     }
  //   }
  //   answer.push(rank)
  let n=s.length;
  let answer = Array.from({length:n},()=>1)
  for ( let i = 0; i < n; i++){
    for(let j = 0; j < n; j++)
    {
      if (s[i] < s[j])
        answer[i]++
    }
  }

  return answer
}

let score = [40,20,76,90,100]

console.log(solution(score))