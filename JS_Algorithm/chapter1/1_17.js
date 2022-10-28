// 알다시피 filter는 조건에 맞게 새로운 배열을 만드는데, 
// indexOf를 이용하여 indexOf로 나온 인덱스넘버(최초) 랑 index넘버랑 다르다면 2개이상 인 것이니
// 같게 나온 v값만 return.

function solution(s){
    let answer;

    console.log(s.indexOf("time"))
    answer = s.filter(function(v,i){
        if(s.indexOf(v)===i) return true;
    });
    return answer;
}



words = ['good', 'time', 'good', 'time', 'student']
console.log(solution(words))