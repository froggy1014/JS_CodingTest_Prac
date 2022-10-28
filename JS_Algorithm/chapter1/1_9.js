// 특정 문자 치환시 replace(/문자/g, '치환문자'); 


function solution(word){
    let answer ;

    answer = word.replace(/A/g, '#');

    return answer;
}

let word  = 'BANANA'
console.log(solution(word))