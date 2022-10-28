// 내가 여기서 계속 헷갈리는게, python이랑 js랑 계속 헷갈려서 
// 리스트에 add하려는걸 push append랑 계속 착각한다.
// js = push()
// python = append()
function solution(input){

  let answer = [input[0]];
  for ( let i = 1 ; i < input.length; i++)
  {
    if (input[i-1] < input[i]){
      answer.push(input[i])
    }
  }
  return answer
}

let input = [6,4,7,23,4,6]
console.log(solution(input))