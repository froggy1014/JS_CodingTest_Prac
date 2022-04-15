// .split(letter)를 이용하여 나눈뒤 마지막 -1 을 하여 갯수를 셀수 있다 
// ex) COMPUTE P OG AMMING <- R 로 나눠지니 4개로 나눠짐 거기에 -1


function solution(word, L){
    let answer = 0;
    for(let x of word) if (x === L)answer++;
    
    return answer;
}

let word  = 'COMPUTERPROGRAMMING'
console.log(solution(word, 'R'))