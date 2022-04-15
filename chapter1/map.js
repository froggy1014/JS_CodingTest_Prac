// function map(predicate, thisArg){
//     let list=[];
//     for(let i = 0; i<a.length;i++){
//         list.push(predicate(a[i], i));
//     }
//     return list;
// };


//요소를 하나하나 탐색 및 콜백핫ㅁ수 실행 새로운 배열을 생성
// 원본 배열과 새 배열의 길이 똑같음
// 조건부를 달아 강제로 푸시하면, 해당 인덱스 요소는 undefined 로 표시됨. 


a = [10,11,12,13,14,15];
let answer = a.map(function(v,i){
    return v*v;
},[1,2]);
console.log(answer);