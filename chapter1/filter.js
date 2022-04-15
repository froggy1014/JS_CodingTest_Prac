// 원하는 요소만 콜백함수로 리턴해줌 
// 콜백함수가 참으로 리턴한 값만 받아드림.
// 원본 배열과 길이가 같을 필요가 없음.
a = [10,11,12,13,14,15];

answer=a.filter(function(v,i){
    return v%2 ==0;   
},[1,2]);

console.log(answer);