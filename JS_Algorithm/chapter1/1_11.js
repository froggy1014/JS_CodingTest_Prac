//toUpperCase 메소드로 전부 대문자로 취환한뒤, 비교하여 카운트


function solution(word){
    let answer = 0;
    for(let x of word){
        if (x.toUpperCase() === x) answer++;
    }


    return answer;
}

let word  = 'KoreaTimeGood'
console.log(solution(word))