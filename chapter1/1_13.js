// for of 문과 toUpperCase, toLowerCase 메소드를 이용해 
// 비교하여 서로 바꿈.


function solution(word){
    let answer = "";
    for (let x of word){
        if (x===x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }

    return answer;
}

let word  = 'StuDY'
console.log(solution(word))