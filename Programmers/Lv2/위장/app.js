function solution(clothes) {
  const map = new Map();
  let answer = 1;

  clothes.forEach((v, i) => {
    if(map.has(v[1])) map.set(v[1], map.get(v[1]) + 1)
    else map.set(v[1], 1);
  })
  
  const arr = [...map].map((v) => v);

  arr.forEach((v) => answer += answer * v[1]);
  return answer - 1;
}
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))