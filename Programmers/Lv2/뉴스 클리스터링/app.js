// function solution(str1, str2) {
  
//   const fix = 65536;
//   const regex = /^[a-z|A-Z]+$/;

//   const groupA = splitByTwo(str1).filter((v) => regex.test(v));
//   const groupB = splitByTwo(str2).filter((v) => regex.test(v));

//   if(!(groupA.length || groupB.length)) return fix;

//   const intersection = getIntersection();
//   const union = getUnion();

//   let answer = parseInt((intersection / union)*fix);

//   function splitByTwo(str) {
//     const array = [];
//     for (let i = 0 ; i < str.length - 1 ; i++) {
//       const word = (str[i]+str[i+1]).toLowerCase();
//       array.push(word);
//     }
//     return array;
//   }
  
//   function getIntersection() {
//     let count = 0;
//     groupA.forEach((v) => {
//       if(groupB.includes(v)) count += 1;
//     })
//     return count;
//   }

//   function getUnion() {
//     return groupA.length + groupB.length - intersection;
//   }

//   return answer;
// }

function solution (str1, str2) {
  
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  //같은 원소를 검사해서 많은  쪽은 union에 더하고 적은쪽은 intersection에 더한다.
  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

const str1 = 'aaa';
const str2 = 'aaaa';
console.log(solution(str1, str2));