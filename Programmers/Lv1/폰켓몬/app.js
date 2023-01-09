function solution(nums) {
  let limit = nums.length / 2;
  let set = new Set([...nums]);
  if ( set.size > limit) return limit;
  else return set.size;
}

console.log(solution([3,3,3,2,2,4]));