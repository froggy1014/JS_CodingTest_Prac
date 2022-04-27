function solution(arr){

 // Math.min 이라는 메소드를 통해서 최솟값을 구할 수 있다. 
 // 직접 배열 값을 넣어주거나 배열 변수를 넣어주려면 
 // 전개연산자(Spread Operator)를 넣어주면 사용 가능하다   
let answer = Math.min(5,7,1,3,2,9,11);
console.log(answer);
answer = Math.min(arr);
console.log(answer);
answer = Math.min(...arr);
console.log(answer);


    // let answer, min = Number.MAX_SAFE_INTEGER;

    // for(let i=0; i<arr.length;i++){
    //     if (arr[i] < min)
    //         min = arr[i];
    // } 
    // answer = min;
    return answer;
}

let arr=[5,7,1,3,2,9,11];
console.log(solution(arr));

