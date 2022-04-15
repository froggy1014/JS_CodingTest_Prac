// function reduce(predicate, val){
//     let result = val;
//     for(let i=0; i<a.length,i++){
//         if(predicate(a[i], i) list.push(a[i]));{
//     }
//     return list;
// }

// 인수로 함수를 받음
// (누적 계산값, 현재값) => { return 계산값}ㅣ


// let arr = [10,11,12,13,14,15];

// const result = arr.reduce((prev, cur)=>{
//     return prev+cur;
// }, 0);

// //여기서 0은 초기값

// console.log(result);

let userList = [
    { name: "Mike", age:30},
    { name: "Tom", age:10},
    { name: "Jane", age:26},
    { name: "Harry", age:42},
    { name: "Steve", age:60}
];

let result = userList.reduce((prev, cur)=>{
    if (cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result)