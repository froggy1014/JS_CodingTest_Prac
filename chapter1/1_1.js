function solution(a){
    let answer = Number.MAX_SAFE_INTEGER;
    for ( let x of a)
    {
        if ( x <= answer)
        answer = x;
    } 
    return answer;
}

let prob = [6,5,11,2,9,1,3];
console.log(solution(prob));

