function solution(date, plates){
    let answer, cnt = 0;
    for (let i=0;i<plates.length;i++)
    {
        if ((plates[i]%10)===date)
        {
            cnt++
        }
    }
    answer = cnt;
    return answer;
}

date = 2
plates = [12,20,54,30,87,91,30]

console.log(solution(date, plates));

