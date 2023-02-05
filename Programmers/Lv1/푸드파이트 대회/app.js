function solution(food) {
  let str = '';
  for(let i = 1; i < food.length; i++) {
    str += `${i}`.repeat(Math.floor(food[i]/2));
  }
  return str + '0' + str.split('').reverse().join('');
}

console.log(solution([1,7,1,2]));