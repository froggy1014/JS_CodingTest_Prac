const fs=require('fs');
const input=fs.readFileSync('./input.txt').toString().trim().split('\n');

const [ A, K1 ] = input.shift().split(' ');
// const array = input.join(' ').split(' ')
const K = 13;
const array = [4, 5, 1, 3, 2];
// let cnt = 0;

// const mergeSort = (array) => {
//   if(array.length === 1) return array;

//   const mid = Math.ceil(array.length/2)
//   const left = array.slice(0, mid);
//   const right = array.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// const merge = (left, right) => {
//   if(left.length !== 0 && right.length !== 0){
//     console.log(left);
//     console.log('----');
//     console.log(right);
//   }
  // const result = [];
  
  // while( left.length !== 0 && right.length !== 0){
  //   left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift())
  // }

  // return [...result, ...left, ...right]
// }

// const result = mergeSort(array);
// console.log(result);

const merge = (arr1, arr2) => {
  let result = [];
  let [i, j] = [0, 0];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    count++;
    if (count === Number(K)) target = result[result.length - 1];
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    count++;
    if (count === Number(K)) target = result[result.length - 1];
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    count++;
    if (count === Number(K)) target = result[result.length - 1];
  }
  return result;
};

let count = 0;
let target;
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  console.log(left)
  let right = mergeSort(arr.slice(mid));
  console.log(right)
  return merge(left, right);
};

mergeSort(array);
if (!target) target = -1;
console.log(target);






// const mergeSort = (array) => {
//   console.log('mergeSort');
//   if(array.length === 1) return array;

//   const middleIndex = Math.ceil(array.length/2);
//   const left = array.slice(0, middleIndex);
//   const right = array.slice(middleIndex);

//   return merge(mergeSort(left), mergeSort(right));
// }

// const merge = (left, right) => {
//   console.log('merge');
//   const result = [];
//   while( left.length !== 0 && right.length !== 0){
//     left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift())
//   }

//   return [...result, ...left, ...right]
// }


// const result = mergeSort(array);
// console.log(result);


