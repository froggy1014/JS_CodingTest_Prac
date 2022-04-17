// 그냥 이건 너무 쉬웟음 

function solution(input){
  let answer= 1
  let std = input[0]
  for ( let i = 1; i < input.length; i++)
  {
    if (std < input[i]){
      answer++
      std = input[i]
    }
  }
  return answer
}


let input = [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(input))