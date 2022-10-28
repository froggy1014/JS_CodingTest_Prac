// function forEach(predicate, thisArg){
//     for(let i =0;i<a.length;i++){
//         predicate(a[i],i);
//     }
// }

//forEach 작동원리
// forEach는 배열 요소하나하나에 콜백 함수에 call한다.  
// 즉 밑에 predicate가 콜백함수라고 볼 수 있음.
// 배열요소를 탐색할때, for반복문 대신 사용하는 애다라고 단순히 생각


a = [10,11,12,13,14,15];

// v는 배열 요소값, i는 인덱스 
a.forEach(function(v,i){
    console.log(v, i, this);
},[1,2]);