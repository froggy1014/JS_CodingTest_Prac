function solution(nat_num){
    let arr = nat_num
    let answer = [], sum =0, min = Number.MAX_SAFE_INTEGER;
    for (let i =0;i<arr.length;i++)
    {
        if((arr[i]%2)!==0){
            sum += arr[i];
            if (arr[i] < min) min = arr[i];
        }
    }   
    answer.push(sum);
    answer.push(min);
    return answer;
}

nat_num = [12,77,38,41,53,92,85]

console.log(solution(nat_num));

